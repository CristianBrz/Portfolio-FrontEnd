export class Experiencia {

    id? : number;
    nombreExp : string;
    lugarExp : string;
    fechaExp : string;
    descripcionExp : string;
    imgExp : string;

    constructor(nombreExp: string, lugarExp : string, fechaExp: string, descripcionExp: string, imgExp: string){
        this.nombreExp = nombreExp;
        this.lugarExp = lugarExp;
        this.fechaExp = fechaExp;
        this.descripcionExp = descripcionExp;
        this.imgExp = imgExp;
    }

}
