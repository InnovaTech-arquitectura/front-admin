import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profiles } from 'src/app/model/profiles';
import { RequestUsersUpdate } from 'src/app/model/requestUserUpdate';
import { UsersUpdate } from 'src/app/model/userUpdate';
import { PerfilesService } from 'src/app/service/perfiles.service';
import Swal from 'sweetalert2';

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
  profile: number;
  
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
        this.profile = data.id;
      });
    });

    this.perfilesService.findProfiles().subscribe(
      (profiles) => {
        this.allProfiles = profiles;
        //console.log(this.allProfiles);
        this.allProfiles = this.allProfiles.sort((a, b) => a.id - b.id);
      }
    );
  }

  editar() {

    this.sendUser.id = this.profile;
    this.sendUser.user = Object.assign({}, this.formEmployee);
    
    this.perfilesService.updateProfile(this.sendUser).subscribe(
      response => {
        // Si la petición es exitosa, redirigimos sin mostrar nada extra
        //console.log('Perfil actualizado exitosamente', response);
        this.router.navigate(['/perfiles']);
      },
      error => {
        // Si ocurre un error, mostramos un pop-up con SweetAlert
        Swal.fire({
          title: 'Error al actualizar el perfil',
          text: 'Hubo un problema al intentar actualizar el perfil. Por favor, intenta nuevamente.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
			    confirmButtonColor: '#e15554'
        });
        //console.error(error);
      }
    );
  }

}
