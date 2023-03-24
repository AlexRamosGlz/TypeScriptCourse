import axios from "axios";

const API_URL: string = 'https://jsonplaceholder.typicode.com/todos/1';

function logTodo(object: ITodo): void {

    console.log(`
        id: ${object.id}
        title: ${object.title}
        completed: ${object.completed}
    `)
}

interface ITodo {
    id: number,
    title: string,
    completed: boolean
}

axios.get(API_URL).then(res =>{

    logTodo(res.data)
    
})
