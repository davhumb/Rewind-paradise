// ===================================================
// REWIND PARADISE — SONS WEB AUDIO
// Génération procédurale — zéro fichier externe
// ===================================================

const SOUNDS = {

  ctx: null,

  init() {
    if (this.ctx) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch(e) {
      console.log('Web Audio non supporté');
    }
  },

  // Réveiller le contexte audio (nécessaire sur mobile)
  unlock() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },

  // ===================================================
  // SON 1 — REMBOBINAGE VHS
  // ===================================================
  rembobinage() {
    this.unlock();
    if (!this.ctx) return;
    const ctx = this.ctx;
    const duration = 1.8;

    // Bruit mécanique de rembobinage
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data   = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      // Bruit blanc modulé — effet moteur qui tourne
      const t = i / ctx.sampleRate;
      const speed = 1 + (t / duration) * 3; // accélère
      data[i] = (Math.random() * 2 - 1) * 0.3
              + Math.sin(2 * Math.PI * 60 * speed * t) * 0.15
              + Math.sin(2 * Math.PI * 120 * speed * t) * 0.08;
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;

    // Filtre passe-haut — son mécanique
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 800;
    filter.Q.value = 0.8;

    // Envelope volume
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.4, ctx.currentTime + duration - 0.2);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + duration);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    source.start();
    source.stop(ctx.currentTime + duration);
  },

  // ===================================================
  // SON 2 — CLAC RIDEAU DE FER
  // ===================================================
  rideauFer() {
    this.unlock();
    if (!this.ctx) return;
    const ctx = this.ctx;

    // Impact métallique principal
    const impact = ctx.createOscillator();
    const impactGain = ctx.createGain();
    impact.type = 'sawtooth';
    impact.frequency.setValueAtTime(180, ctx.currentTime);
    impact.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.3);
    impactGain.gain.setValueAtTime(0.6, ctx.currentTime);
    impactGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
    impact.connect(impactGain);
    impactGain.connect(ctx.destination);
    impact.start();
    impact.stop(ctx.currentTime + 0.4);

    // Résonance métallique
    const resonance = ctx.createOscillator();
    const resGain   = ctx.createGain();
    resonance.type = 'sine';
    resonance.frequency.setValueAtTime(320, ctx.currentTime + 0.05);
    resonance.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.8);
    resGain.gain.setValueAtTime(0, ctx.currentTime);
    resGain.gain.setValueAtTime(0.3, ctx.currentTime + 0.05);
    resGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.9);
    resonance.connect(resGain);
    resGain.connect(ctx.destination);
    resonance.start(ctx.currentTime + 0.05);
    resonance.stop(ctx.currentTime + 0.9);

    // Bruit de glissement métallique
    const bufferSize = ctx.sampleRate * 0.6;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data   = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.2;
    }
    const noise     = ctx.createBufferSource();
    const noiseGain = ctx.createGain();
    const noiseFilter = ctx.createBiquadFilter();
    noise.buffer = buffer;
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.value = 2000;
    noiseFilter.Q.value = 2;
    noiseGain.gain.setValueAtTime(0.3, ctx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start();
    noise.stop(ctx.currentTime + 0.6);
  },

  // ===================================================
  // SON 3 — CISEAUX / COUPER
  // ===================================================
  ciseaux() {
    this.unlock();
    if (!this.ctx) return;
    const ctx = this.ctx;

    // Deux lames — deux clics
    [0, 0.08].forEach((delay, i) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(
        i === 0 ? 3000 : 2400,
        ctx.currentTime + delay
      );
      osc.frequency.exponentialRampToValueAtTime(
        i === 0 ? 800 : 600,
        ctx.currentTime + delay + 0.06
      );

      filter.type = 'highpass';
      filter.frequency.value = 1500;

      gain.gain.setValueAtTime(0, ctx.currentTime + delay);
      gain.gain.linearRampToValueAtTime(
        0.35, ctx.currentTime + delay + 0.005
      );
      gain.gain.exponentialRampToValueAtTime(
        0.001, ctx.currentTime + delay + 0.1
      );

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + 0.12);
    });
  },

  // ===================================================
  // SON 4 — CAISSE ENREGISTREUSE
  // ===================================================
  caisse() {
    this.unlock();
    if (!this.ctx) return;
    const ctx = this.ctx;

    // Cloche de caisse — ding !
    const bell  = ctx.createOscillator();
    const gain  = ctx.createGain();
    const gain2 = ctx.createGain();

    bell.type = 'sine';
    bell.frequency.setValueAtTime(1200, ctx.currentTime);
    bell.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.3);

    gain.gain.setValueAtTime(0.5, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

    // Harmonique
    const bell2 = ctx.createOscillator();
    bell2.type = 'sine';
    bell2.frequency.setValueAtTime(1800, ctx.currentTime);
    bell2.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.2);
    gain2.gain.setValueAtTime(0.2, ctx.currentTime);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);

    bell.connect(gain);
    gain.connect(ctx.destination);
    bell2.connect(gain2);
    gain2.connect(ctx.destination);

    bell.start();
    bell.stop(ctx.currentTime + 0.5);
    bell2.start();
    bell2.stop(ctx.currentTime + 0.3);

    // Clic mécanique
    setTimeout(() => {
      const click  = ctx.createOscillator();
      const cGain  = ctx.createGain();
      click.type = 'square';
      click.frequency.value = 200;
      cGain.gain.setValueAtTime(0.3, ctx.currentTime);
      cGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      click.connect(cGain);
      cGain.connect(ctx.destination);
      click.start();
      click.stop(ctx.currentTime + 0.05);
    }, 80);
  },

  // ===================================================
  // SON 5 — BOURDONNEMENT NÉONS
  // ===================================================
  neons(duree = 3) {
    this.unlock();
    if (!this.ctx) return;
    const ctx = this.ctx;

    // Bourdonnement 60Hz — électrique
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const osc3 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.value = 60;
    osc2.type = 'sine';
    osc2.frequency.value = 120;
    osc3.type = 'sine';
    osc3.frequency.value = 180;

    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.5);
    gain.gain.setValueAtTime(0.04, ctx.currentTime + duree - 0.5);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + duree);

    // Légères fluctuations aléatoires
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 0.3;
    lfoGain.gain.value = 0.01;
    lfo.connect(lfoGain);
    lfoGain.connect(gain.gain);

    osc1.connect(gain);
    osc2.connect(gain);
    osc3.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(); osc1.stop(ctx.currentTime + duree);
    osc2.start(); osc2.stop(ctx.currentTime + duree);
    osc3.start(); osc3.stop(ctx.currentTime + duree);
    lfo.start();  lfo.stop(ctx.currentTime + duree);
  },

  // ===================================================
  // SON 6 — SONNETTE BOUTIQUE (client arrive)
  // ===================================================
  sonnette() {
    this.unlock();
    if (!this.ctx) return;
    const ctx = this.ctx;

    [0, 0.15].forEach(delay => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = 800;
      gain.gain.setValueAtTime(0, ctx.currentTime + delay);
      gain.gain.linearRampToValueAtTime(
        0.3, ctx.currentTime + delay + 0.01
      );
      gain.gain.exponentialRampToValueAtTime(
        0.001, ctx.currentTime + delay + 0.3
      );
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + 0.3);
    });
  },

  // ===================================================
  // SON 7 — MAGNÉTO (lancer le film)
  // ===================================================
  magneto() {
    this.unlock();
    if (!this.ctx) return;
    const ctx = this.ctx;

    // Clic mécanique de mise en marche
    const click  = ctx.createOscillator();
    const cGain  = ctx.createGain();
    click.type = 'square';
    click.frequency.setValueAtTime(300, ctx.currentTime);
    click.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.1);
    cGain.gain.setValueAtTime(0.4, ctx.currentTime);
    cGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    click.connect(cGain);
    cGain.connect(ctx.destination);
    click.start();
    click.stop(ctx.currentTime + 0.15);

    // Démarrage moteur
    setTimeout(() => {
      const motor  = ctx.createOscillator();
      const mGain  = ctx.createGain();
      motor.type = 'sawtooth';
      motor.frequency.setValueAtTime(40, ctx.currentTime);
      motor.frequency.linearRampToValueAtTime(80, ctx.currentTime + 0.4);
      mGain.gain.setValueAtTime(0, ctx.currentTime);
      mGain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.1);
      mGain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.4);
      mGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 400;

      motor.connect(filter);
      filter.connect(mGain);
      mGain.connect(ctx.destination);
      motor.start();
      motor.stop(ctx.currentTime + 0.5);
    }, 100);
  },

  // ===================================================
  // SON 8 — TRACKING VHS (glitch)
  // ===================================================
  tracking() {
    this.unlock();
    if (!this.ctx) return;
    const ctx = this.ctx;

    const bufferSize = ctx.sampleRate * 0.15;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data   = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      const t = i / ctx.sampleRate;
      data[i] = (Math.random() * 2 - 1) * 0.4
              * Math.sin(Math.PI * t / 0.15);
    }

    const source = ctx.createBufferSource();
    const gain   = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    source.buffer = buffer;
    filter.type = 'bandpass';
    filter.frequency.value = 3000;
    filter.Q.value = 3;
    gain.gain.value = 0.3;

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    source.start();
  },

  // ===================================================
  // SON 9 — ALERTE / TENSION
  // ===================================================
  alerte() {
    this.unlock();
    if (!this.ctx) return;
    const ctx = this.ctx;

    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.setValueAtTime(380, ctx.currentTime + 0.1);
    osc.frequency.setValueAtTime(440, ctx.currentTime + 0.2);

    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.02);
    gain.gain.setValueAtTime(0.2, ctx.currentTime + 0.28);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.35);
  }

};

// Déverrouiller l'audio au premier touch
document.addEventListener('touchstart', () => SOUNDS.unlock(), { once: true });
document.addEventListener('click',      () => SOUNDS.unlock(), { once: true });