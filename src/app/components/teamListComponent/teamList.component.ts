import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CompanyDataService } from '../../services/companyData.service';
import { Team } from '../../types/team.type';
import { environment } from '../../../environments/environment';
import { TeamMember } from '../../types/teamMember.type';

@Component({
    selector: 'app-company-data',
    templateUrl: './teamList.component.html',
    styleUrls: ['./teamList.component.css'],
    animations: [
        trigger('fadeIn', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate(500, style({ opacity: 1 }))
            ])
        ])
    ]
})
export class TeamListComponent implements OnInit {

    constructor(private companyDataService: CompanyDataService) {
    }

    teams: Team[];

    ALLOWED_STATES = ['VA'];
    ALLOWED_ROLES = ['Technical Lead', 'Software Engineer'];

    ngOnInit() {
        this.companyDataService.get().subscribe((result: Team[]) => {
            this.teams = result;
        });        
    }

    filteredTeams() {
        return this.filterTeamsByState(this.teams, this.ALLOWED_STATES);
    }

    filteredMembers(team: Team) {
        return this.filterMembersByRole(team.members, this.ALLOWED_ROLES)
            .sort(this.sortByLastNameThenFirst);
    }

    private filterTeamsByState(teams: Team[], allowedStates: string[]) {
        return teams.filter(t => allowedStates.includes(t.state));
    }

    private filterMembersByRole(members: TeamMember[], allowedRoles: string[]) {
        return members.filter(m => allowedRoles.includes(m.role));
    }

    private sortByLastNameThenFirst(a, b) {
        if(a.lastName > b.lastName)
            return 1;
        if(a.lastName < b.lastName)
            return -1;
        if(a.firstName > b.firstName)
            return 1;
        if(a.firstName < b.firstName)
            return -1;
        return 0;
    }
}
