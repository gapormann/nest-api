import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async listUser() {
    // chamada de banco de dados
    // filtro de dados
    // regra de negócio
    return [
      {
        name: 'Ash',
        password: 'catelo',
      },
      {
        name: 'Leandro',
        password: 'winks',
      },
    ];
  }
}
