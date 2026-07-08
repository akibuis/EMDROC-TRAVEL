export type InquiryTab = 'flights' | 'hotels' | 'tours' | 'visa' | 'corporate';

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  tab: InquiryTab;
}
