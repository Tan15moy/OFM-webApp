import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerProfileComponent } from './player-profile/player-profile.component';

import { Routes, RouterModule } from '@angular/router';

const player_routes: Routes = [
  {},
];


@NgModule({
  declarations: [PlayerProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(player_routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class PlayerModule { }
