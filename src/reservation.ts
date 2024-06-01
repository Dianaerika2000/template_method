
export abstract class Reservation {
  // Metodo template
  makeReservation(numNights: number, roomRate: number, location: string): void {
    if (this.checkAvailability()) {
      const totalPrice = this.calculateTotalPrice(numNights, roomRate);
      this.confirmReservation(numNights, roomRate, totalPrice, location);
    } else {
      this.displayResult("No hay habitaciones disponibles.");
    }
  }

  checkAvailability(): boolean {
    return true; 
  }

  displayResult(message: string): void {
    const resultDiv = document.getElementById("reservationResult");
    if (resultDiv) {
      resultDiv.innerHTML = message;
    }
  }

  confirmReservation(numNights: number, roomRate: number, totalPrice: number, location: string): void {
    const receipt = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Confirmación de Reserva</h5>
          <div class="row">
            <div class="col">Ubicación:</div>
            <div class="col">${location}</div>
          </div>
          <div class="row">
            <div class="col">Número de noches:</div>
            <div class="col">${numNights}</div>
          </div>
          <div class="row">
            <div class="col">Tarifa por noche:</div>
            <div class="col">$${roomRate.toFixed(2)}</div>
          </div>
          <div class="row">
            <div class="col">Total:</div>
            <div class="col">$${totalPrice.toFixed(2)}</div>
          </div>
        </div>
      </div>`;

    this.displayResult(receipt);
  }
  
  abstract calculateTotalPrice(numNights: number, roomRate: number): number;
}
