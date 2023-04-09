import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServService } from 'src/app/service/experienciaServ.service';
import { ImagenesService } from 'src/app/service/imagenes.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css'],
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;

  constructor(
    private experienciaServ: ExperienciaServService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImagenesService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaServ.detail(id).subscribe(
      (data) => {
        this.expLab = data;
      },
      (err) => {
        alert('Error al modificar experiencia');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.expLab.imgExp = this.imageService.url;
    this.experienciaServ.update(id, this.expLab).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar experiencia');
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event: any) {
    // const id = this.activatedRouter.snapshot.params['id'];
    const name = 'Logo ' + this.expLab.lugarExp;
    this.imageService.uploadImage($event, name);
  }
}
