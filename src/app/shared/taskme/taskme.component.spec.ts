import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskmeComponent } from './taskme.component';

describe('TaskmeComponent', () => {
  let component: TaskmeComponent;
  let fixture: ComponentFixture<TaskmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
