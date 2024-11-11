import { Component, OnInit } from '@angular/core';
import { Profiles } from 'src/app/model/profiles';
import { PerfilesService } from 'src/app/service/perfiles.service';

@Component({
  selector: 'app-ver-perfiles',
  templateUrl: './ver-perfiles.component.html',
  styleUrls: ['./ver-perfiles.component.css']
})
export class VerPerfilesComponent implements OnInit {

  constructor(
    private perfilesService: PerfilesService,
  ) { }

  profilesList: Profiles[];

  ngOnInit(): void {
    this.perfilesService.findProfiles().subscribe(
      (profiles) => {
        this.profilesList = profiles;
        //console.log(this.profilesList);
        this.profilesList = this.profilesList.sort((a, b) => a.id - b.id);
      }
    );
  }

}
