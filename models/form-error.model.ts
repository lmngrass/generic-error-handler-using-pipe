/**
 * Default validation errors you can check
 * https://angular.dev/api/forms/Validators for the error keys
 */
export const FORM_ERRORS_DEFAULT_MESSAGES: VALIDATION_ERROR_TYPE = {
  required: "This field is required",
  min: (error: any) => `Value must be greater than ${error.min}`,
  max: (error: any) => `Value must be less than ${error.max}`,
  range: (error: any) => `Value must be between ${error.min} and ${error.max}`,
  minlength: (error: any) =>
    `Value must be at least ${error.minlength} characters long`,
  maxlength: (error: any) =>
    `Value must be no more than ${error.maxlength} characters long`,
  lengthRange: (error: any) =>
    `Value must be between ${error.minLength} and ${error.maxLength} characters long`,
};

/**
 * Form Messasge Error type
 */
export type VALIDATION_ERROR_TYPE = {
  [key: string]: string | ((error: any) => string);
};
