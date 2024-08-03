import work01 from '../../assets/images/1-work.svg'
import work02 from '../../assets/images/2-work.svg'
import work03 from '../../assets/images/3-work.svg'
import work04 from '../../assets/images/4-work.svg'
import work05 from '../../assets/images/5-work.svg'
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
    <div className="flex items-center justify-around pb-20">
      <div className="grid grid-cols-4 gap-3 w-1/2 h-1/2 mt-16 ml-14">
        {
          images.map((image: string, index: number) => (
            <img
              key={index}
              src={image}
              alt={`work-${index}`}
              className="w-full h-auto object-cover transition-transform transform hover:scale-105 "
            />
          ))
        }
      </div>
      <div className="flex flex-col items-center">
        <p className="2xl:text-6xl w-82 text-amber-500">+400</p>
        <p className="text-amber-500 w-96 text-center font-light 2xl:text-4xl">Designs e Conteúdos Estratégicos Entregues</p>
      </div>
    </div>
  )
}

export default SectionGrid;
