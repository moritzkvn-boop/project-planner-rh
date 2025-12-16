const { useState, useEffect } = React;

function App() {
  const [projects, setProjects] = useState(() => {
    return JSON.parse(localStorage.getItem("projects")) || [
      {
        id: 1,
        name: "Projet A",
        resources: [
          { id: 1, name: "Alice", capacity: 5 },
          { id: 2, name: "Bob", capacity: 5 }
        ],
        tasks: [
          { id: 1, name: "Analyse", days: 3, resourceId: 1, start: 0 },
          { id: 2, name: "Développement", days: 5, resourceId: 2, start: 3 }
        ]
      }
    ];
  });

  const [activeProjectId, setActiveProjectId] = useState(1);
  const project = projects.find(p => p.id === activeProjectId);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  return (
    <>
      <h1>📊 Project Planner RH</h1>

      {/* ONGLES PROJETS */}
      <div className="tabs">
        {projects.map(p => (
          <button
            key={p.id}
            className={p.id === activeProjectId ? "tab active" : "tab"}
            onClick={() => setActiveProjectId(p.id)}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="dashboard">
        <Resources project={project} />
        <Tasks project={project} />
      </div>

      <Gantt project={project} />
      <Export project={project} />
    </>
  );
}
