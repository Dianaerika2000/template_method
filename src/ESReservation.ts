import { Reservation } from "./reservation";

export class ESReservation extends Reservation {
  calculateTotalPrice(numNights: number, roomRate: number): number {
    const totalPrice = numNights * roomRate;
    const tax = totalPrice * 0.15; // 15% de impuesto
    const tourismFee = 5.0; // Tarifa de turismo fija
    return totalPrice + tax + tourismFee;
  }
}
