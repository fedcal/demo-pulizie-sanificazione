import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, RouterLink],
  template: `
    <section class="hero">
      <div class="demo-container">
        <div class="hero-badges">
          <span class="badge badge--cert">DURC OK</span>
          <span class="badge badge--cert">ISO 14001</span>
          <span class="badge badge--cert">Prodotti Eco</span>
        </div>
        <h1>Pulizie professionali e sanificazioni — Milano</h1>
        <p class="hero-tagline">
          Appartamenti, uffici, post-cantiere, sanificazione ambienti. Team qualificato,
          prodotti ecologici certificati, DURC in regola.
        </p>
        <div class="hero-actions">
          <a routerLink="/preventivo" class="btn btn-primary">Preventivo gratuito</a>
          <a routerLink="/servizi" class="btn btn-secondary">Scopri i servizi</a>
        </div>
      </div>
    </section>

    <section class="features demo-container">
      <h2>Perché scegliere PulisciCasa Pro</h2>
      <ul class="feature-grid">
        <li>
          <span class="feature-icon" aria-hidden="true">📋</span>
          <h3>DURC sempre regolare</h3>
          <p>Lavoriamo in piena regolarità contributiva. Attestato disponibile su richiesta.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">🌿</span>
          <h3>ISO 14001 Ambiente</h3>
          <p>Certificazione ambientale. Prodotti Ecolabel EU biodegradabili, zero solventi tossici.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">🔑</span>
          <h3>Gestione chiavi sicura</h3>
          <p>Chiavi in cassaforte con codice anonimo. Nessun dato personale associato.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">👥</span>
          <h3>Team fisso dedicato</h3>
          <p>Stesso team per ogni intervento ricorrente. Stessa squadra, zero sorprese.</p>
        </li>
      </ul>
    </section>

    <section class="featured-services demo-container" *ngIf="featuredServizi$ | async as servizi">
      <div class="section-header">
        <h2>I servizi più richiesti</h2>
        <a routerLink="/servizi" class="link-more">Tutti i servizi →</a>
      </div>
      <ul class="servizi-grid">
        <li *ngFor="let s of servizi" class="servizio-card">
          <span class="servizio-card__icon" aria-hidden="true">{{ s.icona }}</span>
          <h3>{{ s.nome }}</h3>
          <p class="servizio-card__desc">{{ s.descrizione }}</p>
          <span class="servizio-card__price">{{ s.prezzoInfo }}</span>
        </li>
      </ul>
    </section>

    <section class="cta-band">
      <div class="demo-container">
        <h2>Sopralluogo e preventivo gratuiti, senza impegno</h2>
        <p>Valutiamo gli spazi, definiamo frequenza e prezzo. Rispondiamo entro 2 ore lavorative.</p>
        <div class="hero-actions">
          <a routerLink="/preventivo" class="btn btn-primary">Richiedi preventivo</a>
          <a routerLink="/contatti" class="btn btn-secondary">Contattaci</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        padding: 5rem 1rem;
        text-align: center;
        background: linear-gradient(180deg, #f0fdfa 0%, #ffffff 100%);
        border-bottom: 1px solid var(--color-border);
      }
      .hero-badges {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 1.25rem;
      }
      .badge--cert {
        background: #ccfbf1;
        color: var(--color-accent-dark);
        font-size: 0.75rem;
        font-weight: 700;
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }
      .hero h1 {
        font-size: clamp(2rem, 5vw, 3.25rem);
        margin: 0 0 1rem;
        color: var(--color-fg-default);
      }
      .hero-tagline {
        font-size: 1.15rem;
        color: var(--color-fg-muted);
        margin: 0 0 2rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }
      .hero-actions {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      .btn {
        display: inline-block;
        padding: 0.7rem 1.5rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
        transition: all 0.15s ease;
      }
      .btn-primary {
        background: var(--color-accent);
        color: #ffffff;
      }
      .btn-primary:hover {
        background: var(--color-accent-dark);
      }
      .btn-secondary {
        background: #ffffff;
        color: var(--color-fg-default);
        border: 1px solid var(--color-border);
      }
      .btn-secondary:hover {
        background: var(--color-bg-subtle);
      }
      .features {
        padding: 4rem 1rem;
      }
      .features h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .feature-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .feature-grid li {
        text-align: center;
        padding: 1.5rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-md);
        border: 1px solid var(--color-border);
      }
      .feature-icon {
        font-size: 2.5rem;
        display: block;
        margin-bottom: 0.5rem;
      }
      .feature-grid h3 {
        margin: 0 0 0.5rem;
        font-size: 1.05rem;
      }
      .feature-grid p {
        margin: 0;
        color: var(--color-fg-muted);
        font-size: 0.9rem;
      }
      .featured-services {
        padding: 4rem 1rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-lg);
        margin: 0 1rem 4rem;
      }
      .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      .section-header h2 {
        margin: 0;
      }
      .link-more {
        color: var(--color-accent);
        text-decoration: none;
        font-weight: 600;
      }
      .servizi-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1rem;
      }
      .servizio-card {
        background: #ffffff;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        padding: 1.25rem;
      }
      .servizio-card__icon {
        font-size: 2rem;
        display: block;
        margin-bottom: 0.5rem;
      }
      .servizio-card h3 {
        margin: 0 0 0.5rem;
        font-size: 1rem;
      }
      .servizio-card__desc {
        color: var(--color-fg-muted);
        font-size: 0.88rem;
        margin: 0 0 0.75rem;
        line-height: 1.5;
      }
      .servizio-card__price {
        color: var(--color-accent);
        font-weight: 700;
        font-size: 0.95rem;
      }
      .cta-band {
        padding: 4rem 1rem;
        background: var(--color-fg-default);
        color: #ffffff;
        text-align: center;
      }
      .cta-band h2 {
        margin: 0 0 0.75rem;
        color: #ffffff;
      }
      .cta-band p {
        color: rgba(255, 255, 255, 0.85);
        margin: 0 0 2rem;
      }
      .cta-band .btn-secondary {
        background: transparent;
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.3);
      }
      .cta-band .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly mockData = inject(MockDataService);

  readonly featuredServizi$ = this.mockData.servizi$.pipe(
    map((data) => data.servizi.filter((s) => s.evidenza).slice(0, 3))
  );
}
