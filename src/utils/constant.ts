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
    label: "Bed 1",
    description: "Cama en habitación compartida mixta de 4 camas",
    services: [Service.wifi, Service.air],
  },
  {
    label: "Bed 2",
    description: "Cama en habitación compartida de 4 camas",
    services: [Service],
  },
  {
    label: "Bed 3",
    description: "Cama individual en habitación compartida",
    services: [Service.heat, Service.fan, Service.plug],
  },
];

export { BedWithService };
