import * as React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { initShield } from './lib/shield'

initShield();

createRoot(document.getElementById("root")!).render(<App />);

// Снимаем стартовую заставку после первой отрисовки приложения
requestAnimationFrame(() => {
  const boot = document.getElementById("boot");
  if (!boot) return;
  boot.style.transition = "opacity 0.35s ease";
  boot.style.opacity = "0";
  setTimeout(() => boot.remove(), 400);
});