import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTimeLinePageComponent } from './app-time-line-page.component';

describe('AppTimeLinePageComponent', () => {
  let component: AppTimeLinePageComponent;
  let fixture: ComponentFixture<AppTimeLinePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTimeLinePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTimeLinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
