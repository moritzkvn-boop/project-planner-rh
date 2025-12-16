const e = React.createElement;

/* ===== DONNÉES ===== */
const ressources = [
  { id: 1, nom: "Alice", absences: [] },
  { id: 2, nom: "Bob", absences: [] }
];

const taches = [
  { id: 1, nom: "Analyse", duree: 3, ressource: "Alice" },
  { id: 2, nom: "Développement", duree: 5, ressource: "Bob" }
];

/* ===== COMPOSANT ===== */
function App() {
  return e(
    "div",
    { style: styles.container },
    [
      e("h1", { style: styles.title }, "📊 Project Planner RH"),

      e("h2", null, "Ressources"),
      e(
        "ul",
        null,
        ressources.map(r =>
          e("li", { key: r.id }, r.nom)
        )
      ),

      e("h2", null, "Tâches"),
      e(
        "ul",
        null,
        taches.map(t =>
          e(
            "li",
            { key: t.id },
            `${t.nom} – ${t.duree} jours – ${t.ressource}`
          )
        )
      )
    ]
  );
}

/* ===== STYLES ===== */
const styles = {
  container: {
    background: "#121212",
    color: "white",
    minHeight: "100vh",
    padding: "20px",
    fontFamily: "Arial"
  },
  title: {
    color: "#4fc3f7"
  }
};

/* ===== RENDER ===== */
ReactDOM.createRoot(document.getElementById("root"))
  .render(e(App));
