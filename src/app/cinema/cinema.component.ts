import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  cinemaName: string;
  tickets: Ticket;
  address: Address;
  films: string[];
  editMode = false;

  constructor() { }

  ngOnInit(): void {
    this.cinemaName = 'Kino Lublin';
    this.tickets={
      ulgowy: 10,
      normalny: 15,
    }
    this.address={
      city:'Lublin',
      street:'ul.Racławickie',
      number:10,
    }
    this.films= ['Władca Pierścieni: Drużyna Pierścienia']
  }
  changeEditMode(): void{
    this.editMode = !this.editMode;
  }
  addFilm(film): void{
    this.films.push(film);
  }
  deleteFilm(film): void {
    for(let i=0; i<this.films.length;i++){
      if(this.films[i] === film){
        this.films.splice(i, 1);
      }
    }
  }

}
interface Address{
  city:string;
  street:string;
  number:number;
}

interface Ticket{
  ulgowy:number;
  normalny:number;
}
