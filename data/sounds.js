// ===================================================
// REWIND PARADISE — SONS WEB AUDIO v2
// Génération procédurale — zéro fichier externe
// ===================================================

const SOUNDS = {

  ctx: null,

  init() {
    if (this.ctx) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch(e) { console.warn('Web Audio non supporté'); }
  },

  unlock() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },

  // Appelé avant chaque son — garantit que le contexte est actif
  _ready() {
    this.init();
    if (!this.ctx) return false;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx.state === 'running' || this.ctx.state === 'suspended';
  },

  _gain(vol = 0.3) {
    const g = this.ctx.createGain();
    g.gain.value = vol;
    g.connect(this.ctx.destination);
    return g;
  },

  // ===================================================
  // REMBOBINAGE VHS
  // ===================================================
  rembobinage() {
    if (!this._ready()) return;
    const g = this._gain(0.15);
    const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * 1.2, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) {
      const t = i / this.ctx.sampleRate;
      const speed = 1 + t * 3;
      d[i] = (Math.random() * 2 - 1) * 0.6 * Math.sin(t * 80 * speed) * (1 - t/1.2);
    }
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.connect(g);
    src.start();
  },

  // ===================================================
  // CAISSE ENREGISTREUSE — ding !
  // ===================================================
  caisse() {
    if (!this._ready()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const g   = this.ctx.createGain();
    osc.connect(g); g.connect(this.ctx.destination);
    osc.frequency.setValueAtTime(1400, now);
    osc.frequency.exponentialRampToValueAtTime(900, now + 0.15);
    g.gain.setValueAtTime(0.25, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    osc.start(now); osc.stop(now + 0.4);
  },

  // ===================================================
  // CISEAUX — cut !
  // ===================================================
  ciseaux() {
    if (!this._ready()) return;
    const now = this.ctx.currentTime;
    const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.08, this.ctx.sampleRate);
    const d   = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) {
      d[i] = (Math.random() * 2 - 1) * (1 - i/d.length) * 0.8;
    }
    const g = this._gain(0.4);
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.connect(g);
    src.start();
    // Second clic
    setTimeout(() => {
      if (!this.ctx) return;
      const src2 = this.ctx.createBufferSource();
      src2.buffer = buf;
      src2.connect(g);
      src2.start();
    }, 90);
  },

  // ===================================================
  // ÉJECTION CASSETTE — clac
  // ===================================================
  eject() {
    if (!this._ready()) return;
    const now = this.ctx.currentTime;
    const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.12, this.ctx.sampleRate);
    const d   = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) {
      const t = i / this.ctx.sampleRate;
      d[i] = (Math.random() * 2 - 1) * Math.exp(-t * 30) * 0.9;
    }
    const g   = this._gain(0.35);
    const flt = this.ctx.createBiquadFilter();
    flt.type = 'lowpass';
    flt.frequency.value = 800;
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.connect(flt); flt.connect(g);
    src.start();
  },

  // ===================================================
  // INSERTION CASSETTE — clunk sourd
  // ===================================================
  insert() {
    if (!this._ready()) return;
    const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.2, this.ctx.sampleRate);
    const d   = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) {
      const t = i / this.ctx.sampleRate;
      d[i] = (Math.random() * 2 - 1) * Math.exp(-t * 15) * 0.7;
    }
    const g   = this._gain(0.4);
    const flt = this.ctx.createBiquadFilter();
    flt.type = 'lowpass';
    flt.frequency.value = 300;
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.connect(flt); flt.connect(g);
    src.start();
  },

  // ===================================================
  // BIP NÉGATIF — mauvaise vente / stock vide
  // ===================================================
  negatif() {
    if (!this._ready()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const g   = this.ctx.createGain();
    osc.connect(g); g.connect(this.ctx.destination);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.2);
    g.gain.setValueAtTime(0.15, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
    osc.start(now); osc.stop(now + 0.25);
  },

  // ===================================================
  // ACHIEVEMENT — fanfare 8-bit
  // ===================================================
  achievement() {
    if (!this._ready()) return;
    const notes = [523, 659, 784, 1047]; // C E G C
    notes.forEach((freq, i) => {
      const now = this.ctx.currentTime + i * 0.1;
      const osc = this.ctx.createOscillator();
      const g   = this.ctx.createGain();
      osc.connect(g); g.connect(this.ctx.destination);
      osc.type = 'square';
      osc.frequency.value = freq;
      g.gain.setValueAtTime(0.12, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.start(now); osc.stop(now + 0.15);
    });
  },

  // ===================================================
  // SONNETTE ENTRÉE CLIENT
  // ===================================================
  sonnette() {
    if (!this._ready()) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const g   = this.ctx.createGain();
    osc.connect(g); g.connect(this.ctx.destination);
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.setValueAtTime(1000, now + 0.05);
    g.gain.setValueAtTime(0.15, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    osc.start(now); osc.stop(now + 0.3);
  },

  // ===================================================
  // MAGNÉTO — lancement film
  // ===================================================
  magneto() {
    if (!this._ready()) return;
    const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.8, this.ctx.sampleRate);
    const d   = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) {
      const t = i / this.ctx.sampleRate;
      const speed = 0.3 + t * 1.5;
      d[i] = (Math.random() * 2 - 1) * 0.3 * Math.sin(t * 40 * speed) * Math.min(t * 3, 1);
    }
    const g = this._gain(0.2);
    const flt = this.ctx.createBiquadFilter();
    flt.type = 'bandpass';
    flt.frequency.value = 600;
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.connect(flt); flt.connect(g);
    src.start();
  },

  // ===================================================
  // TRACKING VHS — glitch
  // ===================================================
  tracking() {
    if (!this._ready()) return;
    const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.15, this.ctx.sampleRate);
    const d   = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) {
      d[i] = (Math.random() * 2 - 1) * (Math.random() > 0.7 ? 1 : 0.1);
    }
    const g = this._gain(0.18);
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.connect(g);
    src.start();
  },

  // ===================================================
  // ALERTE SUSPICION
  // ===================================================
  alerte() {
    if (!this._ready()) return;
    const now = this.ctx.currentTime;
    [0, 0.2, 0.4].forEach(dt => {
      const osc = this.ctx.createOscillator();
      const g   = this.ctx.createGain();
      osc.connect(g); g.connect(this.ctx.destination);
      osc.frequency.value = 440 + dt * 200;
      g.gain.setValueAtTime(0.1, now + dt);
      g.gain.exponentialRampToValueAtTime(0.001, now + dt + 0.15);
      osc.start(now + dt); osc.stop(now + dt + 0.15);
    });
  },

  // ===================================================
  // COMBO — son positif
  // ===================================================
  combo() {
    if (!this._ready()) return;
    const notes = [659, 784, 1047];
    notes.forEach((freq, i) => {
      const now = this.ctx.currentTime + i * 0.08;
      const osc = this.ctx.createOscillator();
      const g   = this.ctx.createGain();
      osc.connect(g); g.connect(this.ctx.destination);
      osc.type = 'triangle';
      osc.frequency.value = freq;
      g.gain.setValueAtTime(0.15, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.start(now); osc.stop(now + 0.2);
    });
  },

};
