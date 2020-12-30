import React, { useState } from 'react';
//material UI stuff:
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Grid";
import Grid from "@material-ui/core/Grid";


function ToDoApp() {

    const starterTodos = [
        { id: 1, task: "wash dog", completed: false },
        { id: 2, task: "write thank you notes", completed: false },
        { id: 3, task: "hoover stairs", completed: false }
    ]

    const [todos, setTodos] = useState(starterTodos);

    return(
        <Paper 
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#FFFCF9"
            }}
            elevation = {0}>
            
            <AppBar color='primary' position='static' sytle={{ height: "64px"}}>
                <Toolbar>
                    <Typography color='inherit'>THINGS TO DO (Using Hooks)</Typography>
                </Toolbar>

            </AppBar>
        </Paper>
    )
}
export default ToDoApp;
