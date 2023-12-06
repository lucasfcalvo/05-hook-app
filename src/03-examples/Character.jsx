import { useLayoutEffect, useRef, useState } from "react";

export const Character = ({ name, image, actor }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    console.log(pRef.current.getBoundingClientRect())
    const { width, height } = pRef.current.getBoundingClientRect();
    // console.log(boxSize)
    // setBoxSize({ name, actor });
    setBoxSize({ width, height });
  }, [image]);
  return (
    <>
      <blockquote ref={pRef}className="blockquote text-end">
        <img  src={image} alt="img Character" />
        <p className="mb-2">{name}</p>
        <footer className="blockquote-footer">{actor}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
