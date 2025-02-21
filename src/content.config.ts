import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  stack: z.array(z.string()),
  href: z.string(),
  imgSrc: z.string(),
  github: z.string(),
});

const projects = defineCollection({
  loader: file("src/data/projects.json"),
  schema: projectSchema,
});

export type Project = z.infer<typeof projectSchema>;
export const collections = { projects };
