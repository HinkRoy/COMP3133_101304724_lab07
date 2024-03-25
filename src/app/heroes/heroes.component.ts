import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero'; 
import { HEROES } from '../mock-heroes';
import { RemoveSpacesPipe } from '../remove-spaces.pipe';
import { UpperCaseDirective } from '../upper-case.directive';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule, 
    RemoveSpacesPipe,
    UpperCaseDirective
  ],
  templateUrl: './heroes.component.html',
})
export class HeroesComponent{
  heroes: Hero[] = HEROES;

  constructor() { }

  ngOnInit(): void {

  }
}