import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  observer: IntersectionObserver | undefined;
  isScrolled = false;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(entries => {
      this.isScrolled = !entries[0].isIntersecting;
    });
    this.observer.observe(this.elementRef.nativeElement);
  }
 

  
}
