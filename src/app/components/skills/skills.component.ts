import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillServService } from 'src/app/service/skill-serv.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skill: Skill[] = [];

  constructor(
    private skillService: SkillServService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillService.lista().subscribe((data) => {
      this.skill = data;
      // console.log(this.skill);
    });
  }

  delete(id: number) {
    if (id != undefined) {
      this.skillService.delete(id).subscribe(
        (data) => {
          this.cargarSkills();
          // alert('Skill eliminada');
        },
        (err) => {
          alert('No se pudo borrar la skill');
        }
      );
    }
  }
}
