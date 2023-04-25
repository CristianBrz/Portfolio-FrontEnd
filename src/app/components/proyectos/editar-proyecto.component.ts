import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { ProyectosServService } from 'src/app/service/proyectos-serv.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css'],
})
export class EditarProyectoComponent implements OnInit {
  proyecto: Proyectos = null;

  constructor(
    private proyectoServ: ProyectosServService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImagenesService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoServ.detail(id).subscribe(
      (data) => {
        this.proyecto = data;
      },
      (err) => {
        alert('Error al modificar proyecto');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyecto.imgProy = this.imageService.url;
    this.proyectoServ.update(id, this.proyecto).subscribe(
      (data) => {
        alert('Proyecto editado');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar proyecto');
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event: any) {
    const name = this.proyecto.nombreProy;
    this.imageService.uploadImage($event, name);
  }
}
