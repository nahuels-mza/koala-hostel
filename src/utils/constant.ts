import habPrincipal from "../../src/assets/habPrincipalHome.jpg";
import habCompartida from "../../src/assets/habCompartidaHome.jpg";
import habPrivada from "../../src/assets/habIndividualHome.jpg";
import image3 from "../../src/assets/backgroud.png";
import psa from "../../src/assets/servicios/servicio_psa.jpg";
import desayuno from "../../src/assets/servicios/desayuno1.jpeg";
import equipaje from "../../src/assets/servicios/guardaequipaje.png";
import bar2 from "../../src/assets/servicios/bar2.jpg";
import cowork from "../../src/assets/servicios/cowork.jpg";
import eventos from "../../src/assets/servicios/eventos.jpg";
import eventos1 from "../../src/assets/servicios/eventos1.jpg";
import patioC from "../../src/assets/servicios/patioColonial.jpg";
import patio from "../../src/assets/servicios/patio.jpg";
import patio1 from "../../src/assets/servicios/patio1.jpg";
import patio2 from "../../src/assets/servicios/patio2.jpg";
import patio3 from "../../src/assets/servicios/patio3.jpg";
import patio4 from "../../src/assets/servicios/patio4.jpg";
import patio5 from "../../src/assets/servicios/patio5.jpg";
import patio6 from "../../src/assets/servicios/patio6.jpg";
import patio7 from "../../src/assets/servicios/patio7.jpg";
import patio8 from "../../src/assets/servicios/patio8.jpg";
import { locale } from "./locale";

const LorenImpsu =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nisl vitae purus lobortis, quis scelerisque diam tincidunt. Donec eu risus urna. Sed quis enim vitae orci tristique imperdiet eget sed lectus. Suspendisse placerat mi id blandit accumsan. Integer sodales neque nisl, mollis consectetur sapien fringilla vitae. Etiam est sapien, fermentum id quam a, tincidunt vestibulum odio. Nullam dapibus porta elit, vel vestibulum nisl dictum eu. Quisque tincidunt vitae enim eget mollis. Aenean tincidunt massa mauris, sit amet porta libero auctor nec. Phasellus id tincidunt eros, vitae gravida turpis. Nam mattis eget turpis vitae aliquam.Suspendisse mattis ex a velit posuere posuere.In vitae justo scelerisque nulla tincidunt vehicula.Ut vulputate iaculis consequat.Donec in mauris euismod, tempus dolor sed, pretium elit.Curabitur in dui ultrices, tristique leo eu, feugiat tortor.Etiam at auctor dui.Ut fermentum pulvinar turpis, finibus vulputate metus eleifend in.Curabitur posuere eu magna vitae commodo.Pellentesque quis dapibus lectus.Nam elementum dolor vel iaculis consectetur.Praesent feugiat porta velit pulvinar faucibus.Suspendisse sed iaculis metus.Morbi blandit a sem et varius.";

const LorenImpsu2 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere odio eget odio tempor, non.";

const WhatsAppMessage = locale("wspIntro");

const hostelImages = [
  {
    img: habPrincipal,
    title: locale("habPrincipal"),
    type: "familiar",
  },
  {
    img: habCompartida,
    title: locale("habCompartida"),
    type: "compartida",
  },
  {
    img: habPrivada,
    title: locale("habPrivada"),
    type: "individual",
  },
];

const agenciaImages = [
  {
    id: 1,
    img: "https://picsum.photos/id/134/400/300",
    title: "Ciudad",
    description: LorenImpsu2,
    videoUrl:
      "https://www.shutterstock.com/shutterstock/videos/1100619309/preview/stock-footage-city-of-mendoza-argentina-aerial-drone-above-green-landscape-and-metropolitan-area-great-wine.webm",
    wspMessage: `${WhatsAppMessage} tour en la ciudad`,
  },
  {
    id: 2,
    img: "https://001e6926.rocketcdn.me/wp-content/uploads/elementor/thumbs/Gastronomia-en-bodegas-q9zp70jjnj8fa4r5u3tsf5hskepvx20va3kv7g226g.jpg",
    title: "Bodegas",
    description: LorenImpsu2,
    videoUrl:
      "https://www.shutterstock.com/shutterstock/videos/1035525677/preview/stock-footage-argentina-circa-aerial-over-a-woman-walking-through-a-vineyard-winery-in-argentina.webm",
    wspMessage: `${WhatsAppMessage} tours a las bodegas`,
  },
  {
    id: 3,
    img: "https://picsum.photos/id/79/400/300",
    title: "Montaña",
    description: LorenImpsu2,
    videoUrl:
      "https://www.shutterstock.com/shutterstock/videos/3498719143/preview/stock-footage-video-of-sky-center-las-le-as-mendoza-argentina.webm",
    wspMessage: `${WhatsAppMessage} excursiones a la montaña`,
  },
  {
    id: 4,
    img: image3,
    title: "Aventura",
    description: LorenImpsu,
    videoUrl:
      "https://www.shutterstock.com/shutterstock/videos/1110814829/preview/stock-footage-san-rafael-argentina-october-video-rafting-in-rio-atuel-in-valle-grande-ca-on-del.webm",
    wspMessage: `${WhatsAppMessage} excursiones aventureras`,
  },
];

