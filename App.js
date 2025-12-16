const { useState } = React;

function App() {
  const [resources] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ]);

  const [tasks] = useState([
    { id: 1, name: "Analyse", days: 3, assigned: "Alice" },
    { id: 2, name: "Développement", days: 5, assigned: "Bob" }
  ]);

  return (
    <>
      <h1>📊 Project Planner RH</h1>

      <div className="section">
        <h2>👥 Ressources</h2>
        {resources.map(r => (
          <div className="item" key={r.id}>{r.name}</div>
        ))}
      </div>

      <div className="section">
        <h2>📝 Tâches</h2>
        {tasks.map(t => (
          <div className="item" key={t.id}>
            {t.name} — {t.days} jours — {t.assigned}
          </div>
        ))}
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
