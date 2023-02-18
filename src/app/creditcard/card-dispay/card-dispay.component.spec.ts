import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDispayComponent } from './card-dispay.component';

describe('CardDispayComponent', () => {
  let component: CardDispayComponent;
  let fixture: ComponentFixture<CardDispayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDispayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDispayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
