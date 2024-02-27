import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
