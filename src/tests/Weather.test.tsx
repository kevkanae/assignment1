import { renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "react-query";
import { useFetchWeather } from "../utils/useFetchWeather";

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
});
