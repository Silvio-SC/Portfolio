import styles from './styles.module.css'
import { useState } from 'react';

export const TechCard = ({name, img, color}) => {
    
    const [isHover, setIsHover] = useState(false)
    
    const handleMouseEnter = () => {
        setIsHover(true);
    };
    
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    
    let border = {
        color: isHover ? color : '#Fdfdfd',
    }

    return (
        <div  key={name}
        className={styles.cardNew} 
        style={border}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <img src={img} alt="icone"/>
            <h3>{name}</h3>
        </div>
    )
}