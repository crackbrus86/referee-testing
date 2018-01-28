import * as React from "react";
import * as Datetime from "react-datetime";
import * as moment from "moment";
import { Moment } from "moment";
interface Props{
    onFilter: ($year: string) => void;
}

interface State{
    year: string;
}

export class Filter extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            year: moment(new Date()).format("YYYY")
        }
    }

    changeFilter(value: any){
        this.setState({year: moment(value).format("YYYY")});
    }

    render(){
        return <div className="rt-filter">
            <h4>Фільтр</h4>
            <form>
                <div className="rt-filter-left">
                <label>Рік складання іспиту</label>
                <Datetime value={this.state.year} dateFormat="YYYY" timeFormat={false} closeOnSelect={true} onChange={(v) => this.changeFilter(v)}/>
                </div>
                <button type="button" title="Фільтрувати" onClick={() => this.props.onFilter(this.state.year)}><i className="fa fa-filter"></i></button>
            </form>
        </div>
    }
}