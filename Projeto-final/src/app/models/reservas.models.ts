import { Time } from "@angular/common"

export interface Reserva{
    id: number,
    data: Date,
    horario:Time,
    dataentrega: Date,
    usuarioId: number,
    carroId: number
}