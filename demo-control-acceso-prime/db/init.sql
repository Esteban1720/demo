-- Init script para MariaDB - crea la BD y tablas básicas
CREATE DATABASE IF NOT EXISTS demo;
USE demo;

CREATE TABLE IF NOT EXISTS visitors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  id_card VARCHAR(100),
  bio_uid VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS access_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  visitor_id INT NULL,
  method ENUM('card','bio','manual') NOT NULL,
  method_uid VARCHAR(255) NULL,
  allowed TINYINT(1) DEFAULT 0,
  image_path VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (visitor_id) REFERENCES visitors(id) ON DELETE SET NULL
);

-- Datos de ejemplo
INSERT INTO visitors (name, id_card, bio_uid) VALUES
('Alice Pérez', 'CARD1234', 'BIO123'),
('Bob Gómez', 'CARD5678', 'BIO999');

INSERT INTO access_logs (visitor_id, method, method_uid, allowed) VALUES
(1, 'card', 'CARD1234', 1),
(2, 'bio', 'BIO999', 1);
