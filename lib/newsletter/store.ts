import { promises as fs } from "node:fs";
import path from "node:path";
import { NewsletterSubscriberType } from "./types";

const cacheDir = path.join(process.cwd(), ".cache");
const cacheFile = path.join(cacheDir, "newsletter-subscribers.json");

const readStore = async (): Promise<NewsletterSubscriberType[]> => {
  try {
    const data = await fs.readFile(cacheFile, "utf8");
    const parsed = JSON.parse(data) as NewsletterSubscriberType[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const writeStore = async (subscribers: NewsletterSubscriberType[]) => {
  await fs.mkdir(cacheDir, { recursive: true });
  await fs.writeFile(cacheFile, JSON.stringify(subscribers, null, 2), "utf8");
};

export const hasSubscriber = async (email: string) => {
  const subscribers = await readStore();
  return subscribers.some(
    (subscriber) => subscriber.email.toLowerCase() === email.toLowerCase(),
  );
};

export const addSubscriber = async (subscriber: NewsletterSubscriberType) => {
  const subscribers = await readStore();
  subscribers.push(subscriber);
  await writeStore(subscribers);
};

export const upsertSubscriber = async (subscriber: NewsletterSubscriberType) => {
  const subscribers = await readStore();
  const existingIndex = subscribers.findIndex(
    (item) => item.email.toLowerCase() === subscriber.email.toLowerCase(),
  );

  if (existingIndex >= 0) {
    subscribers[existingIndex] = subscriber;
    await writeStore(subscribers);
    return { created: false };
  }

  subscribers.push(subscriber);
  await writeStore(subscribers);
  return { created: true };
};

export const removeSubscriber = async (email: string) => {
  const subscribers = await readStore();
  const next = subscribers.filter(
    (subscriber) => subscriber.email.toLowerCase() !== email.toLowerCase(),
  );
  const removed = subscribers.length !== next.length;
  if (removed) {
    await writeStore(next);
  }
  return removed;
};
