import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditcomponentComponent } from './addeditcomponent.component';

describe('AddeditcomponentComponent', () => {
  let component: AddeditcomponentComponent;
  let fixture: ComponentFixture<AddeditcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddeditcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
