import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinSelectorComponent } from './skin-selector.component';

describe('SkinSelectorComponent', () => {
  let component: SkinSelectorComponent;
  let fixture: ComponentFixture<SkinSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkinSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkinSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
