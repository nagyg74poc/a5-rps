import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule, MatIconModule} from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';
import { WeaponComponent } from './weapon/weapon.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PlayerComponent,
    WeaponComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
