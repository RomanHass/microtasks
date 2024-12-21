import { useParams } from "react-router-dom";
import { adidasArr, AdidasItem } from "./Adidas";
import { pumaArr, PumaItem } from "./Puma";
import { abibasArr, AbibasItem } from "./Abibas";

type SneakersType = {
  [key: string]: (AdidasItem[] | PumaItem[] | AbibasItem[])
}

const sneakers: SneakersType = {
  adidas: adidasArr,
  puma: pumaArr,
  abibas: abibasArr,
}

export const Model = () => {
  const {model, id} = useParams<{model: string, id: string}>()
  const currentModel = model && sneakers[model].find(item => item.id === Number(id))

  return (
    <div>
      {!currentModel 
      ? (
        <h2>Модель отсутствует</h2>
      ) : (
        <div>
          <div>Model: {currentModel.model}</div>
          <div>Collection: {currentModel.collection}</div>
          <div>Price: {currentModel.price}</div>
          <img
            style={{ maxWidth: "200px" }}
            src={currentModel.picture}
            alt={currentModel.model}
          />
        </div>
      )}
    </div>
  );
};
