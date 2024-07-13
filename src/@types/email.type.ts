import z from 'zod';

export const Email = z.string().email({
  message: 'Invalid email address',
});

export type EmailType = z.infer<typeof Email>;

export const emailValidation = (email: string): boolean => {
  try {
    Email.parse(email);
    return true;
  } catch (error) {
    return false;
  }
}
