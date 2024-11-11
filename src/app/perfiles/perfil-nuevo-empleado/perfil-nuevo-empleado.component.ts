import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilesService } from 'src/app/service/perfiles.service';
import { Profiles } from 'src/app/model/profiles';
import { UsersCreate } from 'src/app/model/userCreate';
import Swal from 'sweetalert2';

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
        //console.log(this.allProfiles);
        this.allProfiles = this.allProfiles.sort((a, b) => a.id - b.id);
      }
    );
  }

  crear() {

    const check = document.getElementById('perfil');
    this.formEmployee.role = this.allProfiles[check['selectedIndex']].name;

    //console.log(this.formEmployee);

    this.perfilesService.addProfile(this.formEmployee).subscribe(
      response => {
        // Si la petición es exitosa, redirigimos sin mostrar nada extra
        //console.log('Perfil creado exitosamente', response);
        this.router.navigate(['/perfiles']);
      },
      error => {
        // Si ocurre un error, mostramos un pop-up con SweetAlert
        Swal.fire({
          title: 'Error al crear el perfil',
          text: 'Hubo un problema al intentar crear el perfil. Por favor, intenta nuevamente.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
			    confirmButtonColor: '#e15554'
        });
        //console.error(error);
      }
    );
  }

}
