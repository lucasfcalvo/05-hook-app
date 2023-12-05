import React, { useEffect } from "react";
export const Message = () => {
  useEffect(() => {
    console.log("Message Mounted!");

    return () => {
      console.log("Mesage Unmounted!");
    };
  }, []);

  return (
    <>
      <h3 style={{ color: "red", fontSize: "small",fontWeight:100 , marginLeft: "15px" }}>
        Usuario ya existe
      </h3>
    </>
  );
};
