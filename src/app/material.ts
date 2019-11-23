import {NgModule} from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatProgressSpinnerModule, MatListModule,
    MatDialogModule, MatRadioModule, MatChipsModule, MatRippleModule, MatSnackBarModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatTreeModule,
    MatButtonToggleModule, MatTooltipModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const MATERIAL_MODULES = [
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatDialogModule,
    MatRadioModule,
    MatChipsModule,
    MatRippleModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatTreeModule,
    MatButtonToggleModule
];

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        ...MATERIAL_MODULES
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        ...MATERIAL_MODULES
    ]
})

export class MaterialModule {
}
