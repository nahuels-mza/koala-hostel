import image3 from "../../src/assets/koala4.jpg";
const Service = {
  wifi: "Free wi-fi",
  air: "Air Conditional ",
  bath: "Bathtub",
  smoke: "No Smoking",
  bedClothes: "Ropa de cama",
  heat: "Calefaccion",
  fan: "Ventilador",
  plug: "Plugs near bed",
};

const BedWithService = [
  {
    label: "Litrera",
    description: "Cama en habitación compartida mixta de 4 camas",
    services: [Service.wifi, Service.air],
    image: image3,
  },
  {
    label: "Litrera Full Service",
    description: "Cama en habitación compartida de 4 camas",
    services: [Object.values(Service)],
    image: image3,
  },
  {
    label: "Cama Individual",
    description: "Cama individual en habitación compartida",
    services: [Service.heat, Service.fan, Service.plug],
    image: image3,
  },
];

export { BedWithService };
