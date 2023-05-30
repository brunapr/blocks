import './styles.css';

interface ICloseProps {
  close: boolean,
}

export default function Footer(props: ICloseProps) {
  return(
    <div className={`footer-block ${props.close && "closed-footer"}`}>
      <span>FAQ</span>
      <span>Sobre</span>
      <span>Termos de uso</span>
      <span>Política de privacidade</span>
    </div>
  );
}