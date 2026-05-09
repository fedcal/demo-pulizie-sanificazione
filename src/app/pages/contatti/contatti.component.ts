import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, RouterLink],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Contatti</h1>
        <p>Siamo a Milano. Rispondiamo entro 2 ore lavorative. Sopralluogo sempre gratuito.</p>
      </div>
    </section>

    <article class="demo-container content" *ngIf="info$ | async as info">
      <div class="contact-grid">
        <section class="info-block">
          <h2>Dove siamo</h2>
          <p class="address">
            {{ info.indirizzo.via }}<br />
            {{ info.indirizzo.cap }} {{ info.indirizzo.citta }} ({{ info.indirizzo.provincia }})<br />
            {{ info.indirizzo.regione }}
          </p>

          <h2>Contattaci</h2>
          <ul class="contact-list">
            <li>
              <span class="contact-list__label">Telefono</span>
              <a [href]="'tel:' + info.contatti.telefono">{{ info.contatti.telefono }}</a>
            </li>
            <li>
              <span class="contact-list__label">WhatsApp</span>
              <a [href]="whatsAppLink(info.contatti.whatsapp)" target="_blank" rel="noopener">
                {{ info.contatti.whatsapp }}
              </a>
            </li>
            <li>
              <span class="contact-list__label">Email</span>
              <a [href]="'mailto:' + info.contatti.email">{{ info.contatti.email }}</a>
            </li>
          </ul>

          <h2>Orari operativi</h2>
          <ul class="hours-list">
            <li><span>Lunedì</span><span>{{ info.orari.lunedi }}</span></li>
            <li><span>Martedì</span><span>{{ info.orari.martedi }}</span></li>
            <li><span>Mercoledì</span><span>{{ info.orari.mercoledi }}</span></li>
            <li><span>Giovedì</span><span>{{ info.orari.giovedi }}</span></li>
            <li><span>Venerdì</span><span>{{ info.orari.venerdi }}</span></li>
            <li><span>Sabato</span><span>{{ info.orari.sabato }}</span></li>
            <li><span>Domenica</span><span>{{ info.orari.domenica }}</span></li>
          </ul>

          <h2>Certificazioni</h2>
          <ul class="cert-list">
            <li *ngIf="info.certificazioni.durc">
              <span class="cert-badge" aria-hidden="true">✅</span>
              DURC regolare — disponibile su richiesta
            </li>
            <li *ngIf="info.certificazioni.iso14001">
              <span class="cert-badge" aria-hidden="true">🌿</span>
              Certificazione ISO 14001:2015 Gestione Ambientale
            </li>
            <li>
              <span class="cert-badge" aria-hidden="true">🛡️</span>
              RC Professionale attiva
            </li>
          </ul>
        </section>

        <section class="faq-block" *ngIf="faq$ | async as faqData">
          <h2>Domande frequenti</h2>
          <dl class="faq-list">
            <ng-container *ngFor="let item of faqData.faq">
              <dt>{{ item.domanda }}</dt>
              <dd>{{ item.risposta }}</dd>
            </ng-container>
          </dl>

          <div class="cta-box">
            <p>Non hai trovato risposta?</p>
            <a routerLink="/preventivo" class="btn btn-primary">Richiedi preventivo gratuito</a>
          </div>
        </section>
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
      .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 3rem;
        align-items: start;
      }
      .info-block h2 {
        margin: 1.75rem 0 0.75rem;
        font-size: 1.1rem;
        color: var(--color-fg-default);
      }
      .info-block h2:first-child {
        margin-top: 0;
      }
      .address {
        color: var(--color-fg-muted);
        line-height: 1.7;
        margin: 0;
      }
      .contact-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .contact-list li {
        display: flex;
        gap: 0.75rem;
        align-items: baseline;
        padding: 0.4rem 0;
      }
      .contact-list__label {
        font-weight: 600;
        font-size: 0.85rem;
        color: var(--color-fg-muted);
        min-width: 72px;
      }
      .hours-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .hours-list li {
        display: flex;
        justify-content: space-between;
        padding: 0.4rem 0;
        border-bottom: 1px dashed var(--color-border);
        font-size: 0.9rem;
      }
      .cert-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .cert-list li {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        padding: 0.35rem 0;
        font-size: 0.9rem;
      }
      .cert-badge {
        font-size: 1rem;
        flex-shrink: 0;
      }
      .faq-block h2 {
        margin: 0 0 1.5rem;
        font-size: 1.1rem;
      }
      .faq-list {
        margin: 0 0 2rem;
      }
      .faq-list dt {
        font-weight: 600;
        font-size: 0.95rem;
        margin-bottom: 0.35rem;
        color: var(--color-fg-default);
      }
      .faq-list dd {
        font-size: 0.88rem;
        color: var(--color-fg-muted);
        margin: 0 0 1.25rem;
        line-height: 1.6;
        padding-left: 0;
      }
      .cta-box {
        background: var(--color-bg-subtle);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        padding: 1.5rem;
        text-align: center;
      }
      .cta-box p {
        margin: 0 0 1rem;
        font-weight: 600;
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
export class ContattiComponent {
  private readonly mockData = inject(MockDataService);

  readonly info$ = this.mockData.info$;
  readonly faq$ = this.mockData.faq$;

  whatsAppLink(num: string): string {
    const clean = num.replace(/[^0-9]/g, '');
    return `https://wa.me/${clean}`;
  }
}
