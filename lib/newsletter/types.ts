export type NewsletterTopicsType = {
  releaseNotes: boolean;
  majorPosts: boolean;
};

export type NewsletterSubscriberType = {
  email: string;
  topics: NewsletterTopicsType;
  consent: boolean;
  source: string;
  createdAt: string;
  userAgent?: string;
  ip?: string;
};
