const { useState } = React;

function App() {
  const [ressources] = useState(["Alice", "Bob"]);

  const [taches] = useState([
    { id: 1, nom: "Analyse", duree: 3, personne: "Alice" },
    { id: 2, nom: "Développement", duree: 5, personne: "Bob" }
  ]);

  return React.createElement(
    "div",
    { className: "container" },

    React.createElement("h1", null, "📊 Project Planner RH"),

    React.createElement("h2", null, "Ressources"),
    React.createElement(
      "ul",
      null,
      ressources.map((r, i) =>
        React.createElement("li", { key: i }, r)
      )
    ),

    React.createElement("h2", null, "Tâches"),
    React.createElement(
      "ul",
      null,
      taches.map(t =>
        React.createElement(
          "li",
          { key: t.id },
          `${t.nom} – ${t.duree} jours – ${t.personne}`
        )
      )
    )
  );
}

/* 🔥 React 18 */
const rootElement = document.getElementById("racine");
const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(App));
