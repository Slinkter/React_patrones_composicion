import React from "react";
import "./TodoList.css";

function TodoList(props) {
    // props.error , props.loading y props.loading  son propiedad
    // para validar y hacer render de las render props(onError,onLoading,OnEmptyTdoso)

    const renderFunc = props.children || props.render;

    // solo se renderiza props.onError() solo si  se verifica props.error
    //

    return (
        <section className="TodoList-container">
            {props.error && props.onError()}

            {props.loading && props.onLoading()}

            {!props.loading && !props.totalTodos && props.onEmptyTodos()}
            {/* totalTodos es diferente a zero , searchedTodos.lenght es diferente de null ,entonces renderizar onEmptyResults */}
            {!!props.totalTodos &&
                !props.searchedTodos.length &&
                props.onEmptySearchResults(props.searchText)}

            { (!props.loading && !props.error) &&   props.searchedTodos.map(renderFunc)}

            <ul>{props.children}</ul>
        </section>
    );
}

export { TodoList };

/* {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)} */
