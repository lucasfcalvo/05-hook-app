import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log('me volvi generar :C')
  return (
    <button
      className="btn"
      onClick={() => {
        increment(3);
      }}
    >
      Incrementar
    </button>
  );
})
