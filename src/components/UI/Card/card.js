import { useState } from "react";
import * as header from "src/components/UI/Banner/banner";
import reactDom from "react-dom";
import { Start } from "../Button/button";
var count=0,score=0;
const Card=(props)=>{
    const [disable, setDisable] = useState(false);
    const resultPage=()=>{
        reactDom.render(
            <div>
                <header.Heading/>
                <div id="result">
                    {
                        <div>You have answered {score}/{count} Correctly</div>
                    }
                </div>
                <center>
                <Start/>
                </center>

            </div>,
            document.getElementById("root")
        );
        count=0;
    }
    const checkAnswer=(e)=>{
        count++;
        setDisable(true);
        if(e.target.value===props.element.correct_option){
            score++;
        }
        if(count===5){
            reactDom.render(
            <div>
                <button id="showResults" datatest-id="showResults" onClick={resultPage}>Show Results</button>
            </div>,
            document.getElementById("resultButton"))
        }
    }
    return(
        <div id="card">
            <div id="cardContainer">
                <div id="question">
                    {props.element.question}
                </div>
            </div>
            <br/>
            <div id="optionContainer">
                {
                     props.element.options.map((ele,i)=>{
                        return(<button disabled={disable} id="options" key={i.toString()} datatest-id="option" value={ele} onClick={checkAnswer}>{ele}</button>)  
                    })  
                }
           </div>

        </div>
    );
}
export default Card;