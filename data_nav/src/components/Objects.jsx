import React from "react";
// import styled from "styled-components";

const person01 = {
  firstName: "John",
  lastName: "Doe",
  age: 35,
  height: 1.8,
};

const person02 = {
  firstName: "Lucky",
  lastName: "Luke",
  age: 75,
  height: 1.6,
};

const person03 = {
  firstName: "mr",
  lastName: "Bean",
  age: 60,
  height: 1.7,
};

export default function Persons() {
  return (
    <div clasName="persons">
      <h3>
        {person01.firstName} {person01.lastName}
      </h3>
      <h4>{person01.age} years old</h4>
      <h4>{person01.height} meters</h4>
      <br></br>
      <h3>
        {person02.firstName} {person02.lastName}
      </h3>
      <h4>{person02.age} years old</h4>
      <h4>{person02.height} meters</h4>
      <br></br>
      <h3>
        {person03.firstName} {person03.lastName}
      </h3>
      <h4>{person03.age} years old</h4>
      <h4>{person03.height} meters</h4>
    </div>
  );
}
