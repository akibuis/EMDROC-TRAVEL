import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';
import { InquiryFormData } from '../models';

export interface InquiryResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class InquiryService {
  private readonly emailjs = environment.emailjs;

  inquire(data: InquiryFormData): Observable<InquiryResponse> {
    return new Observable((observer) => {
      emailjs
        .send(
          this.emailjs.serviceId,
          this.emailjs.templateId,
          {
            to_email: 'emdroctravels@yahoo.com',
            from_name: data.name,
            from_email: data.email || 'no-reply@emdroctravel.com',
            phone: data.phone || 'Not provided',
            subject: `${data.tab} inquiry`,
            message: data.message || 'No additional details provided.',
            inquiry_type: data.tab,
          },
          { publicKey: this.emailjs.publicKey },
        )
        .then(
          () => {
            observer.next({ success: true, message: `${data.tab} inquiry sent successfully` });
            observer.complete();
          },
          (err) => {
            observer.error(err);
          },
        );
    });
  }
}