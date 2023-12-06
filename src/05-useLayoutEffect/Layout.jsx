import { useFetch } from "../hooks/useFetch";
// const idCharacter = "424";
import { Character, LoadingCharacter } from "../03-examples";
import { useCounter } from "../hooks/useCounter";


export const Layout = () => {
    const {counter, increment}= useCounter(1)
const url = `https://rickandmortyapi.com/api/character/${counter}`;


  const { data, hasError, isLoading } = useFetch(url);
  const { name, species, image } = !!data && data;

  return (
    <>
      <h1>Rick and Morty Character</h1>
      <hr />
      {isLoading ? (
        <LoadingCharacter />
      ) : (
        <Character actor={species} name={name} image={image} />
      )}

      <button className="btn"
      disabled={isLoading}
      onClick={()=>increment()}>Next Character

      </button>
    </>
  );
};
