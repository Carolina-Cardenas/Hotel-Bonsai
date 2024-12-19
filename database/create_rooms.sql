CREATE TABLE rooms (
  id SERIAL PRIMARY KEY,
  room_quantity INT NOT NULL ,
  room_type VARCHAR(50) NOT NULL, 
  capacity INT NOT NULL,
  price_per_night DECIMAL(10, 2) NOT NULL,
  status VARCHAR(20) DEFAULT 'available', 
  created_at TIMESTAMP DEFAULT NOW()
);