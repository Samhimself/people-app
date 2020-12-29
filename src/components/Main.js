import react, {Component} from "react";
import Person from "./Person"
import Form from "./Form"

class Main extends Component {

    constructor() {
        super(Component);

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
        this.render = this.render.bind(this);

        // input values
        this.firstNameRef = react.createRef();
        this.lastNameRef = react.createRef();
        this.skillRef = react.createRef();
        this.hobbyRef = react.createRef();
    }


    updateList(event) {

        // retrieve input values
        const fname = this.firstNameRef.current.value;
        const lname = this.lastNameRef.current.value;
        const skill = this.skillRef.current.value;
        const hobby = this.hobbyRef.current.value;

        const newPerson = {
            firstName: fname,
            lastName: lname,
            skill: skill,
            hobby: hobby
        }

        // Empty all input fields
        this.firstNameRef.current.value = "";
        this.lastNameRef.current.value = "";
        this.skillRef.current.value = "";
        this.hobbyRef.current.value = "";

        // update state
        this.state.persons.push(newPerson)
        this.setState({
            persons: this.state.persons
        })
    }


    render() {

        return (
            <div>
                <Form updateHandler={this.updateList} 
                    firstNameRef={this.firstNameRef} 
                    lastNameRef={this.lastNameRef} 
                    skillRef={this.skillRef} 
                    hobbyRef={this.hobbyRef} 
                />
                {this.state.persons.map(person => <Person personInfo={person}/>)}
            </div>
        );

    }
}


export default Main;