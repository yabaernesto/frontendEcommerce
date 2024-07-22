import { 
  CaretDown,
  FacebookLogo, 
  InstagramLogo, 
  PinterestLogo, 
  RedditLogo, 
  TwitchLogo, 
  YoutubeLogo 
} from "phosphor-react";

import { 
  ButtonIdioma,
  ButtonMoeda,
  ContainerHeaderRight,
  ContentRight,
  ContentTop,
  DivisorContainer,
  HeaderContainer,
  IconsHeader,
  SeparatorIcon
} from "./styles";

import { ContainerBody } from "../../styles/global";

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

            <ContentRight>
              <ButtonIdioma>
                <span>Eng</span>
                <CaretDown />
              </ButtonIdioma>

              <ButtonMoeda>
                <span>USD</span>
                <CaretDown />
              </ButtonMoeda>
            </ContentRight>
          </ContainerHeaderRight>
        </ContentTop>
      </ContainerBody>
      <DivisorContainer />
    </HeaderContainer>
  );
}
