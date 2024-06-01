import { Reservation } from "./reservation";

export class USReservation extends Reservation {
  calculateTotalPrice(numNights: number, roomRate: number): number {
    const totalPrice = numNights * roomRate;
    const tax = totalPrice * 0.08; // 8% de impuesto
    return totalPrice + tax;
  }
}
