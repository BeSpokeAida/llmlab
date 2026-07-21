/* LLMLab — Render */
window.LLMLab = window.LLMLab || {};

(function (L) {
  const ic = L.ic;
  const VIEWS = L.VIEWS;

  function renderHub() {
    return `
    <section class="hub" aria-labelledby="hub-title">
      <div class="hub__hero">
        <h1 class="hub__brand" id="hub-title"><span>LLMLab</span> by BespokeAIDA</h1>
        <p class="hub__lead">
          Due animazioni didattiche per capire cosa succede dentro un modello linguistico
          e come funziona un’architettura RAG — senza API e senza dati reali.
        </p>
      </div>

      <div class="hub__cards">
        <button type="button" class="hub-card hub-card--llm" data-action="open-llm">
          <span class="hub-card__icon">${ic.llm}</span>
          <span class="hub-card__title">Simulazione LLM</span>
          <span class="hub-card__desc">
            Percorso step-by-step: tokenizzazione, embedding, attenzione, logits e generazione del prossimo token.
          </span>
          <span class="hub-card__cta">Apri animazione ${ic.chevRight}</span>
        </button>

        <button type="button" class="hub-card hub-card--rag" data-action="open-rag">
          <span class="hub-card__icon">${ic.rag}</span>
          <span class="hub-card__title">Simulazione RAG</span>
          <span class="hub-card__desc">
            Pipeline dal documento alla risposta: chunking, embedding, retrieval e generazione contestuale.
          </span>
          <span class="hub-card__cta">Apri animazione ${ic.chevRight}</span>
        </button>
      </div>

      <p class="hub__footnote">
        Ambiente simulato a scopo didattico · i numeri e i flussi sono semplificati per la formazione · AI Act compliant
      </p>
    </section>
  `;
  }

  function renderSim(meta) {
    return `
    <div class="sim-view">
      <div class="sim-bar">
        <button type="button" class="sim-bar__back" data-action="goto-hub">
          ${ic.back} Torna alla scelta
        </button>
        <span class="sim-bar__title">${meta.title} · ${meta.subtitle}</span>
      </div>
      <iframe
        class="sim-frame"
        src="${meta.src}"
        title="${meta.title}"
        loading="lazy"
      ></iframe>
    </div>
  `;
  }

  L.renderApp = function renderApp(state) {
    const el = document.getElementById("app");
    if (!el) return;

    if (state.view === "hub") {
      el.innerHTML = renderHub();
      return;
    }

    const meta = VIEWS[state.view];
    if (!meta || !meta.src) {
      el.innerHTML = renderHub();
      return;
    }

    el.innerHTML = renderSim(meta);
  };
})(window.LLMLab);
