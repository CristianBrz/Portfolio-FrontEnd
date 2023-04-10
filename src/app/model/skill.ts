export class Skill {
  id?: number;
  nombreSkill: string;
  progreso: number;
  imgSkill: string;

  constructor(nombreSkill:string, progreso:number, imgSkill: string) {
    this.nombreSkill = nombreSkill;
    this.progreso = progreso;
    this.imgSkill = imgSkill;
  }
}