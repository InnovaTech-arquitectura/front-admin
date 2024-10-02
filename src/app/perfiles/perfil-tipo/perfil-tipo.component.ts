import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profiles } from 'src/app/model/profiles';
import { Users } from 'src/app/model/users';
import { PerfilesService } from 'src/app/service/perfiles.service';

@Component({
  selector: 'app-perfil-tipo',
  templateUrl: './perfil-tipo.component.html',
  styleUrls: ['./perfil-tipo.component.css']
})
export class PerfilTipoComponent {

  constructor(
    private route: ActivatedRoute,
    private perfilesService: PerfilesService,
  ) {
    this.profile =  {
			id: 0,
			name: '',
      quantity: 0,
		}
  }

  tipo!: number;
  profile: Profiles;
  users: Users[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tipo = Number(params.get('tipo'));

      this.perfilesService.findProfiles().subscribe(
        (profiles) => {
          const selectedProfile = profiles.find(profile => profile.id === this.tipo);
          this.profile = selectedProfile;
          console.log(this.profile);
        }
      );

      this.perfilesService.findById(this.tipo).subscribe(
        (response) => {
          console.log(response);
          for (let i=0; i<response.length; i++){
            this.users.push(response[i].user);
          }
          console.log(this.users);
        }
      );
    });
  }

  delete(id: number){
    this.perfilesService.deleteProfile(id);

    const index = this.users.findIndex((plan) => plan.id === id);
    this.users.splice(index, 1);
  }
}
