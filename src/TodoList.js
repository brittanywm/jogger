import React from 'react'; // Dumb component because only need to deal with props (not states)
import AddTodo from './AddTodo';

const TodoList = props => {
    return (
        <div>
            <p>TO DO LIST COMPONENT</p>
            {props.list.map((todo , i) => { // todo is todo element in array
                return (<div key={`todo${i}`}>
                        {todo}
                        <button onClick={() => props.deleteTodo(i)}>del</button>
                </div>);
            })}
          
            {/* <p><strong>Total Runs:</strong> {props.getRunCount()}</p> */}

        </div>
    );
};

export default TodoList;
