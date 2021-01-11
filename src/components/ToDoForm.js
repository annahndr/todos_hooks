import React from 'react';
import useInputState from "../hooks/useInputState";
//material-UI
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

function ToDoForm({ addToDo }) {

    //using custom hook:
    const [value, handleValueChange, reset] = useInputState("");

    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form onSubmit={e => {
                e.preventDefault();
                addToDo(value);
                reset();
            }}>
            <TextField value={value} onChange={handleValueChange} margin="normal" label="Add New ToDo" />
            </form>
        </Paper>
    )
}

export default ToDoForm;
