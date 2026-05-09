# Customization

## Cambiare i dati mock

Edita i file in `src/assets/mock/`. Vedi [Mock Data](/mock-data).

## Cambiare i colori

I design tokens sono in `src/styles.css`:

```css
:root {
  --color-accent: #0969da;        /* Blu primario */
  --color-bg-default: #ffffff;
  --color-fg-default: #1f2328;
  /* ... */
}
```

## Aggiungere route

1. Crea il componente in `src/app/pages/{nome}/`
2. Aggiungi la route in `src/app/app.routes.ts`

## Cambiare il logo

Sostituisci `public/favicon.ico` e aggiungi logo SVG in `public/logo.svg`.

## Cambiare i metadati SEO

Edita `src/index.html` per title globale, meta description, Open Graph.

---

## Possibili Sviluppi Customizzabili

### Quality & Verification

1. **Photo quality AI verification**
   - LLaVA verify pulito vs sporco
   - Reject se insufficiente
   - Proof-of-work cliente

2. **Before/after foto album**
   - Fotogallery pubblica (consenso)
   - Portfolio per referral

3. **Score igienico ambiente**
   - Rating A/B/C trasparente
   - Benchmark vs settore

### Operazionale

4. **Smart workload balancing**
   - Dispatch automatico team
   - Stima tempo metratura
   - Urgency notification

5. **Team shift management**
   - Turni giornalieri
   - Copertura assenze
   - Disponibilità realtime

### Compliance & Safety

6. **Sanification checklist DUVRI**
   - Checklist per tipo ambiente
   - Fotografia ogni step
   - Report DUVRI automatico
   - Tracciamento prodotti chimici

7. **Team certification tracking**
   - Abilitazione sanitizzatore
   - Alert scadenza rinnovo
   - Only certified per job sensibili

8. **Polizza assicurazione**
   - RC inclusa o premium
   - Allegata contratto

### Inventory & Sustainability

9. **Inventory predictive auto-reorder**
   - Consumo prodotti per sessione
   - Alert stock minimo
   - Cost tracking incluso bollettino

10. **Eco-tracking ISO 14001**
    - Prodotti eco-friendly tracking
    - Carbon footprint calcolo
    - Certificazione ambientale

### Revenue & Marketing

11. **Pagamento ricorrente Stripe**
    - Addebito mensile automatico
    - Gestione carte clienti

12. **NPS feedback system**
    - Widget post-pulizia survey
    - Gamification badge elite
    - Training per bad ratings

13. **Partnership hostel cleaning**
    - Lavori turnover giornalieri
    - Contratti B2B ricorrenti

14. **Segnalazione anomalie**
    - Team report danni/infestazioni
    - Photo alert proprietario

15. **Sostenibilità report**
    - Consumo acqua/energia
    - Comparativa media industria

---

## Note Implementative

- **Stack**: Angular 21 SSR + Spring Boot + Ollama LLaVA
- **Mobile**: React Native app team offline foto/checklist
- **Deploy**: Vercel demo + VPS cliente
- **Timeline**: 10–12 settimane per vertical full-featured
