import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css'],
})
export class EditAcercadeComponent implements OnInit {
  persona: Persona;

  constructor(
    private personaService: PersonaService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImagenesService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      (data) => {
        this.persona = data;
      },
      (err) => {
        alert('Error al modificar');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.imgPerfil = this.imageService.url;
    this.personaService.update(id, this.persona).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar');
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "Perfil_" + id;
    this.imageService.uploadImage($event, name);
  }
}
