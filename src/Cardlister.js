import React from "react";
import C from "./Card"

function J({genres}){
    return(
        <div className={'tc'}>
            {genres.map((elem, i) => {return <C key={i} img={genres[i].img} name={genres[i].name}  id={i} url={genres[i].url} />})}
        </div>
    );
}

export default J;