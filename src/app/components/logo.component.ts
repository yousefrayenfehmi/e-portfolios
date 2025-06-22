import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Logo Option 1: Hexagonal Tech -->
    <div *ngIf="variant === 'hex'" class="logo-hex" [class]="size">
      <div class="hex-container">
        <div class="hexagon">
          <div class="hex-content">
            <span class="logo-text">YR</span>
          </div>
        </div>
        <div class="hex-glow"></div>
      </div>
      <div class="logo-name" *ngIf="showName">YOUSSEF</div>
    </div>

    <!-- Logo Option 2: Neon Circuit -->
    <div *ngIf="variant === 'circuit'" class="logo-circuit" [class]="size">
      <div class="circuit-board">
        <div class="circuit-line circuit-line-1"></div>
        <div class="circuit-line circuit-line-2"></div>
        <div class="circuit-line circuit-line-3"></div>
        <div class="circuit-dot circuit-dot-1"></div>
        <div class="circuit-dot circuit-dot-2"></div>
        <div class="circuit-dot circuit-dot-3"></div>
        <div class="logo-letter">Y</div>
      </div>
      <div class="logo-name" *ngIf="showName">YOUSSEF.DEV</div>
    </div>

    <!-- Logo Option 3: Glitch Effect -->
    <div *ngIf="variant === 'glitch'" class="logo-glitch" [class]="size">
      <div class="glitch-container">
        <div class="glitch-text" data-text="YR">YR</div>
      </div>
      <div class="logo-name" *ngIf="showName">YOUSSEF</div>
    </div>

    <!-- Logo Option 4: Minimal Geometric -->
    <div *ngIf="variant === 'minimal'" class="logo-minimal" [class]="size">
      <div class="minimal-shape">
        <div class="shape-triangle"></div>
        <div class="shape-circle"></div>
        <div class="shape-line"></div>
        <span class="minimal-text">Y</span>
      </div>
      <div class="logo-name" *ngIf="showName">YOUSSEF</div>
    </div>

    <!-- Logo Option 5: Matrix Style -->
    <div *ngIf="variant === 'matrix'" class="logo-matrix" [class]="size">
      <div class="matrix-container">
        <div class="matrix-grid">
          <div class="matrix-cell active"></div>
          <div class="matrix-cell"></div>
          <div class="matrix-cell active"></div>
          <div class="matrix-cell"></div>
          <div class="matrix-cell active"></div>
          <div class="matrix-cell active"></div>
          <div class="matrix-cell"></div>
          <div class="matrix-cell active"></div>
          <div class="matrix-cell"></div>
        </div>
        <div class="matrix-letter">Y</div>
      </div>
      <div class="logo-name" *ngIf="showName">YOUSSEF</div>
    </div>
  `,
  styles: [`
    /* Hexagonal Tech Logo */
    .logo-hex {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .hex-container {
      position: relative;
    }

    .hexagon {
      width: 60px;
      height: 60px;
      position: relative;
      transform: rotate(30deg);
      background: linear-gradient(135deg, #00f5ff, #8a2be2);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hex-content {
      transform: rotate(-30deg);
    }

    .logo-text {
      font-size: 1.5rem;
      font-weight: 900;
      color: white;
      text-shadow: 0 0 10px rgba(0, 245, 255, 0.8);
    }

    .hex-glow {
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      background: linear-gradient(135deg, #00f5ff, #8a2be2);
      border-radius: 12px;
      filter: blur(10px);
      opacity: 0.3;
      z-index: -1;
      animation: pulse 2s infinite;
    }

    /* Circuit Logo */
    .logo-circuit {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .circuit-board {
      position: relative;
      width: 60px;
      height: 60px;
      background: #0a0a0a;
      border: 2px solid #00f5ff;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .circuit-line {
      position: absolute;
      background: linear-gradient(90deg, transparent, #00f5ff, transparent);
      animation: circuit-flow 3s infinite linear;
    }

    .circuit-line-1 {
      top: 10px;
      left: 0;
      width: 100%;
      height: 2px;
    }

    .circuit-line-2 {
      top: 0;
      left: 15px;
      width: 2px;
      height: 100%;
      background: linear-gradient(0deg, transparent, #ff006e, transparent);
      animation-delay: -1s;
    }

    .circuit-line-3 {
      bottom: 10px;
      left: 0;
      width: 100%;
      height: 2px;
      animation-delay: -2s;
    }

    .circuit-dot {
      position: absolute;
      width: 4px;
      height: 4px;
      background: #00f5ff;
      border-radius: 50%;
      box-shadow: 0 0 8px #00f5ff;
      animation: blink 2s infinite;
    }

    .circuit-dot-1 { top: 8px; left: 15px; }
    .circuit-dot-2 { top: 30px; right: 15px; animation-delay: -0.5s; }
    .circuit-dot-3 { bottom: 8px; left: 40px; animation-delay: -1s; }

    .logo-letter {
      font-size: 1.8rem;
      font-weight: 900;
      color: #00f5ff;
      text-shadow: 0 0 15px #00f5ff;
      z-index: 10;
    }

    /* Glitch Logo */
    .logo-glitch {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .glitch-container {
      position: relative;
    }

    .glitch-text {
      font-size: 2.5rem;
      font-weight: 900;
      color: #00f5ff;
      position: relative;
      animation: glitch 2s infinite;
    }

    .glitch-text::before,
    .glitch-text::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .glitch-text::before {
      color: #ff006e;
      animation: glitch-1 2s infinite;
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    }

    .glitch-text::after {
      color: #8a2be2;
      animation: glitch-2 2s infinite;
      clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
    }

    /* Minimal Geometric Logo */
    .logo-minimal {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .minimal-shape {
      position: relative;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .shape-triangle {
      position: absolute;
      width: 0;
      height: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 26px solid #00f5ff;
      top: 5px;
      animation: rotate 4s infinite linear;
    }

    .shape-circle {
      position: absolute;
      width: 20px;
      height: 20px;
      border: 3px solid #ff006e;
      border-radius: 50%;
      bottom: 15px;
      right: 10px;
      animation: pulse 2s infinite;
    }

    .shape-line {
      position: absolute;
      width: 30px;
      height: 3px;
      background: linear-gradient(90deg, #8a2be2, #00f5ff);
      bottom: 10px;
      left: 5px;
      animation: expand 3s infinite;
    }

    .minimal-text {
      font-size: 1.8rem;
      font-weight: 900;
      color: white;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      z-index: 10;
    }

    /* Matrix Logo */
    .logo-matrix {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .matrix-container {
      position: relative;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .matrix-grid {
      position: absolute;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 2px;
      width: 100%;
      height: 100%;
      padding: 5px;
    }

    .matrix-cell {
      background: #0a0a0a;
      border: 1px solid #333;
      transition: all 0.3s ease;
    }

    .matrix-cell.active {
      background: #00f5ff;
      box-shadow: 0 0 8px #00f5ff;
      animation: matrix-blink 1.5s infinite;
    }

    .matrix-letter {
      font-size: 1.8rem;
      font-weight: 900;
      color: #00f5ff;
      text-shadow: 0 0 15px #00f5ff;
      z-index: 10;
    }

    /* Logo Name */
    .logo-name {
      font-size: 0.7rem;
      font-weight: 600;
      color: #999;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    /* Size Variants */
    .small {
      transform: scale(0.8);
    }

    .large {
      transform: scale(1.2);
    }

    .xl {
      transform: scale(1.5);
    }

    /* Animations */
    @keyframes pulse {
      0%, 100% { opacity: 0.6; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.05); }
    }

    @keyframes circuit-flow {
      0% { background-position: -100% 50%; }
      100% { background-position: 100% 50%; }
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }

    @keyframes glitch {
      0%, 100% { transform: translateX(0); }
      10% { transform: translateX(-2px); }
      20% { transform: translateX(2px); }
      30% { transform: translateX(-1px); }
      40% { transform: translateX(1px); }
      50% { transform: translateX(-2px); }
      60% { transform: translateX(2px); }
      70% { transform: translateX(-1px); }
      80% { transform: translateX(1px); }
      90% { transform: translateX(-2px); }
    }

    @keyframes glitch-1 {
      0%, 100% { clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%); }
      10% { clip-path: polygon(0 10%, 100% 10%, 100% 55%, 0 55%); }
      20% { clip-path: polygon(0 20%, 100% 20%, 100% 65%, 0 65%); }
      30% { clip-path: polygon(0 5%, 100% 5%, 100% 50%, 0 50%); }
      40% { clip-path: polygon(0 15%, 100% 15%, 100% 60%, 0 60%); }
      50% { clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%); }
    }

    @keyframes glitch-2 {
      0%, 100% { clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%); }
      10% { clip-path: polygon(0 45%, 100% 45%, 100% 90%, 0 90%); }
      20% { clip-path: polygon(0 35%, 100% 35%, 100% 80%, 0 80%); }
      30% { clip-path: polygon(0 50%, 100% 50%, 100% 95%, 0 95%); }
      40% { clip-path: polygon(0 40%, 100% 40%, 100% 85%, 0 85%); }
      50% { clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%); }
    }

    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes expand {
      0%, 100% { width: 30px; }
      50% { width: 40px; }
    }

    @keyframes matrix-blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `]
})
export class LogoComponent {
  @Input() variant: 'hex' | 'circuit' | 'glitch' | 'minimal' | 'matrix' = 'hex';
  @Input() size: 'small' | 'normal' | 'large' | 'xl' = 'normal';
  @Input() showName: boolean = true;
} 