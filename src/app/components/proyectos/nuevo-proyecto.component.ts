import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { ProyectosServService } from 'src/app/service/proyectos-serv.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css'],
})
export class NuevoProyectoComponent implements OnInit {
  nombreProy: string = '';
  tipoProy: string = '';
  descripcionProy: string = '';
  urlProy: string = '';
  imgProy: string = '';

  constructor(
    private proyectoServ: ProyectosServService,
    private router: Router,
    public imageService: ImagenesService
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const proyecto = new Proyectos(
      this.nombreProy,
      this.tipoProy,
      this.descripcionProy,
      this.urlProy,
      (this.imgProy = this.imageService.url)
    );

    this.proyectoServ.save(proyecto).subscribe(
      (data) => {
        alert('Experiencia añadida');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Por favor, complete los campos requeridos');
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event: any) {
    const name = 'Logo ' + this.nombreProy;
    this.imageService.uploadImage($event, name);
  }
}
