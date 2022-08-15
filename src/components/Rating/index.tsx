import { Bstyles, FieldsetStyles, RadioStyles } from "./styles";
import "./stars.css";
import { HeadingExtraSmall, HeadingSmall } from "../Headings";

interface IRatingProps {
  setRating: React.Dispatch<React.SetStateAction<number | null>>;
}

export function Rating({ setRating }: IRatingProps) {
  function handleRating({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) {
    const parsedValue = !isNaN(Number(value)) ? Number(value) : null;
    setRating(parsedValue);
  }

  return (
    <>
      <div>
        <HeadingExtraSmall
          aria-required="true"
          aria-label="Conte o quanto você está satisfeito com nossos serviços"
        >
          Conte o quanto você está satisfeito com nossos serviços
        </HeadingExtraSmall>
        <HeadingSmall
          aria-required="true"
          aria-label="Marque de 1 à 5 estrelas"
        >
          Marque de 1 à 5 estrelas
        </HeadingSmall>
      </div>
      <FieldsetStyles>
        <label>
          <RadioStyles
            required={true}
            name="star"
            defaultChecked={true}
            value={1}
            type="radio"
            onChange={handleRating}
          />
          <Bstyles aria-label="1 de 5 estrelas">
            &#9733;&#9734;&#9734;&#9734;&#9734;
          </Bstyles>
        </label>
        <label>
          <RadioStyles
            name="star"
            value={2}
            type="radio"
            onChange={handleRating}
          />
          <Bstyles aria-label="2 de 5 estrelas">
            &#9733;&#9733;&#9734;&#9734;&#9734;
          </Bstyles>
        </label>
        <label>
          <RadioStyles
            name="star"
            value={3}
            type="radio"
            onChange={handleRating}
          />
          <Bstyles aria-label="3 de 5 estrelas">
            &#9733;&#9733;&#9733;&#9734;&#9734;
          </Bstyles>
        </label>
        <label>
          <RadioStyles
            name="star"
            value={4}
            type="radio"
            onChange={handleRating}
          />
          <Bstyles aria-label="4 de 5 estrelas">
            &#9733;&#9733;&#9733;&#9733;&#9734;
          </Bstyles>
        </label>
        <label>
          <RadioStyles
            name="star"
            value={5}
            type="radio"
            onChange={handleRating}
          />
          <Bstyles aria-label="5 de 5 estrelas">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </Bstyles>
        </label>
      </FieldsetStyles>
    </>
  );
}
