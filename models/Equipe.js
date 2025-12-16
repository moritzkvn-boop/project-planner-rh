export default class Equipe {
  constructor(nom, p1, p2) {
    this.nom = nom;
    this.membres = [p1, p2];
  }

  disponible(date) {
    return this.membres.every(p => p.disponible(date));
  }
}
