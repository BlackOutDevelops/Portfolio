import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'contact-me',
  templateUrl: 'contact-me.component.html',
  styleUrls: ['contact-me.component.css']
})
export class ContactMeComponent {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  sendEmail() {
    //const link = document.createElement('a');
    //link.setAttribute('target', '_blank');
    //link.setAttribute('href', 'mailto: joshiefrazie@hotmail.com ? Subject=Feedback');
    //document.body.appendChild(link);
    //link.click();
    //link.remove();
  }
}
