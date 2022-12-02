import { Time } from "@angular/common"

export interface Reserva{
    id: number,
    data: Date,
    horario:Time,
    dataentrega: Date,
    usuarioId: number,
    carroId: number,
    carro?:any
}

export interface Carros{
    id:number,
    nome:string,
    portas:number,
    npessoas:number,
    locadoraId:number,
    tipoCarroId:number,
}

export interface Locadoras {
    id: number,
    nome: string,
    endereco:  string,
    telefone: string
}

export interface TipoCarro{
    id:number,
    nome: string
}

