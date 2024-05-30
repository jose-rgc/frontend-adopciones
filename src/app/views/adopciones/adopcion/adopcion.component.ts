import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { DocsExampleComponent } from '@docs-components/public-api';

@Component({
  selector: 'app-adopcion',
  standalone: true,
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent,CardBodyComponent, 
     FormsModule, FormDirective, FormLabelDirective, FormControlDirective,
    ButtonDirective, NgStyle, TextColorDirective, ReactiveFormsModule, FormSelectDirective,
    TableDirective, TableColorDirective, TableActiveDirective],
  templateUrl: './adopcion.component.html',
  styleUrl: './adopcion.component.scss'
})
export class AdopcionComponent {

}
