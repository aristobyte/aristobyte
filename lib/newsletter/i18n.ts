import { EN_GB } from "@/data/translations/en-gb";

export const tNewsletter = (path: string): string => {
  const value = path
    .split(".")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .reduce((acc: any, key) => acc?.[key], EN_GB as Record<string, unknown>);
  if (typeof value === "string") return value;
  throw new Error(`Missing or invalid newsletter translation: "${path}"`);
};
