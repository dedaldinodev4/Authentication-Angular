
export interface IUserLogin {
  user?: string | null;
  palavraPasse?: string | null;
}

export interface IUserCurrent {
  dataExpiracao: string;
  papeis: string[];
  token_acesso: string;
}

interface IReturn {
  codigo: number;
  mensagem: string;
}

export interface IUser {
  data: IUserCurrent;
  quantidadeTotalItens: number;
  retorno: IReturn;
}