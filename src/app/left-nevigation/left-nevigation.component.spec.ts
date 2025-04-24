import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNevigationComponent } from './left-nevigation.component';

describe('LeftNevigationComponent', () => {
  let component: LeftNevigationComponent;
  let fixture: ComponentFixture<LeftNevigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftNevigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftNevigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
