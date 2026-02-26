import React from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  return (
    <Container>
      <h1 className="text-2xl font-bold">Evento: {slug}</h1>
      <div className="mt-6">
        <Card>Galeria do evento (Sanity depois)</Card>
      </div>
    </Container>
  );
}
