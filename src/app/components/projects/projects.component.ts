import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { projectsData } from '../../constants/projects.data';
import { IProject } from '../../models/iproject';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projectsList: WritableSignal<IProject[]> = signal([]);
  ngOnInit(): void {
    this.projectsList.set(projectsData);
  }
}
