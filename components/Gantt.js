import { planifier } from "../services/planning";

export default function Gantt({ project }) {
  planifier(project.taches);
  const base = new Date();

  return (
    <div>
      {project.equipes.map(eq => (
        <div key={eq.nom} style={{display:"flex",marginBottom:10}}>
          <div style={{width:160}}>{eq.nom}</div>
          <div style={{position:"relative",height:30,flex:1}}>
            {project.taches.filter(t=>t.equipe===eq).map(t=>{
              const left = (t.start - base)/(1000*3600*24)*40;
              return (
                <div
                  key={t.nom}
                  draggable
                  onDragEnd={e=>{
                    const delta = Math.round(e.nativeEvent.offsetX/40);
                    t.start.setDate(t.start.getDate()+delta);
                    t.end.setDate(t.end.getDate()+delta);
                  }}
                  style={{
                    position:"absolute",
                    left,
                    width:t.duree*40,
                    height:24,
                    background:"#4c8cff",
                    borderRadius:6,
                    color:"white",
                    padding:"2px 6px",
                    cursor:"grab"
                  }}
                >
                  {t.nom}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
