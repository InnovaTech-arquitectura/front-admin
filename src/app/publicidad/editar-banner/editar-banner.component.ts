import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicidadService } from 'src/app/service/publicidad.service';


@Component({
  selector: 'app-editar-banner',
  templateUrl: './editar-banner.component.html',
  styleUrls: ['./editar-banner.component.css']
})
export class EditarBannerComponent implements OnInit {
  banner: any = {}; // Almacena los datos del banner
  imagePreview: string | ArrayBuffer | null = null; // Almacena la vista previa de la imagen

  constructor(
    private publicidadService: PublicidadService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtiene el ID del banner desde la URL
    const bannerId = this.route.snapshot.paramMap.get('id');
    if (bannerId) {
      // Llama al servicio para obtener los datos del banner
      this.publicidadService.getBannerById(bannerId).subscribe(
        (data: any) => {
          this.banner = data;
          this.imagePreview = 'data:image/png;base64,' + this.banner.picture; // Muestra la imagen actual
        },
        error => {
          console.error('Error al cargar el banner:', error);
          alert('No se pudo cargar el banner.'); // Manejo de error
        }
      );
    }
  }

  // Método para manejar el cambio de imagen
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
      this.banner.picture = file; // Guarda el archivo en el objeto banner
    }
  }

  // Método para enviar los cambios
  onSubmit(): void {
    const formData = new FormData();
    formData.append('title', this.banner.title);
    if (this.banner.picture instanceof File) {
      formData.append('picture', this.banner.picture);
    }

    this.publicidadService.updateBanner(this.banner.id, formData).subscribe(
      response => {
        console.log('Banner actualizado exitosamente:', response);
        this.router.navigate(['/publicidad']); // Redirige al componente de visualización
      },
      error => {
        console.error('Error al actualizar el banner:', error);
        alert('Error al actualizar el banner.');
      }
    );
  }
}
