import reactDom from "react-dom";
import * as header from "src/components/UI/Banner/banner";
import Card from "src/components/UI/Card/card"
import data from "src/Data/data";

export const Start=()=>{
    const redirectToQuiz=()=>{
        reactDom.render(
            <div>
                <header.Heading/>
                <div id="container">
                {data.map((e,i)=>{
                    return (<div key={i.toString()}>
                        <Card element={e}/>
                    </div>)    
                })}
                </div>
                <center>
                <div id="resultButton">
                    
                </div>
                </center>

            </div>,
            document.getElementById("root"));
    }
    return(
        <div>
            <button id="start" datatest-id="start" onClick={redirectToQuiz}>Start Quiz</button>
        </div>
    );
}

