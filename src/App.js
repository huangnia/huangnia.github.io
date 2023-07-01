import React from "react";
import "tachyons";
import './sda.css'
import {genres} from './genres'
import J from "./Cardlister"
import S from './Search'

function App() {

  return (
    <div>
     <h1 className={'tc f1'} style={{background: 'linear-gradient(to left, rgba(7,27,82,1) 0%, rgba(0,128,128,1)100%)',
         WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily:'aa' }}>Gamer Gree</h1>
     <S />
     <J genres={genres} />

    </div>
  );
}

export default App;
