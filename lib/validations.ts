import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[0-9]/, "Must include a number")
    .regex(/[a-zA-Z]/, "Must include a letter"),
});

export const postSchema = z.object({
  content: z.string().min(1, "Post cannot be empty"),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5, "Password too short"),
});
