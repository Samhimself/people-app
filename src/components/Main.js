import react, {Component} from "react";
import Person from "./Person"
import Form from "./Form"

class Main extends Component {

    constructor() {
        super(Component)

        this.state = {
            persons: [
                {
                    firstName: "Bob",
                    lastName: "Jackson",
                    skill: "Soccer",
                    hobby: "Tennis"
                }
            ]
        };

        this.updateList = this.updateList.bind(this);
        this.render = this.render.bind(this)
    }


    updateList(event, firstName, lastName, skill, hobby) {

        const newPerson = {
            firstName: firstName,
            lastName: lastName,
            skill: skill,
            hobby: hobby
        }

        this.state.persons.push(newPerson)
        this.setState({
            persons: this.state.persons
        })

        console.log(this.state.persons)
    }


    render() {

        return (
            <div>
                <Form updateHandler={this.updateList}/>
                {this.state.persons.map(person => <Person personInfo={person}/>)}
            </div>
        );

    }
}


export default Main;