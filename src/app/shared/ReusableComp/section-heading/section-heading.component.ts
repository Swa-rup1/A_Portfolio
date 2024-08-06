import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.scss'],
})
export class SectionHeadingComponent implements OnInit, OnDestroy {
  @Input() title!: string;
  @Input() subtitle!: string;

  private observer: IntersectionObserver | null = null;
  private timeline: gsap.core.Timeline | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.setupObserver();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.timeline?.kill();
  }

  private setupObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateHeading();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (this.el.nativeElement) {
      this.observer.observe(this.el.nativeElement);
    }
  }

  private animateHeading(): void {
    const headingElement = this.el.nativeElement?.querySelector(
      '.Gsap-section-heading'
    );

    if (headingElement) {
      this.timeline?.kill();
      this.timeline = gsap.timeline();

      // Clear previous content and create individual spans for each letter
      headingElement.innerHTML = '';
      this.title.split('').forEach((char) => {
        const span = this.renderer.createElement('span');
        const text = this.renderer.createText(char);
        this.renderer.appendChild(span, text);
        this.renderer.appendChild(headingElement, span);
      });

      this.subtitle.split('').forEach((char) => {
        const span = this.renderer.createElement('span');
        const text = this.renderer.createText(char);
        this.renderer.appendChild(span, text);
        this.renderer.appendChild(headingElement, span);
      });
      const chars = headingElement.querySelectorAll('span');

      // Animate each character
      this.timeline.from(chars, {
        duration: 2.5,
        opacity: 0,
        y: -20,
        stagger: 0.1,
        ease: 'bounce.out',
      });
    }
  }
}
