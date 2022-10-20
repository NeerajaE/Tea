import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoretypesComponent } from './moretypes.component';

describe('MoretypesComponent', () => {
  let component: MoretypesComponent;
  let fixture: ComponentFixture<MoretypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoretypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoretypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
