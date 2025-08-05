function locale(text: string) {
  let key = window.navigator.language.split("-")[0];
  console.log(text);
  if (!["en", "es"].includes(key)){
    key = "en"
  }
  console.log(key);
  const translate: {
    [key: string]: {
      [lang: string]: string;
    };
  } = {
    home: {
      en: "Welcome, we've waiting for you ",
      es: "Bien bebidos a Nuestro Hogar",
    },
    dateL: {
      en: "Check In",
      es: "Llegada",
    },
    dateS: {
      en: "Check Out",
      es: "Salida",
    },
    menuAbout: {
      en: "About Us",
      es: "Quienes Somos",
    },
    menuHostel: {
      en: "Home",
      es: "Nuestro Hostel",
    },
    bedroomsMainTitle: {
      en: "Walk our rooms",
      es: "Conozca nuestras habitaciones",
    },
    bedroomsMainSubtitle: {
      en: "Feels like home",
      es: "Comodidad y tranquilidad",
    },
    bedroomsPolicy: {
      en: "Hostel Plaza Policy and Conditions:",
      es: "Politicas y Condiciones del Hostel",
    },
    bedroomsRateTitleUs: {
      en: "Rates for Foreign Guests:",
      es: "Tarifas para extranjeros:",
    },
    bedroomsRateDescUs: {
      en: "All rates listed are tax-exempt for foreign guests who present a valid passport and immigration stamp at check-in. \nPayment can be made in US dollars or Argentine pesos via cash, card, or bank transfer.",
      es: "Todas las tarifas indicadas están exentas de impuestos para los huéspedes extranjeros que presenten un pasaporte válido y sello de inmigración al momento del check-in. El pago puede realizarse en dólares estadounidenses o pesos argentinos en efectivo, tarjeta o transferencia bancaria.",
    },
    bedroomsRateTitleArs: {
      en: "Rates for Domestic Guests:",
      es: "Tarifas para argentinos:",
    },
    bedroomsRateDescArs: {
      en: "Argentine nationals are subject to a 21% VAT (Value Added Tax) which will be added to the listed rates.",
      es: "Los nacionales argentinos están sujetos a un IVA (Impuesto al Valor Agregado) del 21% que se agregará a las tarifas indicadas.",
    },
    bedroomsCancelationTitle: {
      en: "Booking and Cancellation Policies:",
      es: "Polliticas de reserva y cancelación:",
    },
    bedroomsCancelationDesc: {
      en: "A valid credit card or deposit is required to confirm your reservation. Cancellations made at least 48 hours prior to check-in will not incur charges. Cancellations within 48 hours or no-shows will result in a charge equal to the first night's stay.",
      es: "Se requiere una tarjeta de crédito válida o un depósito para confirmar la reserva. Las cancelaciones realizadas con al menos 48 horas de antelación a la llegada no tendrán coste alguno. Las cancelaciones con menos de 48 horas de antelación o la no presentación supondrán un cargo equivalente a la primera noche de estancia.",
    },
    bedroomsLateCheckOut: {
      en: "Late check-outs may incur additional charges.",
      es: "Las salidas fueras de horario pueden conllevar cargos adicionales.",
    },
    habFamCuadruple: {
      en: "Quadruple Family Room",
      es: "Habitacion Familiar Cuadruple",
    },
    habFamDoouble: {
      en: "Double Family Room",
      es: "Habitacion Familiar Doble",
    },
    habFemenina: {
      en: "Quadruple Female Room",
      es: "Dormitorio Femenino Compartido de 4 camas",
    },
    habCompartidaCuadruple: {
      en: "Quadruple Shared Room",
      es: "Dormitorio Compartido de 4 camas",
    },
    habCompartidaOcho: {
      en: "8-Bed Shared Room",
      es: "Dormitorio Compartido de 8 Camas",
    },
    habPrivadaDoble: {
      en: "Double Private Room",
      es: "Habitacion Privada doble",
    },
    habPrincipal: {
      en: "Family Rooms",
      es: "Habitaciones Familiares",
    },
    habCompartida: {
      en: "Shared Rooms",
      es: "Habitaciones Compartidas",
    },
    habPrivada: {
      en: "Privates Rooms",
      es: "Habitaciones Individuales",
    },
    habServicios:{
      en: "Services",
      es: "Servicios",
    },
    founderCarousel: {
      en: "This is Us",
      es: "Nuestra historia en imagenes",
    },
    wspIntro: {
      en: "Hi there, I'd like to know availability for ",
      es: "Hola Hostel Plaza, quisiera realizar una reserva para los dias",
    },
  };
  return translate[text][key] ?? text;
}
export { locale };
