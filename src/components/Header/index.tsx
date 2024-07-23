import {
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
  ContainerHeaderRight,
  ContentBaixo,
  ContentTop,
  DivisorContainer,
  HeaderContainer,
  IconsHeader,
  SeparatorIcon
} from "./styles";

import { ContainerBody } from "../../styles/global";
import imgLogo from "./../../../public/Logo.svg";
import { Modal } from "./Modal";

export function Header() {

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
            <Modal />
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
