/* LLMLab — App */
import { initialState } from "./state.js";
import { renderApp } from "./render.js";

let state = structuredClone(initialState);

function renderAll() {
  renderApp(state);
}

function dispatch(action) {
  switch (action.type) {
    case "goto-hub":
      state.view = "hub";
      renderAll();
      break;
    case "open-llm":
      state.view = "llm";
      renderAll();
      break;
    case "open-rag":
      state.view = "rag";
      renderAll();
      break;
    default:
      break;
  }
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  dispatch({ type: btn.dataset.action });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && state.view !== "hub") {
    dispatch({ type: "goto-hub" });
  }
});

renderAll();
