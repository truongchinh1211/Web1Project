function product(id, name, price, quantity ,background_image, categoryID, description) {
    this.id = id,
    this.name = name;
    this.price = price + " đ";
    this.quantity = quantity;
    this.background_image = background_image;
    this.categoryID = categoryID;
    this.description = description;
}
let productsDB = 
[
    new product ("1",
    "iPhone 13 Pro Max 128GB",
    "28.490.000",
    100,
    "./asset/img/product/iphone-13-pro-max-xanh-la-thumb-1-600x600.jpg",
    "1",
    `Chip Apple A15 Bionic

    RAM: 6 GB
    
    Dung lượng: 128 GB
    
    Camera sau: 3 camera 12 MP
    
    Camera trước: 12 MP
    
    Pin 4352 mAh, Sạc 20 W`),
    new product ("2",
    "Vivo V23e",
    "7.690.000",
    100,
    "./asset/img/product/vivo-v23e-1-600x600.jpg",
    "2",
    `Chip Snapdragon 8 Gen 1

    RAM: 8 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 50 MP & Phụ 12 MP, 10 MP
    
    Camera trước: 10 MP
    
    Pin 4500 mAh, Sạc 45 W`),
    new product ("3",
    "Samsung Galaxy S21 FE 5G",
    "19.490.000",
    100,
    "./asset/img/product/samsung-galaxy-s21-fe-256gb-040122-111429-600x600.jpg",
    "3",
    `Chip Exynos 2100

    RAM: 8 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 12 MP & Phụ 12 MP, 8 MP
    
    Camera trước: 32 MP
    
    Pin 4500 mAh, Sạc 25 W`),
    new product ("4",
    "Samsung Galaxy Z Flip4",
    "20.990.000",
    100,
    "./asset/img/product/samsung-galaxy-z-flip4-5g.jpg",
    "3",
    `Chip Snapdragon 8+ Gen 1

    RAM: 8 GB
    
    Dung lượng: 128 GB
    
    Camera sau: 2 camera 12 MP
    
    Camera trước: 10 MP
    
    Pin 3700 mAh, Sạc 25 W`),
    new product ("5",
    "Samsung Galaxy S22 Ultra",
    "25.990.000",
    100,
    "./asset/img/product/samsung-galaxy-s22-ultra-.jpg",
    "3",
    `Chip Snapdragon 8 Gen 1

    RAM: 8 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 108 MP & Phụ 12 MP, 10 MP, 10 MP
    
    Camera trước: 40 MP
    
    Pin 5000 mAh, Sạc 45 W`),
    new product ("6",
    "Samsung Galaxy A23",
    "5.490.000",
    100,
    "./asset/img/product/samsung-galaxy-a23.jpg",
    "3",
    `- Chip Snapdragon 680

    RAM: 4 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 50 MP & Phụ 5 MP, 2 MP, 2 MP
    
    Camera trước: 8 MP
    
    Pin 5000 mAh, Sạc 25 W`),
    new product ("7",
    "Samsung Galaxy A73",
    "11.690.000",
    100,
    "./asset/img/product/samsung-galaxy-a73.jpg",
    "3",
    `Chip Snapdragon 778G 5G

    RAM: 8 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 108 MP & Phụ 12 MP, 5 MP, 5 MP
    
    Camera trước: 32 MP
    
    Pin 5000 mAh, Sạc 25 W`),
    new product ("8",
    "Samsung Galaxy M53",
    "11.100.000",
    100,
    "./asset/img/product/samsung-galaxy-m53.jpg",
    "3",
    `Chip MediaTek Dimensity 900 5G

    RAM: 8 GB
    
    Dung lượng: 256 GB
    
    Camera sau: Chính 108 MP & Phụ 8 MP, 2 MP, 2 MP
    
    Camera trước: 32 MP
    
    Pin 5000 mAh, Sạc 25 W`),
    new product ("9",
    "Samsung Galaxy A53",
    "9.690.000",
    100,
    "./asset/img/product/samsung-galaxy-a53.jpg",
    "3",
    `Chip Exynos 1280

    RAM: 8 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 64 MP & Phụ 12 MP, 5 MP, 5 MP
    
    Camera trước: 32 MP
    
    Pin 5000 mAh, Sạc 25 W`),
    new product ("10",
    "Samsung Galaxy A33",
    "7.290.000",
    100,
    "./asset/img/product/samsung-galaxy-a33.jpg",
    "3",
    `Chip Exynos 1280

    RAM: 6 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 48 MP & Phụ 8 MP, 5 MP, 2 MP
    
    Camera trước: 13 MP
    
    Pin 5000 mAh, Sạc 25 W`),
    new product ("11",
    "Samsung Galaxy A32",
    "6.490.000",
    100,
    "./asset/img/product/samsung-galaxy-a32.jpg",
    "3",
    `Chip MediaTek Helio G80

    RAM: 6 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 64 MP & Phụ 8 MP, 5 MP, 5 MP
    
    Camera trước: 20 MP
    
    Pin 5000 mAh, Sạc 15 W`),
    new product ("12",
    "Samsung Galaxy A22",
    "5.890.000",
    100,
    "./asset/img/product/samsung-galaxy-a22.jpg",
    "3",
    `Chip MediaTek MT6769V (Helio G80)

    RAM: 6 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 48 MP & Phụ 8 MP, 2 MP, 2 MP
    
    Camera trước: 13 MP
    
    Pin 5000 mAh, Sạc 15 W`),
    new product ("13",
    "Samsung Galaxy A13",
    "4.290.000",
    100,
    "./asset/img/product/samsung-galaxy-a13.jpg",
    "3",
    `Chip Exynos 850

    RAM: 4 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 50 MP & Phụ 5 MP, 2 MP, 2 MP
    
    Camera trước: 8 MP
    
    Pin 5000 mAh, Sạc 15 W`),
    new product ("14",
    "OPPO Reno8 series",
    "18.990.000",
    100,
    "./asset/img/product/oppo-reno8.jpg",
    "4",
    `Chip MediaTek Dimensity 8100 Max 8 nhân

    RAM: 12 GB
    
    Dung lượng: 256 GB
    
    Camera sau: Chính 50 MP & Phụ 8 MP, 2 MP
    
    Camera trước: 32 MP
    
    Pin 4500 mAh, Sạc 80 W`),
    new product ("15",
    "OPPO A55",
    "4.190.000",
    100,
    "./asset/img/product/oppo-a55.jpg",
    "4",
    `Chip MediaTek Helio G35

    RAM: 4 GB
    
    Dung lượng: 64 GB
    
    Camera sau: Chính 50 MP & Phụ 2 MP, 2 MP
    
    Camera trước: 16 MP
    
    Pin 5000 mAh, Sạc 18 W`),
    new product ("16",
    "OPPO Find X5 Pro",
    "30.490.000",
    100,
    "./asset/img/product/oppo-find-x5-pro.jpg",
    "4",
    `Chip Snapdragon 8 Gen 1

    RAM: 12 GB
    
    Dung lượng: 256 GB
    
    Camera sau: Chính 50 MP & Phụ 50 MP, 13 MP
    
    Camera trước: 32 MP
    
    Pin 5000 mAh, Sạc 80 W`),
    new product ("17",
    "OPPO Reno6 series",
    "10.890.000",
    100,
    "./asset/img/product/oppo-reno6.jpg",
    "4",
    `Chip MediaTek Dimensity 900 5G

    RAM: 8 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 64 MP & Phụ 8 MP, 2 MP
    
    Camera trước: 32 MP
    
    Pin 4300 mAh, Sạc 65 W`),
    new product ("18",
    "OPPO Reno7 series",
    "9.590.000",
    100,
    "./asset/img/product/oppo-reno7.jpg",
    "4",
    `Chip Snapdragon 695 5G

    RAM: 8 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 64 MP & Phụ 2 MP, 2 MP
    
    Camera trước: 16 MP
    
    Pin 4500 mAh, Sạc 33 W`),
    new product ("19",
    "OPPO A96",
    "6.690.000",
    100,
    "./asset/img/product/oppo-a96.jpg",
    "4",
    `Chip Snapdragon 680

    RAM: 8 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 50 MP & Phụ 2 MP
    
    Camera trước: 16 MP
    
    Pin 5000 mAh, Sạc 33 W`),
    new product ("20",
    "OPPO A95",
    "6.090.000",
    100,
    "./asset/img/product/oppo-a95.jpg",
    "4",
    `Chip Snapdragon 662

    RAM: 8 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 48 MP & Phụ 2 MP, 2 MP
    
    Camera trước: 16 MP
    
    Pin 5000 mAh, Sạc 33 W`),
    new product ("21",
    "OPPO A76",
    "5.690.000",
    100,
    "./asset/img/product/oppo-a76.jpg",
    "4",
    `Chip Snapdragon 680

    RAM: 6 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 13 MP & Phụ 2 MP
    
    Camera trước: 8 MP
    
    Pin 5000 mAh, Sạc 33 W`),
    new product ("22",
    "OPPO A57",
    "4.190.000",
    100,
    "./asset/img/product/oppo-a57.jpg",
    "4",
    `Chip MediaTek Helio G35

    RAM: 4 GB
    
    Dung lượng: 64 GB
    
    Camera sau: Chính 13 MP & Phụ 2 MP
    
    Camera trước: 8 MP
    
    Pin 5000 mAh, Sạc 33 W`),
    new product ("23",
    "OPPO A17",
    "3.990.000",
    100,
    "./asset/img/product/oppo-a17.jpg",
    "4",
    `Chip MediaTek Helio G35

    RAM: 4 GB
    
    Dung lượng: 64 GB
    
    Camera sau: Chính 50 MP & Phụ 0.3 MP
    
    Camera trước: 5 MP
    
    Pin 5000 mAh, Sạc 10 W`),
    new product ("24",
    "Vivo V25 series",
    "10.490.000",
    100,
    "./asset/img/product/vivo-v25.jpg",
    "2",
    `Chip MediaTek Dimensity 900 5G

    RAM: 8 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 64 MP & Phụ 8 MP, 2 MP
    
    Camera trước: 50 MP
    
    Pin 4500 mAh, Sạc 44 W`),
    new product ("25",
    "Vivo T1 series",
    "8.490.000",
    100,
    "./asset/img/product/vivo-t1.jpg",
    "2",
    `Chip Snapdragon 778G 5G

    RAM: 8 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 64 MP & Phụ 8 MP, 2 MP
    
    Camera trước: 16 MP
    
    Pin 4700 mAh, Sạc 66 W`),
    new product ("26",
    "Vivo V25 Pro",
    "13.990.000",
    100,
    "./asset/img/product/vivo-v25-pro.jpg",
    "2",
    `Chip MediaTek Dimensity 1300

    RAM: 8 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 64 MP & Phụ 8 MP, 2 MP
    
    Camera trước: 32 MP
    
    Pin 4830 mAh, Sạc 66 W`),
    new product ("27",
    "Vivo X80",
    "19.190.000",
    100,
    "./asset/img/product/vivo-x80.jpg",
    "2",
    `Chip MediaTek Dimensity 9000

    RAM: 12 GB
    
    Dung lượng: 256 GB
    
    Camera sau: Chính 50 MP & Phụ 12 MP, 12 MP
    
    Camera trước: 32 MP
    
    Pin 4500 mAh, Sạc 80 W`),
    new product ("28",
    "Vivo Y35",
    "6.990.000",
    100,
    "./asset/img/product/vivo-y35.jpg",
    "2",
    `Chip Snapdragon 680

    RAM: 8 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 50 MP & Phụ 2 MP, 2 MP
    
    Camera trước: 16 MP
    
    Pin 5000 mAh, Sạc 44 W`),
    new product ("29",
    "Vivo Y53s",
    "6.990.000",
    100,
    "./asset/img/product/vivo-y53s.jpg",
    "2",
    `Chip MediaTek Helio G80

    RAM: 8 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 64 MP & Phụ 2 MP, 2 MP
    
    Camera trước: 16 MP
    
    Pin 5000 mAh, Sạc 33 W`),
    new product ("30",
    "Vivo Y55",
    "6.790.000",
    100,
    "./asset/img/product/vivo-y55.jpg",
    "2",
    `Chip Snapdragon 680

    RAM: 8 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 50 MP & Phụ 2 MP, 2 MP
    
    Camera trước: 16 MP
    
    Pin 5000 mAh, Sạc 44 W`),
    new product ("31",
    "Vivo Y33s",
    "6.290.000",
    100,
    "./asset/img/product/vivo-y33s.jpg",
    "2",
    `Chip MediaTek Helio G80

    RAM: 8 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 50 MP & Phụ 2 MP, 2 MP
    
    Camera trước: 16 MP
    
    Pin 5000 mAh, Sạc 18 W`),
    new product ("32",
    "Vivo Y22s",
    "5.290.000",
    100,
    "./asset/img/product/vivo-y22s.jpg",
    "2",
    `Chip Snapdragon 680

    RAM: 4 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 50 MP & Phụ 2 MP
    
    Camera trước: 8 MP
    
    Pin 5000 mAh, Sạc 18 W`),
    new product ("33",
    "iPhone 11",
    "11.990.000",
    100,
    "./asset/img/product/iphone-xi.jpg",
    "1",
    `Chip Apple A13 Bionic

    RAM: 4 GB
    
    Dung lượng: 64 GB
    
    Camera sau: 2 camera 12 MP
    
    Camera trước: 12 MP
    
    Pin 3110 mAh, Sạc 18 W`),
    new product ("34",
    "iPhone 14 Pro Max",
    "33.990.000",
    100,
    "./asset/img/product/iphone-14-pro-max.jpg",
    "1",
    `Chip Apple A16 Bionic

    RAM: 6 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 48 MP & Phụ 12 MP, 12 MP
    
    Camera trước: 12 MP
    
    Pin 4323 mAh, Sạc 20 W`),
    new product ("35",
    "iPhone 13 Pro",
    "25.990.000",
    100,
    "./asset/img/product/iphone-13-pro.jpg",
    "1",
    `Chip Apple A15 Bionic

    RAM: 6 GB
    
    Dung lượng: 128 GB
    
    Camera sau: 3 camera 12 MP
    
    Camera trước: 12 MP
    
    Pin 3095 mAh, Sạc 20 W`),
    new product ("36",
    "iPhone 14 Plus",
    "25.790.000",
    100,
    "./asset/img/product/iPhone-14Plus.jpg",
    "1",
    `Chip Apple A15 Bionic

    RAM: 6 GB
    
    Dung lượng: 128 GB
    
    Camera sau: 2 camera 12 MP
    
    Camera trước: 12 MP
    
    Pin 4325 mAh, Sạc 20 W`),
    new product ("37",
    "iPhone 12",
    "16.990.000",
    100,
    "./asset/img/product/iphone-12.jpg",
    "1",
    `Chip Apple A14 Bionic

    RAM: 4 GB
    
    Dung lượng: 64 GB
    
    Camera sau: 2 camera 12 MP
    
    Camera trước: 12 MP
    
    Pin 2815 mAh, Sạc 20 W`),
    new product ("38",
    "iPhone SE 64GB",
    "11.490.000",
    100,
    "./asset/img/product/iphone-se.jpg",
    "1",
    `Chip Apple A15 Bionic

    RAM: 4 GB
    
    Dung lượng: 64 GB
    
    Camera sau: 12 MP
    
    Camera trước: 7 MP
    
    Pin 2018 mAh, Sạc 20 W`),
    new product ("39",
    "iPhone 14",
    "22.790.000",
    100,
    "./asset/img/product/iPhone-14.jpg",
    "1",
    `Chip Apple A15 Bionic

    RAM: 6 GB
    
    Dung lượng: 128 GB
    
    Camera sau: 2 camera 12 MP
    
    Camera trước: 12 MP
    
    Pin 3279 mAh, Sạc 20 W`),
    new product ("40",
    "Xiaomi 12T Pro",
    "16.990.000",
    100,
    "./asset/img/product/xiaomi-12t-pro.jpeg",
    "5",
    `Chip Snapdragon 8+ Gen 1

    RAM: 12 GB
    
    Dung lượng: 256 GB
    
    Camera sau: Chính 200 MP & Phụ 8 MP, 2 MP
    
    Camera trước: 20 MP
    
    Pin 5000 mAh, Sạc 120 W`),
    new product ("41",
    "Xiaomi Redmi Note 11S",
    "6.490.000",
    100,
    "./asset/img/product/xiaomi-redmi-note-11s.jpg",
    "5",
    `Chip MediaTek Dimensity 810 5G

    RAM: 6 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 50 MP & Phụ 8 MP, 2 MP
    
    Camera trước: 13 MP
    
    Pin 5000 mAh, Sạc 33 W`),
    new product ("42",
    "Xiaomi 12 series",
    "16.490.000",
    100,
    "./asset/img/product/Xiaomi-12.jpg",
    "5",
    `Chip Snapdragon 8 Gen 1

    RAM: 8 GB
    
    Dung lượng: 256 GB
    
    Camera sau: Chính 50 MP & Phụ 13 MP, 5 MP
    
    Camera trước: 32 MP
    
    Pin 4500 mAh, Sạc 67 W`),
    new product ("43",
    "Xiaomi 11T Pro",
    "13.990.000",
    100,
    "./asset/img/product/xiaomi-11t-pro.jpeg",
    "5",
    `Chip Snapdragon 888

    RAM: 8 GB
    
    Dung lượng: 256 GB
    
    Camera sau: Chính 108 MP & Phụ 8 MP, 5 MP
    
    Camera trước: 16 MP
    
    Pin 5000 mAh, Sạc 120 W`),
    new product ("44",
    "Xiaomi 11T",
    "10.390.000",
    100,
    "./asset/img/product/xiaomi-11t.jpg",
    "5",
    `Chip MediaTek Dimensity 1200

    RAM: 8 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 108 MP & Phụ 8 MP, 5 MP
    
    Camera trước: 16 MP
    
    Pin 5000 mAh, Sạc 67 W`),
    new product ("45",
    "Xiaomi 11 Lite",
    "8.890.000",
    100,
    "./asset/img/product/xiaomi-11-lite.jpg",
    "5",
    `Chip Snapdragon 778G 5G

    RAM: 8 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 64 MP & Phụ 8 MP, 5 MP
    
    Camera trước: 20 MP
    
    Pin 4250 mAh, Sạc 33 W`),
    new product ("46",
    "Xiaomi Redmi Note 11 Pro",
    "7.190.000",
    100,
    "./asset/img/product/xiaomi-redmi-note-11-pro.jpg",
    "5",
    `Chip MediaTek Helio G96

    RAM: 8 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 108 MP & Phụ 8 MP, 2 MP, 2 MP
    
    Camera trước: 16 MP
    
    Pin 5000 mAh, Sạc 67 W`),
    new product ("47",
    "Xiaomi Redmi Note 10 Pro",
    "7.090.000",
    100,
    "./asset/img/product/xiaomi-redmi-note-10-pro.jpg",
    "5",
    `Chip Snapdragon 732G

    RAM: 8 GB
    
    Dung lượng: 128 GB
    
    Camera sau: Chính 108 MP & Phụ 8 MP, 5 MP, 2 MP
    
    Camera trước: 16 MP
    
    Pin 5020 mAh, Sạc 33 W`),
    new product ("48",
    "Xiaomi Redmi 10C",
    "3.490.000",
    100,
    "./asset/img/product/xiaomi-redmi-10c.jpg",
    "5",
    `Chip Snapdragon 680

    RAM: 4 GB
    
    Dung lượng: 64 GB
    
    Camera sau: Chính 50 MP & Phụ 2 MP
    
    Camera trước: 5 MP
    
    Pin 5000 mAh, Sạc 18 W`),
    new product ("49",
    "POCO C40",
    "2.990.000",
    100,
    "./asset/img/product/xiaomi-poco.jpg",
    "5",
    `Chip JLQ JR510

    RAM: 4 GB
    
    Dung lượng: 64 GB
    
    Camera sau: Chính 13 MP & Phụ 2 MP
    
    Camera trước: 5 MP
    
    Pin 6000 mAh, Sạc 18 W`),


]
