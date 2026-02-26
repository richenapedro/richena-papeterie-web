import React from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function Page() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <section className="pt-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Personalizados que viram lembrança
          </h1>
          <p className="mt-3 max-w-2xl text-[rgb(var(--text))] opacity-70">
            Topos 3D, caixas, kits e papelaria para festas — feito sob medida.
          </p>
          <div className="mt-6 flex gap-3">
            <Button href="/produtos" variant="primary">
              Ver produtos
            </Button>
            <Button href="/orcamento" variant="ghost">
              Pedir orçamento
            </Button>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <Card>
            <div className="text-sm font-semibold">Produtos</div>
            <p className="mt-1 text-sm opacity-70">
              Catálogo organizado por categorias.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">Portfólio</div>
            <p className="mt-1 text-sm opacity-70">
              Eventos reais, fotos e inspirações.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">Orçamento</div>
            <p className="mt-1 text-sm opacity-70">
              Pedido rápido com referências.
            </p>
          </Card>
        </section>
      </div>
    </Container>
  );
}
