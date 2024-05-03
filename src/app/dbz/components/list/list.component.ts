import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public chacterList: Character[] = [{
    id: 'lamsal',
    name: 'Trunk',
    power: 10
  }]

  @Output()
  public onDeleted: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string):void{
    this.onDeleted.emit(id);
  }

}
