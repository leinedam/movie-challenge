import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './movie.component';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        RouterModule.forRoot([]),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have one movie`, () => {
    expect(component.movie).not.toBeNull();
  });

  it('should render a Movie title', () => {
    const fixture = TestBed.createComponent(MovieComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent);
  });
});
