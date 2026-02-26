import React from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  return (
    <Container>
      <h1 className="text-2xl font-bold">Produto: {slug}</h1>
      <div className="mt-6">
        <Card>Detalhes do produto (Sanity depois)</Card>
      </div>
    </Container>
  );
}
