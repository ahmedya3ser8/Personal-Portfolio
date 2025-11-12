import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { experiencesData } from '../../constants/experience.data';
import { IExperience } from '../../models/iexpericence';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent implements OnInit {
  experienceList: WritableSignal<IExperience[]> = signal([]);
  ngOnInit(): void {
    this.experienceList.set(experiencesData)
  }
}
