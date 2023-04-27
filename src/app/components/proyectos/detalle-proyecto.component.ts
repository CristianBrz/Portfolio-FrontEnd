import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { ProyectosServService } from 'src/app/service/proyectos-serv.service';

@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.css'],
})
export class DetalleProyectoComponent implements OnInit {
  proyecto: Proyectos;

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
        alert('Error al modificar');
        this.router.navigate(['']);
      }
    );
  }

  goBack(): void{
    window.history.back();
  };


}
