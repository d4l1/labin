import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, AfterViewInit {
  @ViewChild('bannerText', { static: false }) bannerText!: ElementRef;
  @ViewChild('bannerSubText', { static: false }) bannerSubText!: ElementRef;
  @ViewChild('bannerParagraph', { static: false }) bannerParagraph!: ElementRef;
  @ViewChild('bannerButton', { static: false }) bannerButton!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    // Aquí puedes añadir cualquier inicialización que necesites
  }

  ngAfterViewInit(): void {
    this.addAnimation();
  }

  addAnimation(): void {
    const tl = gsap.timeline();
    tl.from(this.bannerText.nativeElement, { opacity: 0, y: 50, duration: 1, ease: 'power2.out' })
    tl.from(this.bannerSubText.nativeElement, { opacity: 0, y: 50, duration: 1, ease: 'power2.out' })
      .from(this.bannerParagraph.nativeElement, { opacity: 0, y: 50, duration: 1, ease: 'power2.out' }, "-=0.5")
      .from(this.bannerButton.nativeElement, { opacity: 0, y: 50, duration: 1, ease: 'power2.out' }, "-=0.5");
  }
}
