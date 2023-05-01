import { Component, Directive, HostListener, ViewEncapsulation } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {
  favProjects = this.dataService.favoriteProjects;
  clickMessage: string = "";
  programmingLanguages: Array<string> = ['C', 'Java', 'SQL', 'Python', 'C++', 'C#', 'HTML', 'CSS', 'Javascript', 'Kotlin for Android'];
  frameworkExperience: Array<string> = ['Angular.js', 'React.js', 'WPF', 'WinForms', '.NET Framework', '.NET Core'];
  proficientTools: Array<string> = ['Bash', 'Eclipse', 'Code Composer', 'Visual Studio', 'Atom', 'Intellij IDEA', 'Windows', 'Ubuntu', 'MobaXterm', 'TortoiseSVN', 'SVN', 'GIT',
    'Github', 'Android Studio', 'Azure DevOps'];

  constructor(private dataService: DataService) { }

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
