export class Proyectos {
  id: number;
  nombreProy: string;
  tipoProy: string;
  descripcionProy: string;
  urlProy: string;
  imgProy: string;

  constructor(nombreProy: string, tipoProy: string, descripcionProy: string, urlProy: string, imgProy: string) {
		this.nombreProy = nombreProy;
		this.tipoProy = tipoProy;
		this.descripcionProy = descripcionProy;
		this.urlProy = urlProy;
		this.imgProy = imgProy;
	}
}