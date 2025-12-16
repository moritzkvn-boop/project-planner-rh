export function planifier(taches) {
  taches.forEach(t => {
    let d = t.dependance ? new Date(t.dependance.end) : new Date();
    if (t.dependance) d.setDate(d.getDate() + 1);

    t.start = new Date(d);
    let reste = t.duree;

    while (reste > 0) {
      if (t.equipe.disponible(d)) reste--;
      d.setDate(d.getDate() + 1);
    }
    d.setDate(d.getDate() - 1);
    t.end = new Date(d);
  });
}

export function calculCharge(taches) {
  const charge = {};
  taches.forEach(t => {
    let d = new Date(t.start);
    while (d <= t.end) {
      t.equipe.membres.forEach(p => {
        const k = p.nom + d.toDateString();
        charge[k] = (charge[k] || 0) + 1;
      });
      d.setDate(d.getDate() + 1);
    }
  });
  return charge;
}
