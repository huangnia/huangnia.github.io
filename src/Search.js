import React, {useState} from "react";
import 'tachyons';

function S() {
    const [que, setque] = useState("");
    const handlert = (event) => {
        event.preventDefault();
        window.location.href = `https://www.1377x.to/search/${que}/1/`;
    };
   return(
       <form onSubmit={handlert} className={'tc'}>
           <input
               className={"pa2 ba b--green "}
               type={"Search"}
               placeholder={"Search games.."}
               value={que}
               onChange={(e) => setque(e.target.value)}
           />
       </form>
   )
}
export default S;
