import {Component, OnInit} from '@angular/core';
import {Opponents} from '../classes/opponents.class';
import {Player} from '../classes/player.class';
import {Weapon} from '../classes/weapon.class';

const weapons: Weapon[] = [
  <Weapon> {
    id: 1,
    name: 'rock',
    icon: 'rock'
  },
  <Weapon> {
    id: 2,
    name: 'paper',
    icon: 'paper'
  },
  <Weapon> {
    id: 3,
    name: 'scissors',
    icon: 'scissors'
  }
];

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  private player: Player = {
    type: 'human',
    name: 'Anonymous'
  };

  private computer: Player = {
    type: 'computer',
    name: 'R2-D2'
  };

  weapons: Weapon[] = weapons;

  opponents: Opponents = {
    player: this.player,
    computer: this.computer
  };

  constructor() {
  }

  ngOnInit() {
  }

}
