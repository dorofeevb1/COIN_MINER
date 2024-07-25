import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoinService } from './app/services/coin.service';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule), CoinService]
}).catch(err => console.error(err));
