-- PostgreSQL schema for sales anomaly detection
CREATE TABLE sales_data (
    id SERIAL PRIMARY KEY,
    week VARCHAR(10) NOT NULL,
    sales NUMERIC NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE anomalies (
    id SERIAL PRIMARY KEY,
    sales_data_id INTEGER REFERENCES sales_data(id),
    is_anomaly BOOLEAN NOT NULL,
    reason TEXT,
    detected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
