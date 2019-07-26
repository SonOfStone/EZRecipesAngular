import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealhomeComponent } from './realhome.component';

describe('RealhomeComponent', () => {
  let component: RealhomeComponent;
  let fixture: ComponentFixture<RealhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
