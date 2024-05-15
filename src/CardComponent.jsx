import { useEffect, useState } from 'react';

export default function CardComponent({ name, onSelection }) {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    let ignore = false;
    fetch('https://pokeapi.co/api/v2/pokemon/' + name, {
      mode: 'cors',
    })
      .then(function fulfilled(response) {
        if (!response.ok) throw new Error('Response was not ok.');
        return response.json();
      })
      .then(function fulfilled(response) {
        console.log('this should be called 24 times');
        if (!ignore) setImgSrc(response.sprites.front_default);
      })
      .catch(function (error) {
        console.log(error);
      });

    return () => {
      ignore = true;
    };
  }, [name]);

  return (
    <div className="card" onClick={() => onSelection(name)}>
      <img src={imgSrc} alt={'Sprite image of ' + name} />
      <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
    </div>
  );
}
