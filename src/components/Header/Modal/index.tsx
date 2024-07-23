import { CaretDown } from "phosphor-react";

import { useState } from "react";

import { 
  ButtonIdioma,
  ButtonMoeda,
  ContentRight,
  ModalIdioma,
  ModalMoeda
} from "./styles";

export function Modal() {
  const [isIdiomaModal, setIsIdiomaModal] = useState(false);
  const [isMoedaModal, setIsMoedaModal] = useState(false);

  function openIdiomaModal() {
    setIsIdiomaModal(true)
  }

  function closeIdiomaModal() {
    setIsIdiomaModal(false)
  }

  function openMoedaModal() {
    setIsMoedaModal(true);
  }

  function closeMoedaModal() {
    setIsMoedaModal(false);
  }

  return (
    <ContentRight>
      <ButtonIdioma onClick={openIdiomaModal}>
        <span>Eng</span>
        <CaretDown size={16} />
      </ButtonIdioma>

      {isIdiomaModal && (
        <ModalIdioma>
          <div className="container">
            <div>
              <img src="./ss.png" alt="..." />
              <button onClick={closeIdiomaModal}>Idioma</button>
              <span>check</span>
            </div>
          </div>
        </ModalIdioma>
      )}

      <ButtonMoeda onClick={openMoedaModal}>
        <span>USD</span>
        <CaretDown size={16} />
      </ButtonMoeda>

      {isMoedaModal && (
        <ModalMoeda>
          <div className="container">
            <div>
              <button onClick={closeMoedaModal}>Dollar (USD)</button>
              <span>check</span>
            </div>
            <div>
              <button onClick={closeMoedaModal}>Euro (EUR)</button>
              <span>check</span>
            </div>
          </div>
        </ModalMoeda>
      )}
    </ContentRight>
  );
}
