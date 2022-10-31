export class Skill {
  id: number;
  nombreSkill: string;
  progresoSkill: number;

  constructor(nombreSkill: string, progresoSkill: number) {
    this.nombreSkill = nombreSkill;
    this.progresoSkill = progresoSkill;
  }
}
