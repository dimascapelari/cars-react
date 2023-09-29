import { Fragment } from "react";
import { Cars } from "./assets/components/cars";

const carros = [
  {
    id: 1,
    marca: "Chevrolet",
    modelo: "Agile",
    cor: "Prata",
  },
  {
    id: 2,
    marca: "Fiat",
    modelo: "Uno",
    cor: "Preto",
  },
  {
    id: 3,
    marca: "Ford",
    modelo: "Fiesta",
    cor: "Branco",
  },
];

export const App = () => {
  return (
    <Fragment>
      <Cars carros={carros} />
    </Fragment>
  );
};
