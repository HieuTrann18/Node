# 1. Dùng Node.js làm image nền
FROM node:18

# 2. Đặt thư mục làm việc bên trong container
WORKDIR /app

# 3. Sao chép file package.json để cài dependencies
COPY package*.json ./

# 4. Cài đặt các thư viện
RUN npm install

# 5. Sao chép toàn bộ mã nguồn vào container
COPY . .

# 6. Chạy app
CMD ["node", "index.js"]
