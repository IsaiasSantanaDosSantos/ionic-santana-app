import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit { //, AfterViewInit
  @ViewChild('logoAnimate') logoAnimate: any;

  constructor(private router: Router) { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.router.navigateByUrl('home');
    // }, 5000)
  }

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.addAnimationClass();
  //   }, 2000);
  // }

  // private addAnimationClass() {
  //   this.logoAnimate.nativeElement.classList.add('addRotateAnimation');
  // }
}







// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-splash',
//   templateUrl: './splash.page.html',
//   styleUrls: ['./splash.page.scss'],
// })
// export class SplashPage implements OnInit {

//   constructor(private router : Router) { }

//   ngOnInit() {
//     // setTimeout(() => {
//     //   this.router.navigateByUrl('home');
//     // }, 2000)
//   }

// }
