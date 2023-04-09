import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServService } from 'src/app/service/educacion-serv.service';
import { ImagenesService } from 'src/app/service/imagenes.service';

@Component({
  selector: 'app-editar-edu',
  templateUrl: './editar-edu.component.html',
  styleUrls: ['./editar-edu.component.css'],
})
export class EditarEduComponent implements OnInit {
  educacion: Educacion = null;

  constructor(
    private educacionServ: EducacionServService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImagenesService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionServ.detail(id).subscribe(
      (data) => {
        this.educacion = data;
      },
      (err) => {
        alert('Error al modificar experiencia');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacion.imgEdu = this.imageService.url;
    this.educacionServ.update(id, this.educacion).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar educacion');
        this.router.navigate(['']);
      }
    );
  }
  
  uploadImage($event: any) {
    const name = 'Logo ' + this.educacion.lugarEdu;
    this.imageService.uploadImage($event, name);
  }
}
