import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatDividerModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatSelectModule,
        MatSnackBarModule,
        MatDialogModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatSortModule,
        MatPaginatorModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatStepperModule,
        MatExpansionModule,
        MatListModule,
        MatTableModule
    ],
    exports: [
        MatDividerModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatSelectModule,
        MatSnackBarModule,
        MatDialogModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatSortModule,
        MatPaginatorModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatStepperModule,
        MatExpansionModule,
        MatListModule,
        MatTableModule
    ]
})
export class MaterialModule { }
