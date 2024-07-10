import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  showme: boolean = true;
  showmee: boolean = false;
  showmeee: boolean = false;

  ngOnInit() {}

  toggledesign() {
    this.showme = true;
    this.showmee = false;
    this.showmeee = false;
  }

  togglemarketing() {
    this.showmee = true;
    this.showme = false;
    this.showmeee = false;
  }

  toggledevs() {
    this.showmeee = true;
    this.showme = false;
    this.showmee = false;
  }

}

  












