import jaqueApresentacao from '../../assets/images/landing-page/jaqueApresentacao.png';
import Footer from './Footer';

const PromoDetails = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-beje p-4">
      <div className="bg-bejeLigth bg-opacity-80 p-6 rounded-lg shadow-lg max-w-4xl mb-8">
        <h2 className="text-3xl text-marronLight font-bold mb-4 text-center">Dúvidas</h2>
        <ul className="list-none text-left text-gray-800 space-y-8 font-MontserratRegular">
          <li>
            <span className="font-bold text-xl font-MontserratRegular">Precisa ter o canva pró?</span> Não, o Canva Pack foi feito para o Canva Gratuito e também serve para o Canva Pro.
          </li>
          <li>
            <span className="font-bold text-xl font-MontserratRegular">Posso usar apenas pelo celular?</span> Sim! Você pode acessar e editar os templates por qualquer dispositivo, seja celular, tablet ou computador.
          </li>
          <li>
            <span className="font-bold text-xl font-MontserratRegular">Quanto tempo de acesso eu tenho?</span> O acesso às artes é permanente desde que você salve na sua conta do Canva. Recomendamos que você salve em uma pasta para não perder seus designs.
          </li>
          <li>
            <span className="font-bold text-xl font-MontserratRegular ">Posso compartilhar ou vender os templates?</span> Não. Isso violará os direitos autorais e poderá acarretar em ação judicial.
          </li>
          <li>
            <span className="font-bold text-xl font-MontserratRegular">Terei algum suporte?</span> Sim! Caso tenha alguma dúvida para utilização do seu pack ou precise de alguma informação, disponibilizamos suporte via WhatsApp.
          </li>
        </ul>
      </div>

      <div className="bg-opacity-80 p-4 max-w-4xl h-96 text-center text-xl font-MontserratRegular flex flex-col justify-evenly">
        <h2 className="text-5xl font-bold text-bejeAbobora text-center">Prazer, sou Jaqueline Reis!</h2>
        <p className="text-bejeLigth text-2xl font-MontserratRegular text-justify font-semibold">
          Social media estrategista, mentora e designer especialista em feeds minimalistas e elegantes.
          Já transformei o posicionamento digital de +100 empresárias em 2 países através da criação de conteúdo estratégico + design que atrai e vende.
          Tenho certeza que o seu posicionamento será o próximo a ser transformado, dê o primeiro passo e adquira agora mesmo o seu Pack Feed Brilhante.
        </p>
      </div>
      <br />
      <img src={jaqueApresentacao} className='border'/>
      <Footer/>
    </div>
  );
};

export default PromoDetails;