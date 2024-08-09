import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe("Test to GifItem component", () => {
  const title = "Baki";
  const url =
    "https://media4.giphy.com/media/wOl12QqaDzgUyXsLXj/giphy.gif?cid=ede762f7kisxjc8ocr691xqrwpe63g4fex5hoao7sg5v097x&ep=v1_gifs_search&rid=giphy.gif&ct=g";
  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("debe de mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
