import { useState, useRef, useCallback } from 'react';

export function useAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtx = useRef(null);
  const gainNode = useRef(null);
  const oscillators = useRef([]);

  const createAmbientSound = useCallback(() => {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    const ctx = audioCtx.current;
    gainNode.current = ctx.createGain();
    gainNode.current.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.current.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 2);
    gainNode.current.connect(ctx.destination);

    // Gentle ambient drone — two detuned oscillators
    const freqs = [55, 82.4, 110, 164.8];
    oscillators.current = freqs.map((freq, i) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      oscGain.gain.value = 0.15 / (i + 1);
      osc.connect(oscGain);
      oscGain.connect(gainNode.current);
      osc.start();
      return osc;
    });

    // Subtle wind-like noise
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 200;
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.02;
    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(gainNode.current);
    noise.start();
    oscillators.current.push(noise);
  }, []);

  const toggle = useCallback(() => {
    if (!isPlaying) {
      createAmbientSound();
      setIsPlaying(true);
    } else {
      if (gainNode.current && audioCtx.current) {
        gainNode.current.gain.linearRampToValueAtTime(0, audioCtx.current.currentTime + 1);
        setTimeout(() => {
          oscillators.current.forEach(o => { try { o.stop(); } catch {} });
          oscillators.current = [];
        }, 1100);
      }
      setIsPlaying(false);
    }
  }, [isPlaying, createAmbientSound]);

  return { isPlaying, toggle };
}
