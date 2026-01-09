-- Create table for lexikon-article links
CREATE TABLE public.lexikon_article_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  term_name TEXT NOT NULL,
  term_slug TEXT NOT NULL,
  article_slug TEXT NOT NULL,
  article_title TEXT NOT NULL,
  link_type TEXT DEFAULT 'auto',
  relevance_score INTEGER DEFAULT 50 CHECK (relevance_score >= 0 AND relevance_score <= 100),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(term_slug, article_slug)
);

-- Create table for sync logs
CREATE TABLE public.lexikon_sync_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  run_at TIMESTAMPTZ DEFAULT NOW(),
  new_links_created INTEGER DEFAULT 0,
  links_updated INTEGER DEFAULT 0,
  articles_scanned INTEGER DEFAULT 0,
  terms_processed INTEGER DEFAULT 0,
  duration_ms INTEGER,
  status TEXT DEFAULT 'completed',
  error_message TEXT
);

-- Enable RLS
ALTER TABLE public.lexikon_article_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lexikon_sync_log ENABLE ROW LEVEL SECURITY;

-- Create policies for lexikon_article_links (public read, insert, update for edge function)
CREATE POLICY "Allow public read lexikon_article_links" 
ON public.lexikon_article_links 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public insert lexikon_article_links" 
ON public.lexikon_article_links 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public update lexikon_article_links" 
ON public.lexikon_article_links 
FOR UPDATE 
USING (true);

CREATE POLICY "Allow public delete lexikon_article_links" 
ON public.lexikon_article_links 
FOR DELETE 
USING (true);

-- Create policies for lexikon_sync_log (public read and insert for edge function)
CREATE POLICY "Allow public read lexikon_sync_log" 
ON public.lexikon_sync_log 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public insert lexikon_sync_log" 
ON public.lexikon_sync_log 
FOR INSERT 
WITH CHECK (true);

-- Create trigger for updated_at
CREATE TRIGGER update_lexikon_article_links_updated_at
BEFORE UPDATE ON public.lexikon_article_links
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for faster lookups
CREATE INDEX idx_lexikon_article_links_term_slug ON public.lexikon_article_links(term_slug);
CREATE INDEX idx_lexikon_article_links_article_slug ON public.lexikon_article_links(article_slug);
CREATE INDEX idx_lexikon_article_links_relevance ON public.lexikon_article_links(relevance_score DESC);