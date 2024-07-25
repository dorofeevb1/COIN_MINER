import { Component, OnInit, OnDestroy } from '@angular/core';
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

export class CoinMinerComponent implements OnInit, OnDestroy {
  private intervalId: any;
  info = true;
  main = true;
  updates = true;
  skins = true;
  constructor(public coinService: CoinService) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {  // Check if running in browser environment
      this.startUpdatingCoins();
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.intervalId);
  }

  startUpdatingCoins(): void {
    this.intervalId = setTimeout(() => {
      if (this.coinService.currentCoins < this.coinService.batteryLevel) {
        this.coinService.updateCurrentCoins();
      }
      this.coinService.updateBalance()
      this.startUpdatingCoins(); // Recurse to create a continuous loop
    }, 1000);
  }



 
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
