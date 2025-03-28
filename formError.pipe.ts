import { Pipe, PipeTransform } from "@angular/core";
import { ValidationErrors } from "@angular/forms";
import {
  FORM_ERRORS_DEFAULT_MESSAGES,
  VALIDATION_ERROR_TYPE,
} from "./models/form-error.model";
@Pipe({
  name: "formError",
  pure: true,
})
export class FormErrorPipe implements PipeTransform {
  /**
   * Handles Error message for formcontrols
   * @param errors form errors passsed
   * @param customValidationMessages Custom validation with key and message/function
   * @param suppressCustomValidationWarning false by default, if true it will suppress the logs in case where custom form validation does not container particular key
   * @returns error message for the particular control
   */
  transform(
    errors: ValidationErrors | null | undefined,
    customValidationMessages?: VALIDATION_ERROR_TYPE,
    suppressCustomValidationWarning?: boolean
  ): string {
    if (!errors) {
      return "";
    }
    // for now we will only use first Error
    // we can handle it to combine it though
    let [errorKey, errorValue] = Object.entries(errors)[0];
    if (!errorKey || !errorValue) {
      return "";
    }
    // check if custom validation has the key
    let errorMessage;
    if (customValidationMessages && customValidationMessages[errorKey]) {
      errorMessage = customValidationMessages[errorKey];
    } else {
      if (!suppressCustomValidationWarning) {
        console.log(
          `[FormErrorPipe] Passed custom validation doesn't contain ${errorKey}, it will use default error messages, can pass suppressCustomValidationWarning as true in pipe input to avoid this log`
        );
      }
      errorMessage = FORM_ERRORS_DEFAULT_MESSAGES[errorKey];
    }
    if (!errorMessage) {
      throw new Error(
        `Custom and Default Error message does not contain ${errorKey} key in them , please add it with appropriate message!`
      );
    }
    if (typeof errorMessage === "function") {
      return errorMessage(errorValue);
    }
    return errorMessage;
  }
}
