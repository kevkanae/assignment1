import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import { QueryClient, QueryClientProvider } from "react-query";

const data = {
  name: {
    official: "",
  },
  capital: "",
  latlng: [1, 1],
  population: 111,
  flags: {
    png: "",
  },
  coatOfArms: {
    png: "",
  },
};
const queryClient = new QueryClient();
test("Snapshot of Home component", () => {
  const comp = renderer.create(
    <BrowserRouter>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <CountryCard data={data} getWeatherSignal={() => {}} />
      </QueryClientProvider>
    </BrowserRouter>
  );
  let tree = comp.toJSON();
  expect(tree).toMatchSnapshot();
});

describe("In Country Card,", () => {
  test("is the header present", () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <CountryCard data={data} getWeatherSignal={() => {}} />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const flagbox = screen.getByRole("flagbox");
    const offname = screen.getByRole("offname");
    const popu = screen.getByRole("popu");
    const cap = screen.getByRole("cap");
    const latlang = screen.getByRole("latlang");
    const urltoimg = screen.getByRole("urltoimg");
    expect(flagbox).toBeInTheDocument();
    expect(offname).toBeInTheDocument();
    expect(popu).toBeInTheDocument();
    expect(cap).toBeInTheDocument();
    expect(latlang).toBeInTheDocument();
    expect(urltoimg).toBeInTheDocument();
  });

  test("is the button present", () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <CountryCard data={data} getWeatherSignal={() => {}} />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const btn = screen.getByRole("weatherbtn");
    expect(btn).toBeInTheDocument();
  });
});
