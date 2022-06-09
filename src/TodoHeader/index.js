import React from "react";

function TodoHeader({ children, loading }) {
    // pasar propiedads del padre al hijo (loading )
    // para eso se usa React.CloneElement 
    // cuando son varios hijos se usa React.Children y se convierte una Array
    return (
        <header>
            {React.Children.toArray(children).map((child) =>
                React.cloneElement(child, { loading })
            )}
        </header>
    );
}

export { TodoHeader };
