import { Component, OnInit, Input } from '@angular/core';
import {Weapon} from '../classes/weapon.class';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss']
})
export class WeaponComponent implements OnInit {

  @Input() weapon: Weapon;

  constructor() { }

  ngOnInit() {
  }

}
