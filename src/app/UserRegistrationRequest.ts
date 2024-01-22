export class UserRegistrationRequest {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  mail: string;

  constructor(formRegistrationData?: Partial<UserRegistrationRequest>) {
    Object.assign(this, formRegistrationData);
  }
}
