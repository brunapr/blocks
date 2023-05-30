import './styles.css';
import { IoMdArrowRoundForward as ArrowRight } from 'react-icons/io';

interface IFamilyData {
  id: string,
  premium: boolean,
  details: {
    name: string,
    description: string
  }
}

export default function Family(props: IFamilyData) {
  return(
    <div className="family-block">
      <div className="family-img-wrapper">
        <img src={`https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/${props.id}.jpg`}/>
      </div>
      <div className="family-description">
        <span>{props.details.name}</span>
        <div>
          <div className="divisor"/>
          <ArrowRight 
            className="family-description-icon" 
            size={20}/>
        </div>
      </div>
    </div>
  );
}