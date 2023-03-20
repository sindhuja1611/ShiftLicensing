
export interface Patient {
    id: number,
    name: string,
    cpf: string,
    birthDate: string,
    //enderecos: Endereco[];
    phone?: string[];
    email: string,
}
