# Generic Error Handler Using Pipe

This project provides a reusable Angular pipe, `FormErrorPipe`, to handle form validation error messages in a clean and customizable way. It allows you to define default error messages and override them with custom messages as needed.

## Features

- Default error messages for common validation errors.
- Support for custom error messages.
- Handles dynamic error messages using functions.
- Suppresses warnings for missing custom validation keys if desired.

## Installation

1. Clone the repository.
2. Add the `FormErrorPipe` and `form-error.model.ts` to your Angular project.
3. Import and declare the pipe in your Angular module/standalone component.

## Usage

### Default Error Messages

The `FORM_ERRORS_DEFAULT_MESSAGES` object in `form-error.model.ts` defines default error messages for common validation errors. For example:

- `required`: "This field is required"
- `min`: "Value must be greater than {min}"
- `maxlength`: "Value must be no more than {maxlength} characters long"

### Using the Pipe in Templates

You can use the `FormErrorPipe` in your Angular templates to display error messages for form controls.

```html
<div *ngIf="formControl.errors as errors">
  <span>{{ errors | formError }}</span>
</div>
<!-- or using @if -->
@if (formControl?.errors; as errors) {
<span> {{ errors | formError }}</span>
}
```

or with mat-error

```html
<mat-error>
  {{ formControl?.errors | formError: customValidationForRequied : false }}
</mat-error>
```

### Custom Validation Messages

You can pass custom validation messages to the pipe as an optional parameter.

```html
<div *ngIf="formControl.errors as errors">
  <span
    >{{ errors | formError: { required: 'Please fill out this field' } }}</span
  >
</div>
```

### Suppressing Warnings

By default, the pipe logs a warning if a custom validation message is missing for a specific error key. You can suppress this warning by passing `true` as the third parameter.

```html
<div *ngIf="formControl.errors as errors">
  <span>{{ errors | formError: customMessages: true }}</span>
</div>
```

## Error Handling

If neither the default nor custom error messages contain a key for a specific error, the pipe throws an error. Ensure all required keys are defined in either `FORM_ERRORS_DEFAULT_MESSAGES` or your custom messages.

## License

This project is licensed under the MIT License.
