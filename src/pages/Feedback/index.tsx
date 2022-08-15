import React, { useRef } from "react";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Rating } from "../../components/Rating";
import { SerasaLogo } from "../../assets/icons";
import { Modal } from "../../components/Modal";
import { Container } from "../../components/Container";
import { useState } from "react";
import api from "../../services/api";
import { Form } from "../../components/form";
import { Error, Sucess } from "../../components/Result";

interface ICreatFeedback {
  rating: number | null;
  name: string;
  comment?: string;
}

export const Feedback = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState<number | null>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const commentInputRef = useRef<HTMLInputElement>(null); // I used useref here because the comment element doesn't interact with any other action, and I don't need to render anything else by changing it

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      setLoading(true);
      const body: ICreatFeedback = {
        rating,
        name,
        ...(!!commentInputRef?.current?.value && {
          comment: commentInputRef.current.value,
        }),
      };
      await api.post("/feedback", body);
      setSuccess(true);
    } catch (error) {
      setError(true); //
    } finally {
      setLoading(false);
    }
  }

  async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  return (
    <>
      <Header />
      <Modal>
        <Container>
          <SerasaLogo />
          {!success && !error && (
            <>
              <Rating setRating={setRating} />
              <Form onSubmit={handleSubmit}>
                <Input
                  label="Nome"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  required
                />
                <Input
                  label="Comentário"
                  placeholder="Digite seu comentário"
                  name="comment"
                  ref={commentInputRef}
                />
                <Button
                  status={!!name ? "active" : "disabled"}
                  loading={loading}
                  disabled={!!name ? true : false}
                  type="submit"
                  name="Enviar Avaliação"
                />
              </Form>
            </>
          )}
          {success && <Sucess />}
          {error && <Error />}
        </Container>
      </Modal>
    </>
  );
};
