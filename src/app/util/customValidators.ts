import {FormControl, ValidationErrors} from "@angular/forms";
/**
 * Created by chery on 28.05.2018.
 */

export class CustomValidators {
  static numeric(c: FormControl): ValidationErrors {
    const isValidNumeric = /^\d*$/.test(c.value);
    const message = {
      'custom': 'This field can contain only numeric values.'
    };
    return isValidNumeric ? null : message;
  }
}
