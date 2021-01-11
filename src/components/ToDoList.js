import React from 'react';
// material UI
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";

function ToDoList({ todos }){
    return (
        <Paper>
            <List>
            {todos.map(todo => (
                <>
                    <ListItem>
                        <ListItemText>{todo.task}</ListItemText>
                    </ListItem>
                    <Divider />
                </>
            ))}
            </List>
        </Paper>
    )
}
export default ToDoList;