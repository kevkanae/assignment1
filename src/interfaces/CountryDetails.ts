export interface ICountryDetails {
  name: {
    official: string;
  };
  capital?: string[] | null;
  latlng: number[];
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
}
