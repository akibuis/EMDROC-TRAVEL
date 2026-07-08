// NOTE: This component has no corresponding Stitch design — it was built
// directly in code because the lead-capture inquiry section was omitted
// from the Stitch export. If/when Stitch generates a matching design for
// this section, re-sync this component's markup/styling against it rather
// than maintaining two diverging versions.

import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  protected readonly submitted = signal(false);
  protected readonly error = signal<string | null>(null);

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
    this.error.set(null);
  }

  protected onSubmit(): void {
    if (this.inquiryForm.invalid) {
      this.inquiryForm.markAllAsTouched();
      return;
    }
    this.submitting.set(true);
    this.error.set(null);

    this.inquiryService.inquire({
      name: this.inquiryForm.value.name,
      email: '',
      phone: this.inquiryForm.value.phone,
      message: this.inquiryForm.value.message ?? '',
      tab: this.activeTab(),
    }).subscribe({
      next: () => {
        this.submitted.set(true);
        this.submitting.set(false);
        this.inquiryForm.reset();
      },
      error: () => {
        this.error.set('Something went wrong. Please try again.');
        this.submitting.set(false);
      },
    });
  }

  protected fieldHasError(field: string, error: string): boolean {
    const control = this.inquiryForm.get(field);
    return !!control && control.touched && control.hasError(error);
  }
}
