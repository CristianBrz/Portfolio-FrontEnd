import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServService } from 'src/app/service/educacion-serv.service';

@Component({
  selector: 'app-nueva-edu',
  templateUrl: './nueva-edu.component.html',
  styleUrls: ['./nueva-edu.component.css']
})
export class NuevaEduComponent implements OnInit {

  nombreEdu : string;
  lugarEdu : string;
  fechaEdu : string;
  descripcionEdu : string;
  imgEdu : string;

  constructor(private educacionServ: EducacionServService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(
      this.nombreEdu,
      this.lugarEdu,
      this.fechaEdu,
      this.descripcionEdu,
      this.imgEdu
    );

    this.educacionServ.save(educacion).subscribe(data => {
      alert("Educacion añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Por favor, complete los campos requeridos");
      this.router.navigate(['']);
    }
    )

  }

}
