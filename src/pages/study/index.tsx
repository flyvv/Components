import * as React from 'react';
import Cascader from './cascader'
import { Button} from 'antd';

import { connect, HeroModelState, ConnectProps } from 'umi';

interface PageProps extends ConnectProps {
  study: any;
}


const Study: React.FC<PageProps> = (props)=> {
  const handleOnclick=() => {
    props.dispatch!({
      type: 'study/changecount', payload: {
        count: props.study.count + 1
      }
    })
  }
  return (
    <div className='normal'>
      <div className='study'><Cascader /></div>
  <Button type="primary" onClick={()=>handleOnclick()}>click count-{props.study.count}</Button>
    </div>
  );

}
export default connect(({study }: {study: any}) => ({ study}))(Study);