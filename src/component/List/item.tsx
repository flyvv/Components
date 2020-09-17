import React from 'react';
import {Button} from 'antd';
import styles from './index.css'
type content = number | string | boolean;
interface IProps {
    // 删除操作
    handleDeleteList: (text: any) => void;
    // 列表项信息
    text: content;
}

class Item extends React.Component<IProps>{
  constructor(props:IProps ){
    super(props);
  }

  handleDelete = (text: content) => {
    this.props.handleDeleteList(text);
  }

  render(){
    const { text } = this.props;
    return(
      <div>
        <span className={styles.text}>{text}</span>
        <Button type="primary" onClick = {()=>{this.handleDelete(text)}}>删除</Button>
      </div>
    )
  }
}
export default Item;
