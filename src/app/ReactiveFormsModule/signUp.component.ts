import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Customer } from 'app/ReactiveFormsModule/customer';

@Component({
  selector: 'app-signup',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})

export class SignUpComponent {
  customer: Customer= new Customer();

      save(customerForm: NgForm) {
          console.log(customerForm.form);
          console.log('Saved: ' + JSON.stringify(customerForm.value));
      }
}
