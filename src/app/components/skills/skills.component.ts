import { Component, OnInit } from '@angular/core';
import { SKILLS } from 'src/app/data/skills';
import { Skill, SkillsCategory } from './models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillCatergories: SkillsCategory[] = SKILLS;
  constructor() {
  }

  ngOnInit(): void {
  }

}
