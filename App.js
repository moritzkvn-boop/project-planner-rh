const { useState } = React;

/* =========================
   Données initiales
========================= */

const initialResources = [
  { id: 1, name: "Alice", capacity: 5 },
  { id: 2, name: "Bob", capacity: 5 }
];

const initialTasks = [
  { id: 1, name: "Analyse", duration: 3, resourceId: 1 },
  { id: 2, name: "Développement", duration: 5, resourceId: 2 }
];

/* =========================
   Composant principal
========================= */

function App() {
  const [resources, setResources] = useState(initialResources);
  const [tasks, setTasks] = useState(initialTasks);

  /* ===== Sauvegarde locale ===== */
  const saveToLocalStorage = () => {
    localStorage.setItem("resources", JSON.stringify(resources));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert("Projet sauvegardé 💾");
  };

  /* ===== Chargement local ===== */
  const loadFromLocalStorage = () => {
    const r = JSON.parse(localStorage.getItem("resources"));
    const t = JSON.parse(localStorage.getItem("tasks"));
    if (r && t) {
      setResources(r);
      setTasks(t);
    }
  };

  /* ===== Export JSON ===== */
  const exportProject = () => {
    const data = { resources, tasks };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "project-planner.json";
    a.click();
  };

  return (
    <div className="container">
      <h1>📊 Project Planner RH</h1>

      <div className="toolbar">
        <button onClick={saveToLocalStorage}>💾 Sauvegarder</button>
        <button onClick={loadFromLocalStorage}>📂 Charger</button>
        <button onClick={exportProject}>⬇️ Export JSON</button>
      </div>

      <Resources resources={resources} tasks={tasks} />
      <Tasks tasks={tasks} resources={resources} setTasks={setTasks} />
      <Gantt tasks={tasks} resources={resources} />
    </div>
  );
}

/* =========================
   Ressources & charge
========================= */

function Resources({ resources, tasks }) {
  return (
    <>
      <h2>👥 Ressources</h2>
      <ul>
        {resources.map((r) => {
          const load = tasks
            .filter((t) => t.resourceId === r.id)
            .reduce((sum, t) => sum + t.duration, 0);

          return (
            <li key={r.id}>
              {r.name} — Charge : {load}j / {r.capacity}j{" "}
              {load > r.capacity && "⚠️ Sur-allocation"}
            </li>
          );
        })}
      </ul>
    </>
  );
}

/* =========================
   Tâches + Drag & Drop
========================= */

function Tasks({ tasks, resources, setTasks }) {
  const onDrop = (e, resourceId) => {
    const taskId = Number(e.dataTransfer.getData("taskId"));
    setTasks(
      tasks.map((t) =>
        t.id === taskId ? { ...t, resourceId } : t
      )
    );
  };

  return (
    <>
      <h2>📝 Tâches</h2>
      <div className="tasks">
        {tasks.map((t) => (
          <div
            key={t.id}
            className="task"
            draggable
            onDragStart={(e) =>
              e.dataTransfer.setData("taskId", t.id)
            }
          >
            {t.name} — {t.duration}j
          </div>
        ))}
      </div>

      <h3>🎯 Affecter par drag & drop</h3>
      <div className="dropzones">
        {resources.map((r) => (
          <div
            key={r.id}
            className="dropzone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDrop(e, r.id)}
          >
            {r.name}
          </div>
        ))}
      </div>
    </>
  );
}

/* =========================
   Gantt simplifié
========================= */

function Gantt({ tasks, resources }) {
  return (
    <>
      <h2>📅 Planning (Gantt simplifié)</h2>
      {resources.map((r) => (
        <div key={r.id} className="gantt-row">
          <strong>{r.name}</strong>
          <div className="gantt-bar-container">
            {tasks
              .filter((t) => t.resourceId === r.id)
              .map((t) => (
                <div
                  key={t.id}
                  className="gantt-bar"
                  style={{ width: t.duration * 40 }}
                >
                  {t.name}
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
}

/* =========================
   Render
========================= */

const root = ReactDOM.createRoot(
  document.getElementById("racine")
);
root.render(<App />);
