import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinService } from '../../services/coin.service';

@Component({
  selector: 'app-skin-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skin-selector.component.html',
  styleUrls: ['./skin-selector.component.scss']
})
export class SkinSelectorComponent {
  constructor(public coinService: CoinService) {}
}
