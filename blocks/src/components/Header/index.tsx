import useWindowDimensions from '../../utils/useWindowDimensions';
import './styles.css';

export default function Header() {
  const { height, width } = useWindowDimensions();
  
  return(
    <div className="header-block">
      {
        width >= 500 ?
        <img src={require("../../assets/logo_web.png")}/> :
        <img src={require("../../assets/logo_mobile.png")}/>
      }
    </div>
  );
}