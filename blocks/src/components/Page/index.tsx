import { useEffect, useState, useRef } from 'react';
import { getFamilies } from '../../services/api';
import Family from '../Family';
import './styles.css';

interface IFamilyData {
  id: string,
  premium: boolean,
  details: {
    name: string,
    description: string
  }
}

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [ families, setFamilies ] = useState<IFamilyData[]>([]);
  const [ quantity, setQuantity ] = useState(35);

  async function load(skip: number, take: number) {
    await getFamilies(0, take).then(res => {
      setFamilies(res);
    });
  }

  const handleScroll = () => {
    const container = containerRef.current;

    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;

      if (scrollTop + clientHeight >= scrollHeight) {
        setQuantity(quantity + 35);
      }
    }
  };

  useEffect(() => {
    load(families.length, quantity);

    const container = containerRef.current;

    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [quantity])

  useEffect(() => {
    load(0, quantity);
  }, [])

  return(
    <div className="page-block">
      <div className="page-catalog">
        <span>Catálogo</span>
        <div className="page-catalog-decor"/>
      </div>
      <div 
        className="page-results"
        ref={containerRef}
      >
        <span>Resultados</span>
        <div className="page-results-family">
          {
            families.map((family, index) => (
              <Family
                key={index}
                id={family.id}
                premium={family.premium}
                details={family.details}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}