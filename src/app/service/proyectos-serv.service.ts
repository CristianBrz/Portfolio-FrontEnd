import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyectos } from '../model/proyectos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProyectosServService {
  proyURL = 'https://backendportfolio-nq37.onrender.com/proyectos/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.proyURL + 'lista');
  }

  public detail(id: number): Observable<Proyectos> {
    return this.httpClient.get<Proyectos>(this.proyURL + `detail/${id}`);
  }

  public save(proyecto: Proyectos): Observable<any> {
    return this.httpClient.post<any>(this.proyURL + `create`, proyecto);
  }

  public update(id: number, proyecto: Proyectos): Observable<any> {
    return this.httpClient.put<any>(this.proyURL + `update/${id}`, proyecto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.proyURL + `delete/${id}`);
  }
}
