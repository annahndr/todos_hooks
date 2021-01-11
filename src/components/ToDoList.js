import React from 'react';
import ToDo from './ToDo';
// material UI
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

function ToDoList({ todos }){
    return (
        <Paper>
            <List>
            {todos.map(todo => (
                <>
                    <ToDo task={todo.task} key={todo.id} completed={todo.completed}/>
                    <Divider />
                </>
            ))}
            </List>
        </Paper>
    )
}
export default ToDoList;