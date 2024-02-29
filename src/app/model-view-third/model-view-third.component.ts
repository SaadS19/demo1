import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-view-third',
  templateUrl: './model-view-third.component.html',
  styleUrls: ['./model-view-third.component.css'],
})
export class ModelViewThirdComponent implements OnInit {
  forms: FormGroup;
  data = [
    {
      name: 'Saad',
      code: 11,
    },
    {
      name: 'Ehsan',
      code: 12,
    },
    {
      name: 'Hamza',
      code: 13,
    },
  ];
  ngOnInit(): void {
    this.forms = new FormGroup({
      userData: new FormGroup({
        studentName: new FormControl(null, Validators.required),
        help: new FormControl(null, Validators.required),
        message: new FormControl(null, Validators.required),
      }),
    });
  }

  onSubmit() {
    console.log(this.forms.value);
    this.forms.reset();
  }
}
