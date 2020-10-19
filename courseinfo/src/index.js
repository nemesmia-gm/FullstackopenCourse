import ReactDOM from 'react-dom'
import React from "react";

const Header = (props) => {
    console.log(props)
  return <h1>Course {props.course} </h1>
};

const Part = (props) => {
    return (
        <p>Content {props.part},{props.exercise} </p>
    )
};
const Content = (props) => {
    return (
            <div>
                <Part part={props.part1} exercise={props.exercises1}/>
                <Part part={props.part2} exercise={props.exercises2} />
                <Part part={props.part3} exercise={props.exercises3} />
            </div>
    )
};

const Total = (props) => {
    return (
            <p>Number of exercises {props.total}  </p>
    )
};


const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
        name: 'Fundamentals of React',
        exercises: 10
        },
        {
        name: 'Using props to pass data',
        exercises: 7
        },
        {
        name: 'State of a component',
        exercises: 14
        }
        ];

  return (
      <div>
          <Header course={course} />
          <Content
              part1={parts[0].name} exercise1={parts[0].exercises}
              part2={parts[1].name} exercise2={parts[1].exercises}
              part3={parts[2].name} exercise3={parts[2].exercises}
          />
          <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
  </div>
)
};

ReactDOM.render(<App />, document.getElementById('root'));
