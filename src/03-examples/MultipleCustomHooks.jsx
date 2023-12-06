import { useFetchHP } from "../hooks/useFetchHP";
const idCharacter = '4c7e6819-a91a-45b2-a454-f931e4a7cce3' //"9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8"; 
import { Character, LoadingCharacter } from "./";

const urlhp = `https://hp-api.onrender.com/api/character/${idCharacter}`;

export const MultipleCustomHooks = () => {
  const { data, hasError, isLoading } = useFetchHP(urlhp);

  const { name, actor, image } = !!data && data[0];

  console.log(data);

  return (
    <>
      <h1>HP Character</h1>
      <hr />
      {isLoading ? (
        <LoadingCharacter />
      ) : (
        <Character actor={actor} name={name} image={image} />
      )}
    </>
  );
};
