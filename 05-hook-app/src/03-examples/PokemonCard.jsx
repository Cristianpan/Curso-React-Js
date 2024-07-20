import { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const divRef = useRef();
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const { height, width } = divRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [name]);

  return (
    <section style={{ height: "auto" }}>
      <h2 className="text-capitalize">
        #{id} - {name}
      </h2>

      <div ref={divRef}>
        {sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={name} />
        ))}
      </div>

      <code>{JSON.stringify(boxSize)}</code>
    </section>
  );
};
