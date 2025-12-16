export default class Personne {
  constructor(nom) {
    this.nom = nom;
    this.absences = new Set();
  }

  disponible(date) {
    const d = date.getDay();
    return d !== 0 && d !== 6 && !this.absences.has(date.toDateString());
  }
}
