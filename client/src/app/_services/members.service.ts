import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Member } from '../_models/member';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs';
import { UserParams } from '../_models/userParams';
import { getPaginatedResult, getPaginationHeaders } from './paginationHelper';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }

  getMembers(userParams: UserParams) {   
    let params = getPaginationHeaders(userParams.pageNumber, userParams.pageSize);
    return getPaginatedResult<Member[]>(this.baseUrl + 'users', params, this.http);
  }  

  getMember(username: string) {
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }
}
