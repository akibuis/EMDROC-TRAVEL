import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { PageHeader } from '../../../shared/components/page-header/page-header';
import { Cta } from '../../../shared/components/cta/cta';
import { InquiryService } from '../../../core/services/inquiry.service';
import { SeoService } from '../../../core/services/seo.service';
import { EMDROC_CONTACT_INFO } from '../../../core/models';
import type { InquiryTab } from '../../../core/models';

const SERVICE_TAB_MAP: Record<string, InquiryTab> = {
  'Flights': 'flights',
  'Hotels': 'hotels',
  'Tour Packages': 'tours',
  'Visa Consultancy': 'visa',
  'Corporate Travel': 'corporate',
};

@Component({
  selector: 'app-contact-page',
  imports: [ReactiveFormsModule, PageHeader, Cta],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  protected readonly contact = EMDROC_CONTACT_INFO;
  protected readonly submitting = signal(false);
  protected contactForm: FormGroup;

  protected readonly serviceOptions = Object.keys(SERVICE_TAB_MAP);

  constructor(
    private fb: FormBuilder,
    private inquiryService: InquiryService,
    private seo: SeoService,
  ) {
    this.seo.setData({
      title: 'Contact Us',
      description: 'Get in touch with EMDROC Travel & Tours. Request an executive consultation for corporate travel, visa consultancy, and bespoke concierge services.',
      url: 'https://emdroc.com/contact',
      type: 'contact',
    });
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      serviceInterest: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s\-\(\)]{7,20}$/)]],
      message: [''],
    });
  }

  protected fieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!control && control.touched && control.invalid;
  }

  protected onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.submitting.set(true);

    const { fullName, email, phone, serviceInterest, message } = this.contactForm.value;
    const tab = SERVICE_TAB_MAP[serviceInterest] ?? 'corporate';

    this.inquiryService.inquire({ name: fullName, email, phone, message, tab }).subscribe({
      next: () => {
        this.submitting.set(false);
        this.contactForm.reset();
        Swal.fire({
          icon: 'success',
          title: 'Thank You!',
          text: 'Your inquiry has been received. Our team will respond within 24 hours.',
          confirmButtonColor: '#0097B2',
          background: '#031D24',
          color: '#ffffff',
          iconColor: '#0097B2',
        });
      },
      error: (err: unknown) => {
        this.submitting.set(false);
        const e = err as { text?: string };
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong',
          text: e?.text || 'Please try again.',
          confirmButtonColor: '#0097B2',
          background: '#031D24',
          color: '#ffffff',
          iconColor: '#E6007E',
        });
      },
    });
  }
}
