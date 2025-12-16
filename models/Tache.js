export default class Tache {
  constructor(nom, duree, equipe, dependance = null) {
    this.nom = nom;
    this.duree = duree;
    this.equipe = equipe;
    this.dependance = dependance;
    this.start = null;
    this.end = null;
  }
}
