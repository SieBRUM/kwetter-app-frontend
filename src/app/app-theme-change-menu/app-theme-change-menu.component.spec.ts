import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppThemeChangeMenuComponent } from './app-theme-change-menu.component';

describe('AppThemeChangeMenuComponent', () => {
  let component: AppThemeChangeMenuComponent;
  let fixture: ComponentFixture<AppThemeChangeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppThemeChangeMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppThemeChangeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
