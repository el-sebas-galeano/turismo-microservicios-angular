export class Credencial {
    idCredencial: number;
    username: string;
    password: string;
    rol: string;
  
    constructor(idCredencial: number, username: string, password: string, rol: string) {
      this.idCredencial = idCredencial;
      this.username = username;
      this.password = password;
      this.rol = rol;
    }
  }
  