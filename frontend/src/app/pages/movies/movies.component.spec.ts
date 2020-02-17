import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        RouterModule.forRoot([]),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Movies App'`, () => {
    const fixture = TestBed.createComponent(MoviesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Movies App');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MoviesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Movies App');
  });

  
});
