import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/email.config';

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private serviceId = EMAIL_CONFIG.SERVICE_ID;
  private templateId = EMAIL_CONFIG.TEMPLATE_ID;
  private publicKey = EMAIL_CONFIG.PUBLIC_KEY;

  constructor() {
    // Initialiser EmailJS avec votre public key
    emailjs.init(this.publicKey);
  }

  async sendEmail(formData: ContactForm): Promise<boolean> {
    try {
      const templateParams = {
        name: formData.name,           // Correspond à {{name}} dans le template
        email: formData.email,         // Correspond à {{email}} dans le template
        message: formData.message,     // Correspond à {{message}} dans le template
        from_name: formData.name,      // Pour compatibilité
        from_email: formData.email,    // Pour compatibilité
        to_name: 'Youssef',           // Votre nom
        date: new Date().toLocaleDateString('fr-FR'),
        time: new Date().toLocaleTimeString('fr-FR')
      };
      console.log(templateParams);
      

      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams,
        this.publicKey
      );

      console.log('Email envoyé avec succès!', response);
      return true;
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      return false;
    }
  }
} 