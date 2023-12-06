import { memo } from "react";
//se usa el memo para que solo se renderize cuando tenga algun cambio en sus values 
export const Small = memo(({ value }) => {
  console.log("me dibuje :C");
  return <small>{value}</small>;
});
