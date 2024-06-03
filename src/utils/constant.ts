import image1 from "../../src/assets/koala1.jpeg";
import image2 from "../../src/assets/koala2.jpeg";
import image3 from "../../src/assets/koala3.jpeg";
import image4 from "../../src/assets/koala4.jpg";

const LorenImpsu =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nisl vitae purus lobortis, quis scelerisque diam tincidunt. Donec eu risus urna. Sed quis enim vitae orci tristique imperdiet eget sed lectus. Suspendisse placerat mi id blandit accumsan. Integer sodales neque nisl, mollis consectetur sapien fringilla vitae. Etiam est sapien, fermentum id quam a, tincidunt vestibulum odio. Nullam dapibus porta elit, vel vestibulum nisl dictum eu. Quisque tincidunt vitae enim eget mollis. Aenean tincidunt massa mauris, sit amet porta libero auctor nec. Phasellus id tincidunt eros, vitae gravida turpis. Nam mattis eget turpis vitae aliquam.Suspendisse mattis ex a velit posuere posuere.In vitae justo scelerisque nulla tincidunt vehicula.Ut vulputate iaculis consequat.Donec in mauris euismod, tempus dolor sed, pretium elit.Curabitur in dui ultrices, tristique leo eu, feugiat tortor.Etiam at auctor dui.Ut fermentum pulvinar turpis, finibus vulputate metus eleifend in.Curabitur posuere eu magna vitae commodo.Pellentesque quis dapibus lectus.Nam elementum dolor vel iaculis consectetur.Praesent feugiat porta velit pulvinar faucibus.Suspendisse sed iaculis metus.Morbi blandit a sem et varius.";

const LorenImpsu2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere odio eget odio tempor, non."

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

const hostelImages = [
  {
    img: image1,
    title: "Habitaciones individuales",
    description: LorenImpsu,
  },
  {
    img: image2,
    title: "Habitaciones compartidas ",
    description: LorenImpsu,
  },
  {
    img: image3,
    title: "Habitaciones familiares",
    description: LorenImpsu,
  },
];

const imageData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "SAN JUAN",
    description: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "BODEGAS",
    description: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    description: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    description: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    description: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    description: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    description: "@tjdragotta",
  },
  // {
  //   img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
  //   title: "Fern",
  //   description: "@katie_wasserman",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
  //   title: "Mushrooms",
  //   description: "@silverdalex",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
  //   title: "Tomato basil",
  //   description: "@shelleypauls",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
  //   title: "Sea star",
  //   description: "@peterlaster",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
  //   title: "Bike",
  //   description: "@southside_customs",
  // },
];

const commentData = [
  {
    img: "https://picsum.photos/400/300",
    title: "Breakfast",
    description: LorenImpsu2,
  },
  {
    img: "https://picsum.photos/400/300",
    title: "Burger",
    description: LorenImpsu2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Camera",
    description: LorenImpsu2,
  },
  {
    img: image4,
    title: "Habitaciones familiares",
    description: LorenImpsu,
  },
];

const ownerData = [
  {
    name: "Damian",
    descriptions: "qalsjdalsdasñldkq1231254twed",
  },
  {
    name: "Matias",
    descriptions: LorenImpsu,
  },
  {
    name: "Nahuel",
    descriptions: "asjhda",
  },
];

export { BedWithService, hostelImages, imageData, commentData, ownerData };
