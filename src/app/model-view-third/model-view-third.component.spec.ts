import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelViewThirdComponent } from './model-view-third.component';

describe('ModelViewThirdComponent', () => {
  let component: ModelViewThirdComponent;
  let fixture: ComponentFixture<ModelViewThirdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelViewThirdComponent]
    });
    fixture = TestBed.createComponent(ModelViewThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
