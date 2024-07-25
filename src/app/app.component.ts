import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinMinerComponent } from './components/coin-miner/coin-miner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CoinMinerComponent],
  template: `<app-coin-miner></app-coin-miner>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
