import React from 'react';
import { 
  IoMdArrowRoundForward as ArrowRight,
  IoMdClose as Close
} from 'react-icons/io';
import useWindowDimensions from '../../utils/useWindowDimensions';
import './styles.css';

interface ICloseData {
  close: boolean,
  setClose: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Premium(props: ICloseData) {
  const { height, width } = useWindowDimensions();

  function handleClose() {
    props.setClose(true);
  }
  
  return(
    <div className="premium-block">
      {
        width <= 500 &&
        <p
          onClick={() => {handleClose()}}
        >
          Fechar 
          <Close 
            size={22}
            style={{marginLeft: 5}}
          />
        </p>
      }
      <p>
        Não limite sua criatividade, 
        junte-se a familia Blocks por apenas&nbsp;<b>BRL 19,99</b>
      </p>
      <div className="button-wrapper">
        <button>
          <span>Quero ser premium <ArrowRight size={24}/></span>
        </button>
      </div>
    </div>
  );
}
