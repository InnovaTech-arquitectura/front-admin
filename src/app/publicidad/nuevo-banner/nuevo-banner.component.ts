import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PublicidadService } from 'src/app/service/publicidad.service';

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
			console.error('No file selected');
		}
	}

	onSubmit(): void {
		if (!this.selectedFile) {
			console.error('No se seleccionó un archivo.');
			return;
		}

		const title = (document.getElementById('titleDescription') as HTMLInputElement)?.value;
		if (!title) {
			console.error('El título es obligatorio.');
			return;
		}

		const formData = new FormData();
		formData.append('title', title);
		formData.append('picture', this.selectedFile);
		formData.append('adminId', this.adminId.toString());

		this.publicidadService.createBanner(formData).subscribe(
			(response) => {
				console.log('Banner creado con éxito:', response);
				this.router.navigate(['/ver-banners']);
			},
			(error) => {
				console.error('Error creando el banner:', error);
			}
		);
	}
}
