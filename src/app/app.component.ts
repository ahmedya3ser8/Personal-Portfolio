import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ExperiencesComponent } from "./components/experiences/experiences.component";
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { TechnologiesComponent } from "./components/technologies/technologies.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, AboutComponent, TechnologiesComponent, ProjectsComponent, ContactComponent, ExperiencesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out'
    })
  }
}
