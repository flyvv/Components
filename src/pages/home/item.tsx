import React from 'react';
import {Button} from 'antd';

type Kp = number | string | boolean;
interface IProps {
    // 删除操作
    handleDelete?: (text: any) => void;
    // 列表项信息
    text: Kp;
}

class Item extends React.Component<IProps>{
  constructor(props:IProps ){
    super();
  }

  handleDelete = () => {

  }

  render(){
    const { text } = this.props;
    return(
      <div>
        <span>{text}</span>
        <Button type="primary">删除</Button>
      </div>
    )
  }
}
export default Item;
 