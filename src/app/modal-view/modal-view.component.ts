import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.css'],
})
export class ModalViewComponent implements OnInit {
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
