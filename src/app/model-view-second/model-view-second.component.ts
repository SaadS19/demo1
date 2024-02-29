import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-view-second',
  templateUrl: './model-view-second.component.html',
  styleUrls: ['./model-view-second.component.css'],
})
export class ModelViewSecondComponent implements OnInit {
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
        higherEdu: new FormControl(null, Validators.required),
        college: new FormControl(null, Validators.required),
        message: new FormControl(null, Validators.required),
      }),
    });
  }

  onSubmit() {
    console.log(this.forms.value);
    this.forms.reset();
  }
}
