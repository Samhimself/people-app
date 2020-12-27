import react from "react";

function Form() {
  return (
    <div className="formcontainer">
        <form className="formflex">
            <label>First Name</label>
            <input type="input"></input>
            <label>Last Name</label>
            <input type="input"></input>
            <label>Skill</label>
            <input type="input"></input>
            <label>Hobby</label>
            <input type="input"></input>
        </form>
    </div>
  );
}

export default Form;
