import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRegistrationRequest } from './UserRegistrationRequest';

@Injectable({ providedIn: 'root' })
export class LoginService {
  static readonly ROOT_BACKEND_PATH = '/api';

  constructor(private httpClient: HttpClient) {}

  callRegistrationService(
    userRegistrationRequest: UserRegistrationRequest
  ): Observable<void> {
    return this.httpClient.post<void>(
      `${LoginService.ROOT_BACKEND_PATH}/login/register`,
      userRegistrationRequest
    );
  }
}
