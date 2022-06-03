import React from "react";
import { TodoProvider } from "../TodoContext";

import { AppUI } from "./AppUI";

function App() {
    const [state, setState] = React.useState(" hola desde App  ");

    //
    return (
        <React.Fragment>

            <TodoHeader>
                <TodoCounter state={state} />
                <TodoSearch  state={state}/>
            </TodoHeader>

            <TodoList>
                <TodoItem state={state}/>
            </TodoList>

        </React.Fragment>
    );
}

function TodoHeader({ children }) {
    return <header>{children}</header>;
}

function TodoList({ children }) {
    return <section className="todolist-container">{children}</section>;
}

function TodoCounter({state}) {
    return <p>TodoCounter : {state}   </p>;
}

function TodoSearch({state}) {
    return <p>TodoSearch : {state}   </p>;
}
function TodoItem({state}) {
    return <p>TodoItem : {state}   </p>;
}

/* function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
} */

export default App;
