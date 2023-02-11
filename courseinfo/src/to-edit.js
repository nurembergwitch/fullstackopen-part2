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

    return (
        <div>
            <Crs courses={courses} />

        </div>
    )
}

const Course = ({ course }) => {
    return (
        <Header course={course} />
    )
}

const Header = ({ courses }) => {
    return (
        <div>
            <h1>{courses.name}</h1>
        </div>
    )

}


const Content = (props) => {

    return (
        <ul>
            {props.course.parts.map(part => <Part key={part.id} part={part} />)}
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



const Crs = ({ courses }) => {
    return (
        <div>
            <Header courses={courses} />
            {courses.map(course => {
                <div>
                    <Content course={course} />
                </div>
            })}
        </div>
    )
}

export default App



/*
for c in courses, render course component, course = {c}
 
 
 
 
const Total = ({ total }) => {
  return (
    <>
      <p><b>Total of {total} exercises</b></p>
    </>
  )
}
*/
