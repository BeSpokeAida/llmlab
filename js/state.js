/* LLMLab — State */
window.LLMLab = window.LLMLab || {};

window.LLMLab.initialState = {
  /* "hub" | "llm" | "rag" */
  view: "hub",
};

window.LLMLab.VIEWS = {
  hub: {
    id: "hub",
    title: "Scegli la simulazione",
  },
  llm: {
    id: "llm",
    title: "Dentro un LLM",
    src: "sims/llm.html",
    subtitle: "Dal token alla generazione",
  },
  rag: {
    id: "rag",
    title: "Dentro un sistema RAG",
    src: "sims/rag.html",
    subtitle: "Dal documento alla risposta",
  },
};
