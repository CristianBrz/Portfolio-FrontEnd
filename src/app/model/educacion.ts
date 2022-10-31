export class Educacion {
    id? : number;
    nombreEdu : string;
    lugarEdu : string;
    fechaEdu : string;
    descripcionEdu : string;
    imgEdu : string;

    constructor(nombreEdu: string, lugarEdu : string, fechaEdu: string, descripcionEdu: string, imgEdu: string){
        this.nombreEdu = nombreEdu;
        this.lugarEdu = lugarEdu;
        this.fechaEdu = fechaEdu;
        this.descripcionEdu = descripcionEdu;
        this.imgEdu;
        
    }
}
