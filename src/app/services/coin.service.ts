import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CoinService {
  balance = 10000087;
  clickerLevel = 54;
  batteryLevel = 4000;
  chargerLevel = 30;
  currentCoins = 4000;
  btnClick = 500;
  btnBattery = 500;
  btnSpeed = 500;
  selectedSkin = 'assets/img/bitcoin.webp';

  skins = [
    { image: 'assets/img/bitcoinSimple.webp', price: 1000, selected: false, alt: 'simpleBitcoin' },
    { image: 'assets/img/greenBitcoin.webp', price: 2000, selected: false, alt: 'green Bitcoin' },
    { image: 'assets/img/darkerBitcoin.webp', price: 3000, selected: false, alt: 'dark Bitcoin' },
    { image: 'assets/img/blackAndOrangeBitcoin.webp', price: 4000, selected: false, alt: 'black and orange Bitcoin' },
    { image: 'assets/img/redBitcoin.webp', price: 5000, selected: false, alt: 'red Bitcoin' },
    { image: 'assets/img/bitcoin.webp', price: 6000, selected: false, alt: 'Bitcoin' }
  ];
  tasks = [
    { reward: 200, description: 'Banks or Custody Wallets?',condition:0 ,link: "https://www.youtube.com/watch?v=CiOZ90sDmik&list=RDGMEM4aHK17DLJ0Ya6DXLybqCLQVMCiOZ90sDmik&start_radio=1"},
    { reward: 100, description: 'fram 5000', condition:5000,link: "https://www.youtube.com/watch?v=CiOZ90sDmik&list=RDGMEM4aHK17DLJ0Ya6DXLybqCLQVMCiOZ90sDmik&start_radio=1"},
  ];
  updateCurrentCoins() {
    if (this.currentCoins < this.batteryLevel) {
      this.currentCoins += this.chargerLevel;
      if (this.currentCoins > this.batteryLevel) {
        this.currentCoins = this.batteryLevel;
      }
    }
  }
  updateBalance(){
    this.balance += this.clickerLevel/2
  } 
  upgradeClick() {
    if (this.balance >= this.btnClick) {
      this.balance -= this.btnClick;
      this.btnClick += this.btnClick  
      this.clickerLevel += 1;
      this.playSound('LevelUpShort.mp3');
    }
  }

  upgradeBattery() {
    if (this.balance >= this.btnBattery) {
      this.balance -= this.btnBattery;
      this.btnBattery += this.btnBattery;
      this.batteryLevel += 500;
      this.playSound('LevelUpShort.mp3');
    }
  }

  upgradeCharger() {
    if (this.balance >= this.btnSpeed) {
      this.balance -= this.btnSpeed;
      this.btnSpeed += this.btnSpeed
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

  selectTocken(){
    this.balance += this.clickerLevel;
    this.currentCoins -=  this.clickerLevel;
  }

  private playSound(fileName: string) {
    const audio = new Audio(`assets/sound/${fileName}`);
    audio.play();
  }
}
