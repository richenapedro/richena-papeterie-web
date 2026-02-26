import React from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <Container>
      <h1 className="text-2xl font-bold">Portfólio</h1>
      <p className="mt-2 opacity-70">
        Em breve: galerias e eventos vindos do Sanity.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card>Evento placeholder</Card>
        <Card>Evento placeholder</Card>
        <Card>Evento placeholder</Card>
      </div>
    </Container>
  );
}
