import { Component } from '@angular/core';

@Component({
  selector: 'app-base-services',
  templateUrl: './base-services.component.html',
  styleUrl: './base-services.component.scss'
})
export class BaseServicesComponent {
  showme: boolean = true;
  showmee: boolean = false;
  showmeee: boolean = false
  


  ngOnInit() {

  } toggledesign() {
    this.showme = !this.showme
    this.showmee = false
    this.showmeee = false
  }

  togglemarketing() {
    this.showmee = !this.showmee
    this.showme = false
    this.showmeee = false

  }
  toggledevs() {
    this.showmeee = !this.showmeee
    this.showme = false
    this.showmee = false
  }
}
