import { Component, ViewChild, Inject } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { AnimationType } from './carousel/carousel.animations';
import { Slide } from './carousel/carousel.interface';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.components.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(CarouselComponent) carousel: CarouselComponent;

  constructor(public dialog: MatDialog) { }

  currentSection = 'section1';

  onSectionChange(sectionId: string) {
    console.log(sectionId)
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    this.currentSection = section;
    document.querySelector('#' + section)
      .scrollIntoView();
  }

  animationType = AnimationType.Scale;

  animationTypes = [
    {
      name: "Scale",
      value: AnimationType.Scale
    },
    {
      name: "Fade",
      value: AnimationType.Fade
    },
    {
      name: "Flip",
      value: AnimationType.Flip
    },
    {
      name: "Jack In The Box",
      value: AnimationType.JackInTheBox
    }
  ];
  slides: Slide[] = [
    {
      headline: "For Your Current Mood",
      src:
        "assets/gallery1.jpg"
    },
    {
      headline: "Miouw",
      src:
        "assets/gallery3.jpg"
    }
  ];

  ngOnInit() {
    setInterval(() => {
      this.carousel.onNextClick()
    }, 5000)
  }

  facilites = ["Coaching", "Net Practice for Adults & Children", "Hourly based Slots", "Night Sessions(Coming soon)", "Summer Camps"]

  title = 'EpicCricket';
  gallery = [
    { name: "Member 1", img: "assets/pic1.jpg" },
    { name: "Member 2", img: "assets/pic2.jpg" },
    { name: "Member 4", img: "assets/pic7.jpg" },
    { name: "Member 3", img: "assets/pic6.jpg" },
    { name: "Member 5", img: "assets/pic8.jpg" },
    { name: "Member 3", img: "assets/pic3.jpg" },
    { name: "Member 4", img: "assets/pic4.jpg" },
    { name: "Member 5", img: "assets/pic5.jpg" } 
  ]

  openDialog(url) {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        src: url
      }
    });
  }

}


@Component({
  selector: 'gallery-detail',
  templateUrl: 'gallery-detail.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}