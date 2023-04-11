import { Component, Directive } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent {
  clickMessage:string = "";

  downloadResume() {
    this.clickMessage = "Downloading Resume...";
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/files/Resume.pdf');
    link.setAttribute('download', 'Resume.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
    this.clickMessage = "Resume Downloaded";
    setTimeout(() => this.clickMessage = "", 1000);
  }
}
