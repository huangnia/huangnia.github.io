import React from "react";

function C({img, name, url}){
    const handleClick = () => {
        window.open({url}, '_Self');
    };
    return(
        <div className={'bg-light-green dib br3 pa3 ma4 grow tc bw2 shadow-5'} onClick={handleClick}>
            <img src={img} alt={'loading..'} height={'300px'} width={'300px'} />
            <h2>{name}</h2>
        </div>
    );
}
export default C;