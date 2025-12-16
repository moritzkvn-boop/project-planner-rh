// App.js — React sans build (CDN)

// Alias React
const { useState } = React;

/* =========================
   Composant principal
========================= */
function App() {
  const [ressources, setRessources] = useState([
    { id: 1, nom: "Alice" },
    { id: 2, nom: "Bob" }
  ]);

  const [taches, setTaches] = useState([
    { id: 1, nom: "Analyse", duree: 3, ressourceId: 1 },
    { id: 2, nom: "Développement", duree: 5, ressourceId: 2 }
  ]);

  return (
    <div className="app">
      <h1>📊 Project Planner RH</h1>

      <SectionRessources ressources={ressources} />
      <SectionTaches taches={taches} ressources={ressources} />
    </div>
  );
}

/* =========================
   Ressources
========================= */
function SectionRessources({ ressources }) {
  return (
    <section>
      <h2>Ressources</h2>
      <ul>
        {ressources.map(r => (
          <li key={r.id}>{r.nom}</li>
        ))}
      </ul>
    </section>
  );
}

/* =========================
   Tâches
========================= */
function SectionTaches({ taches, ressources }) {
  return (
    <section>
      <h2>Tâches</h2>
      <ul>
        {taches.map(t => {
          const ressource = ressources.find(r => r.id === t.ressourceId);
          return (
            <li key={t.id}>
              {t.nom} — {t.duree} jours — {ressource?.nom || "Non affecté"}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* =========================
   MONTAGE REACT
========================= */
ReactDOM.render(
  <App />,
  document.getElementById("racine")
);
