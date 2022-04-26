import { renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import { useFetchWeather } from "../utils/useFetchWeather";
import { screen, render } from "@testing-library/react";
import WeatherCard from "../components/WeatherCard";

describe("does react query", () => {
  const createWrapper = () => {
    const queryClient = new QueryClient();
    return ({ children }: any) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };

  test("work", async () => {
    const { result, waitFor }: any = renderHook(
      () => useFetchWeather("Tokyp"),
      {
        wrapper: createWrapper(),
      }
    );
    await waitFor(() => result.current.isSuccess, { timeout: 8000 });

    expect(result.current.data).toBeDefined();
  }, 10000);

  test("load?", () => {
    const queryClient = new QueryClient();
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <WeatherCard capital={["tokyo"]} setVisiblity={true} />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const btn = screen.getByRole("loaddd");
    expect(btn).toBeInTheDocument();
  });
});
