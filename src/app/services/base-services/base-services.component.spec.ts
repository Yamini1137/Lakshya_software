import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseServicesComponent } from './base-services.component';

describe('BaseServicesComponent', () => {
  let component: BaseServicesComponent;
  let fixture: ComponentFixture<BaseServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaseServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
