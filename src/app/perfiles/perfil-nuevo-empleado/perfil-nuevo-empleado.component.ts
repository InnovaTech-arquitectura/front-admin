import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilesService } from 'src/app/service/perfiles.service';
import { Profiles } from 'src/app/model/profiles';
import { UsersCreate } from 'src/app/model/userCreate';


@Component({
  selector: 'app-perfil-nuevo-empleado',
  templateUrl: './perfil-nuevo-empleado.component.html',
  styleUrls: ['./perfil-nuevo-empleado.component.css']
})
export class PerfilNuevoEmpleadoComponent implements OnInit {

  constructor(
    private perfilesService: PerfilesService,
    private router: Router
  ) { 
    this.sendProfile =  {
      name: '',
      idCard: 0,
      email: '',
      password: '',
      role: ''
    }

    this.formEmployee =  {
      name: '',
      idCard: 0,
      email: '',
      password: '',
      role: ''
    }
  }

  sendProfile: UsersCreate;
  formEmployee: UsersCreate;

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

  crear() {

    const check = document.getElementById('perfil');
    this.formEmployee.role = this.allProfiles[check['selectedIndex']].name;

    console.log(this.formEmployee);

    this.perfilesService.addProfile(this.formEmployee);

    this.sendProfile = Object.assign({}, this.formEmployee);
    console.log(this.sendProfile);

    this.router.navigate(['/perfiles']);
  }

}
