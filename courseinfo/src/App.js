
const App = () => {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]



  // const ttl = course.parts.map(part => part.exercises).reduce((total, acc) => total + acc, 0)
  // console.log(ttl)
  //<Total total={ttl} />

  return (
    <div>
      <Crs courses={courses} />


    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )

}


const Content = ({ course }) => {
  return (
    <ul>
      {course.parts.map(part => <Part key={part.id} part={part} />)}
    </ul>
  )
}


const Part = ({ part }) => {
  return (
    <>
      <li key={part.id}>{part.name} {part.exercises}</li>
    </>
  )
}


const Total = ({ course }) => {
  return (
    <>
      <p><b>Total of {course.parts.map(part => part.exercises).reduce((total, acc) => total + acc, 0)} exercises</b></p>
    </>
  )
}


const Crs = ({ courses }) => {
  return (
    <div>
      {courses.map(course =>
        <div>
          <Course course={course} />
        </div>)}
    </div>
  )
}

export default App

