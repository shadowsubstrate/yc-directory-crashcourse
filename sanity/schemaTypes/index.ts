import { author } from "@/sanity/schemaTypes/author";
import { type SchemaTypeDefinition } from "sanity";
import { startup } from "./startup";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup],
};
