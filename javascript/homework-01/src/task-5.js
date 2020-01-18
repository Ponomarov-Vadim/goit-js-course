"use strict";
const countryName = prompt("What country name?");
const deliveryToChina = 100;
const deliveryToChile = 250;
const deliveryToAustralia = 170;
const deliveryToIndia = 80;
const deliveryToJamaica = 120;

if (countryName !== null) {
  switch (countryName.toLowerCase()) {
    case "китай":
      console.log(`Доставка в Китай будет стоить ${deliveryToChina} кредитов`);
      break;

    case "чили":
      console.log(`Доставка в Чили будет стоить ${deliveryToChile} кредитов`);
      break;

    case "австралия":
      console.log(
        `Доставка в Австралия будет стоить ${deliveryToAustralia} кредитов`
      );
      break;

    case "индия":
      console.log(`Доставка в Индия будет стоить ${deliveryToIndia} кредитов`);
      break;

    case "ямайка":
      console.log(
        `Доставка в Ямайка будет стоить ${deliveryToJamaica} кредитов`
      );
      break;

    default:
      alert("В вашей стране доставка не доступна");
      break;
  }
} else {
  console.log("Отменено пользователем!");
}
