import React from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <Container>
      <h1 className="text-2xl font-bold">Como funciona</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card>1) Você envia referências</Card>
        <Card>2) A gente confirma detalhes</Card>
        <Card>3) Produção e entrega</Card>
      </div>
    </Container>
  );
}
