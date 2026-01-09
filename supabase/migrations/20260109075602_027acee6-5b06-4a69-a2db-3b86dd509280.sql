-- Create scheduled_posts table for automatic publishing
CREATE TABLE public.scheduled_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  scheduled_at timestamp with time zone NOT NULL,
  published_at timestamp with time zone,
  status text DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'published', 'failed')),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Index for efficient queries on status and scheduled_at
CREATE INDEX idx_scheduled_posts_status_scheduled_at 
  ON scheduled_posts(status, scheduled_at);

-- Enable RLS
ALTER TABLE public.scheduled_posts ENABLE ROW LEVEL SECURITY;

-- Allow public read access for scheduled posts
CREATE POLICY "Allow public read scheduled_posts" 
  ON public.scheduled_posts 
  FOR SELECT 
  USING (true);

-- Allow public insert for scheduled posts
CREATE POLICY "Allow public insert scheduled_posts" 
  ON public.scheduled_posts 
  FOR INSERT 
  WITH CHECK (true);

-- Allow public update for scheduled posts
CREATE POLICY "Allow public update scheduled_posts" 
  ON public.scheduled_posts 
  FOR UPDATE 
  USING (true);

-- Trigger for updated_at
CREATE TRIGGER update_scheduled_posts_updated_at
  BEFORE UPDATE ON public.scheduled_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for scheduled_posts
ALTER PUBLICATION supabase_realtime ADD TABLE public.scheduled_posts;