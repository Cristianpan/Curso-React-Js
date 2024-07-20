import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("me volví a dibujar");

  return <small>{value}</small>;
});
