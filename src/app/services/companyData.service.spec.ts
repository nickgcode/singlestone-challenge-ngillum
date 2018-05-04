import { TestBed, async, inject } from '@angular/core/testing';
import { CompanyDataService } from './companyData.service';
import { HttpModule } from '@angular/http';
import { Team } from '../types/team.type';

describe('CompanyDataService', () => {

    let service: CompanyDataService;

    beforeEach(() => {
       TestBed.configureTestingModule({
           imports: [HttpModule],
           providers: [CompanyDataService]
       });
       service = TestBed.get(CompanyDataService);
   });

   it('should return data', (done: DoneFn) => {
       service.get().subscribe((teams: Team[]) => {
           expect(teams[0] && teams[0].city).toBeTruthy();
           done();
       });
   });
});
