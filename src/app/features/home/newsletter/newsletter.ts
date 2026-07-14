import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newsletter',
  imports: [ReactiveFormsModule],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.css',
})
export class Newsletter {
  protected newsletterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  protected onSubmit(): void {
    if (this.newsletterForm.valid) {
      this.newsletterForm.reset();
      Swal.fire({
        icon: 'success',
        title: 'Subscribed!',
        text: 'Thank you for subscribing to our travel advisory.',
        confirmButtonColor: '#0087F3',
        background: '#031D24',
        color: '#ffffff',
        iconColor: '#0087F3',
      });
    }
  }
}
