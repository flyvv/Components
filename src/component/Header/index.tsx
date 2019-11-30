import React from 'react';
import  styles from './index.css'
import img from '../../assets/pikaqiu.jpg';

interface IHeaderProps {
    text?: string
}
export default class head extends React.Component<IHeaderProps>{
    render(){
        const headText = this.props.text || '学海无涯回头无岸';
        return(
            <div className={styles.header}>
                <div className = {styles.logo}>
                    <img style={{ width: '100%', height: '100%'}} src={img} alt=""/>
                    
                </div>
                <div className = {styles.text}>
                    <span>{headText}</span>
                </div>
                
            </div>
            
        )
    }
}