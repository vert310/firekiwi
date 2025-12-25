# Waitlist Setup Instructions

## 1. Install Dependencies

The required packages are already in `package.json`. Run:

```bash
npm install
```

## 2. Set Up Supabase Database (Free & Easy!)

1. Go to [Supabase.com](https://supabase.com) and sign up/login (it's free!)
2. Click **"New Project"**
3. Fill in:
   - **Name**: `firekiwi` (or any name)
   - **Database Password**: Create a strong password (save it!)
   - **Region**: Choose closest to you
   - **Pricing Plan**: Free tier is perfect
4. Click **"Create new project"** (takes ~2 minutes)

## 3. Create the Waitlist Table

Once your project is ready:

1. Go to **SQL Editor** in the left sidebar
2. Click **"New query"**
3. Paste this SQL:

```sql
CREATE TABLE IF NOT EXISTS waitlist (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
```

4. Click **"Run"** (or press Cmd/Ctrl + Enter)
5. You should see "Success. No rows returned"

## 4. Get Your Supabase Credentials

1. Go to **Settings** (gear icon) → **API**
2. You'll see:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **Project API keys** section
   - Copy the **`service_role`** key (not the `anon` key - we need the service role for server-side operations)

## 5. Set Up Resend for Emails

1. Go to [Resend.com](https://resend.com) and sign up/login
2. Go to **API Keys** section
3. Create a new API key
4. Copy the API key

## 6. Configure Environment Variables in Vercel

1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add these variables:

   **Supabase:**
   - `NEXT_PUBLIC_SUPABASE_URL` = Your Supabase Project URL (from step 4)
   - `SUPABASE_SERVICE_ROLE_KEY` = Your Supabase service_role key (from step 4)

   **Resend:**
   - `RESEND_API_KEY` = Your Resend API key
   - `RESEND_FROM_EMAIL` = Your sender email
     - For testing: `onboarding@resend.dev`
     - For production: Verify your domain in Resend first

3. Make sure to add these for **Production**, **Preview**, and **Development** environments
4. Click **Save**

## 7. Deploy

```bash
git add .
git commit -m "Add email waitlist with Supabase"
git push origin main
vercel --prod
```

## 8. Test the Form

1. Submit an email through the "Get Notified" or "Join Waitlist" form
2. Check that:
   - You see a success message
   - You receive an acknowledgement email
   - The email appears in Supabase (go to **Table Editor** → **waitlist**)

## Viewing Your Waitlist

To see all collected emails:
1. Go to your Supabase project
2. Click **Table Editor** in the left sidebar
3. Click on **waitlist** table
4. You'll see all emails with timestamps

## Troubleshooting

- **Email not sending**: Check Resend API key and from email are correct
- **Database errors**: Ensure Supabase credentials are correct and table is created
- **404 on API route**: Make sure you've deployed the latest code to Vercel
- **"Email already registered"**: This is working correctly - it prevents duplicates!

## Why Supabase?

- ✅ **Free tier** with generous limits
- ✅ **Easy setup** - no complex configuration
- ✅ **Great UI** - easy to view and manage your data
- ✅ **Works perfectly** with Next.js and Vercel
- ✅ **No credit card required** for free tier
