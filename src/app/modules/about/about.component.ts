import { Component, ElementRef, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { skills } from 'src/app/services/data/nav-items';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  skills = skills;
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) {
    //         gsap.fromTo(
    //           entry.target,
    //           {
    //             opacity: 0,
    //             x: entry.target.classList.contains('left-about') ? -100 : 100,
    //           },
    //           { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
    //         );
    //       }
    //     });
    //   },
    //   { threshold: 0.5 }
    // );
    // const elements = this.el.nativeElement.querySelectorAll(
    //   '.left-about, .right-about'
    // );
    // elements.forEach((el: HTMLElement) => observer.observe(el));
  }
}
