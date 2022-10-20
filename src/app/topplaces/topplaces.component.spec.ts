import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopplacesComponent } from './topplaces.component';

describe('TopplacesComponent', () => {
  let component: TopplacesComponent;
  let fixture: ComponentFixture<TopplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopplacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
