let key="0256a5632636eb1a63f828915dd2d646";

const fetchCharacters = () => {
    return fetch(`http://gateway.marvel.com/v1/public/characters?apikey=${key}`)
      .then((response) => response.json())
      .then((res)=>res.data.results)
      
  };
  
  export default fetchCharacters;