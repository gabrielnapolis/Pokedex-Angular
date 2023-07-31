import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  constructor(private httpCliente: HttpClient) {
    this.carregarPokemons();
  }

  async carregarPokemons() {
    const req = await firstValueFrom(this.httpCliente.get<any>(this.baseUrl));

    const pokemons = req.results;

    console.log(pokemons);

  }
}
