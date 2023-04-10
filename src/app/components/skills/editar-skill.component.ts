import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillServService } from 'src/app/service/skill-serv.service';
import { ImagenesService } from 'src/app/service/imagenes.service';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css'],
})
export class EditarSkillComponent implements OnInit {
  skill: Skill = null;

  constructor(
    private skillService: SkillServService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImagenesService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.detail(id).subscribe(
      (data) => {
        this.skill = data;
      },
      (err) => {
        alert('Error al modificar Skill');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skill.imgSkill = this.imageService.url;
    this.skillService.update(id, this.skill).subscribe(
      (data) => {
        alert('Skill editada');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar Skill');
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event: any) {
    const name = 'img ' + this.skill.nombreSkill;
    this.imageService.uploadImage($event, name);
  }
}
