import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommenttreeComponent } from './commenttree.component';

describe('CommenttreeComponent', () => {
  let component: CommenttreeComponent;
  let fixture: ComponentFixture<CommenttreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommenttreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommenttreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
