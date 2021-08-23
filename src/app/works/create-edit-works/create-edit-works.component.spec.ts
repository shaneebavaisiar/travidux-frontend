import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditWorksComponent } from './create-edit-works.component';

describe('CreateEditWorksComponent', () => {
  let component: CreateEditWorksComponent;
  let fixture: ComponentFixture<CreateEditWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
