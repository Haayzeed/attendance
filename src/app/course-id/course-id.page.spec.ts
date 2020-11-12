import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseIdPage } from './course-id.page';

describe('CourseIdPage', () => {
  let component: CourseIdPage;
  let fixture: ComponentFixture<CourseIdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseIdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
