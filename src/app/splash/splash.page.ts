
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit, AfterViewInit {
  @ViewChild('logoVideo') logoVideo: any;
  @ViewChild('botaoIniciar') botaoIniciar: any;

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('home');
    }, 3500)
  }

  ngAfterViewInit() {
    this.botaoIniciar.nativeElement.click();
  }
  iniciarReproducao() {
    const video = this.logoVideo.nativeElement;
    video.currentTime = 0; 
    video.play();
  }
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