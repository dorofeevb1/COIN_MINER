import { Routes } from '@angular/router';
import { CoinMinerComponent } from './components/coin-miner/coin-miner.component';

export const routes: Routes = [
  { path: 'miner', component: CoinMinerComponent },
  { path: '', redirectTo: '/miner', pathMatch: 'full' }
];
