import * as React from "react";

interface Props{
    till: Date;
}

interface State{
    now: Date;
}

export class Countdown extends React.Component<Props, State>{
    timerId = null as any;

    constructor(props: Props){
        super(props);
        this.state = {
            now: new Date()
        }
    }

    componentDidMount(){
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({now: new Date()});
    }

    render(){
        if(!this.props.till) return null;
        var endTime = new Date(this.props.till.toString());
        var timeDiff = Math.abs(endTime.getTime() - this.state.now.getTime());
        var diffHours = Math.floor((timeDiff % (1000 *3600 * 24)) / (1000 * 3600));
        var diffMin = Math.floor((timeDiff % (1000 * 60 *60)) / (1000 * 60));
        var diffSec = Math.floor((timeDiff % (1000 * 60)) / 1000);
        return <div>
            <div>{diffHours} год. {diffMin} хв. {diffSec} сек.</div>
        </div>
    }
}