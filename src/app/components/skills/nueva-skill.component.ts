import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillServService } from 'src/app/service/skill-serv.service';
import { ImagenesService } from 'src/app/service/imagenes.service';

@Component({
  selector: 'app-nueva-skill',
  templateUrl: './nueva-skill.component.html',
  styleUrls: ['./nueva-skill.component.css'],
})
export class NuevaSkillComponent implements OnInit {
  nombreSkill: string = '';
  progreso: number;
  imgSkill: string = '';

  constructor(
    private skillService: SkillServService,
    private router: Router,
    public imageService: ImagenesService
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const skill = new Skill(
      this.nombreSkill,
      this.progreso,
      this.imgSkill = this.imageService.url
      );

    this.skillService.save(skill).subscribe(
      (data) => {
        alert('Skill añadida');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Por favor, complete los campos requeridos');
        this.router.navigate(['']);
      }
    );
  }
  uploadImage($event: any) {
      const name = 'Logo ' + this.nombreSkill;
      this.imageService.uploadImage($event, name);
    }
}
  