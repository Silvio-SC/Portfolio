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
        borderColor: isHover ? color : '#00000080',
    }

    return (
        <div  key={name}
        className={styles.card} 
        style={border}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <img src={img} alt="icone"/>
            <h3>{name}</h3>
        </div>
    )
}