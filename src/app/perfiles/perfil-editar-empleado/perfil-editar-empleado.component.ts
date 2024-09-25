import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profiles } from 'src/app/model/profiles';
import { UsersUpdate } from 'src/app/model/userUpdate';
import { PerfilesService } from 'src/app/service/perfiles.service';

@Component({
  selector: 'app-perfil-editar-empleado',
  templateUrl: './perfil-editar-empleado.component.html',
  styleUrls: ['./perfil-editar-empleado.component.css']
})
export class PerfilEditarEmpleadoComponent {

  constructor(
    private route: ActivatedRoute,
    private perfilesService: PerfilesService,
    private router: Router,
    ) { 

      this.editProfile =  {
        name: "",
        email: "",
        password: ""
      }

      this.formEmployee =  {
        name: "",
        email: "",
        password: ""
      }

    }

  editProfile: UsersUpdate;
  formEmployee: UsersUpdate;
  
  allProfiles: Profiles[];

  ngOnInit(): void {

    this.perfilesService.findProfiles().subscribe(
      (profiles) => {
        this.allProfiles = profiles;
        console.log(this.allProfiles);
        this.allProfiles = this.allProfiles.sort((a, b) => a.id - b.id);
      }
    );
  }

  editar() {

    console.log(this.formEmployee);

    this.perfilesService.updateProfile(this.formEmployee);

    this.editProfile = Object.assign({}, this.formEmployee);
    console.log(this.editProfile);

    this.router.navigate(['/perfiles']);
  }

}
