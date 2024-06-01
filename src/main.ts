import { BOReservation } from "./BOReservation";
import { ESReservation } from "./ESReservation";
import { USReservation } from "./USReservation";
import { Reservation } from "./reservation";

document.addEventListener('DOMContentLoaded', () => {
  const reservarHotelCity = document.getElementById('reservarHotelCity');
  const reservarHotelBeach = document.getElementById('reservarHotelBeach');
  const reservarHotelMountain = document.getElementById('reservarHotelMountain');

  if (reservarHotelCity) {
    reservarHotelCity.addEventListener('click', () => {
      mostrarFormularioReserva('us', 120);
    });
  }

  if (reservarHotelBeach) {
    reservarHotelBeach.addEventListener('click', () => {
      mostrarFormularioReserva('es', 180);
    });
  }

  if (reservarHotelMountain) {
    reservarHotelMountain.addEventListener('click', () => {
      mostrarFormularioReserva('bo', 80);
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const reservationButton = document.getElementById("reservationButton");
  if (reservationButton) {
    reservationButton.addEventListener("click", makeReservation);
  }
});

function mostrarFormularioReserva(location: string, roomRate: number) {
  const formularioReserva = document.getElementById('formularioReserva');
  const locationElement = document.getElementById('location') as HTMLSelectElement;
  const roomRateElement = document.getElementById('roomRate') as HTMLInputElement;

  if (formularioReserva && locationElement && roomRateElement) {
    formularioReserva.classList.remove('d-none');
    locationElement.value = location;
    roomRateElement.value = roomRate.toString();
  }
}

function makeReservation(): void {
  const numNightsElement = document.getElementById('numNights') as HTMLInputElement;
  const locationElement = document.getElementById('location') as HTMLSelectElement;
  const roomRateElement = document.getElementById('roomRate') as HTMLInputElement;

  if (!numNightsElement || !locationElement || !roomRateElement) {
    console.error('One or more elements are missing');
    return;
  }

  const numNights = parseInt(numNightsElement.value);
  const location = locationElement.value;
  const locationText = locationElement.selectedOptions[0].text;
  const roomRate = parseFloat(roomRateElement.value);

  let reservationSystem: Reservation;

  switch (location) {
    case 'us':
      reservationSystem = new USReservation();
      break;
    case 'es':
      reservationSystem = new ESReservation();
      break;
    case 'bo':
      reservationSystem = new BOReservation();
      break;
    default:
      console.error('Ubicación no válida');
      return;
  }

  reservationSystem.makeReservation(numNights, roomRate, locationText); 
}
