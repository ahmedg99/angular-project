import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresEmploisComponent } from './offres-emplois.component';

describe('OffresEmploisComponent', () => {
  let component: OffresEmploisComponent;
  let fixture: ComponentFixture<OffresEmploisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresEmploisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresEmploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
