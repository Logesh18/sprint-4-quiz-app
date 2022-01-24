import { Start } from "../Button/button";

export const Heading=()=>{
    return(
        <h1>Quizz App</h1>
    );
}

export const Banner=()=>{
    return(
        <div>
            <Heading/>
            <Start/>
        </div>
    );
}