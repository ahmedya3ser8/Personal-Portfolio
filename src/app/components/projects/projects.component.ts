import { Component, OnInit, signal } from '@angular/core';

import { angularData, jsData } from '../../constants/projects.data';
import { IProject } from '../../models/iproject';

interface ITab {
  tab: 'js' | 'angular',
  content: string
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projectsList = signal<IProject[]>([]);
  activeTab = signal<'js' | 'react' | 'angular'>('angular');
  tabsList = signal<ITab[]>([
    { tab: 'js', content: 'Html & Js' },
    { tab: 'angular', content: 'Angular' }
  ]);
  ngOnInit(): void {
    this.loadProjects('angular');
  }
  loadProjects(tab: 'js' | 'react' | 'angular'): void {
    switch (tab) {
      case 'js':
        this.projectsList.set(jsData);
        break;
      case 'angular':
        this.projectsList.set(angularData);
        break;
    }
  }
  selectedTab(tab: 'js' | 'angular'): void {
    console.log(tab);
    this.activeTab.set(tab);
    this.loadProjects(tab);
  }
}
