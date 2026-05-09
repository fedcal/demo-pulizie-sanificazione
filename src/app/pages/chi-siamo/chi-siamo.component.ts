import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-chi-siamo',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Chi siamo</h1>
        <p>Un team di professionisti delle pulizie con 3 caposquadra e 18 addetti qualificati.</p>
      </div>
    </section>

    <article class="demo-container content">
      <section class="story">
        <h2>PulisciCasa Pro — Milano dal 2012</h2>
        <p>
          Nata nel 2012 come piccola impresa familiare di pulizie residenziali, PulisciCasa Pro è oggi
          una realtà consolidata con 21 dipendenti, tre sedi operative e copertura su tutta la città
          metropolitana di Milano. La nostra crescita è stata guidata da un principio semplice: fare
          bene il lavoro, essere puntuali, essere trasparenti.
        </p>
        <p>
          Nel 2018 abbiamo ottenuto la certificazione ISO 14001 per la gestione ambientale, passando
          integralmente a prodotti Ecolabel EU biodegradabili. Nel 2020 abbiamo attivato il servizio
          di sanificazione certificata, diventando uno dei riferimenti a Milano per imprese e condomini
          post-pandemia. Il nostro DURC è sempre regolare: lavoriamo solo in piena legalità.
        </p>
      </section>

      <section class="values">
        <h2>I nostri valori</h2>
        <ul class="values-grid">
          <li>
            <h3>Affidabilità</h3>
            <p>Stesso team ad ogni intervento ricorrente. Puntualità garantita o rimborso parziale.</p>
          </li>
          <li>
            <h3>Trasparenza</h3>
            <p>Preventivo dettagliato e fisso. Nessun costo nascosto, nessuna sorpresa in fattura.</p>
          </li>
          <li>
            <h3>Sostenibilità</h3>
            <p>ISO 14001. Prodotti Ecolabel EU, riduzione plastica, procedure a basso impatto idrico.</p>
          </li>
          <li>
            <h3>Sicurezza</h3>
            <p>DURC regolare, RC professionale, formazione continua su sicurezza e DPI per ogni addetto.</p>
          </li>
        </ul>
      </section>

      <section class="team-section" *ngIf="team$ | async as data">
        <h2>Il team</h2>
        <p class="team-intro">3 caposquadra specializzati, 18 addetti qualificati. Tutti formati in aula e on-the-job.</p>
        <ul class="team-grid">
          <li *ngFor="let m of data.team" class="team-card">
            <div class="team-card__avatar" [class.team-card__avatar--lead]="m.caposquadra" aria-hidden="true">
              {{ m.nome.charAt(0) }}
            </div>
            <div class="team-card__body">
              <h3>{{ m.nome }}</h3>
              <p class="team-card__role">{{ m.ruolo }}</p>
              <p class="team-card__bio">{{ m.bio }}</p>
              <p class="team-card__exp">{{ m.anniEsperienza }} anni di esperienza</p>
              <ul class="team-card__skills">
                <li *ngFor="let s of m.specialita">{{ s }}</li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
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
      .story {
        max-width: 720px;
        margin: 0 auto 4rem;
      }
      .story h2 {
        margin-bottom: 1rem;
      }
      .story p {
        line-height: 1.7;
        margin-bottom: 1rem;
        color: var(--color-fg-muted);
      }
      .values {
        margin-bottom: 4rem;
      }
      .values h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .values-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .values-grid li {
        padding: 1.5rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-md);
        border: 1px solid var(--color-border);
      }
      .values-grid h3 {
        margin: 0 0 0.5rem;
        color: var(--color-accent);
      }
      .values-grid p {
        margin: 0;
        color: var(--color-fg-muted);
        font-size: 0.9rem;
      }
      .team-section h2 {
        text-align: center;
        margin-bottom: 0.5rem;
      }
      .team-intro {
        text-align: center;
        color: var(--color-fg-muted);
        margin: 0 0 2rem;
      }
      .team-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
      }
      .team-card {
        padding: 1.5rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        display: flex;
        gap: 1rem;
        align-items: flex-start;
      }
      .team-card__avatar {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: var(--color-bg-subtle);
        border: 2px solid var(--color-border);
        color: var(--color-fg-muted);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 700;
        flex-shrink: 0;
      }
      .team-card__avatar--lead {
        background: var(--color-accent);
        border-color: var(--color-accent);
        color: #ffffff;
      }
      .team-card__body {
        flex: 1;
      }
      .team-card h3 {
        margin: 0 0 0.2rem;
        font-size: 1rem;
      }
      .team-card__role {
        margin: 0 0 0.5rem;
        color: var(--color-accent);
        font-weight: 600;
        font-size: 0.85rem;
      }
      .team-card__bio {
        font-size: 0.88rem;
        color: var(--color-fg-muted);
        margin-bottom: 0.5rem;
        line-height: 1.5;
      }
      .team-card__exp {
        font-size: 0.8rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }
      .team-card__skills {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 0.35rem;
        flex-wrap: wrap;
      }
      .team-card__skills li {
        font-size: 0.7rem;
        background: var(--color-bg-subtle);
        padding: 0.2rem 0.5rem;
        border-radius: 9999px;
        color: var(--color-fg-muted);
        border: 1px solid var(--color-border);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChiSiamoComponent {
  private readonly mockData = inject(MockDataService);

  readonly team$ = this.mockData.team$;
}
