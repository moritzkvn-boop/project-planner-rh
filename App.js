// App.js — React CDN sans JSX

const e = React.createElement;
const { useState } = React;

/* =========================
   APP PRINCIPALE
========================= */
function App() {
  const [ressources] = useState([
    { id: 1, nom: "Alice" },
    { id: 2, nom: "Bob" }
  ]);

  const [taches] = useState([
    { id: 1, nom: "Analyse", duree: 3, ressourceId: 1 },
    { id: 2, nom: "Développement", duree: 5, ressourceId: 2 }
  ]);

  return e(
    "div",
    { className: "app" },
    e("h1", null, "📊 Project Planner RH"),
    SectionRessources({ ressources }),
    SectionTaches({ taches, ressources })
  );
}

/* =========================
   RESSOURCES
========================= */
function SectionRessources({ ressources }) {
  return e(
    "section",
    null,
    e("h2", null, "Ressources"),
    e(
      "ul",
      null,
      ressources.map(r =>
        e("li", { key: r.id }, r.nom)
      )
    )
  );
}

/* =========================
   TÂCHES
========================= */
function SectionTaches({ taches, ressources }) {
  return e(
    "section",
    null,
    e("h2", null, "Tâches"),
    e(
      "ul",
      null,
      taches.map(t => {
        const res = ressources.find(r => r.id === t.ressourceId);
        return e(
          "li",
          { key: t.id },
          `${t.nom} — ${t.duree} jours — ${res ? res.nom : "Non affecté"}`
        );
      })
    )
  );
}

/* =========================
   MONTAGE
========================= */
ReactDOM.render(
  e(App),
  document.getElementById("racine")
);
