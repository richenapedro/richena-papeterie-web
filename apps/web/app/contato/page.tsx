import React from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <Container>
      <h1 className="text-2xl font-bold">Contato</h1>
      <div className="mt-6 max-w-xl">
        <Card>
          <div className="text-sm opacity-80">
            WhatsApp e Instagram no footer por enquanto.
          </div>
        </Card>
      </div>
    </Container>
  );
}
