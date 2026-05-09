# Tier di Funzionalità

## Tier Avanzato — €4.500–6.000 (385 ore)

Destinato a **aziende pulizie e sanificazione** con gestione team e recurring service.

### Core Features

1. **Photo quality AI verification**
   - Team scatta foto post-pulizia ambente
   - Ollama LLaVA verifica "pulito" vs "sporco"
   - Reject se qualità insufficiente → retry
   - Cliente riceve proof-of-work

2. **Smart workload balancing team**
   - Dispatch automatico job a team member
   - Stima tempo pulizia base metratura
   - Notifica urgency per cliente richiesta same-day

3. **Sanification checklist DUVRI compliance**
   - Checklist per tipo ambiente (ufficio, ospedale, scuola)
   - Fotografia ogni step (superfici, aerazione, ecc)
   - Report DUVRI completo automatico
   - Tracciamento prodotti usati (regolamento chimico)

4. **Inventory predictive auto-reorder**
   - Consumo prodotti per sessione (detersivi, carta, ecc)
   - Alert stock minimo → ordine automatico supplier
   - Cost tracking per cliente (incluso in bollettino)

5. **Recurring contracts**
   - Weekly ufficio
   - Monthly scuole
   - Settimanale ospedale
   - Notifiche automatiche cliente

6. **Team certification tracking**
   - Abilitazione operatore sanificazione (es. COVID cert)
   - Dashboard scadenze rinnovo
   - Only certified tecnici per incarico sensibile

7. **NPS feedback system**
   - Widget post-pulizia surveyappetenza
   - Track soddisfazione per team member
   - Gamification badge "Tecnico elite"

8. **Eco-tracking ISO 14001**
   - Prodotti eco-friendly tracking
   - Calcolo carbon footprint per servizio
   - Certificazione ambientale cliente

### ROI Stimato
+€20.000/anno service contracts (avg. +5 clienti ricorrenti + upsell sanificazione)

---

## Customization Consigliate

- **Before/after foto album**: fotogallery pubblica (con consenso cliente)
- **Pagamento ricorrente Stripe**: addebito mensile automatico carte
- **Plan manutenzione**: preventiva vs correttiva per clienti fragili
- **Team shift management**: turni giornalieri + copertura assenze
- **Allegati fattura**: DUVRI + foto checklist allegate PDF
- **Score igienico per ambiente**: A/B/C rating trasparente
- **Segnalazione anomalie**: team report danni/infestazioni notati
- **Storico interventi**: search archive cliente per review passato
- **Chatbot emergenza**: contatto 24/7 per claim sporcizia non accettata
- **Polizza assicurazione**: RC inclusa o optional premium upgrade
- **Partnership hostel cleaning**: lavori turnover giornalieri b2b
- **Sostenibilità report**: consumo acqua/energia risparmiato vs media industria

---

## Note Tecniche

- **Modello IA**: Ollama `llava:7b` per quality verification foto
- **Database**: PostgreSQL con tracking timestamp foto + EXIF geolocation
- **Compliance**: GDPR video foto, normativa prodotti chimici REACh, DUVRI template
- **Mobile**: App React Native per team (foto + checklist offline)
