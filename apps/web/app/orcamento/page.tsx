import React from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function Page() {
  return (
    <Container>
      <h1 className="text-2xl font-bold">Orçamento</h1>
      <p className="mt-2 opacity-70">
        MVP: aqui vai o formulário que salva um quoteRequest no Sanity (ou envia
        pro n8n).
      </p>

      <div className="mt-6 max-w-xl">
        <Card>
          <div className="flex flex-col gap-3">
            <input
              className="h-10 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 text-sm"
              placeholder="Seu nome"
            />
            <input
              className="h-10 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 text-sm"
              placeholder="WhatsApp"
            />
            <textarea
              className="min-h-28 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-3 text-sm"
              placeholder="Descreva o que você precisa (tema, data, itens...)"
            />
            <Button variant="accent">Enviar</Button>
          </div>
        </Card>
      </div>
    </Container>
  );
}
