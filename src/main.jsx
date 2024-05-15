import React from 'react';
import ReactDOM from 'react-dom/client';
import MemoryGame from './MemoryGame';
import './index.css';

let pokemonList = [
  'pikachu',
  'gengar',
  'slowpoke',
  'clefairy',
  'sandshrew',
  'jigglypuff',
  'lickitung',
  'gastly',
  'cloyster',
  'abra',
  'hypno',
  'chansey',
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MemoryGame pokemonList={pokemonList} />
  </React.StrictMode>,
);
