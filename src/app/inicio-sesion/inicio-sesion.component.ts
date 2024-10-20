import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-inicio-sesion',
	templateUrl: './inicio-sesion.component.html',
	styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
	email: string = '';
	password: string = '';
	isLoading: boolean = false; // Estado de carga

	constructor(
		private authService: AuthService,
		private router: Router
	) {}

	onSubmit() {
		this.isLoading = true; // Mostrar el spinner
		this.authService.login(this.email, this.password).subscribe(
			(response) => {
				localStorage.setItem('token', response);
				this.router.navigate(['/dashboard']);
				this.isLoading = false; // Ocultar el spinner
			},
			(error) => {
				console.error('Error al iniciar sesión:', error);
				this.isLoading = false; // Ocultar el spinner
				Swal.fire({
					icon: 'error',
					title: 'Error de autenticación',
					text: 'No pudimos iniciar sesión. Por favor, verifica tus credenciales.',
					confirmButtonText: 'Cerrar'
				});
			}
		);
	}
}
