import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule,
        RouterModule.forRoot([]),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
