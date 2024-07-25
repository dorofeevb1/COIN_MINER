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
  info = false;
  main = true;
  updates = false;
  skins = false;
  constructor(public coinService: CoinService) {}
 
    updateInfo(){
    if (this.info === true) {
      this.info = false;
      this.main = true
    }
    else if (this.info === false) {
      this.info = true;
      this.main = false
    }
  
  }
  updateUpdates() {
    if (this.updates === true) {
      this.updates = false;
      this.main = true
    }
    else if (this.updates === false) {
      this.updates = true;
      this.main = false
    }

  }
  updateSkins(){
    if (this.skins === true) {
      this.skins = false;
      this.main = true
    }
    else if (this.skins === false) {
      this.skins = true;
      this.main = false
    }
  }
}
