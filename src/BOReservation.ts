import { Reservation } from "./reservation";

export class BOReservation extends Reservation {
  calculateTotalPrice(numNights: number, roomRate: number): number {
    const totalPrice = numNights * roomRate;
    const tax = totalPrice * 0.13; // 13% de impuesto
    return totalPrice + tax;
  }
}
