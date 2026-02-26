import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "0h02dw31", // seu projectId atual
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
