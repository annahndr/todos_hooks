import React from 'react';
import useInputState from "../hooks/useInputState";
//material-UI
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

function ToDoForm() {

    const [value, handleChange, reset] = useInputState("");

    return (
        <Paper>
            <TextField value={value} onChange={handleChange} />
        </Paper>
    )
}

export default ToDoForm;
