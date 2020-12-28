import react from "react";

function Form(props) {
  return (
    <div>
      <div className="formcontainer">
          <form className="form-flex">
            <div className="flex-col">
              <label>First Name:</label>
              <input id="firstName" type="input"></input>  
            </div>
            <div className="flex-col">
              <label >Last Name:</label>
              <input id="lastName" type="input"></input>  
            </div>
            <div className="flex-col">
              <label>Skill:</label>
              <input id="skill" type="input"></input>  
            </div>
            <div className="flex-col">
              <label>Hobby:</label>
              <input id="hobby" type="input"></input>  
            </div>
          </form>
      </div>
      <button onClick={props.updateHandler}>Add Person</button>
    </div>
  );
}

export default Form;
