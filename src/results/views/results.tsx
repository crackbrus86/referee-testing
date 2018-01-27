import * as React from "react";
import * as Models from "../models/index";
import {Grid} from "../../components/grid/index";
import * as services from "../services/services";

interface Props{

}

interface State{
    results: Models.ResultModel[]
}

export class Results extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            results: []
        }
    }

    componentWillMount(){
        services.getAll().then(data => {
            this.setState({results: JSON.parse(data)});
        })
    }

    render(){
        return <div>
            <Grid items={this.state.results} columns={[
                {
                    title: "Особа що проходить тестування",
                    field: "fullName"
                },
                {
                    title: "Email",
                    field: "email"
                }
            ]} />
        </div>
    }
}