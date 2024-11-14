import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profiles } from 'src/app/model/profiles';
import { RequestUsersUpdate } from 'src/app/model/requestUserUpdate';
import { PerfilesService } from 'src/app/service/perfiles.service';
import Swal from 'sweetalert2';

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
  users: RequestUsersUpdate[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tipo = Number(params.get('tipo'));

      this.perfilesService.findProfiles().subscribe(
        (profiles) => {
          const selectedProfile = profiles.find(profile => profile.id === this.tipo);
          this.profile = selectedProfile;
          //console.log(this.profile);
        }
      );

      this.perfilesService.findById(this.tipo).subscribe(
        (response) => {
          //console.log(response);
          for (let i=0; i<response.length; i++){
            this.users.push(response[i]);
          }
          //console.log(this.users);
        }
      );
    });
  }

  delete(id: number){

    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
			confirmButtonColor: '#e15554',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#91918f',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma, llamamos al servicio para eliminar el perfil
        this.perfilesService.deleteProfile(id).subscribe(
          response => {
            // Eliminación exitosa
            //console.log('Perfil eliminado', response);
  
            // Eliminamos el perfil de la lista local (en el front)
            const index = this.users.findIndex((user) => user.id === id);
            if (index !== -1) {
              this.users.splice(index, 1);
            }
  
            // Mostramos el pop-up de éxito
            Swal.fire({
              title: 'Eliminado',
              text: 'El perfil ha sido eliminado correctamente.',
              icon: 'success',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: '#19647e'
            });
          },
          error => {
            // Si ocurre un error, mostramos el pop-up de error
            Swal.fire({
              title: 'Error',
              text: 'Hubo un problema al eliminar el perfil. Por favor, intenta nuevamente.',
              icon: 'error',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: '#19647e'
            });
            //console.error(error);
          }
        );
      }
    });
  }
}
