import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent } from './components/game/game.component';
import { ResultsComponent } from './components/results/results.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'game', component: GameComponent },
  { path: 'results', component: ResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
