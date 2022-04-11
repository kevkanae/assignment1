import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

import Details from "../pages/Details";
import { useFetchCountry } from "../utils/useFetchCountry";

describe("does the url params", () => {
  test("exist", () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });
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

describe("does react query work", () => {
  const createWrapper = () => {
    const queryClient = new QueryClient();
    return ({ children }: any) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };

  test("my first test", async () => {
    const { data, error, isFetched, isError }: any = renderHook(
      () => useFetchCountry("Japan"),
      {
        wrapper: createWrapper(),
      }
    );
    expect(data).toBeDefined();
  });
});
