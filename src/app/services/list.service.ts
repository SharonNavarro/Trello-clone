import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { checkToken } from '@interceptors/token.interceptor';
import { CreateListDto, List } from '@models/list.model';

@Injectable()
export class ListService {
  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  create(dto: CreateListDto) {
    return this.http.post<List>(`${this.apiUrl}/lists`, dto, {
      context: checkToken(),
    });
  }
}
