import * as React from "react";

interface State{
    examinator: string;
    examPass: string;
}

export class Settings extends React.Component<any, State>{
    constructor(props: any){
        super(props);
        this.state = {
            examinator: null,
            examPass: null
        }
    }

    render(){
        return <div className="rt-settings">
            <h4>Дані екзамінатора</h4>
        </div>
    }
}