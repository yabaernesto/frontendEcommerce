import { CaretDown, Check } from "phosphor-react";

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
  const [selectedIdioma, setSelectedIdioma] = useState(null);
  const [selectedMoeda, setSelectedMoeda] = useState(null);

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

  function handleIdiomaSelect(idioma: string) {
    setSelectedIdioma(idioma);
    closeIdiomaModal();
  }

  function handleMoedaSelect(moeda: string) {
    setSelectedMoeda(moeda);
    closeMoedaModal();
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
              <div>
                <img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/05/bandeira-estados-unidos.jpg" alt="Bandeira Russian" />
                <button onClick={() => handleIdiomaSelect('Eng')}>English</button>
              </div>
              {selectedIdioma === 'Eng' && <Check size={16} />}
            </div>
            <div>
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/255px-Flag_of_the_People%27s_Republic_of_China.svg.png" alt="Bandeira Mandarin" />
                <button onClick={() => handleIdiomaSelect('Mandarin')}>Mandarin</button>
              </div>
              {selectedIdioma === 'Mandarin' && <Check size={16} />}
            </div>
            <div>
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg" alt="Bandeira Russian" />
                <button onClick={() => handleIdiomaSelect('Russian')}>Russian</button>
              </div>
              {selectedIdioma === 'Russian' && <Check size={16} />}
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
              <button onClick={() => handleMoedaSelect('USD')}>Dollar (USD)</button>
              {selectedMoeda === 'USD' && <Check size={16} />}
            </div>
            <div>
              <button onClick={() => handleMoedaSelect('EUR')}>Euro (EUR)</button>
              {selectedMoeda === 'EUR' && <Check size={16} />}
            </div>
          </div>
        </ModalMoeda>
      )}
    </ContentRight>
  );
}