const principalCrouselPC = [
  {
    img: eventos,
    title: "Degustaciones. Peña Folkloricas. Cafe Rave ",
    description:
      "Siempre tenemos una actividad especial para compartir, Siempre diferentes.",
    link: "/agencia",
  },
  {
    img: equipaje,
    title: "Guarda Equipaje",
    description:
      "Reserva tu lugar para guardar el equipaje y poder disfrutar de Mendoza con mayor seguridad",
    link: "https://bounce.com/en/s/location/d6a41810-df04-4ef0-9ae3-ee1a9e564e3f",
  },
  {
    img: psa,
    title: "Agua Pura - Agua Segura",
    description:
      "Vas a tener agua purificada y segura para beber y cocinar, directamente desde tu llave. Nuestro purificador reduce aquellos componentes que puedan resultar perjudiciales para la salud.",
    link: "/agencia",
  },
  {
    img: cowork,
    title: "Tranquilidad para trabajar",
    description:
      "Tu lugar en el hostel relajado para poder trabajar. Comodidad y tranquilidad para seguir conectado  .",
    link: "/agencia",
  },
  {
    img: patioC,
    title: "Patio Colonial",
    description:
      "Desayuna, Almueza o Cena bajo nuestro parral. El inicio del vino esta en nuestra casa",
    link: "/agencia",
  },
];

const principalCarouselMobile = [
  {
    img: desayuno,
    title: "Free Breakfast",
    description:
      "Disfruta de un desayuno clásico y sencillo pero completo para desayunar. También podes elegir entre desayunos mas deliciosos",
    link: "/agencia",
  },
  {
    img: patioC,
    title: "Patio Colonial",
    description:
      "Desayuna, Almueza o Cena bajo nuestro parral. El inicio del vino esta en nuestra casa",
    link: "/agencia",
  },
  {
    img: bar2,
    title: "Bar Tele ",
    description:
      "Un lugar para tomar algo mientras elegis que leer, que compartir o elegir que ver entre todas las plataformas digitales mas usadas.",
    link: "/agencia",
  },
  {
    img: cowork,
    title: "Tranquilidad para trabajar",
    description:
      "Tu lugar en el hostel relajado para poder trabajar. Comodidad y tranquilidad para seguir conectado  .",
    link: "/agencia",
  },
  {
    img: eventos1,
    title: "Un lugar muchos eventos",
    description:
      "Siempre tenemos una actividad especial para compartir, Siempre diferentes. Degustaciones. Peña Folkloricas. Cafe Rave ",
    link: "/agencia",
  },
  {
    img: patio,
    title: "La magia de cada estación ",
    description:
      "Invierno, Primavera, Verano, Otoño. Cada estación es diferente en Mendoza y en nuestro Hostel.",
    link: "/agencia",
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

const allImagesCarouselMobile = [
  patio,
  patio1,
  patio2,
  patio3,
  patio4,
  patio5,
  patio6,
  patio7,
  patio8,
];

function pcList(data: string[]) {
  const element = [];
  for (let i = 0; i < data.length; i = i + 3) {
    element.push({ img: data[i], img2: data[i + 1], img3: data[i + 2] });
  }
  return element;
}
const allImagesCarouselWeb = pcList(allImagesCarouselMobile);

const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;

export {
  hostelImages,
  agenciaImages,
  principalCarouselMobile,
  principalCrouselPC,
  ownerData,
  LorenImpsu,
  isMobile,
  WhatsAppMessage,
  allImagesCarouselMobile,
  allImagesCarouselWeb,
};
