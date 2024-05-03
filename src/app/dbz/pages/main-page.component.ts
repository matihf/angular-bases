import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-pages',
  templateUrl: './main-pages.component.html'
})

export class MainPagesComponent  {

  constructor(private dbzService: DbzService){}

  get characters(): Character[]{
    return [...this.dbzService.characters]
  }

  onDeletedCharacter(id: string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character):void {
    this.dbzService.addCharacter(character);
  }

}
