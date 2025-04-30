import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 character long" })
    .max(50, { message: "Name cannot exceed 50 caracter" }),
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 character long" })
    .max(50, { message: "Username cannot exceed 50 caracter" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(2)
    .max(50),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 character long" })
    .max(50, { message: "Password cannot exceed 50 character" }),
});

export const sigInFormSchema = formSchema.pick({
  email: true,
  password: true,
});
