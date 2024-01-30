import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AlertComponent } from '../alert/alert.component';
import { SwitchService } from '../services/switch.service';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    AlertComponent,
  ],
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  //Grupo de datos a ingresar de la receta
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
  imgURL: any;

  constructor(private fb: FormBuilder, private modalSS: SwitchService) {}

  //Cargar el valor inicial del modal
  ngOnInit() {
    this.modalSS.$modal.subscribe((valor) => {
      this.modalSwitch = valor;
    });
  }

  //ingresar la lista de ingreientes
  createIngredient(): FormGroup {
    return this.fb.group({
      ingredient: '',
    });
  }

  //Abrir el modal
  openModal() {
    this.modalSwitch = true;
  }

  //Insertar ingrediente
  addIngredient(): void {
    this.ingredients.push(this.createIngredient());
  }

  //Eliminar el ingrediente
  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  //Obtener los ingredientes
  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  //Mensaje para validar modal para el modal
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
    // Recuperar las recetas existentes de LocalStorage
    let recetasExistentes: any[] | null = localStorage.getItem('recetas')
      ? JSON.parse(localStorage.getItem('recetas')!)
      : [];

    // Verificar si existen recetas antes de agregar otras
    if (recetasExistentes) {
      recetasExistentes.push(this.recipeForm.value);
      localStorage.setItem('recetas', JSON.stringify(recetasExistentes));
      this.recipeForm.reset();
    }
  }

  //Guardar la imagen para poder darle el formato para verla
  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(target.files[0]);
      reader.onload = (event) => {
        this.imgURL = (event.target as FileReader).result;
        this.recipeForm.controls['image'].setValue(this.imgURL);
      };
    }
  }
}
