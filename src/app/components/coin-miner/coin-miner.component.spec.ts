import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinMinerComponent } from './coin-miner.component';

describe('CoinMinerComponent', () => {
  let component: CoinMinerComponent;
  let fixture: ComponentFixture<CoinMinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinMinerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinMinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
