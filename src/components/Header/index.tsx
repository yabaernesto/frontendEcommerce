import { 
  CaretDown,
  FacebookLogo, 
  Heart, 
  InstagramLogo, 
  MagnifyingGlass, 
  PinterestLogo, 
  RedditLogo, 
  ShoppingCart, 
  TwitchLogo, 
  User, 
  YoutubeLogo 
} from "phosphor-react";

import { 
  ButtonIdioma,
  ButtonMoeda,
  ContainerHeaderRight,
  ContentBaixo,
  ContentRight,
  ContentTop,
  DivisorContainer,
  HeaderContainer,
  IconsHeader,
  ModalIdioma,
  SeparatorIcon
} from "./styles";

import { ContainerBody } from "../../styles/global";
import imgLogo from "./../../../public/Logo.svg";
import { useState } from "react";

export function Header() {
  const [isIdiomaModal, setIsIdiomaModal] = useState(false);

  function openIdiomaModal() {
    setIsIdiomaModal(true)
  }

  function closeIdiomaModal() {
    setIsIdiomaModal(false)
  }

  return (
    <HeaderContainer>
      <ContainerBody>
        <ContentTop>
          <h6>Welcome to Clicon online eCommerce store.</h6>
          <ContainerHeaderRight>
            <IconsHeader>
              <span>Follow Us:</span>
              <a href="#">
                <TwitchLogo size={16} />
              </a>
              <a href="#">
                <FacebookLogo size={16} />
              </a>
              <a href="#">
                <PinterestLogo size={16} />
              </a>
              <a href="#">
                <RedditLogo size={16} />
              </a>
              <a href="#">
                <YoutubeLogo size={16} />
              </a>
              <a href="#">
                <InstagramLogo size={16} />
              </a>
            </IconsHeader>

            <SeparatorIcon />

            <ContentRight>
              <ButtonIdioma onClick={openIdiomaModal}>
                <span>Eng</span>
                <CaretDown size={16} />
              </ButtonIdioma>

              {isIdiomaModal && (
                <ModalIdioma>
                  <div>
                    <div>
                      <img src="" alt="" />
                      <button onClick={closeIdiomaModal}>Idioma</button>
                    </div>
                    <span>check</span>
                  </div>
                </ModalIdioma>
              )}

              <ButtonMoeda>
                <span>USD</span>
                <CaretDown size={16} />
              </ButtonMoeda>
            </ContentRight>
          </ContainerHeaderRight>
        </ContentTop>
      </ContainerBody>
      <DivisorContainer />
      <ContainerBody>
        <ContentBaixo>
          <img src={imgLogo} alt="Logo do ecommerce" />
          <div className="search">
            <input type="text" placeholder="Search for anything" />
            <MagnifyingGlass size={16} className="icon" />
          </div>
          <div className="iconsUser">
            <ShoppingCart className="icon" size={24} />
            <Heart className="icon" size={24} />
            <User className="icon" size={24} />
          </div>
        </ContentBaixo>
      </ContainerBody>
    </HeaderContainer>
  );
}
