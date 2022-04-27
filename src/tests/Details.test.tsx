import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../pages/Details";
import renderer from "react-test-renderer";
const queryClient = new QueryClient();

test("Snapshot of Details component", () => {
  const comp = renderer.create(
    <BrowserRouter>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <Details />
      </QueryClientProvider>
    </BrowserRouter>
  );
  let tree = comp.toJSON();
  expect(tree).toMatchSnapshot();
});

describe("does use params", () => {
  jest.setTimeout(10000);
  test("work in custom fetch hook", async () => {
    render(
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <MemoryRouter initialEntries={["/India"]}>
          <Routes>
            <Route path="/:countryName" element={<Details />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    );

    await new Promise((r) => setTimeout(r, 3000));
    expect(screen.getByRole("mainbox")).toBeInTheDocument();
  });
});

describe("In Details", () => {
  test("does loading work when params is undefined", async () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <Details />
        </QueryClientProvider>
      </BrowserRouter>
    );

    expect(screen.getByRole("loadbtn")).toBeInTheDocument();
  });
});
