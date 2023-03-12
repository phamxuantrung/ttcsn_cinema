# Dự án xây dựng giao diên website bằng Tailwind Css


## Khởi chạy
Bắt buộc [Node.js](https://nodejs.org/) v10+ để chạy.
### Kết nối my computer với github
```sh
cd my_folder
git init
git remote add origin https://github.com/phamxuantrung/ttcsn_cinema.git
```
### Cài đặt Tailwind Css
```sh
npm install -D tailwindcss
```
### Cuối cùng, chạy câu lệnh
```sh
npx tailwindcss -i input.css -o ./src/css/tailwind.css --watch
```

## Kéo code trên github về my computer
```sh
git pull origin main
```

## Làm việc nhóm với git
Sau khi kéo code về máy
- Tạo branch mới
```sh
git checkout -b "name_branch"
```
- Chuyển branch làm việc
```sh
git checkout name_branch
```
- Đẩy code lên branch đang làm việc
```sh
git add .
git commit -m "description"
git push origin name_branch
```
