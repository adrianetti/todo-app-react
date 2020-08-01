import React from 'react'
import { List, ListItem, ListItemText, Button } from '@material-ui/core'
import './Todo.css'
import db from './firebase'

function Todo(props) {

    return (
        <List className="todo__list">
                <ListItem>
                  <ListItemText
                    primary={props.todo.todo}
                    secondary='FOR TODAY'
                  />
                </ListItem>
                <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>HECHO✅</Button>
        </List>
    )
}

export default Todo
