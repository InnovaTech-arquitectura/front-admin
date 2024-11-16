import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicidadService } from 'src/app/service/publicidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-banner',
  templateUrl: './editar-banner.component.html',
  styleUrls: ['./editar-banner.component.css']
})
export class EditarBannerComponent implements OnInit {
  banner: any = {}; 
  imagePreview: string | ArrayBuffer | null = null; 

  constructor(
    private publicidadService: PublicidadService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    
    const bannerId = this.route.snapshot.paramMap.get('id');
    if (bannerId) {
      
      this.publicidadService.getBannerById(bannerId).subscribe(
        (data: any) => {
          this.banner = data;
          this.imagePreview = 'data:image/png;base64,' + this.banner.picture; 
        },
        error => {
       
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo cargar el banner.',
            confirmButtonText: 'Cerrar'
          });
        }
      );
    }
  }

  
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
      this.banner.picture = file; 
    }
  }

  
  onSubmit(): void {
    const formData = new FormData();
    formData.append('title', this.banner.title);
    if (this.banner.picture instanceof File) {
      formData.append('picture', this.banner.picture);
    }

    this.publicidadService.updateBanner(this.banner.id, formData).subscribe(
      response => {
        
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'El banner se actualizó correctamente.',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['/publicidad']); 
        });
      },
      error => {
        
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al actualizar el banner.',
          confirmButtonText: 'Cerrar'
        });
      }
    );
  }
}
