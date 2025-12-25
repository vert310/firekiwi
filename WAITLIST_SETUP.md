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

### 5a. Add DNS Records to Your Domain (Namecheap)

To verify your domain in Resend and enable sending emails from your domain, you need to add DNS records in Namecheap:

1. **Log in to Namecheap**
   - Go to [namecheap.com](https://www.namecheap.com)
   - Click **"Sign In"** in the top right corner
   - Enter your username and password

2. **Navigate to Domain List**
   - After logging in, click on **"Domain List"** in the left sidebar (or go to: https://ap.www.namecheap.com/domains/list/)
   - You'll see a list of all your domains

3. **Select Your Domain**
   - Find **firekiwi.com** in the list
   - Click on the **"Manage"** button next to it

4. **Access DNS Settings**
   - In the domain management page, look for the **"Advanced DNS"** tab
   - Click on **"Advanced DNS"** (it's usually the second tab)

5. **Add the TXT Record**
   - Scroll down to the **"Host Records"** section
   - Look for the **"TXT Records"** section (or find an **"Add New Record"** button)
   - Click **"Add New Record"** button
   - In the record form:
     - **Type**: Select **"TXT Record"** from the dropdown
     - **Host**: Enter the name Resend provides (often `_resend._domainkey` or just `@` for root domain)
       - If Resend shows `_resend._domainkey.firekiwi.com`, enter `_resend._domainkey`
       - If Resend shows just the domain, enter `@`
     - **Value**: Paste the long string value that Resend provides (this is the DKIM/SPF record)
     - **TTL**: Leave as default (usually "Automatic" or "30 min")
   - Click **"Save All Changes"** (green checkmark icon) or **"Save"** button

6. **Verify the Record**
   - The new TXT record should now appear in your DNS records list
   - Double-check that the Host and Value match exactly what Resend provided

7. **Wait for DNS Propagation**
   - DNS changes can take 5-10 minutes to propagate, but sometimes up to 24-48 hours
   - You can check propagation status using tools like:
     - [whatsmydns.net](https://www.whatsmydns.net)
     - [dnschecker.org](https://dnschecker.org)
   - In Resend, you can check the domain verification status - it will show as "Verified" once DNS has propagated

8. **Additional Records (if needed)**
   - Resend may require multiple records (SPF, DKIM, DMARC)
   - Repeat steps 5-6 for each record Resend provides
   - Make sure to use the exact Host and Value for each record

**Note**: If you're using Namecheap's BasicDNS, you may need to switch to Namecheap's PremiumDNS or use a custom nameserver. Most domains work fine with BasicDNS for TXT records.

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
