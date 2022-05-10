import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL, createItemURL, deleteItem, getItemDetailsURL, getItemListURL } from '../api.constants';
import { IItem } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class GettingApisService {

  constructor(private httpClient: HttpClient) { }

  getItemList(): Observable<Array<IItem>> {
    const url = BASE_URL + getItemListURL;

    return this.httpClient.get<Array<IItem>>(url);

  }

  getItemDetailsById(id: number): Observable<Array<IItem>> {
    const url = BASE_URL + getItemDetailsURL + '/' + id;

    return this.httpClient.get<Array<IItem>>(url);

  }

  
  createItem(item: number): Observable<Array<IItem>> {
    const url = BASE_URL + createItemURL;

    return this.httpClient.post<Array<IItem>>(url, item);

  }

  removeItem(id: number): Observable<Array<IItem>> {
    const url = BASE_URL + deleteItem + '/' + id;

    return this.httpClient.delete<Array<IItem>>(url);

  }
  

}
