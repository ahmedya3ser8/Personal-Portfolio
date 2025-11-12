import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { technologyData } from '../../constants/technology.data';
import { ITechnology } from '../../models/itechnology';

@Component({
  selector: 'app-technologies',
  imports: [],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent implements OnInit {
  technologiesList: WritableSignal<ITechnology[]> = signal([]);
  ngOnInit(): void {
    this.technologiesList.set(technologyData);
  }
}
