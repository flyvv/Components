import * as React from 'react';
import Container from './Container'
import CascaderGroup from './CascadeGroups'
import Test from './test'
import { proData  } from './provdata'
import './index.css'

interface IProps {

}
class IState {
    lv1Data: any[] = []

}

export default class Page extends React.Component<IProps, IState>{
    public state = new IState()

    componentWillMount() {
        const url = '/api/test'
        fetch(url).then(response => response.json())
            .then(data => {
                this.setState({
                    lv1Data: data.data
                })
            })
            .catch(e => console.log("Oops, error", e))
    }

    async handleFetch(val: number) {
        const url = `/api/getChildren?id=${val}`
      const data= await new Promise((resolve, reject) => {
            fetch(url).then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
        console.log(data,'-------ar');
        return data.data
    }


    render() {
       

        return (
            <div className="play-wrap" >
      
                <Test firstList={proData} fetch={this.handleFetch}  onChange={(val)=>{console.log(val,'----------valval');
                }}/>
            </div>)
    }
}
