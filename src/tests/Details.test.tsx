import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";
import Details from "../pages/Details";
import { useFetchCountry } from "../utils/useFetchCountry";

describe("does the url params", () => {
  const queryClient = new QueryClient();
  test("exist", () => {
    render(
      <MemoryRouter initialEntries={["/:countryName"]}>
        <QueryClientProvider client={queryClient} contextSharing={true}>
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

describe("does react query", () => {
  const createWrapper = () => {
    const queryClient = new QueryClient();
    return ({ children }: any) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };

  test("work", async () => {
    const { result, waitFor }: any = renderHook(
      () => useFetchCountry("Japan"),
      {
        wrapper: createWrapper(),
      }
    );
    await waitFor(() => result.current.isSuccess, { timeout: 8000 });

    expect(result.current.data).toBeDefined();
  }, 10000);
});
