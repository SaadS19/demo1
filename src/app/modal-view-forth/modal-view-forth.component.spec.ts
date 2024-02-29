import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewForthComponent } from './modal-view-forth.component';

describe('ModalViewForthComponent', () => {
  let component: ModalViewForthComponent;
  let fixture: ComponentFixture<ModalViewForthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalViewForthComponent]
    });
    fixture = TestBed.createComponent(ModalViewForthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
