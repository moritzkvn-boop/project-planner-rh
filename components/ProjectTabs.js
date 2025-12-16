export default function ProjectTabs({ projects, current, setCurrent }) {
  return (
    <div style={{display:"flex",gap:10}}>
      {projects.map((p,i)=>(
        <button
          key={i}
          onClick={()=>setCurrent(i)}
          style={{
            padding:"6px 12px",
            background:i===current?"#4c8cff":"#2f3542",
            color:"white",border:"none"
          }}
        >
          {p.name}
        </button>
      ))}
    </div>
  );
}
