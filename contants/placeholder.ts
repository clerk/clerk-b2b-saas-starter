// NOTE ON PK:
// This is a non-sensitive key, associated with a Clerk development instance
// with a few options configured, solely for presentation purposes.
// - Organizations enabled
// - Billing enabled
// - Organization plans added
const BURNER_KEY =
  'pk_test_dG9waWNhbC1tdXN0YW5nLTQ4LmNsZXJrLmFjY291bnRzLmRldiQ';

export const PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || BURNER_KEY;
