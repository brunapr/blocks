import './styles.css';
import { IoMdArrowRoundForward as ArrowRight } from 'react-icons/io';

export default function Premium() {
  return(
    <div className="premium-block">
      <p>
        Não limite sua criatividade, junte-se a familia Blocks por apenas 
        <b> BRL 19,99</b>
      </p>
      <button>
        <span>Quero ser premium <ArrowRight size={24}/></span>
      </button>
    </div>
  );
}