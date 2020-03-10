import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePosComponent } from './store-pos.component';

describe('StorePosComponent', () => {
  let component: StorePosComponent;
  let fixture: ComponentFixture<StorePosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorePosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorePosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
