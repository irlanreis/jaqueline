import images from "../../constants/globalImgs";

function Feedbacks() {
  const clientes = {
    abrace: {
      nome: "Abrace Psicologia",
      depoiment:
        "Dou isso não só ao nosso trabalho, mas principalmente ao seu Jaque. Mesmo com pouco tempo, já conseguiu nos cativar e deixar nosso público muito satisfeito, ao ponto de pessoas nos procurarem para fazer parte da Abrace. Somos muito gratas a você por tudo isso, muito obrigada.",
      estrelas: 5,
      imagem: images[0],
    },
    marcely: {
      nome: "Marcely Maciel",
      depoiment:
        "Estou muito satisfeita com todo serviço, O que mais gosto é quando agrega na minha rotina de trabalho. Tudo é dinâmico e direto, desde ideias de conteúdos até ajustes de detalhes. Estou amando o retorno e como tá ficando lindo o feed.",
      estrelas: 5,
      imagem: images[1],
    },
    jessyka: {
      nome: "Jessyka Reis",
      depoiment:
        "Eu amei o material, ficou lindo. Você constrói a identidade visual de acordo com o que a pessoa realmente gosta, seu trabalho é impecável e você consegue transmitir a essência em sua arte. Obrigada!",
      estrelas: 5,
      imagem: images[2],
    },
    jessyk: {
      nome: "Jessyka Reis",
      depoiment:
        "Eu amei o material, ficou lindo. Você constrói a identidade visual de acordo com o que a pessoa realmente gosta, seu trabalho é impecável e você consegue transmitir a essência em sua arte. Obrigada!",
      estrelas: 5,
      imagem: images[2],
    },
  };

  return (
    <div className="flex items-center justify-center flex-col">
        <h1 className="font-light text-4xl md:text-6xl pb-8 mt-4 w-full text-center text-bejeAbobora">
          O que nossos clientes dizem
        </h1>
      <div className="grid grid-cols-1 w-auto gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {Object.values(clientes).map((cliente, index) => (
            <div
              key={index}
              className=" p-4 rounded-lg shadow-md bg-bejeClaro flex items-center flex-col justify-center w-96 xl:w-80 xl:h-60vh"
            >
              <img
                src={cliente.imagem}
                alt={cliente.nome}
                className="w-72 h-96 object-cover rounded-lg mx-auto mb-4
                xl:w-60 xl:h-60"
              />
              <p className="text-xl font-semibold text-bejeAbobora">{cliente.nome}</p>
              <p className="mt-2 text-gray-600">{cliente.depoiment}</p>
              <div className="mt-4 text-bejeAbobora">
                {"★".repeat(cliente.estrelas)}
                {"☆".repeat(5 - cliente.estrelas)}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Feedbacks;
