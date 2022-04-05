import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcommentsComponent } from './itemcomments.component';

describe('ItemcommentsComponent', () => {
  let component: ItemcommentsComponent;
  let fixture: ComponentFixture<ItemcommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemcommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
