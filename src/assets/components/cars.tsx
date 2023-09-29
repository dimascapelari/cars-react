import "./style.css";

export type Carro = {
  id: number | string;
  marca: string;
  modelo: string;
  cor: string;
};

type Props = {
  carros: Array<Carro>;
};

export const Cars: React.FC<Props> = ({ carros }) => {
  return (
    <>
      <h2>Cars components</h2>
      {carros.map((car) => (
        <div
          className={
            car.marca === "Chevrolet" ? "classePreta" : "classeVermelha"
          }
          key={car.id}
          style={{
            border: "2px solid red",
            display: "flex",
            gap: "20px",
            marginBottom: "10px",
          }}
        >
          <p
            style={
              car.marca === "Chevrolet"
                ? { color: "blue" }
                : { color: "orange" }
            }
          >
            {car.marca}
          </p>
          <p>Modelo: {car.modelo}</p>
          <p>Cor: {car.cor}</p>
        </div>
      ))}
    </>
  );
};
