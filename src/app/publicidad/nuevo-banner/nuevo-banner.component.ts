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

  constructor(private publicidadService: PublicidadService, private router: Router) {}
  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files![0];
    this.selectedFile = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

  // Handle form submission
  onSubmit(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      const title = (document.getElementById('titleDescription') as HTMLInputElement).value;
      formData.append('title', title);
      formData.append('picture', this.selectedFile);

      this.publicidadService.createBanner(formData).subscribe(
        (response) => {
          console.log('Banner created successfully:', response);
          this.router.navigate(['/ver-banners']); 
        },
        (error) => {
          console.error('Error creating banner:', error);
          // Handle error with a modal or notification (e.g., SweetAlert)
        }
      );
    }
  }
}
