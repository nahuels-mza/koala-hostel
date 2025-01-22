import gifHabitacion1 from "../assets/habitacion1/habitacion1.gif"
const LorenImpsu =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nisl vitae purus lobortis, quis scelerisque diam tincidunt. Donec eu risus urna. Sed quis enim vitae orci tristique imperdiet eget sed lectus. Suspendisse placerat mi id blandit accumsan. Integer sodales neque nisl, mollis consectetur sapien fringilla vitae. Etiam est sapien, fermentum id quam a, tincidunt vestibulum odio. Nullam dapibus porta elit, vel vestibulum nisl dictum eu. Quisque tincidunt vitae enim eget mollis. Aenean tincidunt massa mauris, sit amet porta libero auctor nec. Phasellus id tincidunt eros, vitae gravida turpis. Nam mattis eget turpis vitae aliquam.Suspendisse mattis ex a velit posuere posuere.In vitae justo scelerisque nulla tincidunt vehicula.Ut vulputate iaculis consequat.Donec in mauris euismod, tempus dolor sed, pretium elit.Curabitur in dui ultrices, tristique leo eu, feugiat tortor.Etiam at auctor dui.Ut fermentum pulvinar turpis, finibus vulputate metus eleifend in.Curabitur posuere eu magna vitae commodo.Pellentesque quis dapibus lectus.Nam elementum dolor vel iaculis consectetur.Praesent feugiat porta velit pulvinar faucibus.Suspendisse sed iaculis metus.Morbi blandit a sem et varius.";

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
      gif: gifHabitacion1
    },
    {
      label: "Habitacion Familiar Doble",
      description: LorenImpsu,
      services: [
        service.wifi,
        service.air,
        service.bath,
        service.smoke,
        service.bedClothes,
        service.fan,
      ],
      gif: gifHabitacion1
    },
    {
      label: "Habitacion Familiar Cuadruple",
      description: "Habitacion Familiar para hasta 4 personas",
      services: [service.heat, service.fan, service.plug],
      gif: gifHabitacion1
    },
  ];

  export {bedWithService}