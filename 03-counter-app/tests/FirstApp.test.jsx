import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp/>", () => {
  const title = "Hola Soy Cristian";
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el titulo en un h1", () => {
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();
    /*   const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toContain(title); */
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    const subTitle = 'Soy un subtitulo'; 
    const {getByText} = render(<FirstApp title ={title} subtitle={subTitle}/>); 

    expect(getByText(subTitle)).toBeTruthy(); 
  });
});
