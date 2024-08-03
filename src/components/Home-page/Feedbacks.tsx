import images from "../../constants/globalImgs";

function Feedbacks() {
  // const clientes = {
  //   abrace: {
  //     nome: "Abrace Psicologia",
  //     depoiment: "Dou isso não só ao nosso trabalho, mas principalmente ao seu Jaque. Mesmo com pouco tempo, já conseguiu nos cativar e deixar nosso público muito satisfeito, ao ponto de pessoas nos procurarem para fazer parte da Abrace. Somos muito gratas a você por tudo isso, muito obrigada.",
  //     estrelas: 5,
  //   },
  //   marcely: {
  //     nome: "Marcely Maciel",
  //     depoiment: "Estou muito satisfeita com todo serviço, O que mais gosto é quando agrega na minha rotina de trabalho. Tudo é dinâmico e direto, desde ideias de conteúdos até ajustes de detalhes. Estou amando o retorno e como tá ficando lindo o feed.",
  //     estrelas: 5,
  //   },
  //   jessyka: {
  //     nome: "Jessyka Reis",
  //     depoiment: "Eu amei o material, ficou lindo. Você constrói a identidade visual de acordo com o que a pessoa realmente gosta, seu trabalho é impecável e você consegue transmitir a essência em sua arte. Obrigada!",
  //     estrelas: 5,
  //   },
  // }

  return (
    <div className="w-screen h-1/2 2xl:bg-white md:bg-offWhite bg-cover bg-center text-center relative flex flex-col">
      <h1 className="font-light text-6xl h-10 pb-16 mt-10">O que nossas Clientes</h1>
      <h2 className="font-extralight text text-5xl h-10 pb-20 italic mb-6">estão falando</h2>
      <div className="flex space-x-16 justify-center  my-10 ">
        <div className="w-72 h-auto flex flex-col items-center justify-between space-y-2 rounded-md shadow-xl bg-amber-50 transition-transform transform hover:scale-105">
          <div className="flex flex-col items-center justify-between">
            <img
              className="w-40 h-40 mt-6 rounded-md object-cover"
              src={images[1]}
              alt="test" />
            <h1 className="text-2xl mt-10">Abrace Psicologia</h1>
          </div>
          <p className=" font-light text text-left m-4 italic">
            "Dou isso não só ao nosso trabalho, mas principalmente ao seu Jaque. Mesmo com pouco tempo, já conseguiu nos cativar e deixar nosso público muito satisfeito, ao ponto de pessoas nos procurarem para fazer parte da Abrace. Somos muito gratas a você por tudo isso, muito obrigada."
          </p>
          <div className="flex space-x-1 text-xl">
            {[1, 2, 3, 4, 5].map((key) => (
              <p key={key}>&#11088;&#65039;</p>
            ))}
          </div>
        </div>

        <div className="w-72 h-auto flex flex-col items-center justify-between space-y-2 rounded-md shadow-xl bg-amber-50 transition-transform transform hover:scale-105">
          <div className="flex flex-col items-center justify-between">
            <img
              className="w-40 h-40 mt-6 rounded-md object-cover"
              src={images[1]}
              alt="test" />
            <h1 className="text-2xl mt-10">Marcely Maciel</h1>
          </div>
          <p className="font-light text-left m-4 italic">
            "Estou muito satisfeita com todo serviço, O que mais gosto é quando agrega na minha rotina de trabalho. Tudo é dinâmico e direto, desde ideias de conteúdos até ajustes de detalhes. Estou amando o retorno e como tá ficando lindo o feed."
          </p>
          <div className="flex space-x-1 text-xl">
            {[1, 2, 3, 4, 5].map((key) => (
              <p key={key}>&#11088;&#65039;</p>
            ))}
          </div>
        </div>
        <div className="w-72 h-auto flex flex-col items-center justify-between space-y-2 rounded-md shadow-xl bg-amber-50 transition-transform transform hover:scale-105">
          <div className="flex flex-col items-center justify-between">
            <img
              className="w-40 h-40 mt-6 rounded-md object-cover"
              src={images[1]}
              alt="test" />
            <h1 className="text-2xl mt-10">Jessyka Reis</h1>
          </div>
          <p className="font-light text-left m-4 italic">
            "Eu amei o material, ficou lindo.
            Você constrói a identidade visual
            de acordo com o que a pessoa realmente gosta, seu trabalho é impecável e você consegue transmitir a essência em sua arte. Obrigada!
          </p>
          <div className="flex space-x-1 text-xl">
            {[1, 2, 3, 4, 5].map((key) => (
              <p key={key}>&#11088;&#65039;</p>
            ))}
          </div>
        </div>
        <div className="w-72 h-auto flex flex-col items-center justify-between space-y-2 rounded-md shadow-xl bg-amber-50 transition-transform transform hover:scale-105">
          <div className="flex flex-col items-center justify-between">
            <img
              className="w-40 h-40 mt-6 rounded-md object-cover"
              src={images[1]}
              alt="test" />
            <h1 className="text-2xl mt-10">Marcely Maciel</h1>
          </div>
          <p className="font-light text-left m-4 italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe asperiores reprehenderit nemo .
          </p>
          <div className="flex space-x-1 text-xl">
            {[1, 2, 3, 4, 5].map((key) => (
              <p key={key}>&#11088;&#65039;</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Feedbacks;