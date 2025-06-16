import Carrousel from "./Carrousel";

const carrouselItems = [
  {
    image: "./banner1.png",
    altText: "Imagenes de cosas legales muy serias",
  },
  {
    image: "./banner2.jpg",
    altText: "Imagenes de cosas legales muy serias",
  },
  {
    image: "./banner3.jpg",
    altText: "Imagenes de cosas legales muy serias",
  },
  {
    image: "./banner4.jpg",
    altText: "Imagenes de cosas legales muy serias",
  },
  {
    image: "./banner5.jpg",
    altText: "Imagenes de cosas legales muy serias",
  },
];

function CarrouselSection() {
  return (
    <>
      <Carrousel items={carrouselItems} />
      
    </>
  );
}

export default CarrouselSection;