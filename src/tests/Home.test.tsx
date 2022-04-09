import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

describe("does my form", () => {
  test("stay disabled by default", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    let input = screen.getByLabelText("Country Name") as HTMLInputElement;
    let btn = screen.getByText("Submit") as HTMLButtonElement;
    expect(input.value).toBe("");
    expect(btn.disabled).toBe(true);
  });

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
