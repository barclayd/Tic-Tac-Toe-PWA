import { Component, Input } from '@angular/core';
import { Player } from '../types/player';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class Square {
  @Input() value?: Player;
}
