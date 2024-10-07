import { Component, OnInit } from '@angular/core';
import { PublicidadService } from 'src/app/service/publicidad.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-banners',
  templateUrl: './ver-banners.component.html',
  styleUrls: ['./ver-banners.component.css']
})
export class VerBannersComponent implements OnInit {
  banners: any[] = [];

  constructor(private publicidadService: PublicidadService, private router: Router) {}

  ngOnInit(): void {
    this.publicidadService.listBanners().subscribe(
      (data) => {
        this.banners = data;
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
      text: "Esta acción no se puede deshacer.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.publicidadService.deleteBanner(id).subscribe(
          () => {
            this.banners = this.banners.filter((banner) => banner.id !== id);
            Swal.fire('Eliminado', 'El banner ha sido eliminado con éxito.', 'success');
          },
          (error) => {
            Swal.fire('Error', 'Ocurrió un error al eliminar el banner.', 'error');
          }
        );
      }
    });
  }
}
