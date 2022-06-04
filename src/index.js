import React from "react";
import ReactDOM from "react-dom";
/* import App from './App/index.js'; */
import "./index.css";

function App(props) {
    return (
        <h1>
            {props.saludo} {props.nombre} , hoy es App
        </h1>
    );
}

function withSaludos(WrapperComponent) {
    return function WrappedComponentWithSaludo(saludo,nombre) {

        return function ComponenteDeVerdad(props) {
            return (
                <React.Fragment>
                    <WrapperComponent {...props} saludo={saludo} nombre={nombre} />
                    <p>Estamos junto al WrapperComponent</p>
                </React.Fragment>
            );
        };
    };
}

const AppWithSaludos = withSaludos(App)('Buenas Tardes','Luis');

ReactDOM.render(
    <AppWithSaludos  />,
    document.getElementById("root")
);
