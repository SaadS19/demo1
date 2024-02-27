import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Pass Data from Parent to Child
  //title = 'Pass Data from Parent to child';
  // data: number = 10;
  // updateData() {
  //   this.data = Math.floor(Math.random() * 10);
  // }
  //
  // title = 'Pass Data from Child to Parent';
  // name = '';
  // updateData(value: string) {
  //   this.name = value;
  // }
  data: any = [
    {
      name: 'Muarij Fasih',
      location: 'Toranto,Ontario,Canada',
      education: 'Postgraduate of Ancient Near Eastern',
      admission: '60+',
      img: 'assets/images/test.jpg',
    },
    {
      name: 'M Saad Sohail ',
      location: 'Islamabad,Punjab,Pakistan',
      education: 'Postgraduate of Ancient Near Eastern',
      admission: '60+',
      img: 'assets/images/test.jpg',
    },
    {
      name: 'Abdul Raheem',
      location: 'Rahim Yar Khan,Punjab,Pakistan',
      education: 'Postgraduate of Ancient Near Eastern',
      admission: '60+',
      img: 'assets/images/test.jpg',
    },
  ];
}
