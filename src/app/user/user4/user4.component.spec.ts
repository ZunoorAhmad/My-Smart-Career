import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User4Component } from './user4.component';

describe('User4Component', () => {
  let component: User4Component;
  let fixture: ComponentFixture<User4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [User4Component]
    });
    fixture = TestBed.createComponent(User4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
