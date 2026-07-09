CREATE TABLE IF NOT EXISTS form_rate_limit (
    id BIGSERIAL PRIMARY KEY,
    ip_hash VARCHAR(64) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_form_rate_limit_hash_time ON form_rate_limit (ip_hash, created_at);
CREATE INDEX IF NOT EXISTS idx_form_rate_limit_time ON form_rate_limit (created_at);