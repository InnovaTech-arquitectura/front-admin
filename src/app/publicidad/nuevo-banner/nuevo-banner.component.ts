import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PublicidadService } from 'src/app/service/publicidad.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-nuevo-banner',
	templateUrl: './nuevo-banner.component.html',
	styleUrls: ['./nuevo-banner.component.css']
})
export class NuevoBannerComponent {
	imagePreview: string | ArrayBuffer | null = null;
	selectedFile: File | null = null;
	adminId: number = 1;

	constructor(
		private publicidadService: PublicidadService,
		private router: Router
	) {}

	onFileSelected(event: Event): void {
		const file = (event.target as HTMLInputElement).files?.[0];
		if (file) {
			this.selectedFile = file;

			const storedAdminId = localStorage.getItem('adminId');
			this.adminId = storedAdminId ? Number(storedAdminId) : 1;

			const reader = new FileReader();
			reader.onload = () => {
				this.imagePreview = reader.result;
			};
			reader.readAsDataURL(file);
		} else {
			Swal.fire('Error', 'No se seleccionó un archivo.', 'error');
		}
	}

	onSubmit(): void {
		if (!this.selectedFile) {
			Swal.fire('Error', 'No se seleccionó un archivo.', 'error');
			return;
		}

		const title = (document.getElementById('titleDescription') as HTMLInputElement)?.value;
		if (!title) {
			Swal.fire('Error', 'El título es obligatorio.', 'error');
			return;
		}

		const formData = new FormData();
		formData.append('title', title);
		formData.append('picture', this.selectedFile);
		formData.append('adminId', this.adminId.toString());

		this.publicidadService.createBanner(formData).subscribe(
			(response) => {
				Swal.fire('Éxito', 'Banner creado con éxito.', 'success');
				this.router.navigate(['/ver-banners']);
			},
			(error) => {
				Swal.fire('Error', 'Ocurrió un error al crear el banner.', 'error');
			}
		);
	}
}
