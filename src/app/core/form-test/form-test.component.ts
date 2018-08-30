import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {

  name = new FormControl('');


  /*
profileForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),

  address: new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
  })

});*/


  constructor(private formBuilder: FormBuilder) { }

  profileForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: ['']
    })
  });

  ngOnInit() {
  }

  updateName() {
    this.name.setValue('LEEROY');
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Huorra',
      address: {
        street: 'Elms street rofl'
      }
    });
  }

}
