import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumsupComponent } from './thumsup.component';

describe('ThumsupComponent', () => {
  let component: ThumsupComponent;
  let fixture: ComponentFixture<ThumsupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumsupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumsupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
