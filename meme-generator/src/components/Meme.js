import './Meme.css';
import { useState, useEffect } from 'react';

export default function Input() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImage() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomIndex].url;

    setMeme(prevMeme => {
      return { ...prevMeme, randomImage: url };
    });

  }


  function changeHandle(event) {
    const { name, value } = event.target;
    setMeme(prevMeme => {
      return { ...prevMeme, [name]: value };
    });
  }


  return (
    <main className='hero-section'>
      <div className='form'>
        <input
          type='text'
          placeholder='Top text'
          className='top'
          name="topText"
          value={meme.topText}
          onChange={changeHandle}
        />
        <input
          type='text'
          placeholder='Bottom text'
          className='bottom'
          name="bottomText"
          value={meme.bottomText}
          onChange={changeHandle}
        />

        <button className='generator-btn' onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className='meme-container'>
        <img src={meme.randomImage} className='meme' alt='Meme' />
        <h2 className='memeText top'>{meme.topText}</h2>
        <h2 className='memeText bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  );
}
