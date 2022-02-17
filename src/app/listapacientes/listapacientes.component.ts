import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface PacientesElement {
  nome: string;
  medico: string;
  idade: number;
  email: string;
  planodesaude: string;
}

const ELEMENT_DATA: PacientesElement[] = [
  {planodesaude: 'EMil',nome: 'Gervasio da Silva', medico: 'Juarez Phd',idade: 81, email: 'gervasio@lelolelo.com.br'},
  {planodesaude: 'SoMil',nome: 'João da Silva', medico: 'Juarez Phd',idade: 50, email: 'joao@lelolelo.com.br'},
  {planodesaude: 'Terramil',nome: 'Maria da Silva', medico: 'Gervazio Phd',idade: 55, email: 'maria@lelolelo.com.br'},
  {planodesaude: 'Terramil',nome: 'Joaquina Montes', medico: 'Maria Phd',idade: 56, email: 'joaquina@lelolelo.com.br'},
];

@Component({
  selector: 'app-listapacientes',
  templateUrl: './listapacientes.component.html',
  styleUrls: ['./listapacientes.component.css']
})
export class ListapacientesComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'medico', 'idade', 'email', 'planodesaude'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}
