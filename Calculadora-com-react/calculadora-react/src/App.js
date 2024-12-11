import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");


//INSERIR UM NUMERO NO DISPLAY
const insere = (num) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
}

//LIMPAR O DISPLAY
const limpa = () => {
  setCurrentNumber("0");
}

//LIMPAR CARACTER POR CARACTER
const deleta = () => {
    setCurrentNumber(prev => prev.slice(0, -1));
}


//FAZER A OPERAÇÃO 
const calcula = () => {
    if (currentNumber !== "0"){
      try {
        const result = Function(`return ${currentNumber}`)();
        setCurrentNumber(result.toString());
      }
      catch (error){
        alert ("Expressão inválida!");
      }
    }
}

  return (
    <div className="conteudo">
            <div className="painel">
                <input id="display" type="text" placeholder="0" value={currentNumber}/>
            </div>
            <div className="grid-container">
                <div className="container1">
                    <button className="button numero button-config" id="item1" onClick={limpa}>AC</button>
                    <button className="button numero" id="item2" onClick={deleta}>DEL</button>
                    <button className="button operacao" id="item3" onClick={() => insere("/")}>÷</button>
                    <button className="button numero" id="item4" onClick={() => insere(1)}>1</button>
                    <button className="button numero" id="item5" onClick={() => insere(2)}>2</button>
                    <button className="button numero" id="item6" onClick={() => insere(3)}>3</button>
                    <button className="button operacao" id="item7" onClick={() => insere("*")}>*</button>
                    <button className="button numero" id="item8" onClick={() => insere(4)}>4</button>
                    <button className="button numero" id="item9" onClick={() => insere(5)}>5</button>
                    <button className="button numero" id="item10" onClick={() => insere(6)}>6</button>
                    <button className="button operacao" id="item11" onClick={() => insere("+")}>+</button>
                    <button className="button numero" id="item12" onClick={() => insere(7)}>7</button>
                    <button className="button numero" id="item13" onClick={() => insere(8)}>8</button>
                    <button className="button numero" id="item14" onClick={() => insere(9)}>9</button>
                    <button className="button operacao" id="item15" onClick={() => insere("-")}>-</button>
                    <button className="button button-config numero" id="item16" onClick={() => insere(".")}>.</button>
                    <button className="button numero" id="item17" onClick={() => insere(0)}>0</button>
                    <button className="button operacao" id="item18" onClick={calcula}>=</button>
                </div>
            </div>
        </div>
  );
}

export default App;
