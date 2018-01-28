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

    componentWillMount(){
        services.getAll().then(data => {
            this.setState({results: this.mapResponse(JSON.parse(data))});
        })
    }

    render(){
        return <div>
            <Grid classNames="rt-results-grid" items={this.state.results} columns={[
                {
                    type: "button",
                    icon: "fa-eye",
                    alt: "Показати деталі",
                    width: "25px",
                    action: (item) => console.log(item)
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
        </div>
    }
}