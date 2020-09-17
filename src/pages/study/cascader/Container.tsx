import * as React from 'react';
import './index.css'
import classnames from 'classnames'

interface IProps {
    title: string | React.ReactNode
    children?: React.ReactNode
    className?: string
}
const Container: React.FC<IProps> = ({ title, children, className }) => {

    return <div className={classnames({ "flyvv-container-wrap": true, className })}>
        <div>{title}</div>
        <div className='item-container-wrapper'>
            <div className="item-container">{children}</div>
        </div>

    </div>
}

export default Container;
