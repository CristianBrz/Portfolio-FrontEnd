import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillServService } from 'src/app/service/skill-serv.service';

@Component({
  selector: 'app-nueva-skill',
  templateUrl: './nueva-skill.component.html',
  styleUrls: ['./nueva-skill.component.css'],
})
export class NuevaSkillComponent implements OnInit {
  nombreSkill: string;
  progresoSkill: number;

  constructor(private skillService: SkillServService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const skill = new Skill(this.nombreSkill, this.progresoSkill);

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
}
