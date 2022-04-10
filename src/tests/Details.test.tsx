import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

import Details from "../pages/Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("does the url params", () => {
  test("exist", () => {
    render(
      <MemoryRouter initialEntries={["/:countryName"]}>
        <QueryClientProvider client={queryClient}>
          <Details />
        </QueryClientProvider>
      </MemoryRouter>
    );

    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useParams: () => ({
        countryName: "Japan",
      }),
    }));
  });
});
