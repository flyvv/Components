import React from 'react';
import Item from './item';
// import { Button } from 'antd';
// import styles from './index.css';

// export default function() {
//   return (
//     <div className={styles.normal}>
//       <div className={styles.welcome} />
//       <ul className={styles.list}>
//         <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
//         <li>
//         <Button type="primary">Primary</Button>
//          <Button>ghvbjn</Button>
//         </li>
//       </ul>
//     </div>
//   );

class IListProps {

}
class IState {

}
class List extends React.Component<IListProps,IState>{
  constructor(){
    super();
    this.state = {
      list: [1,2,3,4,5,5,6,7,7]
    }
  }

  render(){
    return(
      <div>
        {
          this.state.list.map((item,index)=><Item text={item}/>)
        }
      </div>
    )
  }
}
export default List;
