import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { InquiryFormData } from '../models';

export interface InquiryResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class InquiryService {
  inquire(data: InquiryFormData): Observable<InquiryResponse> {
    const msg = `${data.tab} inquiry from ${data.name}`;
    console.log('[InquiryService]', msg, data);
    return of({ success: true, message: msg }).pipe(delay(600));
  }
}
