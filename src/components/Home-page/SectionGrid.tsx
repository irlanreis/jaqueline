import work01 from '../../assets/images/1-work.svg';
import work02 from '../../assets/images/2-work.svg';
import work03 from '../../assets/images/3-work.svg';
import work04 from '../../assets/images/4-work.svg';
import work05 from '../../assets/images/5-work.svg';

function SectionGrid() {
  const images: string[] = [
    work01,
    work02,
    work03,
    work04,
    work05,
    work01,
    work04,
    work03,
    work04,
    work01,
    work04,
    work03,
  ]

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full">
      {/* Grid de designs criados */}
      <div className="grid grid-cols-2 bg-bejeLigth sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full lg:w-3/4 p-4">
        {
          images.map((image: string, index: number) => (
            <img
              key={index}
              src={image}
              alt={`work-${index}`}
              className="w-full h-auto transition-transform transform hover:scale-105"
            />
          ))
        }
      </div>
      <div className="flex flex-col items-center w-full lg:w-1/4 p-4">
        <p className="text-4xl lg:text-6xl text-bejeAbobora">+400</p>
        <p className="text-bejeAbobora text-center font-light text-xl lg:text-4xl mt-4">Designs e Conteúdos Estratégicos Entregues</p>
      </div>
    </div>
  );
}

export default SectionGrid;
