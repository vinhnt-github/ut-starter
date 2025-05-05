import { z } from 'zod';

export const FormValidationSchema = z.object({
    name: z.string().nonempty('Name is required'),
    email: z.string().email('Invalid email address').nonempty('Email is required'),
    role: z.enum(['user', 'admin'], { required_error: 'Select a role' }),
    terms: z.boolean().refine(value => value === true, { message: 'Accept terms' }),
});

export type FormData = z.infer<typeof FormValidationSchema>;