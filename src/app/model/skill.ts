export class Skill {
  id?: number;
  nombreSkill: string;
  progreso: number;

  constructor(nombreSkill:string, progreso:number) {
    this.nombreSkill = nombreSkill;
    this.progreso = progreso;
  }
}
