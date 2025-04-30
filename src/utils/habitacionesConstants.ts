import gifHabitacion1 from "../assets/habitacion1/habitacion1.gif"


const LorenImpsu2 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere odio eget odio tempor, non.";

  const service = {
    wifi: { description: "Free wi-fi", icon: "wifi_outlines_icon" },
    air: { description: "Air Conditional ", icon: "ac_unit_outlines_icon" },
    bath: { description: "Bathtub", icon: "bathroom_outlines_icon" },
    smoke: { description: "No Smoking", icon: "smoke_free_outlines_icon" },
    bedClothes: { description: "Ropa de cama", icon: "bed_outlined_icon" },
    heat: {
      description: "Calefaccion",
      icon: "local_fire_department_outlined_icon",
    },
    fan: { description: "Ventilador", icon: "filter_vintage_outlined_icon" },
    plug: { description: "Plugs near bed", icon: "power_outlined_icon" },
  };

  const bedWithService = [
    {
      label: "Habitacion Familiar Cuadruple ",
      description: LorenImpsu2,
      services: [service.wifi, service.fan],
      gif: "./habitacion1Video.mp4",
      type: "familiar"
    },

    {
      label: "Habitacion Familiar Doble",
      description: LorenImpsu2,
      services: [
        service.wifi,
        service.air,
        service.bath,
        service.smoke,
        service.bedClothes,
        service.fan,
      ],
      gif: "./habitacion2Video.mp4",
      type: "familiar"
    },
    {
      label: "Dormitorio Compartida de 4 camas",
      description: "Habitacion Cuadruple para compartir hasta 4 personas. Con vista al patio interno",
      services: [service.heat, service.fan, service.plug],
      gif: "./habitacionCompartida1.mp4",
      type: "compartida"
    },
    {
      label: "Dormitorio Femenino Compartida de 4 camas",
      description: "Habitacion sólo para mujéres, cuádruple para compartir hasta 4 personas. Sus ventanas dan vista al boulevard principal",
      services: [service.heat, service.fan, service.plug, service.bedClothes,],
      gif: gifHabitacion1,
      type: "compartida"
    },
    {
      label: "Dormitorio Compartida de 8 Camas",
      description: "Habitacion compartida con camas para 8 personas. Con vista al patio interno",
      services: [service.heat, service.fan, service.plug],
      gif: gifHabitacion1,
      type: "compartida"
    },

  ];

  export {bedWithService}