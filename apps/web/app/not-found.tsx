import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container>
      <h1 className="text-2xl font-bold">Página não encontrada</h1>
      <p className="mt-2 opacity-70">
        O link pode estar errado ou a página foi movida.
      </p>
      <div className="mt-6">
        <Button href="/" variant="accent">
          Voltar para Início
        </Button>
      </div>
    </Container>
  );
}
