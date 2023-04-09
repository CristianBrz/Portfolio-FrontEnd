import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServService } from 'src/app/service/experienciaServ.service';
import { ImagenesService } from 'src/app/service/imagenes.service';

@Component({
  selector: 'app-nueva-exp',
  templateUrl: './nueva-exp.component.html',
  styleUrls: ['./nueva-exp.component.css'],
})
export class NuevaExpComponent implements OnInit {
  nombreExp: string = '';
  lugarExp: string = '';
  fechaExp: string = '';
  descripcionExp: string = '';
  imgExp: string = '';

  constructor(
    private experienciaServ: ExperienciaServService,
    private router: Router,
    public imageService: ImagenesService
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const exp = new Experiencia(
      this.nombreExp,
      this.lugarExp,
      this.fechaExp,
      this.descripcionExp,
      this.imgExp = this.imageService.url
    );

    this.experienciaServ.save(exp).subscribe(
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
    const name = 'Logo ' + this.lugarExp;
    this.imageService.uploadImage($event, name);
  }
}
