import { TestBed } from '@angular/core/testing';
import { TeamListComponent } from './teamList.component';
import { CompanyDataService } from '../../services/companyData.service';
import { HttpModule } from '@angular/http';

describe('TeamListComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [CompanyDataService],
            declarations: [TeamListComponent]
        }).compileComponents();
    });

    it('should load', () => {
        const fixture = TestBed.createComponent(TeamListComponent);
        const component: TeamListComponent = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    });

});
