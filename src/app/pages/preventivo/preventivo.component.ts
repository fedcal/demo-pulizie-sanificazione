import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-preventivo',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, ReactiveFormsModule],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Richiedi un preventivo gratuito</h1>
        <p>Rispondiamo entro 2 ore lavorative. Sopralluogo gratuito senza impegno.</p>
      </div>
    </section>

    <article class="demo-container content">
      <div class="preventivo-layout">
        <section class="form-block">
          <form [formGroup]="form" (ngSubmit)="onSubmit()" *ngIf="!submitted(); else thankyou">
            <div class="field">
              <label for="nome">Nome e cognome *</label>
              <input id="nome" type="text" formControlName="nome" required autocomplete="name" />
            </div>

            <div class="row-2">
              <div class="field">
                <label for="email">Email *</label>
                <input id="email" type="email" formControlName="email" required autocomplete="email" />
              </div>
              <div class="field">
                <label for="telefono">Telefono *</label>
                <input id="telefono" type="tel" formControlName="telefono" required autocomplete="tel" />
              </div>
            </div>

            <div class="field">
              <label for="tipoServizio">Tipo di servizio *</label>
              <select id="tipoServizio" formControlName="tipoServizio" required>
                <option value="">-- Seleziona --</option>
                <option value="pulizie-domestiche">Pulizie domestiche ordinarie</option>
                <option value="pulizie-fondo">Pulizie di fondo (deep cleaning)</option>
                <option value="pulizie-uffici">Pulizie uffici e studi</option>
                <option value="pulizie-negozi">Pulizie negozi e locali commerciali</option>
                <option value="post-cantiere">Pulizie post-cantiere</option>
                <option value="sanificazione">Sanificazione ambienti</option>
                <option value="pulizie-vetri">Lavaggio vetri e facciate</option>
                <option value="lavaggio-tappeti">Lavaggio tappeti e moquette</option>
                <option value="pulizie-condomini">Pulizie condominiali</option>
                <option value="pulizie-trasloco">Pulizie dopo trasloco</option>
              </select>
            </div>

            <div class="row-2">
              <div class="field">
                <label for="metratura">Metratura approssimativa (m²) *</label>
                <input id="metratura" type="number" formControlName="metratura" min="10" max="5000" required />
              </div>
              <div class="field">
                <label for="frequenza">Frequenza desiderata *</label>
                <select id="frequenza" formControlName="frequenza" required>
                  <option value="">-- Seleziona --</option>
                  <option value="una-tantum">Una tantum</option>
                  <option value="settimanale">Settimanale</option>
                  <option value="bisettimanale">Bisettimanale</option>
                  <option value="mensile">Mensile</option>
                  <option value="da-definire">Da definire con sopralluogo</option>
                </select>
              </div>
            </div>

            <div class="field">
              <label for="indirizzo">Indirizzo dell'immobile (Milano) *</label>
              <input id="indirizzo" type="text" formControlName="indirizzo" required placeholder="Via, numero civico, quartiere" />
            </div>

            <div class="field">
              <label for="note">Note aggiuntive (opzionale)</label>
              <textarea id="note" formControlName="note" rows="3" placeholder="Particolarità dell'immobile, accessi, esigenze specifiche..."></textarea>
            </div>

            <div class="field field--checkbox">
              <input id="privacy" type="checkbox" formControlName="privacy" />
              <label for="privacy">
                Accetto la privacy policy e il trattamento dei miei dati personali per ricevere il preventivo.
              </label>
            </div>

            <button type="submit" class="btn btn-primary" [disabled]="form.invalid">
              Invia richiesta preventivo
            </button>
            <p class="form-disclaimer">
              Demo non funzionale: nessun dato è realmente inviato. In un sito reale riceveresti una conferma via email.
            </p>
          </form>

          <ng-template #thankyou>
            <div class="thankyou">
              <span class="thankyou__icon" aria-hidden="true">✅</span>
              <h3>Grazie {{ form.value.nome }}!</h3>
              <p>
                Abbiamo ricevuto la tua richiesta per
                <strong>{{ getLabelServizio(form.value.tipoServizio) }}</strong>
                ({{ form.value.metratura }} m², {{ form.value.frequenza }}).
              </p>
              <p>In un sito reale ti ricontatteremmo entro 2 ore lavorative per concordare il sopralluogo gratuito.</p>
              <button type="button" class="btn btn-secondary" (click)="reset()">Nuova richiesta</button>
            </div>
          </ng-template>
        </section>

        <aside class="info-aside">
          <h2>Cosa succede dopo?</h2>
          <ol class="steps-list">
            <li>
              <span class="step-num">1</span>
              <div>
                <strong>Rispondiamo entro 2h</strong>
                <p>Ti contatteremo via email o telefono per confermare la richiesta.</p>
              </div>
            </li>
            <li>
              <span class="step-num">2</span>
              <div>
                <strong>Sopralluogo gratuito</strong>
                <p>Un nostro responsabile visita l'immobile per valutare tempi e risorse necessarie.</p>
              </div>
            </li>
            <li>
              <span class="step-num">3</span>
              <div>
                <strong>Preventivo fisso</strong>
                <p>Ricevi un preventivo dettagliato e vincolante. Nessun costo nascosto.</p>
              </div>
            </li>
            <li>
              <span class="step-num">4</span>
              <div>
                <strong>Primo intervento</strong>
                <p>Pianifichiamo la data e il team dedicato. Puoi confermare via email o telefono.</p>
              </div>
            </li>
          </ol>

          <div class="contact-box">
            <p>Preferisci parlare con noi?</p>
            <a href="tel:+390255551234" class="btn btn-outline">📞 02 5555 1234</a>
            <a href="https://wa.me/393335555678" target="_blank" rel="noopener" class="btn btn-outline">
              💬 WhatsApp
            </a>
          </div>
        </aside>
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
      .preventivo-layout {
        display: grid;
        grid-template-columns: 1fr 360px;
        gap: 3rem;
        align-items: start;
      }
      @media (max-width: 900px) {
        .preventivo-layout {
          grid-template-columns: 1fr;
        }
      }
      .form-block {
        background: var(--color-bg-subtle);
        padding: 2rem;
        border-radius: var(--radius-lg);
        border: 1px solid var(--color-border);
      }
      .field {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
      }
      .field label {
        font-size: 0.85rem;
        font-weight: 600;
        margin-bottom: 0.3rem;
      }
      .field input,
      .field select,
      .field textarea {
        padding: 0.5rem 0.75rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm);
        font-family: inherit;
        font-size: 0.95rem;
        background: #ffffff;
      }
      .field input:focus,
      .field select:focus,
      .field textarea:focus {
        outline: 2px solid var(--color-accent);
        outline-offset: 1px;
        border-color: var(--color-accent);
      }
      .field--checkbox {
        flex-direction: row;
        align-items: flex-start;
        gap: 0.5rem;
      }
      .field--checkbox label {
        font-weight: 400;
        font-size: 0.85rem;
        color: var(--color-fg-muted);
      }
      .row-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.75rem;
      }
      .btn {
        display: inline-block;
        padding: 0.7rem 1.5rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
        border: none;
        cursor: pointer;
        font-size: 0.95rem;
        text-align: center;
      }
      .btn-primary {
        background: var(--color-accent);
        color: #ffffff;
        width: 100%;
      }
      .btn-primary:hover {
        background: var(--color-accent-dark);
      }
      .btn-primary:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .btn-secondary {
        background: #ffffff;
        color: var(--color-fg-default);
        border: 1px solid var(--color-border);
      }
      .btn-outline {
        background: transparent;
        color: var(--color-accent);
        border: 1px solid var(--color-accent);
        display: block;
        margin-top: 0.5rem;
      }
      .btn-outline:hover {
        background: var(--color-bg-subtle);
      }
      .form-disclaimer {
        font-size: 0.78rem;
        color: var(--color-fg-muted);
        font-style: italic;
        margin-top: 0.5rem;
        text-align: center;
      }
      .thankyou {
        text-align: center;
        padding: 2rem 0;
      }
      .thankyou__icon {
        font-size: 3rem;
        display: block;
        margin-bottom: 1rem;
      }
      .thankyou h3 {
        color: var(--color-success);
        margin-bottom: 1rem;
      }
      .thankyou p {
        color: var(--color-fg-muted);
        margin-bottom: 0.75rem;
      }
      .info-aside {
        padding: 2rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-lg);
        border: 1px solid var(--color-border);
      }
      .info-aside h2 {
        margin: 0 0 1.5rem;
        font-size: 1.2rem;
      }
      .steps-list {
        list-style: none;
        padding: 0;
        margin: 0 0 2rem;
      }
      .steps-list li {
        display: flex;
        gap: 0.75rem;
        margin-bottom: 1.25rem;
        align-items: flex-start;
      }
      .step-num {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: var(--color-accent);
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.85rem;
        font-weight: 700;
        flex-shrink: 0;
      }
      .steps-list strong {
        display: block;
        font-size: 0.95rem;
        margin-bottom: 0.2rem;
      }
      .steps-list p {
        font-size: 0.85rem;
        color: var(--color-fg-muted);
        margin: 0;
      }
      .contact-box {
        border-top: 1px solid var(--color-border);
        padding-top: 1.5rem;
      }
      .contact-box p {
        font-weight: 600;
        margin: 0 0 0.5rem;
        font-size: 0.95rem;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreventivoComponent {
  private readonly fb = inject(FormBuilder);
  readonly mockData = inject(MockDataService);

  readonly submitted = signal(false);

  readonly form: FormGroup = this.fb.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern(/^[+0-9 ]{6,}$/)]],
    tipoServizio: ['', Validators.required],
    metratura: [null as number | null, [Validators.required, Validators.min(10), Validators.max(5000)]],
    frequenza: ['', Validators.required],
    indirizzo: ['', Validators.required],
    note: [''],
    privacy: [false, Validators.requiredTrue]
  });

  private readonly serviziLabels: Record<string, string> = {
    'pulizie-domestiche': 'Pulizie domestiche ordinarie',
    'pulizie-fondo': 'Pulizie di fondo',
    'pulizie-uffici': 'Pulizie uffici',
    'pulizie-negozi': 'Pulizie negozi',
    'post-cantiere': 'Pulizie post-cantiere',
    'sanificazione': 'Sanificazione ambienti',
    'pulizie-vetri': 'Lavaggio vetri',
    'lavaggio-tappeti': 'Lavaggio tappeti',
    'pulizie-condomini': 'Pulizie condominiali',
    'pulizie-trasloco': 'Pulizie dopo trasloco'
  };

  getLabelServizio(key: string): string {
    return this.serviziLabels[key] ?? key;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitted.set(true);
    }
  }

  reset(): void {
    this.form.reset({ privacy: false });
    this.submitted.set(false);
  }
}
