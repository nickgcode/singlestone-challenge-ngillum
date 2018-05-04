import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TeamListComponent } from './components/teamListComponent/teamList.component';
import { CompanyDataService } from './services/companyData.service';
import { HttpModule } from '@angular/http';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TeamListComponent
      ],
      imports: [
        HttpModule
      ],
      providers: [
        CompanyDataService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
