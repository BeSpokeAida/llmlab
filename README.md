# 🎓 LLMLab — Simulatore didattico LLM & RAG

> Due animazioni interattive per capire cosa succede dentro un Large Language Model e come funziona un’architettura RAG — senza collegarsi a servizi reali.

![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-interno-blue)
![Built With](https://img.shields.io/badge/built%20with-HTML%20%7C%20CSS%20%7C%20Vanilla%20JS-orange)
![AI Act](https://img.shields.io/badge/AI%20Act-compliant-green)

---

## 🧠 Cos'è LLMLab?

**LLMLab** è un laboratorio didattico di **BespokeAIDA** che propone due simulazioni distinte:

1. **Simulazione LLM** — dal token alla generazione del prossimo token (tokenizzazione, embedding, attenzione, logits)
2. **Simulazione RAG** — dal documento alla risposta (chunking, embedding, retrieval, generazione contestuale)

Una **maschera iniziale** permette di scegliere quale percorso aprire. Entrambe le animazioni restano locali: nessuna API, nessun modello cloud, nessun invio di dati.

Progettato per corsi di alfabetizzazione all’AI e formazione conforme all’**AI Act**.

---

## 🎬 Contesto d'uso

In una sessione su *come funzionano i modelli linguistici e i sistemi RAG*, il docente non vuole che i partecipanti si perdano in diagrammi statici o tool commerciali.

Apre **LLMLab** nel browser: ogni studente sceglie LLM o RAG dalla schermata BespokeAIDA, segue l’animazione step-by-step e torna all’hub quando vuole. Il banner in alto ricorda sempre che si tratta di un ambiente simulato.

---

## ✨ Funzionalità

### 🏠 Hub iniziale
- Branding **LLMLab by BespokeAIDA**
- Due card di scelta: **Simulazione LLM** e **Simulazione RAG**
- Disclaimer didattico in pagina

### 🧩 Simulazione LLM
- Animazione interattiva: token → embedding → Transformer → logits → generazione
- Controlli di avanzamento e pannelli laterali di contesto
- Numeri e flussi semplificati a scopo formativo

### 📚 Simulazione RAG
- Pipeline documento → chunk → embedding → query → retrieval → risposta
- Timeline e overlay della pipeline completa
- Enfasi didattica: il RAG non riaddestra il modello, arricchisce il contesto

### 🛡 Design didattico
- Banner educativo fisso con logo BespokeAIDA e disclaimer AI Act
- Barra «Torna alla scelta» sopra ogni simulazione
- Nessun dato inviato all’esterno

---

## 🧱 Stack tecnico

- HTML5
- CSS3 (design tokens, tema scuro allineato alle animazioni)
- JavaScript ES modules (vanilla, senza framework)
- Simulazioni self-contained in `sims/`, caricate via iframe dallo shell

---

## 🎯 Perché esiste

Spiegare LLM e RAG solo a parole lascia il meccanismo opaco.

LLMLab rende l’apprendimento:
- **visivo** — si vede il flusso, non solo lo schema
- **guidato** — hub chiaro, due percorsi distinti
- **accessibile** — basta un browser
- **sicuro** — niente API né dati in cloud
- **conforme** — pensato per contesti regolamentati (AI Act)

---

## 📂 Struttura del progetto

```
LLMLab/
├── index.html              # Entry point + banner + hub
├── assets/
│   └── aida-logo.png       # Logo BespokeAIDA
├── styles/
│   ├── tokens.css          # Design tokens
│   └── main.css            # Hub, banner, shell iframe
├── js/
│   ├── app.js              # Eventi e dispatch
│   ├── state.js            # View hub | llm | rag
│   ├── render.js           # Rendering hub / sim
│   └── icons.js            # Icone SVG
├── sims/
│   ├── llm.html            # Animazione LLM (self-contained)
│   └── rag.html            # Animazione RAG (self-contained)
└── README.md
```

---

## 🤝 Contributi

Il progetto è mantenuto internamente da **BespokeAIDA**.

Per segnalazioni, miglioramenti alle animazioni o nuovi scenari didattici, contattare il team formativo.

---

## ⚠️ Disclaimer

Questo progetto è destinato **esclusivamente** a scopi didattici e di alfabetizzazione all’AI.

- Non è affiliato, approvato o sponsorizzato da provider AI (OpenAI, Anthropic, Google, ecc.)
- Non si connette a servizi, modelli o API reali
- I valori numerici e i flussi sono **semplificati** a fini formativi
- Non deve essere usato come sostituto di strumenti o architetture in produzione

---

**LLMLab by BespokeAIDA** · Simulatore didattico AI Act
