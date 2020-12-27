import react, {Component} from "react";
import PeopleList from "./PeopleList"
import Form from "./Form"

class Main extends Component {

    constructor() {
        super(Component)

        this.state = {
            persons: []
        };

        this.updateList = this.updateList.bind(this);
    }


    updateList(person) {
        this.setState({
            persons: this.persons.push(person)
        })
    }


    render() {
        return (
            <div>
                <Form/>
                <PeopleList/>
            </div>
        );

    }
}


export default Main;