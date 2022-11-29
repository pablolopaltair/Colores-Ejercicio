import { Component, OnInit } from '@angular/core';
import { colores } from 'src/app/interfaz';
import { ColorsService } from 'src/app/services/colors.service';

@Component({
  selector: 'app-colors-list',
  templateUrl: './colors-list.component.html',
  styleUrls: ['./colors-list.component.css'],
})
export class ColorsListComponent implements OnInit {
  constructor(private cService: ColorsService) {}

  ListaColores: any[] = [];

  getColors() {
    this.cService.getColors().subscribe((resp) => {
      console.log(resp);
      resp.data.forEach((color: colores) => {
        this.ListaColores.push(color);
      });
    });
  }

  ngOnInit(): void {this.getColors()}
}
