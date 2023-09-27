const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Header = (course) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = (props) => {
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14
  };

  return (
    <div>
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.one + props.two + props.three}</p>
  )
}




const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Content 
      part1={part1}
      part2={part2}
      part3={part3}
      />
      <Total one={exercises1} two={exercises2} three={exercises3} /> 
    </div>
  )
}

export default App