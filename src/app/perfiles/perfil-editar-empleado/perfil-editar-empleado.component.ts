import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profiles } from 'src/app/model/profiles';
import { RequestUsersUpdate } from 'src/app/model/requestUserUpdate';
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
        id: 0,
        idCard: 0,
        name: "",
        email: "",
        password: ""
      }

      this.formEmployee =  {
        id: 1,
        idCard: 0,
        name: "",
        email: "",
        password: ""
      }

      this.sendUser =  {
        id: 1,
        user: {
          id: 0,
          idCard: 0,
          name: "",
          email: "",
          password: ""
        }
      }

    }

  editProfile: UsersUpdate;
  formEmployee: UsersUpdate;
  sendUser: RequestUsersUpdate;
  cedula: number;
  
  allProfiles: Profiles[];


  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      this.perfilesService.findUserById(id).subscribe(data => {
        this.formEmployee.id = data.user.id;
        this.formEmployee.idCard = data.user.idCard;
        this.formEmployee.name = data.user.name;
        this.formEmployee.email = data.user.email;
        this.formEmployee.password = data.user.password;
        this.cedula = data.user.idCard;
            
        
      });
    });

    this.perfilesService.findProfiles().subscribe(
      (profiles) => {
        this.allProfiles = profiles;
        console.log(this.allProfiles);
        this.allProfiles = this.allProfiles.sort((a, b) => a.id - b.id);
      }
    );
  }

  editar() {

    this.sendUser.id = this.formEmployee.id;
    this.sendUser.user = Object.assign({}, this.formEmployee);
    
    this.perfilesService.updateProfile(this.sendUser);
    
    console.log(this.sendUser);
    

    this.router.navigate(['/perfiles']);
  }

}
