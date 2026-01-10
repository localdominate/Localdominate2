-- Add UNIQUE constraint on (session_id, test_id) for proper upserts
ALTER TABLE ab_test_engagement 
ADD CONSTRAINT ab_test_engagement_session_test_unique 
UNIQUE (session_id, test_id);