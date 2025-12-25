// 설정값 (나중에 설정페이지에서 바꿀 수 있음)
let departureCity = "Seoul";
let arrivalCity = "Paris";

function getAirport(city) {
  const found = cities.find(c => c.name === city);
  return found ? found.airport : "XXX";
}

function makeQR(text) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`;
}

const fromCode = getAirport(departureCity);
const toCode = getAirport(arrivalCity);

// 화면 표시
document.getElementById("route").innerText =
  `${fromCode} → ${toCode}`;

document.getElementById("ticketQR").src =
  makeQR(`BOARDING PASS ${fromCode}-${toCode}`);

document.getElementById("mapQR").src =
  makeQR(`https://www.google.com/maps/search/${arrivalCity}`);
