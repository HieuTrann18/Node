CREATE DATABASE IF NOT EXISTS crud_product;
USE crud_product;

CREATE TABLE IF NOT EXISTS product (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    IDate DATE NOT NULL,
    Quantity INT NOT NULL
);


INSERT INTO product (Title, Price, IDate, Quantity) VALUES
('Laptop Dell', 1500.00, '2025-06-15', 10),
('iPhone 14', 999.99, '2025-06-14', 5),
('Chuột Logitech', 25.50, '2025-06-10', 30);
