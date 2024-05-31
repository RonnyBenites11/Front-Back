import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignStylesComponent } from './design-styles.component';

describe('DesignStylesComponent', () => {
  let component: DesignStylesComponent;
  let fixture: ComponentFixture<DesignStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignStylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
