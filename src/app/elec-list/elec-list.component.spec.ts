import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecListComponent } from './elec-list.component';

describe('ElecListComponent', () => {
  let component: ElecListComponent;
  let fixture: ComponentFixture<ElecListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElecListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
