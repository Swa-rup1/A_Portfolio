import { Directive } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[appCardAnimation]',
})
export class CardAnimationDirective {
  constructor(private el: ElementRef) {}

  // ngAfterViewInit(): void {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           gsap.fromTo(
  //             entry.target,
  //             { opacity: 0, y: 100 }, // Start 100 pixels down
  //             {
  //               opacity: 1,
  //               y: 0,
  //               duration: 1.5,
  //               ease: 'bounce.out', // Use bounce easing for a bouncy effect
  //             }
  //           );
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   const elements = this.el.nativeElement.querySelectorAll('.scard');
  //   elements.forEach((el: HTMLElement) => {
  //     gsap.set(el, { opacity: 0, y: 100 }); // Set initial state before animating

  //     // Add mouseenter event listener
  //     el.addEventListener('mouseenter', () => {
  //       gsap.to(el, {
  //         y: -20, // Move card 20 pixels up on hover
  //         duration: 0.3,
  //         ease: 'power2.out', // Smooth easing out effect
  //       });
  //     });

  //     // Add mouseleave event listener
  //     el.addEventListener('mouseleave', () => {
  //       gsap.to(el, {
  //         y: 0, // Move card back to original position on mouse leave
  //         duration: 0.3,
  //         ease: 'power2.out', // Smooth easing out effect
  //       });
  //     });

  //     observer.observe(el); // Observe each element for intersection
  //   });
  // }
}
