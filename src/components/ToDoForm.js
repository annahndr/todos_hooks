import React from 'react';
import useInputState from "../hooks/useInputState";
//material-UI
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

function ToDoForm() {

    const [value, handleValueChange, reset] = useInputState("");

    return (
        <Paper>
            {value}
            <TextField value={value} onChange={handleValueChange} />
        </Paper>
    )
}

export default ToDoForm;
