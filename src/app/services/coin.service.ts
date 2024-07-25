import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  balance = 10000087;
  clickerLevel = 54;
  batteryLevel = 4000;
  chargerLevel = 30;
  currentCoins = 3983;

  selectedSkin = 'assets/img/bitcoin.webp';

  skins = [
    { image: 'assets/img/bitcoinSimple.webp', price: 1000, selected: false, alt: 'simpleBitcoin' },
    { image: 'assets/img/greenBitcoin.webp', price: 2000, selected: false, alt: 'green Bitcoin' },
    { image: 'assets/img/darkerBitcoin.webp', price: 3000, selected: false, alt: 'dark Bitcoin' },
    { image: 'assets/img/blackAndOrangeBitcoin.webp', price: 4000, selected: false, alt: 'black and orange Bitcoin' },
    { image: 'assets/img/redBitcoin.webp', price: 5000, selected: false, alt: 'red Bitcoin' },
    { image: 'assets/img/bitcoin.webp', price: 6000, selected: false, alt: 'Bitcoin' }
  ];

  upgradeClick() {
    if (this.balance >= 8000) {
      this.balance -= 8000;
      this.clickerLevel += 1;
      this.playSound('LevelUpShort.mp3');
    }
  }

  upgradeBattery() {
    if (this.balance >= 500) {
      this.balance -= 500;
      this.batteryLevel += 500;
      this.playSound('LevelUpShort.mp3');
    }
  }

  upgradeCharger() {
    if (this.balance >= 500) {
      this.balance -= 500;
      this.chargerLevel += 1;
      this.playSound('LevelUpShort.mp3');
    }
  }

  selectSkin(skin:any) {
    if (this.balance >= skin.price) {
      this.balance -= skin.price;
      this.selectedSkin = skin.image;
      this.skins.forEach(s => s.selected = false);
      skin.selected = true;
      this.playSound('LevelUp.mp3');
    }
  }

  private playSound(fileName: string) {
    const audio = new Audio(`assets/sound/${fileName}`);
    audio.play();
  }
}
