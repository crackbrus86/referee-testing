import * as React from "react";
import * as Models from "../models/index";
import {Grid} from "../../components/grid/index";
import * as services from "../services/services";
import {Filter} from "./partials/filter";
import {ResultDetails} from "../../shared/modals/resultDetails";

interface Props{

}

interface State{
    results: Models.ResultModel[],
    details: Models.DetailsQuestion[],
    userFullname: string;
}

export class Results extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            results: [],
            details: [],
            userFullname: null
        }
    }

    mapResponse(data: Models.GetAll_Response[]): Models.ResultModel[]{
        return data.map((item): Models.ResultModel => {
            return {
                id: Number(item.id),
                memberId: Number(item.memberId),
                fullName: item.fullName,
                email: item.email,
                start: item.start,
                finish: item.finish,
                score: Number(item.score),
                isSuccessful: item.isSuccessful,
                inTime: item.inTime
            }
        });
    }

    runFilter(year: string){
        services.filter({
            year: year
        }).then(data => {
            this.setState({results: this.mapResponse(JSON.parse(data))});
        });
    }

    getDetails(result: Models.GetAll_Response){
        services.getDetails({
            id: Number(result.id)
        }).then(data => {
            this.setState({userFullname: result.fullName, details: JSON.parse(data)});
        });
    }

    closeDetails(){
        this.setState({userFullname: null, details: []});
    }

    componentWillMount(){
        services.getAll().then(data => {
            this.setState({results: this.mapResponse(JSON.parse(data))});
        })
    }

    render(){
        return <div>
            <Filter onFilter={this.runFilter.bind(this)} />
            <Grid classNames="rt-results-grid" items={this.state.results} columns={[
                {
                    type: "button",
                    icon: "fa-eye",
                    alt: "Показати деталі",
                    width: "25px",
                    action: (item) => this.getDetails(item)
                },
                {
                    type: "button",
                    icon: "fa-close",
                    alt: "Видалити",
                    width: "25px"
                },
                {
                    type: "text",
                    title: "Особа що проходить тестування",
                    field: "fullName",
                    width: "300px"
                },
                {
                    type: "text",
                    title: "Email",
                    field: "email",
                    width: "200px"
                },
                {
                    type: "text",
                    title: "Тестування розпочато",
                    field: "start"
                },
                {
                    type: "text",
                    title: "Тестування закінчено",
                    field: "finish"
                },
                {
                    type: "bool",
                    title: "Тестування пройдене вчасно",
                    field: "inTime"
                },
                {
                    type: "text",
                    title: "Результат (% правильних відповідей)",
                    field: "score",
                    classNames: "td-center"
                },
                {
                    type: "bool",
                    title: "Тестування пройдене успішно",
                    field: "isSuccessful"
                }

            ]} />
            <ResultDetails details={this.state.details} onClose={this.closeDetails.bind(this)} fullName={this.state.userFullname} />
        </div>
    }
}