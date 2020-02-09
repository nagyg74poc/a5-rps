import {Component, OnInit, Input} from '@angular/core';

import { Player } from '../classes/player.class';
import { Weapon} from '../classes/weapon.class';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player;
  @Input() weapons: Weapon[];

  constructor() {
  }

  ngOnInit() {
  }

}
