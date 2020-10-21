import * as React from 'react';
import { Button } from 'antd';

interface IProps {}
class IState {
  hou: string = '00';
  minutes: string = '00';
  second: string = '00';
  strikes: number = 0;
  time: any;
}
class Timer extends React.Component<IProps, IState> {
  public state = new IState();

  public getDefaultVal = (val: string) => {
    if (parseInt(val) < 10) return `0${val}`;
    return val;
  };

  public Timer = () => {
    const nextstrikes = this.state.strikes + 50;
    this.setState({
      hou: this.getDefaultVal(
        String(parseInt(String(nextstrikes / 3600000)) % 24),
      ),
      minutes: this.getDefaultVal(
        String(parseInt(String(nextstrikes / 60000)) % 60),
      ),
      second: this.getDefaultVal(
        String(parseInt(String(nextstrikes / 1000)) % 60),
      ),
      strikes: this.state.strikes + 50,
    });
  };

  public handleStart = () => {
    const time = setInterval(this.Timer, 50);
    this.setState({ time });
  };

  public handleStop = () => {
    this.setState(
      {
        hou: '00',
        minutes: '00',
        second: '00',
        strikes: 0,
      },
      () => {
        window.clearInterval(this.state.time);
      },
    );
  };
  render() {
    return (
      <div>
        {' '}
        <div>
          <h1>
            {this.state.hou}:{this.state.minutes}:{this.state.second}
          </h1>
        </div>
        <Button type="primary" onClick={this.handleStart}>
          start
        </Button>
        <span style={{ marginRight: 16 }} />
        <Button type="primary" onClick={this.handleStop}>
          stop
        </Button>
      </div>
    );
  }
}
export default Timer;
