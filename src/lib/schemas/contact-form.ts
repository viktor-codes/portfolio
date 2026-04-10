import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(120, "Name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Enter a valid email address.")
    .max(254, "Email is too long."),
  message: z
    .string()
    .trim()
    .min(15, "Add a few more words so I can reply with something useful.")
    .max(8000, "Message is too long."),
  companyWebsite: z.string(),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>;
