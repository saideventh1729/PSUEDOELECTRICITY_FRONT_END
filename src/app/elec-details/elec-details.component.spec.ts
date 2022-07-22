import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecDetailsComponent } from './elec-details.component';

describe('ElecDetailsComponent', () => {
  let component: ElecDetailsComponent;
  let fixture: ComponentFixture<ElecDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElecDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
