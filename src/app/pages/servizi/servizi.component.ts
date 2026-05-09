import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-servizi',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, RouterLink],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>I nostri servizi</h1>
        <p>10 servizi professionali per residenze, uffici e ambienti specializzati — Milano e hinterland.</p>
      </div>
    </section>

    <article class="demo-container content" *ngIf="view$ | async as view">
      <section *ngFor="let cat of view.categorie" class="category-section">
        <h2 class="category-title">{{ cat.nome }}</h2>
        <ul class="servizi-list">
          <li *ngFor="let s of cat.servizi" class="servizio-item">
            <div class="servizio-item__head">
              <span class="servizio-item__icon" aria-hidden="true">{{ s.icona }}</span>
              <div>
                <h3>{{ s.nome }}</h3>
                <span class="servizio-item__price">{{ s.prezzoInfo }}</span>
              </div>
            </div>
            <p class="servizio-item__desc">{{ s.descrizione }}</p>
            <span class="servizio-item__badge" *ngIf="s.evidenza">Molto richiesto</span>
          </li>
        </ul>
      </section>

      <section class="certs-note">
        <h2>Qualità garantita</h2>
        <div class="certs-grid">
          <div class="cert-card">
            <span class="cert-icon" aria-hidden="true">📋</span>
            <h3>DURC regolare</h3>
            <p>Regolarità contributiva certificata. Attestato disponibile su richiesta per appalti e contratti aziendali.</p>
          </div>
          <div class="cert-card">
            <span class="cert-icon" aria-hidden="true">🌿</span>
            <h3>ISO 14001:2015</h3>
            <p>Sistema di gestione ambientale certificato. Prodotti Ecolabel EU, zero solventi clorurati.</p>
          </div>
          <div class="cert-card">
            <span class="cert-icon" aria-hidden="true">🛡️</span>
            <h3>RC Professionale</h3>
            <p>Copertura assicurativa per danni a cose e persone durante ogni intervento.</p>
          </div>
        </div>
      </section>

      <div class="cta-inline">
        <p>Vuoi un preventivo su misura?</p>
        <a routerLink="/preventivo" class="btn btn-primary">Richiedi preventivo gratuito</a>
      </div>
    </article>
  `,
  styles: [
    `
      .page-header {
        padding: 4rem 1rem 3rem;
        background: var(--color-bg-subtle);
        text-align: center;
        border-bottom: 1px solid var(--color-border);
      }
      .page-header h1 {
        margin: 0 0 0.5rem;
      }
      .page-header p {
        color: var(--color-fg-muted);
        margin: 0;
      }
      .content {
        padding: 3rem 1rem;
      }
      .category-section {
        margin-bottom: 3.5rem;
      }
      .category-title {
        font-size: 1.4rem;
        margin: 0 0 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--color-accent);
        display: inline-block;
      }
      .servizi-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 1.25rem;
      }
      .servizio-item {
        padding: 1.25rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background: #ffffff;
      }
      .servizio-item__head {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        margin-bottom: 0.75rem;
      }
      .servizio-item__icon {
        font-size: 1.75rem;
        flex-shrink: 0;
        line-height: 1;
      }
      .servizio-item__head h3 {
        margin: 0 0 0.2rem;
        font-size: 1rem;
      }
      .servizio-item__price {
        color: var(--color-accent);
        font-weight: 700;
        font-size: 0.95rem;
      }
      .servizio-item__desc {
        color: var(--color-fg-muted);
        font-size: 0.88rem;
        margin: 0 0 0.5rem;
        line-height: 1.55;
      }
      .servizio-item__badge {
        font-size: 0.7rem;
        padding: 0.15rem 0.55rem;
        border-radius: 9999px;
        background: #ccfbf1;
        color: var(--color-accent-dark);
        font-weight: 600;
      }
      .certs-note {
        padding: 3rem 2rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-lg);
        margin-bottom: 3rem;
      }
      .certs-note h2 {
        text-align: center;
        margin: 0 0 2rem;
      }
      .certs-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .cert-card {
        text-align: center;
      }
      .cert-icon {
        font-size: 2.5rem;
        display: block;
        margin-bottom: 0.5rem;
      }
      .cert-card h3 {
        margin: 0 0 0.4rem;
        font-size: 1.05rem;
      }
      .cert-card p {
        color: var(--color-fg-muted);
        font-size: 0.88rem;
        margin: 0;
      }
      .cta-inline {
        text-align: center;
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
      .cta-inline p {
        font-size: 1.1rem;
        font-weight: 600;
        margin: 0;
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
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiziComponent {
  private readonly mockData = inject(MockDataService);

  readonly view$ = this.mockData.servizi$.pipe(
    map((data) => ({
      categorie: data.categorie
        .sort((a, b) => a.ordine - b.ordine)
        .map((cat) => ({
          ...cat,
          servizi: data.servizi.filter((s) => s.categoria === cat.id)
        }))
    }))
  );
}
