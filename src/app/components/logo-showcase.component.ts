import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo.component';

@Component({
  selector: 'app-logo-showcase',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  template: `
    <div class="showcase-container">
      <h2 class="showcase-title">🎨 Logo Variants</h2>
      <p class="showcase-desc">Choose your favorite logo style for your portfolio</p>
      
      <div class="logos-grid">
        <!-- Hexagonal Tech -->
        <div class="logo-card">
          <div class="logo-display">
            <app-logo variant="hex" size="large" [showName]="true"></app-logo>
          </div>
          <div class="logo-info">
            <h3>Hexagonal Tech</h3>
            <p>Modern geometric design with glowing effects</p>
            <code>&lt;app-logo variant="hex"&gt;</code>
          </div>
        </div>

        <!-- Neon Circuit -->
        <div class="logo-card">
          <div class="logo-display">
            <app-logo variant="circuit" size="large" [showName]="true"></app-logo>
          </div>
          <div class="logo-info">
            <h3>Neon Circuit</h3>
            <p>Circuit board style with flowing animations</p>
            <code>&lt;app-logo variant="circuit"&gt;</code>
          </div>
        </div>

        <!-- Glitch Effect -->
        <div class="logo-card">
          <div class="logo-display">
            <app-logo variant="glitch" size="large" [showName]="true"></app-logo>
          </div>
          <div class="logo-info">
            <h3>Glitch Effect</h3>
            <p>Cyberpunk glitch with color distortion</p>
            <code>&lt;app-logo variant="glitch"&gt;</code>
          </div>
        </div>

        <!-- Minimal Geometric -->
        <div class="logo-card">
          <div class="logo-display">
            <app-logo variant="minimal" size="large" [showName]="true"></app-logo>
          </div>
          <div class="logo-info">
            <h3>Minimal Geometric</h3>
            <p>Clean shapes with subtle animations</p>
            <code>&lt;app-logo variant="minimal"&gt;</code>
          </div>
        </div>

        <!-- Matrix Style -->
        <div class="logo-card">
          <div class="logo-display">
            <app-logo variant="matrix" size="large" [showName]="true"></app-logo>
          </div>
          <div class="logo-info">
            <h3>Matrix Style</h3>
            <p>Grid pattern with digital aesthetics</p>
            <code>&lt;app-logo variant="matrix"&gt;</code>
          </div>
        </div>
      </div>

      <!-- Size Examples -->
      <div class="size-examples">
        <h3>Size Variants</h3>
        <div class="size-row">
          <div class="size-item">
            <app-logo variant="hex" size="small" [showName]="false"></app-logo>
            <span>Small</span>
          </div>
          <div class="size-item">
            <app-logo variant="hex" size="normal" [showName]="false"></app-logo>
            <span>Normal</span>
          </div>
          <div class="size-item">
            <app-logo variant="hex" size="large" [showName]="false"></app-logo>
            <span>Large</span>
          </div>
          <div class="size-item">
            <app-logo variant="hex" size="xl" [showName]="false"></app-logo>
            <span>XL</span>
          </div>
        </div>
      </div>

      <!-- Usage Instructions -->
      <div class="usage-section">
        <h3>🚀 How to Use</h3>
        <div class="code-example">
          <pre><code>// Import the component
import {{ '{' }} LogoComponent {{ '}' }} from './components/logo.component';

// Add to your template
&lt;app-logo 
  variant="hex"          // hex | circuit | glitch | minimal | matrix
  size="normal"          // small | normal | large | xl
  [showName]="true"      // Show/hide name below logo
&gt;&lt;/app-logo&gt;</code></pre>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .showcase-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      background: linear-gradient(135deg, #0a0a0a, #1a1a2e);
      min-height: 100vh;
      color: white;
    }

    .showcase-title {
      text-align: center;
      font-size: 3rem;
      font-weight: 900;
      background: linear-gradient(45deg, #00f5ff, #ff006e, #8a2be2);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1rem;
    }

    .showcase-desc {
      text-align: center;
      font-size: 1.2rem;
      color: #999;
      margin-bottom: 3rem;
    }

    .logos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .logo-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }

    .logo-card:hover {
      transform: translateY(-5px);
      border-color: #00f5ff;
      box-shadow: 0 10px 30px rgba(0, 245, 255, 0.2);
    }

    .logo-display {
      margin-bottom: 1.5rem;
      min-height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .logo-info h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: #00f5ff;
    }

    .logo-info p {
      color: #ccc;
      margin-bottom: 1rem;
    }

    .logo-info code {
      background: rgba(0, 0, 0, 0.5);
      padding: 0.5rem;
      border-radius: 8px;
      font-family: 'Courier New', monospace;
      color: #00f5ff;
      font-size: 0.9rem;
    }

    .size-examples {
      background: rgba(255, 255, 255, 0.05);
      padding: 2rem;
      border-radius: 16px;
      margin-bottom: 3rem;
    }

    .size-examples h3 {
      text-align: center;
      margin-bottom: 2rem;
      color: #00f5ff;
    }

    .size-row {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      flex-wrap: wrap;
    }

    .size-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .size-item span {
      color: #999;
      font-size: 0.9rem;
    }

    .usage-section {
      background: rgba(255, 255, 255, 0.05);
      padding: 2rem;
      border-radius: 16px;
    }

    .usage-section h3 {
      margin-bottom: 1.5rem;
      color: #00f5ff;
    }

    .code-example {
      background: #0a0a0a;
      border: 1px solid #333;
      border-radius: 12px;
      overflow: hidden;
    }

    .code-example pre {
      margin: 0;
      padding: 1.5rem;
    }

    .code-example code {
      color: #00f5ff;
      font-family: 'Courier New', monospace;
      font-size: 0.9rem;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .showcase-container {
        padding: 1rem;
      }
      
      .logos-grid {
        grid-template-columns: 1fr;
      }
      
      .size-row {
        gap: 2rem;
      }
    }
  `]
})
export class LogoShowcaseComponent {} 