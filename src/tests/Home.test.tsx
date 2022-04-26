import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";

test("Snapshot of Home component", () => {
  const comp = renderer.create(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  let tree = comp.toJSON();
  expect(tree).toMatchSnapshot();
});

describe("does my form", () => {
  test("get enabled", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    let input = screen.getByLabelText("Country Name") as HTMLInputElement;
    let btn = screen.getByText("Submit") as HTMLButtonElement;

    fireEvent.change(input, { target: { value: "India" } });
    expect(input.value).toBe("India");
    expect(btn.disabled).toBe(false);
  });
});
