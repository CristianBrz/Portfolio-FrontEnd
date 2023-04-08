import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServService } from 'src/app/service/educacion-serv.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];

  constructor(
    private educacionServ: EducacionServService,
    private tokenService: TokenService 
    ) { }

  isLogged = false;


  ngOnInit(): void {
    this.cargarEducation();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducation(): void {
    this.educacionServ.lista().subscribe((data) => {
      this.educacion = data;
    });
  }

  delete(id?: number){
    if(id != undefined){
      this.educacionServ.delete(id).subscribe(
        data => {
          this.cargarEducation();
        }, err => {
          alert("No se pudo borrar la educacion");
        }
      )
    }
  }

}
