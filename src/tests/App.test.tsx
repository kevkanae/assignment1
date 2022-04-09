import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home";

describe("do my routers", () => {
  test("work correctly", () => {
    let view = render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:countryName" element={<Details />} />
        </Routes>
      </MemoryRouter>
    );

    expect(view).toMatchSnapshot();
  });
});
