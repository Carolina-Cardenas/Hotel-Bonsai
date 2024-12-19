CREATE TABLE reservations (
  id SERIAL PRIMARY KEY,
  phone VARCHAR(15) NOT NULL,
  guests INT NOT NULL,
  special_requests TEXT,
  check_in_date DATE NOT NULL,
  check_out_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);