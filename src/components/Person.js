import react from "react";

function Person(props) {
  return (
    <div className="person-box">
      <h3>Person:</h3>
      <h3>{props.personInfo.firstName}</h3>
      <h3>{props.personInfo.lastName}</h3>
      <h3>{props.personInfo.skill}</h3>
      <h3>{props.personInfo.hobby}</h3>
    </div>
  );
}

export default Person;
