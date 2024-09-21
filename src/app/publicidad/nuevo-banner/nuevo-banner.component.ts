import { Component } from '@angular/core';

@Component({
  selector: 'app-nuevo-banner',
  templateUrl: './nuevo-banner.component.html',
  styleUrls: ['./nuevo-banner.component.css']
})
export class NuevoBannerComponent {
  titleDescription: string = '';
  selectedFile: File | null = null;
  imagePreview: string | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit(): void {
    if (this.selectedFile && this.titleDescription) {
      const formData = new FormData();
      formData.append('titleDescription', this.titleDescription);
      formData.append('image', this.selectedFile);

      // Aquí puedes enviar formData a tu servidor
    }
  }
}
