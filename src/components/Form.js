import react from "react";

function Form() {
  return (
    <div className="formcontainer">
        <form className="form-flex">
          <div className="flex-col">
            <label>First Name:</label>
            <input type="input"></input>  
          </div>
          <div className="flex-col">
            <label>Last Name:</label>
            <input type="input"></input>  
          </div>
          <div className="flex-col">
            <label>Skill:</label>
            <input type="input"></input>  
          </div>
          <div className="flex-col">
            <label>Hobby:</label>
            <input type="input"></input>  
          </div>
        </form>
    </div>
  );
}

export default Form;
