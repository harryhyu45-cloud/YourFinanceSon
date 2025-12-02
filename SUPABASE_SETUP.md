# Supabase Database Setup Instructions

## Creating the Contact Submissions Table

To enable the contact form to save submissions to your Supabase database, you need to create a table. Follow these steps:

### Option 1: Using the Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard: https://supabase.com/dashboard
2. Navigate to **Table Editor** in the left sidebar
3. Click **New Table**
4. Use the following settings:

**Table Name:** `contact_submissions`

**Columns:**
- `id` - Type: `uuid` - Default value: `gen_random_uuid()` - Primary Key: ✓
- `name` - Type: `text` - Nullable: ✗ (required)
- `email` - Type: `text` - Nullable: ✗ (required)
- `gender` - Type: `text` - Nullable: ✓
- `description` - Type: `text` - Nullable: ✗ (required)
- `created_at` - Type: `timestamptz` - Default value: `now()` - Nullable: ✗

5. Click **Save** to create the table

### Option 2: Using SQL Editor

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor** in the left sidebar
3. Click **New Query**
4. Paste the following SQL:

```sql
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  gender TEXT,
  description TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserts from anyone (since this is a public contact form)
CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create a policy to allow authenticated users to view all submissions
CREATE POLICY "Allow authenticated reads" ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
```

5. Click **Run** to execute the query

### Row Level Security (RLS)

The SQL above enables Row Level Security and creates policies that:
- Allow **anyone** (anonymous users) to insert new contact form submissions
- Allow **authenticated users** (you, when logged in) to view all submissions

This is secure because:
- Public users can only submit forms, not read other submissions
- You can view all submissions when logged into your Supabase dashboard

### Viewing Submissions

After the table is created, you can view contact form submissions by:
1. Going to **Table Editor** in your Supabase dashboard
2. Selecting the `contact_submissions` table
3. All submissions will be listed with timestamps

### Testing the Integration

1. Start your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your Supabase dashboard to verify the submission was saved

## Troubleshooting

**Error: "relation 'contact_submissions' does not exist"**
- Make sure you've created the table in Supabase
- Verify you're using the correct Supabase project URL in your `.env` file

**Error: "new row violates row-level security policy"**
- Make sure you've enabled RLS and created the insert policy
- Run the SQL commands from Option 2 above

**Form submits but no data appears in Supabase**
- Check the browser console for errors
- Verify your Supabase anon key is correct in `.env`
- Make sure the table name matches exactly: `contact_submissions`

## Next Steps

Once the table is set up and working:
- You can add email notifications when new submissions arrive
- Export submissions to CSV for analysis
- Set up automated responses to form submitters
- Add additional fields to the form as needed
