import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosServService } from 'src/app/service/proyectos-serv.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  proyecto: Proyectos[] = [];

  constructor(
    private proyectosServ: ProyectosServService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.proyectosServ.lista().subscribe((data) => {
      this.proyecto = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.proyectosServ.delete(id).subscribe(
        (data) => {
          this.cargarProyecto();
        },
        (err) => {
          alert('No se pudo borrar el proyecto');
        }
      );
    }
  }
}
