import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PageHeader } from '../../../shared/components/page-header/page-header';
import { InquiryService } from '../../../core/services/inquiry.service';

@Component({
  selector: 'app-contact-page',
  imports: [ReactiveFormsModule, PageHeader],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  protected readonly submitting = signal(false);
  protected readonly submitted = signal(false);
  protected readonly error = signal<string | null>(null);
  protected contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private inquiryService: InquiryService,
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  protected onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.submitting.set(true);
    this.error.set(null);

    const { name, email, phone, subject, message } = this.contactForm.value;

    this.inquiryService.inquire({ name, email, phone, message, tab: 'corporate' }).subscribe({
      next: () => {
        this.submitted.set(true);
        this.submitting.set(false);
        this.contactForm.reset();
      },
      error: () => {
        this.error.set('Something went wrong. Please try again.');
        this.submitting.set(false);
      },
    });
  }
}
