import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmailService, ContactForm } from './services/email.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'portfolio';
  gmail = 'yousseffehmi96@gmail.com';
  location = 'Tunis, Tunisia';
  
  // Formulaire de contact
  contactForm: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  isLoading = false;
  showNotification = false;
  notificationMessage = '';
  notificationType: 'success' | 'error' = 'success';

  constructor(private emailService: EmailService) {}

  async onSubmitContact() {
    console.log('=== DEBUT ENVOI EMAIL ===');
    console.log('Données du formulaire:', this.contactForm);
    
    // Validation basique
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
      this.showNotificationMessage('Please fill all fields', 'error');
      return;
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.contactForm.email)) {
      this.showNotificationMessage('Please enter a valid email address', 'error');
      return;
    }

    this.isLoading = true;

    try {
      console.log(this.contactForm);
      
      const success = await this.emailService.sendEmail(this.contactForm);
      
      if (success) {
        this.showNotificationMessage('Message sent successfully! I will respond to you soon.', 'success');
        this.resetForm();
      } else {
        this.showNotificationMessage('Error sending message. Please try again.', 'error');
      }
    } catch (error) {
      this.showNotificationMessage('Error sending message. Please try again.', 'error');
    } finally {
      this.isLoading = false;
    }
  }

  private showNotificationMessage(message: string, type: 'success' | 'error') {
    this.notificationMessage = message;
    this.notificationType = type;
    this.showNotification = true;

    // Cacher la notification après 5 secondes
    setTimeout(() => {
      this.showNotification = false;
    }, 5000);
  }

  private resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      message: ''
    };
  }

  hideNotification() {
    this.showNotification = false;
  }
}
