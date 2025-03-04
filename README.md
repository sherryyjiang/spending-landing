This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, set up your environment variables:

1. Create a `.env.local` file in the root directory
2. Add your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Current Implementation

### Email Collection with Supabase

The email signup form submits emails to Supabase using a server-side API route that bypasses Row Level Security (RLS) policies. The implementation includes:

1. **Server-side API endpoint**: Located at `/api/signup`, this endpoint uses the Supabase service role key to insert emails into the database.

2. **Fallback to localStorage**: If the API call fails, emails are still stored in the browser's localStorage as a backup.

3. **Admin Panel**: A hidden admin panel is available in the bottom-right corner of the page, showing:
   - All collected emails with timestamps
   - Sync status (whether the email was successfully saved to Supabase)
   - Options to manually sync emails that failed to save
   - Copy and clear functionality

### Supabase Setup

The application uses a Supabase table called `testflight-signups` with the following schema:

- `id`: uuid (primary key, auto-generated)
- `created_at`: timestamptz (auto-generated)
- `email`: text

### Troubleshooting

If you encounter issues with the Supabase integration:

1. **Check your environment variables**: Make sure your `.env.local` file contains the correct Supabase URL and API keys.

2. **Verify the table exists**: Ensure the `testflight-signups` table exists in your Supabase project with the correct schema.

3. **Check console logs**: The application logs detailed error messages to help diagnose issues.

4. **Use the admin panel**: The admin panel shows which emails have been successfully synced to Supabase and allows you to manually retry failed syncs.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
