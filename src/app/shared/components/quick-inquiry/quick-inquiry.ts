// NOTE: This component has no corresponding Stitch design — it was built
// directly in code because the lead-capture inquiry section was omitted
// from the Stitch export. If/when Stitch generates a matching design for
// this section, re-sync this component's markup/styling against it rather
// than maintaining two diverging versions.

import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { InquiryService } from '../../../core/services/inquiry.service';
import { InquiryTab } from '../../../core/models';

@Component({
  selector: 'app-quick-inquiry',
  imports: [ReactiveFormsModule],
  templateUrl: './quick-inquiry.html',
  styleUrl: './quick-inquiry.css',
})
export class QuickInquiry {
  protected readonly activeTab = signal<InquiryTab>('flights');
  protected readonly submitting = signal(false);

  protected readonly tabs: { key: InquiryTab; label: string; icon: string }[] = [
    { key: 'flights', label: 'Flights', icon: 'flight' },
    { key: 'hotels', label: 'Hotels', icon: 'hotel' },
    { key: 'tours', label: 'Tours', icon: 'explore' },
    { key: 'visa', label: 'Visa', icon: 'description' },
    { key: 'corporate', label: 'Corporate', icon: 'business_center' },
  ];

  protected inquiryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private inquiryService: InquiryService,
  ) {
    this.inquiryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^[\d\s\-\+\(\)]{7,20}$/)]],
      message: [''],
    });
  }

  protected switchTab(tab: InquiryTab): void {
    this.activeTab.set(tab);
  }

  protected onSubmit(): void {
    if (this.inquiryForm.invalid) {
      this.inquiryForm.markAllAsTouched();
      return;
    }
    this.submitting.set(true);

    this.inquiryService.inquire({
      name: this.inquiryForm.value.name,
      email: '',
      phone: this.inquiryForm.value.phone,
      message: this.inquiryForm.value.message ?? '',
      tab: this.activeTab(),
    }).subscribe({
      next: () => {
        this.submitting.set(false);
        this.inquiryForm.reset();
        Swal.fire({
          icon: 'success',
          title: 'Thank You!',
          text: "We'll get back to you shortly.",
          confirmButtonColor: '#0087F3',
          background: '#031D24',
          color: '#ffffff',
          iconColor: '#0087F3',
        });
      },
      error: (err: unknown) => {
        this.submitting.set(false);
        const e = err as { text?: string };
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong',
          text: e?.text || 'Please try again.',
          confirmButtonColor: '#0087F3',
          background: '#031D24',
          color: '#ffffff',
          iconColor: '#DE1D9D',
        });
      },
    });
  }

  protected fieldHasError(field: string, error: string): boolean {
    const control = this.inquiryForm.get(field);
    return !!control && control.touched && control.hasError(error);
  }
}
