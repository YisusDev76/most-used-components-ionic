import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstWithTabsPage } from './first-with-tabs.page';

describe('FirstWithTabsPage', () => {
  let component: FirstWithTabsPage;
  let fixture: ComponentFixture<FirstWithTabsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FirstWithTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
