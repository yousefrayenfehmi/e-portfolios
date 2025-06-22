

import { environment } from '../../environments/environment';

export const EMAIL_CONFIG = {
  SERVICE_ID: environment.emailjs.serviceId,
  TEMPLATE_ID: environment.emailjs.templateId,
  PUBLIC_KEY: environment.emailjs.publicKey
};

