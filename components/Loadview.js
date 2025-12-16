import { calculCharge } from "../services/planning";

export default function LoadView({ project }) {
  const charge = calculCharge(project.taches);

  return (
    <div>
      <h3>Charge RH</h3>
      {Object.entries(charge).map(([k,v])=>(
        <div key={k} style={{color:v>1?"#e74c3c":"#2ecc71"}}>
          {k} : {v}
        </div>
      ))}
    </div>
  );
}
