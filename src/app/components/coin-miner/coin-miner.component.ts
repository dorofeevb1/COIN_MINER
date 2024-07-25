import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkinSelectorComponent } from '../skin-selector/skin-selector.component';
import { CoinService } from '../../services/coin.service';

@Component({
  selector: 'app-coin-miner',
  standalone: true,
  imports: [CommonModule, SkinSelectorComponent],
  templateUrl: './coin-miner.component.html',
  styleUrls: ['./coin-miner.component.scss']
})
export class CoinMinerComponent {
  constructor(public coinService: CoinService) {}
}
