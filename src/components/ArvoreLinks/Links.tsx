import "./links.css";
import perfil from "./imgs/perfil.png";
import { Helmet } from "react-helmet-async";
import Header from "../Home-page/Header";

const Links: React.FC = () => {
  const dataImages = [
    {
      href: "https://wa.me/5595991217538/?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20gest%C3%A3o%20de%20redes%20sociais",
      alt: "link para gestão de redes sociais",
      isReactLink: true,
    },
    {
      href: "https://wa.me/5595991217538/?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20servi%C3%A7o%20de%20design",
      alt: "link para informações sobre design",
    },
    {
      href: "https://wa.me/5595991217538/?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20servi%C3%A7o%20de%20Cria%C3%A7%C3%A3o%20de%20sites%20e%20Landing%20pages",
      alt: "link para informações sobre criação de sites e landing pages",
    },
    {
      href: "https://wa.me/5595991217538/?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20Identidade%20visual",
      alt: "link para informações sobre identidade visual",
    },
    {
      href: "https://wa.me/5595991217538/?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20gest%C3%A3o%20de%C2%A0tr%C3%A1fego%C2%A0pago",
      alt: "link para informações sobre tráfego pago",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Links | Jaqueline Reis</title>
        <meta name="description" content="Links para serviços de marketing digital, design e gestão de redes sociais da Jaqueline Reis." />
      </Helmet>
      <Header />
      <div className="profile">
        <img src={perfil} alt="Reis Marketing" className="profile-picture" />
        <p className="text-header">
        Estratégias de posicionamento autêntico e humanizado que vende no digital.
        </p>
      </div>

      <div className="access-links">
        {dataImages.map((data, index) =>
          data.isReactLink ? (
            <a
              key={index}
              href={data.href}
              className="link"
              target="_blank"
            ></a>
          ) : (
            <a
              href={data.href}
              className="link"
              key={index}
              target="_blank"
            ></a>
          )
        )}
      </div>
    </>
  );
};

export default Links;
