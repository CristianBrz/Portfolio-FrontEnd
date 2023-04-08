import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  
  personaURL = 'http://localhost:8080/persona/'

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.personaURL + 'lista');
  }

  public detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.personaURL + `detail/${id}`);
  }

  public update(id: number, persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.personaURL + `update/${id}`, persona);
  }


  //Agregar multi ususario
  // public save(persona: Persona): Observable<any> {
  //   return this.httpClient.post<any>(this.personaURL + 'create', persona);
  // }
  // public delete(id: number): Observable<any> {
  //   return this.httpClient.delete<any>(this.personaURL + `delete/${id}`);
  // }
}
