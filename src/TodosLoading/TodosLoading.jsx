import React from "react";
import './TodosLoading.css';

function TodosLoading(){
    return(
        <>
            <div className="container">
                <p className="text__cargando">Cargando</p>
                <div className="carga"></div>
                <div className="carga"></div>
                <div className="carga"></div>
            </div>
        </>
    )
}

export { TodosLoading }