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




    const ttl = course.parts.map(part => part.exercises).reduce((total, acc) => total + acc, 0)
    console.log(ttl)

    return (
        <div>
            <Course course={course} />
            <Content course={course} />
            <Total total={ttl} />

        </div>
    )
}

const Course = ({ course }) => {
    return (
        <Header course={course} />
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


const Total = ({ total }) => {
    return (
        <>
            <p><b>Total of {total} exercises</b></p>
        </>
    )
}

export default App

