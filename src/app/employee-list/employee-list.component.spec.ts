import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(waitForAsync(()=> {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListComponent]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(EmployeeListComponent);
      component = fixture.componentInstance;
    });
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeListComponent]
    });
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
