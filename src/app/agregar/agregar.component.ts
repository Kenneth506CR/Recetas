import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AlertComponent } from '../alert/alert.component';
import { SwitchService } from '../services/switch.service';
import { OnInit } from '@angular/core';
import { RecetaComponent } from '../receta/receta.component';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    AlertComponent,
    RecetaComponent,
  ],
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  recipeForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required],
    ingredients: this.fb.array([this.createIngredient()]),
  });

  recetas: any[] = [];

  message: string | undefined;

  modalSwitch: Boolean | undefined;
  switchService: any;

  constructor(private fb: FormBuilder, private modalSS: SwitchService) {}

  ngOnInit() {
    this.modalSS.$modal.subscribe((valor) => {
      this.modalSwitch = valor;
    });
  }

  createIngredient(): FormGroup {
    return this.fb.group({
      ingredient: '',
    });
  }

  openModal() {
    this.modalSwitch = true;
  }

  addIngredient(): void {
    this.ingredients.push(this.createIngredient());
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  //Mensaje para el modal
  onSubmit() {
    if (this.recipeForm.invalid) {
      this.message = 'Por favor, llena todos los campos.';
    } else {
      this.message = 'La receta se guardó correctamente.';
      console.warn(this.recipeForm.value);
      this.guardarReceta();
    }
  }

  // Método para guardar la receta
  guardarReceta() {
    // Agregar la receta al arreglo de recetas
    this.recetas.push(this.recipeForm.value);

    // Guardar los datos en LocalStorage
    localStorage.setItem('recetas', JSON.stringify(this.recetas));

    // Limpiar el formulario después de guardar la receta
    this.recipeForm.reset();
    console.log(this.recetas);
  }
}
