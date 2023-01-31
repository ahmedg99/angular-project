import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomponentComponent } from './newcomponent.component';

describe('NewcomponentComponent', () => {
  let component: NewcomponentComponent;
  let fixture: ComponentFixture<NewcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
