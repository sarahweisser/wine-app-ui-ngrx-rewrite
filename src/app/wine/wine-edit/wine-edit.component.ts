// import {
//     Component,
//     OnInit,
//     Input,
//     EventEmitter,
//     Output,
//     OnChanges,
//     SimpleChanges
//   } from '@angular/core';
//   import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  
//   import { Wine } from '../wine';
//   import { GenericValidator } from '../../shared/generic-validator';
//   import { NumberValidators } from '../../shared/number.validator';
  
//   @Component({
//     selector: 'app-wine-edit',
//     templateUrl: './wine-edit.component.html'
//   })
//   export class WineEditComponent implements OnInit, OnChanges {
//     pageTitle = 'Wine Edit';
//     @Input() errorMessage: string;
//     @Input() selectedWine: Wine;
//     @Output() create = new EventEmitter<Wine>();
//     @Output() update = new EventEmitter<Wine>();
//     @Output() delete = new EventEmitter<Wine>();
//     @Output() clearCurrent = new EventEmitter<void>();
  
//     wineForm: FormGroup;
  
//     // Use with the generic validation message class
//     displayMessage: { [key: string]: string } = {};
//     private validationMessages: { [key: string]: { [key: string]: string } };
//     private genericValidator: GenericValidator;
  
//     constructor(private fb: FormBuilder) {
//       // Defines all of the validation messages for the form.
//       // These could instead be retrieved from a file or database.
//       this.validationMessages = {
//         productName: {
//           required: 'Wine name is required.',
//           minlength: 'Wine name must be at least three characters.',
//           maxlength: 'Wine name cannot exceed 50 characters.'
//         },
//         productCode: {
//           required: 'Wine code is required.'
//         },
//         starRating: {
//           range: 'Rate the product between 1 (lowest) and 5 (highest).'
//         }
//       };
  
//       // Define an instance of the validator for use with this form,
//       // passing in this form's set of validation messages.
//       this.genericValidator = new GenericValidator(this.validationMessages);
//     }
  
//     ngOnInit(): void {
//       // Define the form group
//       this.wineForm = this.fb.group({
//         productName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
//         productCode: ['', Validators.required],
//         starRating: ['', NumberValidators.range(1, 5)],
//         description: ''
//       });
  
//       // Watch for value changes for validation
//       this.wineForm.valueChanges.subscribe(
//         () => this.displayMessage = this.genericValidator.processMessages(this.wineForm)
//       );
//     }
  
//     ngOnChanges(changes: SimpleChanges): void {
//       // patch form with value from the store
//       if (changes.selectedWine) {
//         const wine = changes.selectedWine.currentValue as Wine;
//         this.displayWine(wine);
//       }
//     }
  
//     // Also validate on blur
//     // Helpful if the user tabs through required fields
//     blur(): void {
//       this.displayMessage = this.genericValidator.processMessages(this.wineForm);
//     }
  
//     displayWine(wine: Wine | null): void {
//       if (wine && this.wineForm) {
//         // Reset the form back to pristine
//         this.wineForm.reset();
  
//         // Display the appropriate page title
//         if (wine.id === 0) {
//           this.pageTitle = 'Add Wine';
//         } else {
//           this.pageTitle = `Edit Wine: ${wine.productName}`;
//         }
  
//         // Update the data on the form
//         this.wineForm.patchValue({
//           productName: wine.productName,
//           productCode: wine.productCode,
//           starRating: wine.starRating,
//           description: wine.description
//         });
//       }
//     }
  
//     cancelEdit(): void {
//       // Redisplay the currently selected product
//       // replacing any edits made
//       this.displayWine(this.selectedWine);
//     }
  
//     deleteWine(): void {
//       if (this.selectedWine && this.selectedWine.id) {
//         if (confirm(`Really delete the wine: ${this.selectedWine.productName}?`)) {
//           this.delete.emit(this.selectedWine);
//         }
//       } else {
//         // No need to delete, it was never saved
//         this.clearCurrent.emit();
//       }
//     }
  
//     saveWine(): void {
//       if (this.wineForm.valid) {
//         if (this.wineForm.dirty) {
//           // Copy over all of the original product properties
//           // Then copy over the values from the form
//           // This ensures values not on the form, such as the Id, are retained
//           const wine = { ...this.selectedWine, ...this.wineForm.value };
  
//           if (wine.id === 0) {
//             this.create.emit(wine);
//           } else {
//             this.update.emit(wine);
//           }
//         }
//       }
//     }
  
//   }
  