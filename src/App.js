import React, { useState } from 'react'; //Import the useState component from React
import { useSelector, useDispatch } from 'react-redux'; //Import the useSelector and useDispatch function to select the required slic of state.
import { addTodo, deleteTodo, editTodo, completeTodo } from './store/todosSlice'; //Import the action creators
import "./App.css";
import Form from 'react-bootstrap/Form';
import { InputGroup, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  //State for the input field
  const [content, setContent] = useState('');
  const todos = useSelector((state) => state.todos.data); // Accessing the todos data from the Redux store
  const dispatch = useDispatch(); // Accessing the dispatch function from Redux

  // Event handler for adding a new todo
  const handleAddTodo = () => {
    if (content.trim() !== '') {
      dispatch(addTodo({ content })); // Dispatching the addTodo action with the content
      setContent(''); // Clearing the input field
    }
  };

  //***EVENT HANDLERS:***
  // Event handler for deleting a todo
  const handleDeleteTodo = (id) => {
    // Dispatching the deleteTodo action with the todo ID
    dispatch(deleteTodo({ id }));
  };

  // Event handler for editing a todo
  const handleEditTodo = (id, newContent) => {
    // Dispatching the editTodo action with the todo ID and new content

    dispatch(editTodo({ id, content: newContent }));
  };

  // Event handler for completing a todo
  const handleCompleteTodo = (id) => {
    // Dispatching the completeTodo action with the todo ID
    dispatch(completeTodo({ id }));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <InputGroup className="mb-3">
        {/*Create form for user input and create preventDefault event handler for submit*/}
        <Form onSubmit={(e) => e.preventDefault()}>
          {/*The input field*/}
          <input
            type="text"
            placeholder='Enter a task'
            value={content}
            /*Event handler for updating content variable with that in input field*/
            onChange={(e) => setContent(e.target.value)}
          />

          {/*Button to trigger action to add a new Todo to the list*/}
          <Button variant="secondary" type="submit" onClick={handleAddTodo}>Add</Button>
        </Form>
      </InputGroup>
      <ul>
        <table width={"30%"}>
          <tr>
            {/*Create list for entries in the Todo list using Object.entries() method and map the entries*/}
            {Object.entries(todos).map(([id, todo]) => (
              /*Check if item is complete and put line through text if item is marked as complete*/

              < li
                key={id}
                style={{ textDecoration: todo.completed ? 'line-through red' : 'none' }}
              >
                <td style={{width: "60%"}}>
                  <span>{todo.content}</span>
                  {/*Button to trigger action to delete a new Todo on the list*/}
                </td>
                <td style={{width: "5%"}}>
                  <Button variant="danger" onClick={() => handleDeleteTodo(id)}>Delete</Button>
                </td>
                <td style={{width: "5%"}}>
                  <Button variant="info" onClick={() => {
                    {/*Prompt user to enter the new content*/ }
                    const newContent = prompt('Enter new content:', todo.content);
                    {/*If there is a change, user EditTodo event handler to update the state*/ }
                    if (newContent !== null) {
                      handleEditTodo(id, newContent);
                    }
                  }}
                  >
                    Edit {/*Name of button to display*/}
                  </Button>
                </td>
                <td style={{width: "5%"}}>
                {/*Create button to mark items as complete*/}
                {!todo.completed && (
                  <Button variant="dark" onClick={() => handleCompleteTodo(id)}>Complete</Button>
                )}
                </td>
              </li>
            ))}
          </tr>
        </table>
      </ul>
    </div>
  );
}

export default App;
