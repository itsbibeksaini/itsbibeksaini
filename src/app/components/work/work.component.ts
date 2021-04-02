import { Component, OnInit } from '@angular/core';
import {WORK_EXPERIENCE} from 'src/app/data/work_experience';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  workExperience = WORK_EXPERIENCE
  constructor() { }

  ngOnInit(): void {
  }

}
