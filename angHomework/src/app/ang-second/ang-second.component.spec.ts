import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngSecondComponent } from './ang-second.component';

describe('AngSecondComponent', () => {
  let component: AngSecondComponent;
  let fixture: ComponentFixture<AngSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
