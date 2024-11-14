import { Component, OnInit } from '@angular/core';
import { PublicidadService } from 'src/app/service/publicidad.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Banner } from 'src/app/model/banner';

@Component({
	selector: 'app-ver-banners',
	templateUrl: './ver-banners.component.html',
	styleUrls: ['./ver-banners.component.css']
})
export class VerBannersComponent implements OnInit {
	banners: Banner[] = [];
	interactions: number = 1;

	constructor(
		private publicidadService: PublicidadService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.publicidadService.listBanners().subscribe(
			(data) => {
				this.banners = data;
				//console.log(this.banners);
			},
			(error) => {
				Swal.fire('Error', 'Error al cargar los banners.', 'error');
			}
		);
	}

	editBanner(id: number): void {
		this.router.navigate([`/editar-banner/${id}`]);
	}

	deleteBanner(id: number): void {
		Swal.fire({
			title: '¿Estás seguro?',
			text: '¡No podrás revertir esto!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sí, eliminarlo'
		}).then((result) => {
			if (result.isConfirmed) {
				this.publicidadService.deleteBanner(id).subscribe(() => {
					//console.log('Eliminado', id);
					const index = this.banners.findIndex((course) => course.id === id);
					this.banners.splice(index, 1);

					Swal.fire('Eliminado', 'El curso ha sido eliminado', 'success');
				});
			}
		});
	}
}
