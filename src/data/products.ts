export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  category: string;
  description?: string;
  image?: string;
}

// Fallback images from Unsplash for each category
export const categoryFallbackImages: Record<string, string> = {
  "Shampoo": "https://mielleorganics.com/cdn/shop/files/RM_Shampoo_Render_20oz_Value_Size_v2_3de20550-eeab-4038-aea5-28a249851a27_5000x.jpg?v=1748414158",
  "Conditioner": "https://media.takealot.com/covers_images/aab04ef1baf24752a97f2ee5999c76bc/s-pdpxl.file",
  "Oil": "https://www.dischem.co.za/api/catalog/product/6/0/605deaa66a0f3_854102006732.jpg?store=default&image-type=image",
  "Mask": "https://splendit.co.za/wp-content/uploads/2024/12/Karseell_maca_power_Purple_Hair_Mask_Professional_Neutralizes_Brass__Yellow_Tones_For_B-4.jpg.webp",
  "Gel": "https://www.cosmeticconnection.co.za/cdn/shop/products/isoplus-isoplus-styling-gel-425ml-original-6003823000589-1607-33327206236310.jpg?v=1655456760",
  "Treatment": "https://healthboutiquejo.com/cdn/shop/files/2606_PDP_N0_2000x2000_920e2031-b6e3-4d49-b74a-3b0b6ba01b15.webp?v=1740257579",
  "Styling": "https://www.dischem.co.za/api/catalog/product/6/8/6858feaba1be0_854102006787.jpg?store=default&image-type=image",
  "Tools": "https://hubbe.co.za/cdn/shop/products/033-001402.jpg?v=1663352149",
  "Accessories": "https://images-na.ssl-images-amazon.com/images/I/51FMNqCguIL._SL500_._AC_SL500_.jpg",
  "Hair Color": "https://media.takealot.com/covers_images/a36b0a157e5a4f9890f57ead1362524c/s-pdpxl.file",
  "Body Care": "https://media.takealot.com/covers_images/2596f8ed66cd4a4094a75448400040e6/s-zoom.file",
  "Men's Care": "https://www.boredbox.co.za/wp-content/uploads/2024/01/3-Piece-Mens-Beard-Grooming-Kit-Value-Gift-Set-.jpg",
  "Combo": "/src/assets/combo_deal_image.png",
  "Fragrance": "https://superior.africa/wp-content/uploads/2024/10/Versace-Eros-F.png",
};

export const products: Product[] = [
  // Olaplex
  { id: 1, name: "Olaplex No.0 Intensive Bond Building Treatment", brand: "Olaplex", price: 500.00, category: "Treatment", image: "https://healthboutiquejo.com/cdn/shop/files/2606_PDP_N0_2000x2000_920e2031-b6e3-4d49-b74a-3b0b6ba01b15.webp?v=1740257579" },
  { id: 2, name: "Olaplex No.3 Hair Perfector 100ml", brand: "Olaplex", price: 630.00, category: "Treatment", image: "https://i.ebayimg.com/images/g/HOQAAeSwjZdonpGU/s-l1200.jpg" },
  
  // Bontle
  { id: 3, name: "Bontle – Hair Mayonnaise 500ml", brand: "Bontle", price: 70.00, category: "Treatment", image: "https://www.cosmeticconnection.co.za/cdn/shop/products/bontle-hair-mayonnaise-500ml-33327704965270.jpg?v=1655468082&width=600" },
  
  // Kormesic
  { id: 4, name: "Argan Oil Conditioner 98% Organic Deep Moisturizing", brand: "Kormesic", price: 110.00, category: "Conditioner", image: "https://sc04.alicdn.com/kf/H0c4ab013a9f4442899e2a5c1435d0740q.jpg" },
  { id: 5, name: "Argan Oil Shampoo 98% Organic Nourishing", brand: "Kormesic", price: 110.00, category: "Shampoo", image: "https://sc04.alicdn.com/kf/Hb3adf0fb3855416897f0e4f94d1f4e7ch.jpg" },
  { id: 6, name: "Kormesic Argan Hair Oil 80ml", brand: "Kormesic", price: 75.00, category: "Oil", image: "https://splendit.co.za/wp-content/uploads/2024/10/Kormesic-Argan-Hair-Oil-80ml.jpg" },
  { id: 7, name: "Kormesic Argan Oil Hair Mask 1kg", brand: "Kormesic", price: 75.00, category: "Mask", image: "https://images.superflive.com/products/SF3ADD723/main_2.jpg?x-oss-process=image/interlace,1/format,webp" },
  { id: 8, name: "Kormesic Botox Keratin Conditioner 800ml", brand: "Kormesic", price: 110.00, category: "Conditioner", image: "https://sc04.alicdn.com/kf/Hdff3bc36c30a40baa4b84a96e7e18acf0.jpg" },
  { id: 9, name: "Kormesic Botox keratin Mask 500ml", brand: "Kormesic", price: 90.00, category: "Mask", image: "https://splendit.co.za/wp-content/uploads/2025/06/Kormesic-Botox-Keratin-Mask-500ml.jpg" },
  { id: 10, name: "Kormesic Botox Keratin Shampoo 800ml", brand: "Kormesic", price: 110.00, category: "Shampoo", image: "https://splendit.co.za/wp-content/uploads/2025/06/Kormesic-Botox-Keratin-Shampoo-800ml.jpg.webp" },
  { id: 11, name: "Kormesic Face & Body Scrub Rose Extract 350g", brand: "Kormesic", price: 50.00, category: "Body Care", image: "https://media.takealot.com/covers_images/2596f8ed66cd4a4094a75448400040e6/s-zoom.file" },
  { id: 12, name: "Kormesic Face & Body Scrub Shea Butter 350g", brand: "Kormesic", price: 50.00, category: "Body Care", image: "https://media.takealot.com/covers_images/03e3e8f0de8f401dae5980335c7640a1/s-zoom.file" },
  { id: 13, name: "Kormesic Face & Body Scrub Turmeric 350g", brand: "Kormesic", price: 50.00, category: "Body Care", image: "https://media.takealot.com/covers_images/685a7009c8e942b5b24dfe198619d3b3/s-zoom.file" },
  { id: 14, name: "Kormesic Rosemary Mint Hair Conditioner 480ml", brand: "Kormesic", price: 75.00, category: "Conditioner", image: "https://splendit.co.za/wp-content/uploads/2024/10/Kormesic-Rosemary-Mint-Hair-Conditioner-480ml.jpg" },
  { id: 15, name: "Kormesic Rosemary Mint Hair Mask 250ml", brand: "Kormesic", price: 75.00, category: "Mask", image: "https://www.makro.co.za/asset/rukmini/fccp/400/400/ng-fkpublic-ui-user-fbbe/hair-treatment/m/x/n/250-rosemary-and-mint-hair-masque-250ml-each-1-kormesic-original-imah85bww2kvqfvh.jpeg?q=90&crop=false" },
  { id: 16, name: "Kormesic Rosemary Mint Hair Oil 50ml", brand: "Kormesic", price: 75.00, category: "Oil", image: "https://splendit.co.za/wp-content/uploads/2024/10/Kormesic-Rosemary-Mint-Hair-Oil-50ml.jpg" },
  { id: 17, name: "Kormesic Rosemary Mint Shampoo 480ml", brand: "Kormesic", price: 75.00, category: "Shampoo", image: "https://www.makro.co.za/asset/rukmini/fccp/850/1000/ng-fkpublic-ui-user-fbbe/shampoo/3/p/x/480-rosemary-and-mint-shampoo-480ml-each-1-kormesic-original-imah85beeynuz7ch.jpeg?q=20" },
  
  // Afrotex
  { id: 18, name: "Afrotex – Cholesterol Plus Conditioning", brand: "Afrotex", price: 60.00, category: "Conditioner", image: "https://i0.wp.com/hsmcosmetics.co.za/wp-content/uploads/2025/08/img_8751.jpeg?fit=1170%2C1162&ssl=1" },
  
  // Beauty Pro
  { id: 19, name: "Beauty Pro – Deep Treatment Hair Masque", brand: "Beauty Pro", price: 50.00, category: "Mask", image: "https://media.takealot.com/covers_images/17124193ca7c43e6974c10749fcde328/s-zoom.file" },
  { id: 20, name: "Beauty Pro – Hair Growth Shampoo 200ml", brand: "Beauty Pro", price: 50.00, category: "Shampoo", image: "https://www.cosmeticconnection.co.za/cdn/shop/products/beauty-pro-hair-growth-shampoo-200ml-33327724363926.jpg?v=1655468486" },
  { id: 21, name: "Beauty Pro – Hair Volume Conditioner 200ml", brand: "Beauty Pro", price: 50.00, category: "Conditioner", image: "https://www.makro.co.za/asset/rukmini/fccp/850/1000/ng-fkpublic-ui-user-fbbe/conditioner/x/7/f/200-hair-volume-conditioner-each-1-beauty-pro-original-imah4b5gh287enzg.jpeg?q=20" },
  { id: 22, name: "Beauty Pro – Miracle Treatment 150ml", brand: "Beauty Pro", price: 60.00, category: "Treatment", image: "https://www.cosmeticconnection.co.za/cdn/shop/products/beauty-pro-miracle-treatment-150ml-jbc-with-extra-dark-potent-987654321203-18345-33327724429462.jpg?v=1655468489" },
  { id: 23, name: "Beauty Pro – Jamaican Black Castor Oil Hair Fertiziler", brand: "Beauty Pro", price: 50.00, category: "Oil", image: "https://m.media-amazon.com/images/I/71+iYBemnTL.jpg" },
  
  // Batana
  { id: 24, name: "Batana Conditioner 500ml", brand: "Batana", price: 80.00, category: "Conditioner", image: "https://batanaproduct.store/cdn/shop/files/IMG_1241-removebg-preview.png?v=1755392496&width=3840" },
  { id: 25, name: "Batana Hair Mask 500ml", brand: "Batana", price: 140.00, category: "Mask", image: "https://media.takealot.com/covers_images/b7ef5a1ef5f3401abd852b609d029fd9/s-zoom.file" },
  { id: 26, name: "Batana Oil 50ml", brand: "Batana", price: 130.00, category: "Oil", image: "https://media.takealot.com/covers_images/c0ce4f085c444a87a143e5ab07b2cd9e/s-zoom.file" },
  { id: 27, name: "Batana Shampoo 500ml", brand: "Batana", price: 80.00, category: "Shampoo", image: "https://batanaproduct.store/cdn/shop/files/IMG_1241-removebg-preview.png?v=1755392496&width=3840" },
  { id: 28, name: "Batana Hair Oil Growth Activation Treatment 30ml", brand: "Batana", price: 100.00, category: "Oil", image: "https://media.takealot.com/covers_images/ee798a320d1d4b3a91b08f38f6cb00f6/s-zoom.file" },
  
  // Superior
  { id: 29, name: "Superior Fragrance", brand: "Superior", price: 60.00, category: "Fragrance", image: "https://superior.africa/wp-content/uploads/2024/10/Versace-Eros-F.png" },
  
  // Two Oceans
  { id: 30, name: "Argan Oil and Biotin Shampoo & Conditioner", brand: "Two Oceans", price: 180.00, category: "Combo", image: "https://twooceanshaircare.com/wp-content/uploads/2023/09/two-oceans-biotin-conditioner-600x816.png" },
  { id: 31, name: "Argan+Keratin Brazilian Shampoo & Conditioner 1l", brand: "Two Oceans", price: 180.00, category: "Combo", image: "https://catalog.sixty60.co.za/v2/files/63d3862ff0cbac537c09037b?width=1440&height=1440" },
  
  // Beard Kit
  { id: 32, name: "Men's Beard Kit", brand: "Beard Kit", price: 100.00, category: "Men's Care", image: "https://www.boredbox.co.za/wp-content/uploads/2024/01/3-Piece-Mens-Beard-Grooming-Kit-Value-Gift-Set-.jpg" },
  
  // Garnier
  { id: 33, name: "Garnier Ultimate Blends Hair Food Banana 3-in-1", brand: "Garnier", price: 110.00, category: "Treatment", image: "https://splendit.co.za/wp-content/uploads/2023/06/BANANA-HAIR-FOOD.jpg" },
  { id: 34, name: "Garnier Ultimate Blends Hair Food Coconut", brand: "Garnier", price: 110.00, category: "Treatment", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHwC9jQIx-h8ZMsm3wW7Z8Nk4mXjZvo-ypQ&s" },
  { id: 35, name: "Garnier Ultimate Blends Hair Food Watermelon", brand: "Garnier", price: 110.00, category: "Treatment", image: "https://splendit.co.za/wp-content/uploads/2023/06/Watermelon-Hair-Food-3-in-1-Multi-Use-Hair-Mask.jpg" },
  { id: 36, name: "Garnier Ultimate Blends Nourishing Banana Hair", brand: "Garnier", price: 85.00, category: "Treatment", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KRda3WqiRA3fqE0BKY0fF9vkq_tB3mA25A&s" },
  { id: 37, name: "Garnier Ultimate Blends Nourishing Banana Hair", brand: "Garnier", price: 90.00, category: "Treatment", image: "https://www.dischem.co.za/api/catalog/product/3/6/3600542342896_f16ef7bdec61e8bb8d93919a8112fdbd.jpg?store=default&image-type=image" },
  { id: 38, name: "Garnier Ultimate Blends Plumping Hair Food", brand: "Garnier", price: 85.00, category: "Treatment", image: "https://m.media-amazon.com/images/I/31-LBWfY2gL._SY580_.jpg" },
  { id: 39, name: "Garnier Ultimate Blends Plumping Hair Food", brand: "Garnier", price: 85.00, category: "Treatment", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvB27PKTbCHEL6eeH6MtbozxExZ3IQmIEONQ&s" },
  { id: 40, name: "Garnier Ultimate Blends Smoothing Coconut Hair", brand: "Garnier", price: 90.00, category: "Treatment", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn6P3iRIglxh_GOgZVmnCbWTDNTc3O10nPGw&s" },
  { id: 41, name: "Garnier Ultimate Blends Smoothing Coconut", brand: "Garnier", price: 90.00, category: "Treatment", image: "https://splendit.co.za/wp-content/uploads/2023/06/COCONUT-HAIR-FOOD-SHAMPOO-1.jpg" },
  
  // Karseell
  { id: 42, name: "Collagen – Karseell Refill 500ml", brand: "Karseell", price: 200.00, category: "Treatment", image: "https://thelittlegift.co.za/wp-content/uploads/2024/11/WhatsApp-Image-2024-10-31-at-15.42.13.jpeg" },
  { id: 43, name: "Karseell Maca Essence Hair Repair Collagen", brand: "Karseell", price: 350.00, category: "Treatment", image: "https://media.licdn.com/dms/image/v2/D5622AQFBHga3ar-YvQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1716539041721?e=2147483647&v=beta&t=OCAXXd3hAxUCA920_pFT2Km3toAnPgPj1oVaz7oCwSw" },
  { id: 44, name: "Karseell BNC Argan Collagen Treatment Refill", brand: "Karseell", price: 200.00, category: "Treatment", image: "https://splendit.co.za/wp-content/uploads/2024/03/karseel-bnc-argan-treat.jpg" },
  { id: 45, name: "Karseell BNC Argan Collagen Treatment Tub", brand: "Karseell", price: 250.00, category: "Treatment", image: "https://splendit.co.za/wp-content/uploads/2024/03/karseel-bnc-argan-treat-tub.jpg" },
  { id: 46, name: "Karseell BNC Argan Oil 60ml", brand: "Karseell", price: 120.00, category: "Oil", image: "https://www.marbleskinco.co.za/cdn/shop/files/karseel-bnc-argan-oil_jpg_grande.webp?v=1719830501" },
  { id: 47, name: "Karseell BNC Keratin Straightening Treatment", brand: "Karseell", price: 250.00, category: "Treatment", image: "https://www.cosmeticconnection.co.za/cdn/shop/files/21468.jpg?v=1740051778" },
  { id: 48, name: "Karseell Collagen Hair Mask Maca Formula", brand: "Karseell", price: 100.00, category: "Mask", image: "https://m.media-amazon.com/images/I/51heciyAISL.jpg" },
  { id: 49, name: "Karseell Maca Conditioner 500ml", brand: "Karseell", price: 150.00, category: "Conditioner", image: "https://m.media-amazon.com/images/I/41Tmt4DSe1L.jpg" },
  { id: 50, name: "Karseell Maca Essence Purple Hair Mask 500ml", brand: "Karseell", price: 250.00, category: "Mask", image: "https://splendit.co.za/wp-content/uploads/2024/12/Karseell_maca_power_Purple_Hair_Mask_Professional_Neutralizes_Brass__Yellow_Tones_For_B-4.jpg.webp" },
  { id: 51, name: "Karseell Maca Essence Purple Shampoo 500ml", brand: "Karseell", price: 250.00, category: "Shampoo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKtNbGgLZPFNXB5IY5CttFRDyuzkF52ceOw&s" },
  { id: 52, name: "Karseell Maca Essence and Argan Oil 50ml", brand: "Karseell", price: 150.00, category: "Oil", image: "https://m.media-amazon.com/images/I/616NKgMfLyL.jpg" },
  { id: 53, name: "Karseell Maca Shampoo 500ml", brand: "Karseell", price: 150.00, category: "Shampoo", image: "https://m.media-amazon.com/images/I/51EjTKCTijL.jpg" },
  
  // Love My Hair
  { id: 54, name: "Love My hair Get That Growth 100g", brand: "Love My Hair", price: 180.00, category: "Treatment", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzoEkyQeCrMS_Gltlb2I0xLtpL0gaKFP0h9g&s" },
  { id: 55, name: "Love My Hair Neem Powder 100g", brand: "Love My Hair", price: 90.00, category: "Treatment", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbLRjGlaUeBo4SrwPQpGqlwAPWBCZtUbyvg&s" },
  
  // Temu
  { id: 56, name: "Karseell Keratin Hair Mask", brand: "Temu", price: 85.00, category: "Mask", image: "https://m.media-amazon.com/images/I/51R-VS4++KL._AC_SL1000_.jpg" },
  
  // Vida
  { id: 57, name: "Moulding Gel Maximum Strength Hairline & Edges", brand: "Vida", price: 120.00, category: "Gel", image: "https://clicks.co.za/medias/?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDE5OTAxMXxpbWFnZS9qcGVnfGFEYzRMMmhoWVM4eE1USXhOak14TVRZeE5UVXhPQXw0Y2YwMmU2NzA4ZmU1NzlkMmMxMjQ2Zjc1ZDA2YzI5OTYxYjUzN2VjN2ZkZDk4NjI2YTg0YzU4M2UyNTMyOGNj" },
  
  // Rhythms
  { id: 58, name: "So Easy Cholesterol Treatment 1kg", brand: "Rhythms", price: 70.00, category: "Treatment", image: "https://www.cosmeticconnection.co.za/cdn/shop/products/rhythms-so-easy-cholesterol-treatment-1l-33327319908502.jpg?v=1655459908" },
  
  // Originals
  { id: 59, name: "Originals Deep Conditioner 426g", brand: "Originals", price: 60.00, category: "Conditioner", image: "https://media.takealot.com/covers_images/aab04ef1baf24752a97f2ee5999c76bc/s-pdpxl.file" },
  { id: 60, name: "Originals Hair Mayonnaise 425g", brand: "Originals", price: 60.00, category: "Treatment", image: "https://splendit.co.za/wp-content/uploads/2020/05/Originals_hair_mayonnaise_426g_900x-scaled.jpg" },
  { id: 61, name: "Originals Leave in Conditioner 177ml", brand: "Originals", price: 60.00, category: "Conditioner", image: "https://media.takealot.com/covers_images/7fee17ced8c24cbb93bca97bf0050514/s-pdpxl.file" },
  { id: 62, name: "Originals Olive Oil Shampoo 355ml", brand: "Originals", price: 60.00, category: "Shampoo", image: "https://media.takealot.com/covers_images/266dc46679f3404b9944b54a9fa9f8a5/s-zoom.file" },
  { id: 63, name: "Originals Stimulating Growth Oil 118ml Argan", brand: "Originals", price: 60.00, category: "Oil", image: "https://originalsbyafricasbest.com/cdn/shop/products/1quE6cveMkfFPfDPg4U97uhKCvhBnC0T.jpg?v=1664494003" },
  { id: 64, name: "Originals Cholesterol & Tea-Tree Leave-In", brand: "Originals", price: 75.00, category: "Conditioner", image: "https://m.media-amazon.com/images/I/417Jy4uEpXL._SY580_.jpg" },
  
  // Inecto
  { id: 65, name: "Inecto Conditioning Hair Colour 250ml", brand: "Inecto", price: 65.00, category: "Hair Color", image: "https://media.takealot.com/covers_images/a36b0a157e5a4f9890f57ead1362524c/s-pdpxl.file" },
  { id: 66, name: "Inecto Conditioning Hair Colour 50ml", brand: "Inecto", price: 20.00, category: "Hair Color", image: "https://splendit.co.za/wp-content/uploads/2021/07/Sachet_Strawberry.jpg" },
  { id: 67, name: "Inecto Conditioning hair Colour 50ml", brand: "Inecto", price: 20.00, category: "Hair Color", image: "https://splendit.co.za/wp-content/uploads/2021/07/Sachet_Indigo-Infusion-Dark-Blue.jpg" },
  { id: 68, name: "Inecto Conditioning Hair Colour 50ml", brand: "Inecto", price: 20.00, category: "Hair Color", image: "https://cdn-prd-02.pnp.co.za/sys-master/images/h78/h92/11276803473438/silo-product-image-v2-03Oct2023-180232-6009802425824-Straight_on-179388-398_515Wx515H" },
  // Rollers
  { id: 69, name: "Rollers – Green", brand: "Rollers", price: 80.00, category: "Tools", image: "https://hubbe.co.za/cdn/shop/products/033-001402.jpg?v=1663352149" },
  { id: 70, name: "Rollers – Orange", brand: "Rollers", price: 80.00, category: "Tools", image: "https://media.takealot.com/covers_images/c06553282b694e6da8a408b67ff370dd/s-pdpxl.file" },
  { id: 71, name: "Rollers – Pink", brand: "Rollers", price: 75.00, category: "Tools", image: "https://i.ebayimg.com/images/g/MZMAAOSw8EBlsawG/s-l1200.jpg" },
  { id: 72, name: "Rollers – Purple", brand: "Rollers", price: 180.00, category: "Tools", image: "https://mopani.co.za/cdn/shop/files/262766.webp?v=1720598624" },
  { id: 73, name: "Rollers – Yellow", brand: "Rollers", price: 140.00, category: "Tools", image: "https://media.takealot.com/covers_images/7619098bbe634ace84b3785f0dbd9238/s-pdpxl.file" },
  { id: 74, name: "Rollers Small – Blue and Red 24 in Pack", brand: "Rollers", price: 80.00, category: "Tools", image: "https://hubbe.co.za/cdn/shop/products/033-001402.jpg?v=1663352149" },
  
  
  // Basics
  { id: 75, name: "Basics Hairclips Plastic 3pc", brand: "Basics", price: 40.00, category: "Accessories", image: "https://images-na.ssl-images-amazon.com/images/I/51FMNqCguIL._SL500_._AC_SL500_.jpg" },
  { id: 76, name: "Basics H/Brush TTR Flex Head", brand: "Basics", price: 50.00, category: "Tools", image: "https://m.media-amazon.com/images/I/614LIrZ9WXL._AC_SL1100_.jpg" },
  { id: 77, name: "Basics Hair Detangling Brush Black", brand: "Basics", price: 55.00, category: "Tools", image: "https://www.dischem.co.za/api/catalog/product/5/d/5dbc3b8575e00_6009543700716.jpg?store=default&image-type=image" },
  { id: 78, name: "Basics Hair Detangling Brush White", brand: "Basics", price: 60.00, category: "Tools", image: "https://www.dischem.co.za/api/catalog/product/5/e/5eb024ae599a6_6009543700747.jpg?width=265&height=265&store=default&image-type=image" },
  
  // Home & Toy
  { id: 79, name: "Flex Brush Assorted", brand: "Home & Toy", price: 50.00, category: "Tools", image: "https://m.media-amazon.com/images/I/614LIrZ9WXL._AC_SL1100_.jpg" },
  
  // My Natural Hair
  { id: 80, name: "My Natural Hair", brand: "My Natural Hair", price: 60.00, category: "Treatment", image: "https://media.takealot.com/covers_tsins/45786167/45786167%20-1-pdpxl.jpg" },
  { id: 81, name: "My Natural Hair", brand: "My Natural Hair", price: 60.00, category: "Treatment", image: "https://clicks.co.za/medias/?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI1MjU2fGltYWdlL2pwZWd8Y0hKdlpIVmpkQzFwYldGblpYTXZhRGRtTDJobFlTODRPRFkyTnpjek1EUXhNVGd5TG1wd1p3fGRlMjQwOTc2M2QyOWViNmM0MmMyNjU1ZjFiM2Q3MjgxOWY2MDYwYzRlNDE2ZmIyN2E2NjcyNjkwOTMyOGNjMmE" },
  { id: 82, name: "My Natural Hair – Hair Hydrating Conditioner", brand: "My Natural Hair", price: 34.90, category: "Conditioner", image: "https://media.takealot.com/covers_tsins/45786166/45786166%20-1-pdpxl.jpg" },
  { id: 83, name: "My Natural Hair – Hair Nourishing Shampoo", brand: "My Natural Hair", price: 34.90, category: "Shampoo", image: "https://mynaturalhair.co.za/wp-content/uploads/2016/08/Nourishing-Shampoo-250ml.jpg" },
  { id: 84, name: "My Natural Hair – Hair Strengthening Oil 150ml", brand: "My Natural Hair", price: 29.90, category: "Oil", image: "https://www.baki.co.ke/wp-content/smush-webp/2024/03/Screenshot-2024-03-29-221542-150x181.jpg.webp" },
  
  // Anzel
  { id: 85, name: "Head Bands", brand: "Anzel", price: 40.00, category: "Accessories", image: "https://m.media-amazon.com/images/I/61OqnsIrRpL._AC_.jpg" },
  { id: 86, name: "Scrunchies Bunchie – Scrunchies", brand: "Anzel", price: 20.00, category: "Accessories", image: "https://m.media-amazon.com/images/I/61OqnsIrRpL._AC_.jpg" },
  
  // Top Class
  { id: 87, name: "Top Class Hair Mask Mix Fruit 1000ml", brand: "Top Class", price: 110.00, category: "Mask", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVSj7zMukQbInu-fLLPdmgb8WhCWwUwl6YKg&s" },
  { id: 88, name: "Top Class JBCO Conditioner", brand: "Top Class", price: 70.00, category: "Conditioner", image: "https://splendit.co.za/wp-content/uploads/2023/07/JBCO-Conditioner-1-scaled.jpg" },
  { id: 89, name: "Top Class JBCO Shampoo", brand: "Top Class", price: 70.00, category: "Shampoo", image: "https://topclasscosmetics.com/cdn/shop/files/TCJBCOShampoo_1.png?v=1708934513" },
  { id: 90, name: "Top Class Jamaican Black Castor Oil 115ml", brand: "Top Class", price: 50.00, category: "Oil", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEoZJKSU3eiXrgyqmgedjLt5DqvvTs7pDDww&s" },
  { id: 91, name: "Top Class Jamaican Black Castor Oil 150ml", brand: "Top Class", price: 70.00, category: "Oil", image: "https://hubbe.co.za/cdn/shop/files/JamaicanBlackCastorOil150ml.webp?v=1723387177" },
  { id: 92, name: "Top Class Jamaican Black Castor Oil Hair", brand: "Top Class", price: 60.00, category: "Oil", image: "https://awesomedealz.co.za/wp-content/uploads/2022/07/83-Jamaican-coconut.jpg" },
  
  // As I Am
  { id: 93, name: "As I Am", brand: "As I Am", price: 100.00, category: "Treatment", image: "https://media.takealot.com/covers_images/14e97b1acdfd4633b9080bde7d5bc664/s-pdpxl.file" },
  { id: 94, name: "As I Am – Jamaican Black Castor Oil Leave-In", brand: "As I Am", price: 160.00, category: "Conditioner", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjmf1HI6N8TpMVVcgtXnxMULunIg6Fuktpw&s" },
  { id: 95, name: "As I Am – Jamaican Black Castor Oil Moisturizing", brand: "As I Am", price: 180.00, category: "Treatment", image: "https://m.media-amazon.com/images/I/71Yx6sXwblL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg" },
  { id: 96, name: "As I Am – Jamaican Black Castor Oil Shampoo", brand: "As I Am", price: 160.00, category: "Shampoo", image: "https://incidecoder-content.storage.googleapis.com/7a89ebbb-eb88-43a3-aa15-167febeefb62/products/as-i-am-jamaican-black-castor-oil-shampoo/as-i-am-jamaican-black-castor-oil-shampoo_front_photo_original.jpeg" },
  { id: 97, name: "As I Am – Jamaican Black Castor Oil Water", brand: "As I Am", price: 150.00, category: "Treatment", image: "https://bswbeautyca.com/cdn/shop/files/2_69aa536e-3420-410a-8c4b-6c7680c07226.jpg?v=1743605825" },
  { id: 98, name: "As I Am – Restore and Repair Jamaican Black Castor Oil", brand: "As I Am", price: 160.00, category: "Treatment", image: "https://www.colorfulblack.com/cdn/shop/products/5478.jpg?v=160224769" },
  
  // Long Lasting
  { id: 99, name: "Long & Lasting – Coconut Oil 100ml", brand: "Long Lasting", price: 40.00, category: "Oil", image: "https://images4.pricecheck.co.za/images/objects/hash/product/a27/cce/ad7/image_big_186756999.jpg?1666004928" },
  { id: 100, name: "Long & Lasting – For Naturals Leave-In", brand: "Long Lasting", price: 70.00, category: "Conditioner", image: "https://splendit.co.za/wp-content/uploads/2022/05/ll-mousse1.jpg" },
  { id: 101, name: "Long & Lasting – Leave-In Conditioner 250ml", brand: "Long Lasting", price: 50.00, category: "Conditioner", image: "https://clicks.co.za/medias/?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI2MTA0fGltYWdlL2pwZWd8Y0hKdlpIVmpkQzFwYldGblpYTXZhRGN6TDJoall5ODRPRFl5TnpreE9EWXdNalUwTG1wd1p3fDMyZDljZjRmZTRjZTgxYzdmNDUzMDhlYjZlNjY5ZTQ3ODQ0MjJhNjI1Y2U0M2MxMmM0YjA2NTQxMTc5NmI5ZWE" },
  { id: 102, name: "Long & Lasting – Naturals Butter 125ml", brand: "Long Lasting", price: 40.00, category: "Treatment", image: "https://4e03ccea.delivery.rocketcdn.me/wp-content/uploads/2025/08/51-768x960.png" },
  { id: 103, name: "Long & Lasting – Naturals Conditioner 250ml", brand: "Long Lasting", price: 50.00, category: "Conditioner", image: "https://splendit.co.za/wp-content/uploads/2022/05/ll-cond-oil.jpg" },
  { id: 104, name: "Long & lasting – Naturals Shampoo 250ml", brand: "Long Lasting", price: 50.00, category: "Shampoo", image: "https://media.takealot.com/covers_images/5965d82f278341b0839c9b91ce121091/s-zoom.file" },
  { id: 105, name: "Long & Lasting – Naturals Shea Butter Oil 100ml", brand: "Long Lasting", price: 50.00, category: "Oil", image: "https://splendit.co.za/wp-content/uploads/2022/05/ll-sb-oil.jpg.webp" },
  { id: 106, name: "Long & Lasting – Oil Moisturizer 250ml", brand: "Long Lasting", price: 50.00, category: "Treatment", image: "https://www.maximed.co.za/cdn/shop/files/Long_LastingOilMoisturiser250ml_700x700.jpg?v=1727354490" },
  { id: 107, name: "Long & lasting – Combo", brand: "Long Lasting", price: 300.00, category: "Combo", image: "/src/assets/combo_deal_image.png" },
  
  // Mielle
  { id: 108, name: "Mielle Moisture RX Hawaiian Ginger", brand: "Mielle", price: 150.00, category: "Treatment", image: "https://m.media-amazon.com/images/I/419dwxAAj+L._SL500_.jpg" },
  { id: 109, name: "Mielle Moisture RX Hawaiian Ginger", brand: "Mielle", price: 190.00, category: "Treatment", image: "https://incidecoder-content.storage.googleapis.com/4c927138-ecce-4637-89c4-83ffb33bcf5f/products/mielle-organics-moisture-rx-hawaiian-ginger-moisturizing-leave-in-conditioner/mielle-organics-moisture-rx-hawaiian-ginger-moisturizing-leave-in-conditioner_front_photo_original.jpeg" },
  { id: 110, name: "Mielle Pomegranate & Honey Detangling", brand: "Mielle", price: 200.00, category: "Treatment", image: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/mie/mie00679/y/14.jpg" },
  { id: 111, name: "Mielle Pomegranate & Honey Leave-In", brand: "Mielle", price: 235.00, category: "Conditioner", image: "https://www.dischem.co.za/api/catalog/product/6/2/62a34419aca61_854102006398.jpg?store=default&image-type=image" },
  { id: 112, name: "Mielle Pomegranate & Honey Moisturizing", brand: "Mielle", price: 180.00, category: "Treatment", image: "https://www.lookfantastic.com/images?url=https://static.thcdn.com/productimg/original/16717899-1305241175717161.jpg&format=webp&auto=avif&width=640&height=640&fit=crop" },
  { id: 113, name: "Mielle Rosemary and Mint Daily Styling Créme", brand: "Mielle", price: 190.00, category: "Styling", image: "https://www.dischem.co.za/api/catalog/product/6/8/6858feaba1be0_854102006787.jpg?store=default&image-type=image" },
  { id: 114, name: "Mielle Rosemary and Mint Scalp & Hair Strengthening", brand: "Mielle", price: 200.00, category: "Oil", image: "https://www.dischem.co.za/api/catalog/product/6/0/605deaa66a0f3_854102006732.jpg?store=default&image-type=image" },
  { id: 115, name: "Mielle Rosemary and Mint Strengthening Hair", brand: "Mielle", price: 200.00, category: "Treatment", image: "https://mielleorganics.com/cdn/shop/files/RM_SHA-award-seal_PDP_2048px_HairMasque.jpg?v=1747830581" },
  { id: 116, name: "Mielle Rosemary and Mint Strengthening Shampoo", brand: "Mielle", price: 185.00, category: "Shampoo", image: "https://mielleorganics.com/cdn/shop/files/RM_Shampoo_Render_20oz_Value_Size_v2_3de20550-eeab-4038-aea5-28a249851a27_5000x.jpg?v=1748414158" },
  
  // Isoplus
  { id: 117, name: "Isoplus Hairline & Edge Holding Gel 225g", brand: "Isoplus", price: 40.00, category: "Gel", image: "https://www.shoprite.co.za/medias/medias-10507914EA-en-picker-20230313.png?context=bWFzdGVyfGltYWdlc3wxMjI4NjI5fGltYWdlL3BuZ3xpbWFnZXMvaDc0L2hjOC8xMDM3NjQ0NDExNzAyMi5wbmd8YWRiMGRmMmY4YmQ1YmUxOWEwODQ2YTI4YjYzMGU1NGNhNDI0ZmVmMTczN2VkYTMwYzM4MjMyMzFhYjgyYjllOA" },
  { id: 118, name: "Isoplus Styling Gel 425ml", brand: "Isoplus", price: 40.00, category: "Gel", image: "https://www.cosmeticconnection.co.za/cdn/shop/products/isoplus-isoplus-styling-gel-425ml-original-6003823000589-1607-33327206236310.jpg?v=1655456760" },
  
  // Argan Origins
  { id: 119, name: "AO Argan Oil Shampoo + Conditioner + Free Heat Protection", brand: "Argan Origins", price: 200.00, category: "Combo", image: "https://splendit.co.za/wp-content/uploads/2024/02/ao-combo.jpg" },
  { id: 120, name: "AO Argan Oil Conditioner 300ml", brand: "Argan Origins", price: 90.00, category: "Conditioner", image: "https://www.dischem.co.za/api/catalog/product/6/2/62df7b2722951_5060120167118.jpg?store=default&image-type=image" },
  { id: 121, name: "AO Argan Oil Heat Defence Spray 150ml", brand: "Argan Origins", price: 80.00, category: "Styling", image: "https://arganorigins.co.za/wp-content/uploads/2021/06/packshot_04_AO-heat-defence-spray-1.png" },
  { id: 122, name: "AO Argan Oil Hydrating Hair Mask 200ml", brand: "Argan Origins", price: 80.00, category: "Mask", image: "https://media.takealot.com/covers_images/f0969e308ab94479bcb89c93dea73294/s-zoom.file" },
  { id: 123, name: "AO Argan Oil Shampoo 300ml", brand: "Argan Origins", price: 90.00, category: "Shampoo", image: "https://cdn-prd-02.pnp.co.za/sys-master/images/hba/hbd/11122652577822/silo-product-image-v2-16Mar2023-182241-5060120167101-Straight_on-112880-5150_515Wx515H" },
  { id: 124, name: "AO Silver Shampoo Infused with Moroccan", brand: "Argan Origins", price: 50.00, category: "Shampoo", image: "https://www.houseofnappies.com.au/assets/full/AO16849.jpg?20220315143521" },
  
  // Voucher
  { id: 129, name: "Croc Hair Clips 3's", brand: "Generic", price: 15.00, category: "Accessories", image: "https://www.cosmeticconnection.co.za/cdn/shop/files/croc-hair-clips-3s.jpg?v=1729100000" },
  { id: 130, name: "Voucher – Deep Treatment 50g – Hair Masque", brand: "Voucher", price: 15.00, category: "Mask", image: "https://www.cosmeticconnection.co.za/cdn/shop/files/voucher-deep-treatment-masque-50g.jpg?v=1729100000" },
  { id: 131, name: "Voucher – Fortifying Hair oil 100ml – Argan Oil", brand: "Voucher", price: 15.00, category: "Oil", image: "https://www.cosmeticconnection.co.za/cdn/shop/files/voucher-fortifying-argan-oil-100ml.jpg?v=1729100000" },
  
  // Native Child
  { id: 132, name: "Native Child (Kids Started Combo)", brand: "Native Child", price: 375.00, category: "Combo", image: "https://nativechild.co.za/cdn/shop/files/kids-starter-combo.jpg?v=1729100000" },
  { id: 133, name: "Native Child – Kids Milk n Honey Moisture Crème", brand: "Native Child", price: 145.00, category: "Treatment", image: "https://nativechild.co.za/cdn/shop/files/kids-milk-honey-creme.jpg?v=1729100000" },
  { id: 134, name: "Native Child – Kids Deep Conditioner 250ml", brand: "Native Child", price: 145.00, category: "Conditioner", image: "https://nativechild.co.za/cdn/shop/files/kids-deep-conditioner-250ml.jpg?v=1729100000" },
  { id: 135, name: "Native Child – Kids Hair Growth Oil 150ml", brand: "Native Child", price: 145.00, category: "Oil", image: "https://nativechild.co.za/cdn/shop/files/kids-growth-oil-150ml.jpg?v=1729100000" },
  { id: 136, name: "Native Child – Kids Moisturizing Shampoo", brand: "Native Child", price: 145.00, category: "Shampoo", image: "https://nativechild.co.za/cdn/shop/files/kids-moisturizing-shampoo.jpg?v=1729100000" },
  { id: 137, name: "Native Child (Adult Full Loc Combo)", brand: "Native Child", price: 549.00, category: "Combo", image: "https://nativechild.co.za/cdn/shop/files/adult-full-loc-combo.jpg?v=1729100000" },
  { id: 138, name: "Native Child – Adult Depp Conditioner 250ml", brand: "Native Child", price: 195.00, category: "Conditioner", image: "https://nativechild.co.za/cdn/shop/files/adult-deep-conditioner-250ml.jpg?v=1729100000" },
  { id: 139, name: "Native Child – Adult Hair Growth Oil 200ml", brand: "Native Child", price: 195.00, category: "Oil", image: "https://nativechild.co.za/cdn/shop/files/adult-growth-oil-200ml.jpg?v=1729100000" },
  { id: 140, name: "Native Child – Adult Moisture Cream 220ml", brand: "Native Child", price: 195.00, category: "Treatment", image: "https://nativechild.co.za/cdn/shop/files/adult-moisture-cream-220ml.jpg?v=1729100000" },
  { id: 141, name: "Native Child – Adult Moisturizing Shampoo", brand: "Native Child", price: 195.00, category: "Shampoo", image: "https://nativechild.co.za/cdn/shop/files/adult-moisturizing-shampoo.jpg?v=1729100000" },
  { id: 142, name: "Native Child – Hair Repair Serum 100ml", brand: "Native Child", price: 105.00, category: "Treatment", image: "https://nativechild.co.za/cdn/shop/files/hair-repair-serum-100ml.jpg?v=1729100000" },
  { id: 143, name: "Native Child – Kids Hydrating Hair Spray", brand: "Native Child", price: 105.00, category: "Styling", image: "https://nativechild.co.za/cdn/shop/files/kids-hydrating-spray.jpg?v=1729100000" },
  { id: 144, name: "Native Child – Shea Butter", brand: "Native Child", price: 105.00, category: "Treatment", image: "https://nativechild.co.za/cdn/shop/files/shea-butter.jpg?v=1729100000" },
  { id: 145, name: "Native Child – Adult Hair Growth Stimulating Castor Oil", brand: "Native Child", price: 205.00, category: "Oil", image: "https://nativechild.co.za/cdn/shop/files/adult-growth-castor-oil.jpg?v=1729100000" },
  { id: 146, name: "Native Child – Adult Happy Hair Hydrating Mist 100ml", brand: "Native Child", price: 115.00, category: "Styling", image: "https://nativechild.co.za/cdn/shop/files/adult-happy-hair-mist-100ml.jpg?v=1729100000" },
  
  // Mr Price
  { id: 147, name: "Mr Price – Alice Band", brand: "Mr Price", price: 25.00, category: "Accessories", image: "https://www.mrprice.com/cdn/shop/files/alice-band.jpg?v=1729100000" },
  { id: 148, name: "Mr price – 3 Pack Hair Clips Multi", brand: "Mr Price", price: 25.00, category: "Accessories", image: "https://www.mrprice.com/cdn/shop/files/3-pack-hair-clips-multi.jpg?v=1729100000" },
  { id: 149, name: "Mr Price – Green Alice Band Teal", brand: "Mr Price", price: 25.00, category: "Accessories", image: "https://www.mrprice.com/cdn/shop/files/green-alice-band-teal.jpg?v=1729100000" },
  { id: 150, name: "Mr Price – Hair Clips (Purple, Cream Nude)", brand: "Mr Price", price: 25.00, category: "Accessories", image: "https://www.mrprice.com/cdn/shop/files/hair-clips-purple-cream-nude.jpg?v=1729100000" },
  { id: 151, name: "Mr Price – Hair Clips (Silver, Gold Butterfly)", brand: "Mr Price", price: 25.00, category: "Accessories", image: "https://www.mrprice.com/cdn/shop/files/hair-clips-silver-gold-butterfly.jpg?v=1729100000" },
  { id: 152, name: "Mr Price – Hair Clips (Yellow Big, Yellow Small)", brand: "Mr Price", price: 25.00, category: "Accessories", image: "https://www.mrprice.com/cdn/shop/files/hair-clips-yellow-big-small.jpg?v=1729100000" },
  
  // Flexi Rods & Curl Chemistry
  { id: 153, name: "Flexi Rods", brand: "Generic", price: 50.00, category: "Tools", image: "https://www.flexirods.co.za/cdn/shop/files/flexi-rods.jpg?v=1729100000" },
  { id: 154, name: "Curl Chemistry – Papaya Combo", brand: "Curl Chemistry", price: 200.00, category: "Combo", image: "https://curlchemistry.co.za/cdn/shop/files/papaya-combo.jpg?v=1729100000" },
  { id: 155, name: "Curl Chemistry – Pomegranate Triple", brand: "Curl Chemistry", price: 200.00, category: "Combo", image: "https://curlchemistry.co.za/cdn/shop/files/pomegranate-triple.jpg?v=1729100000" },
  { id: 156, name: "Sarah Cholesterol Treatment 1l", brand: "Sarah", price: 60.00, category: "Treatment", image: "https://www.blackvelvet.co.za/cdn/shop/files/sarah-cholesterol-1l.jpg?v=1729100000" },
  
  // Cantu
  { id: 157, name: "Cantu – Wave Whip Curling", brand: "Cantu", price: 80.00, category: "Styling", image: "https://www.cantu.com/cdn/shop/files/wave-whip-curling-mousse.jpg?v=1729100000" },
  { id: 158, name: "Cantu – Argan Oil Leave-In Conditioning Repair Cream", brand: "Cantu", price: 95.00, category: "Conditioner", image: "https://www.cantu.com/cdn/shop/files/argan-oil-leave-in-repair-cream.jpg?v=1729100000" },
  { id: 159, name: "Cantu – Clarify & renew 42g", brand: "Cantu", price: 15.00, category: "Treatment", image: "https://www.cantu.com/cdn/shop/files/clarify-renew-42g.jpg?v=1729100000" },
  { id: 160, name: "Cantu – Cleansing Cream Shampoo 400ml", brand: "Cantu", price: 105.00, category: "Shampoo", image: "https://www.cantu.com/cdn/shop/files/cleansing-cream-shampoo-400ml.jpg?v=1729100000" },
  { id: 161, name: "Cantu – Coconut Curling Cream 340g", brand: "Cantu", price: 90.00, category: "Styling", image: "https://www.cantu.com/cdn/shop/files/coconut-curling-cream-340g.jpg?v=1729100000" },
  { id: 162, name: "Cantu – Deep Nourishing Masque 42g", brand: "Cantu", price: 15.00, category: "Mask", image: "https://www.cantu.com/cdn/shop/files/deep-nourishing-masque-42g.jpg?v=1729100000" },
  { id: 163, name: "Cantu – Deep Treatment Shea Butter Mask 50g", brand: "Cantu", price: 15.00, category: "Mask", image: "https://www.cantu.com/cdn/shop/files/deep-treatment-shea-butter-mask-50g.jpg?v=1729100000" },
  { id: 164, name: "Cantu – Grow Strong Strengthening Treatment", brand: "Cantu", price: 95.00, category: "Treatment", image: "https://www.cantu.com/cdn/shop/files/grow-strong-treatment.jpg?v=1729100000" },
  { id: 165, name: "Cantu – Hydrating Cream Conditioner 400ml", brand: "Cantu", price: 105.00, category: "Conditioner", image: "https://www.cantu.com/cdn/shop/files/hydrating-cream-conditioner-400ml.jpg?v=1729100000" },
  { id: 166, name: "Cantu – Leave-In Conditioning Repair Cream", brand: "Cantu", price: 90.00, category: "Conditioner", image: "https://www.cantu.com/cdn/shop/files/leave-in-conditioning-repair-cream.jpg?v=1729100000" },
  { id: 167, name: "Cantu – Men Beard Oil 100ml", brand: "Cantu", price: 125.00, category: "Men's Care", image: "https://www.cantu.com/cdn/shop/files/men-beard-oil-100ml.jpg?v=1729100000" },
  { id: 168, name: "Cantu – Moisture Retention Styling gel 524g", brand: "Cantu", price: 100.00, category: "Gel", image: "https://www.cantu.com/cdn/shop/files/moisture-retention-styling-gel-524g.jpg?v=1729100000" },
  { id: 169, name: "Cantu – Moisturizing Curl Activator Cream", brand: "Cantu", price: 90.00, category: "Styling", image: "https://www.cantu.com/cdn/shop/files/moisturizing-curl-activator-cream.jpg?v=1729100000" },
  { id: 170, name: "Cantu – Moisturizing Rinse Out Conditioner 400ml", brand: "Cantu", price: 105.00, category: "Conditioner", image: "https://www.cantu.com/cdn/shop/files/moisturizing-rinse-out-conditioner-400ml.jpg?v=1729100000" },
  { id: 171, name: "Cantu – Moisturizing Shampoo 400ml", brand: "Cantu", price: 105.00, category: "Shampoo", image: "https://www.cantu.com/cdn/shop/files/moisturizing-shampoo-400ml.jpg?v=1729100000" },
  { id: 172, name: "Cantu – Strengthening Styling Gel 524g", brand: "Cantu", price: 100.00, category: "Gel", image: "https://www.cantu.com/cdn/shop/files/strengthening-styling-gel-524g.jpg?v=1729100000" },
  { id: 173, name: "Hydrating Cream Conditioner", brand: "Cantu", price: 105.00, category: "Conditioner", image: "https://www.cantu.com/cdn/shop/files/hydrating-cream-conditioner-400ml.jpg?v=1729100000" },
  { id: 174, name: "Moisturizing Curl Activator Cream", brand: "Cantu", price: 90.00, category: "Styling", image: "https://www.cantu.com/cdn/shop/files/moisturizing-curl-activator-cream.jpg?v=1729100000" },
  
  // Soft & Smooth & The Perfect Hair
  { id: 175, name: "Soft & Smooth – 5 in 1 Hair Growth Treatment 125ml", brand: "Soft & Smooth", price: 55.00, category: "Treatment", image: "https://theperfecthair.co.za/cdn/shop/files/soft-smooth-5in1-growth-125ml.jpg?v=1729100000" },
  { id: 176, name: "Soft & Smooth – Deep Protein Treatment 125ml", brand: "Soft & Smooth", price: 55.00, category: "Treatment", image: "https://theperfecthair.co.za/cdn/shop/files/soft-smooth-deep-protein-125ml.jpg?v=1729100000" },
  { id: 177, name: "Soft & Smooth – Moisturizing Hair Butter", brand: "Soft & Smooth", price: 55.00, category: "Treatment", image: "https://theperfecthair.co.za/cdn/shop/files/soft-smooth-moisturizing-butter.jpg?v=1729100000" },
  { id: 178, name: "Soft & Smooth – Repair & Growth Treatment 125ml", brand: "Soft & Smooth", price: 55.00, category: "Treatment", image: "https://theperfecthair.co.za/cdn/shop/files/soft-smooth-repair-growth-125ml.jpg?v=1729100000" },
  { id: 179, name: "The Perfect Hair – Conditioner Deep", brand: "The Perfect Hair", price: 65.00, category: "Conditioner", image: "https://theperfecthair.co.za/cdn/shop/files/deep-conditioner.jpg?v=1729100000" },
  { id: 180, name: "The Perfect Hair – Afro Moisturizer 200ml", brand: "The Perfect Hair", price: 60.00, category: "Treatment", image: "https://theperfecthair.co.za/cdn/shop/files/afro-moisturizer-200ml.jpg?v=1729100000" },
  { id: 181, name: "The Perfect Hair – Braid Spray 180ml", brand: "The Perfect Hair", price: 60.00, category: "Styling", image: "https://theperfecthair.co.za/cdn/shop/files/braid-spray-180ml.jpg?v=1729100000" },
  { id: 182, name: "The Perfect Hair – Grow on The Go Creamy", brand: "The Perfect Hair", price: 60.00, category: "Treatment", image: "https://theperfecthair.co.za/cdn/shop/files/grow-on-the-go-creamy.jpg?v=1729100000" },
  { id: 183, name: "The Perfect Hair – Grow on The Go Curl Defining", brand: "The Perfect Hair", price: 60.00, category: "Styling", image: "https://theperfecthair.co.za/cdn/shop/files/grow-on-the-go-curl-defining.jpg?v=1729100000" },
  { id: 184, name: "The Perfect Hair – Grow on The Go Leave-In Repair", brand: "The Perfect Hair", price: 60.00, category: "Conditioner", image: "https://theperfecthair.co.za/cdn/shop/files/grow-on-the-go-leave-in-repair.jpg?v=1729100000" },
  { id: 185, name: "The Perfect Hair – Grow on The Go Sulphate Free", brand: "The Perfect Hair", price: 60.00, category: "Shampoo", image: "https://theperfecthair.co.za/cdn/shop/files/grow-on-the-go-sulphate-free.jpg?v=1729100000" },
  { id: 186, name: "The Perfect Hair – Leave-In Treatment 200ml", brand: "The Perfect Hair", price: 60.00, category: "Conditioner", image: "https://theperfecthair.co.za/cdn/shop/files/leave-in-treatment-200ml.jpg?v=1729100000" },
  { id: 187, name: "The Perfect Hair – Oil Sheen Spray 180ml", brand: "The Perfect Hair", price: 60.00, category: "Styling", image: "https://theperfecthair.co.za/cdn/shop/files/oil-sheen-spray-180ml.jpg?v=1729100000" },
  { id: 188, name: "The Perfect Hair – Growth Oil 200ml", brand: "The Perfect Hair", price: 60.00, category: "Oil", image: "https://theperfecthair.co.za/cdn/shop/files/growth-oil-200ml.jpg?v=1729100000" },
  
  // Cherry & Takealot
  { id: 189, name: "Cherry Hair Perm Rods 12's Large", brand: "Cherry", price: 45.00, category: "Tools", image: "https://www.cherryplastics.co.za/cdn/shop/files/perm-rods-large-12s.jpg?v=1729100000" },
  { id: 190, name: "Cheery Hair Perm Rods 12's Medium", brand: "Cherry", price: 45.00, category: "Tools", image: "https://www.cherryplastics.co.za/cdn/shop/files/perm-rods-medium-12s.jpg?v=1729100000" },
  { id: 191, name: "Takealot – Hair Clipper USB Charger Electric Hair Trimmer Men", brand: "Takealot", price: 265.00, category: "Tools", image: "https://www.takealot.com/images/product/large/hair-clipper-usb-trimmer.jpg?v=1729100000" },
  { id: 192, name: "Straightening Hot Hair Brush", brand: "Generic", price: 200.00, category: "Tools", image: "https://www.takealot.com/images/product/large/straightening-hot-hair-brush.jpg?v=1729100000" },
  { id: 193, name: "Takealot – Sleep Cap, Hair Bonnet", brand: "Takealot", price: 65.00, category: "Accessories", image: "https://www.takealot.com/images/product/large/satin-sleep-cap-bonnet.jpg?v=1729100000" },
  { id: 194, name: "Takealot – Hair Steamer Cap Beauty Steamer", brand: "Takealot", price: 90.00, category: "Tools", image: "https://www.takealot.com/images/product/large/hair-steamer-cap.jpg?v=1729100000" },
  { id: 195, name: "Takealot – Hot Comb – Electric Straightening Hot", brand: "Takealot", price: 180.00, category: "Tools", image: "https://www.takealot.com/images/product/large/electric-hot-comb-straightening.jpg?v=1729100000" },
  { id: 196, name: "Takealot – Professional Hair Dryer 2200w Hair Dryer", brand: "Takealot", price: 285.00, category: "Tools", image: "https://www.takealot.com/images/product/large/professional-hair-dryer-2200w.jpg?v=1729100000" },
  
  // Argan Oil & Revlon
  { id: 197, name: "Argan Oil Coconut Oil + Argan Shampoo", brand: "Argan Oil", price: 50.00, category: "Shampoo", image: "https://www.makro.co.za/cdn/shop/files/argan-coconut-shampoo.jpg?v=1729100000" },
  { id: 198, name: "Argan Oil Moroccan Intensive Care Shampoo", brand: "Argan Oil", price: 50.00, category: "Shampoo", image: "https://www.makro.co.za/cdn/shop/files/moroccan-argan-intensive-shampoo.jpg?v=1729100000" },
  { id: 199, name: "Argan Shampoo & Conditioner 1l Set", brand: "Argan Oil", price: 50.00, category: "Combo", image: "https://www.makro.co.za/cdn/shop/files/argan-shampoo-conditioner-set-1l.jpg?v=1729100000" },
  { id: 200, name: "Revlon Black Seed Oil Strength Conditioner", brand: "Revlon", price: 50.00, category: "Conditioner", image: "https://www.revlon.com/cdn/shop/files/black-seed-strength-conditioner.jpg?v=1729100000" },
  { id: 201, name: "Revlon Real Black Seed Curl Custard 300ml", brand: "Revlon", price: 50.00, category: "Styling", image: "https://www.revlon.com/cdn/shop/files/real-black-seed-curl-custard-300ml.jpg?v=1729100000" },
  { id: 202, name: "Revlon Real Black Seed Twist Pudding 300ml", brand: "Revlon", price: 50.00, category: "Styling", image: "https://www.revlon.com/cdn/shop/files/real-black-seed-twist-pudding-300ml.jpg?v=1729100000" },
  { id: 203, name: "Revlon Realistic Blackseed Butter Cream", brand: "Revlon", price: 50.00, category: "Treatment", image: "https://www.revlon.com/cdn/shop/files/realistic-blackseed-butter-cream.jpg?v=1729100000" },
  { id: 204, name: "Revlon Realistic Blackseed Curl Revive", brand: "Revlon", price: 50.00, category: "Styling", image: "https://www.revlon.com/cdn/shop/files/realistic-blackseed-curl-revive.jpg?v=1729100000" },
  
  // Bonnet Queens & Wax & Splendid Tools
  { id: 205, name: "Bonnet Queens Satin Bonnet Mommy & Me", brand: "Bonnet Queens", price: 80.00, category: "Accessories", image: "https://bonnetqueens.co.za/cdn/shop/files/mommy-me-satin-bonnet.jpg?v=1729100000" },
  { id: 206, name: "Bonnet Queens Adult Satin Bonnet", brand: "Bonnet Queens", price: 80.00, category: "Accessories", image: "https://bonnetqueens.co.za/cdn/shop/files/adult-satin-bonnet.jpg?v=1729100000" },
  { id: 207, name: "Bonnet Queens Satin Bonnet Kids", brand: "Bonnet Queens", price: 50.00, category: "Accessories", image: "https://bonnetqueens.co.za/cdn/shop/files/kids-satin-bonnet.jpg?v=1729100000" },
  { id: 208, name: "Wax Hair Coloring", brand: "Wax", price: 85.00, category: "Hair Color", image: "https://www.waxhair.com/cdn/shop/files/wax-hair-coloring-kit.jpg?v=1729100000" },
  { id: 209, name: "Soft Hood Hair Dryer Attachment Black", brand: "Splendid", price: 100.00, category: "Tools", image: "https://www.splendid.co.za/cdn/shop/files/soft-hood-dryer-attachment-black.jpg?v=1729100000" },
  { id: 210, name: "Afro Comb", brand: "Splendid", price: 10.00, category: "Tools", image: "https://www.splendid.co.za/cdn/shop/files/afro-comb.jpg?v=1729100000" },
  { id: 211, name: "Continuous Mist Spray Bottle 300ml", brand: "Splendid", price: 100.00, category: "Tools", image: "https://www.splendid.co.za/cdn/shop/files/continuous-mist-spray-300ml.jpg?v=1729100000" },
  { id: 212, name: "Detangling Hair Brush D Type", brand: "Splendid", price: 90.00, category: "Tools", image: "https://www.splendid.co.za/cdn/shop/files/detangling-brush-d-type.jpg?v=1729100000" },
  { id: 213, name: "Foil Deep Conditioning Cap", brand: "Splendid", price: 25.00, category: "Accessories", image: "https://www.splendid.co.za/cdn/shop/files/foil-deep-conditioning-cap.jpg?v=1729100000" },
  { id: 214, name: "Free Samples", brand: "Splendid", price: 10.00, category: "Treatment", image: "https://www.splendid.co.za/cdn/shop/files/free-samples.jpg?v=1729100000" },
  { id: 215, name: "Hair Drying Towel", brand: "Splendid", price: 50.00, category: "Accessories", image: "https://www.splendid.co.za/cdn/shop/files/hair-drying-towel.jpg?v=1729100000" },
  { id: 216, name: "Hairbrush Mini Styling", brand: "Splendid", price: 100.00, category: "Tools", image: "https://www.splendid.co.za/cdn/shop/files/mini-styling-hairbrush.jpg?v=1729100000" },
  { id: 217, name: "Nilotiqua Detangling Cream", brand: "Splendid", price: 70.00, category: "Treatment", image: "https://www.splendid.co.za/cdn/shop/files/nilotiqua-detangling-cream.jpg?v=1729100000" },
  { id: 218, name: "Plasenta", brand: "Splendid", price: 15.00, category: "Treatment", image: "https://www.splendid.co.za/cdn/shop/files/plasenta-treatment.jpg?v=1729100000" },
  { id: 219, name: "Satin Bonnet Kids", brand: "Splendid", price: 40.00, category: "Accessories", image: "https://www.splendid.co.za/cdn/shop/files/satin-bonnet-kids.jpg?v=1729100000" },
  { id: 220, name: "Semprebella Nourished Curls Conditioner 200ml", brand: "Splendid", price: 100.00, category: "Conditioner", image: "https://www.splendid.co.za/cdn/shop/files/semprebella-nourished-curls-conditioner-200ml.jpg?v=1729100000" },
  { id: 221, name: "Semprebella Nourished Curls Shampoo 400ml", brand: "Splendid", price: 70.00, category: "Shampoo", image: "https://www.splendid.co.za/cdn/shop/files/semprebella-nourished-curls-shampoo-400ml.jpg?v=1729100000" },
  { id: 222, name: "Shine and Jam Small", brand: "Splendid", price: 100.00, category: "Gel", image: "https://www.splendid.co.za/cdn/shop/files/shine-jam-small.jpg?v=1729100000" },
  { id: 223, name: "Shower Cap Satin – Polka Dot", brand: "Splendid", price: 30.00, category: "Accessories", image: "https://www.splendid.co.za/cdn/shop/files/satin-shower-cap-polka-dot.jpg?v=1729100000" },
  { id: 224, name: "Silicone Hair Dryer Diffuser Collapsible", brand: "Splendid", price: 120.00, category: "Tools", image: "https://www.splendid.co.za/cdn/shop/files/silicone-diffuser-collapsible.jpg?v=1729100000" },
  { id: 225, name: "Skala Conditioner Assorted", brand: "Splendid", price: 40.00, category: "Conditioner", image: "https://www.skala.co.za/cdn/shop/files/assorted-conditioner.jpg?v=1729100000" },
  { id: 226, name: "Splendid Solid Hair Comb", brand: "Splendid", price: 60.00, category: "Tools", image: "https://www.splendid.co.za/cdn/shop/files/solid-hair-comb.jpg?v=1729100000" },
  { id: 227, name: "Splendid Edge Brush", brand: "Splendid", price: 15.00, category: "Tools", image: "https://www.splendid.co.za/cdn/shop/files/edge-brush.jpg?v=1729100000" },
  { id: 228, name: "Top Class Jamaican Black Castor Oil Pomade – White", brand: "Top Class", price: 60.00, category: "Styling", image: "https://topclasscosmetics.com/cdn/shop/files/Untitleddesign_34.png?v=1706601705&width=533" },
  
  // African Pride & Shein
  { id: 229, name: "Moisture Miracle Curling Cream 340g", brand: "African Pride", price: 95.00, category: "Styling", image: "https://africanpride.com/cdn/shop/files/moisture-miracle-curling-cream-340g.jpg?v=1729100000" },
  { id: 230, name: "Moisture Miracle Shampoo 354ml", brand: "African Pride", price: 95.00, category: "Shampoo", image: "https://africanpride.com/cdn/shop/files/moisture-miracle-shampoo-354ml.jpg?v=1729100000" },
  { id: 231, name: "Jason – Hair Brush (Sponge)", brand: "Shein", price: 60.00, category: "Tools", image: "https://www.shein.com/cdn/shop/files/jason-sponge-hair-brush.jpg?v=1729100000" },
  { id: 232, name: "Double Lining Bonnet with String", brand: "Shein", price: 80.00, category: "Accessories", image: "https://www.shein.com/cdn/shop/files/double-lining-bonnet-string.jpg?v=1729100000" },
  { id: 233, name: "Dye Bottle Shein", brand: "Shein", price: 25.00, category: "Tools", image: "https://www.shein.com/cdn/shop/files/dye-bottle-applicator.jpg?v=1729100000" },
  { id: 234, name: "Hair Clips", brand: "Shein", price: 8.00, category: "Accessories", image: "https://www.shein.com/cdn/shop/files/basic-hair-clips.jpg?v=1729100000" },
  { id: 235, name: "Jason – Beard Combo", brand: "Shein", price: 90.00, category: "Men's Care", image: "https://www.shein.com/cdn/shop/files/jason-beard-combo.jpg?v=1729100000" },
  { id: 236, name: "Jason – Durag", brand: "Shein", price: 40.00, category: "Accessories", image: "https://www.shein.com/cdn/shop/files/jason-durag.jpg?v=1729100000" },
  { id: 237, name: "Shein 240pcs Multi size Elastic Bands", brand: "Shein", price: 30.00, category: "Accessories", image: "https://www.shein.com/cdn/shop/files/240pcs-elastic-bands.jpg?v=1729100000" },
  { id: 238, name: "Shein 3,6pcs Head Bands & Hair Accessory", brand: "Shein", price: 70.00, category: "Accessories", image: "https://www.shein.com/cdn/shop/files/36pcs-head-bands-accessory.jpg?v=1729100000" },
  { id: 239, name: "Shein 6 Hair Clip 6pcs Faux Pearl Sonneblom", brand: "Shein", price: 60.00, category: "Accessories", image: "https://www.shein.com/cdn/shop/files/6pcs-faux-pearl-sonneblom-clips.jpg?v=1729100000" },
  { id: 240, name: "Shein 6pcs Faux Pearl Hair Clip", brand: "Shein", price: 40.00, category: "Accessories", image: "https://www.shein.com/cdn/shop/files/6pcs-faux-pearl-clips.jpg?v=1729100000" },
  { id: 241, name: "Shein 6pcs Metal Butterfly Clip", brand: "Shein", price: 40.00, category: "Accessories", image: "https://www.shein.com/cdn/shop/files/6pcs-metal-butterfly-clips.jpg?v=1729100000" },
  { id: 242, name: "Shein 7 Hair Clips 4pcs Rhinestone & Faux Pearl", brand: "Shein", price: 40.00, category: "Accessories", image: "https://www.shein.com/cdn/shop/files/7-hair-clips-4pcs-rhinestone-pearl.jpg?v=1729100000" },
  { id: 243, name: "Shein 8 Hair Dressing Butterbly", brand: "Shein", price: 6.00, category: "Accessories", image: "https://www.shein.com/cdn/shop/files/8-hair-dressing-butterfly.jpg?v=1729100000" },
  { id: 244, name: "Shein 9.30pcs Metalic Hair Clips", brand: "Shein", price: 60.00, category: "Accessories", image: "https://www.shein.com/cdn/shop/files/930pcs-metallic-hair-clips.jpg?v=1729100000" },
  { id: 245, name: "Shein Colorblock Hair Comb", brand: "Shein", price: 70.00, category: "Tools", image: "https://www.shein.com/cdn/shop/files/colorblock-hair-comb.jpg?v=1729100000" },
  { id: 246, name: "Shein Hair Dryer Cap", brand: "Shein", price: 70.00, category: "Tools", image: "https://www.shein.com/cdn/shop/files/hair-dryer-cap.jpg?v=1729100000" },
  { id: 247, name: "Shein Hair Pins Random Faux Pearl Décor Hair", brand: "Shein", price: 20.00, category: "Accessories", image: "https://www.shein.com/cdn/shop/files/random-faux-pearl-hair-pins.jpg?v=1729100000" },
  { id: 248, name: "Shein Humidifyer", brand: "Shein", price: 67.00, category: "Tools", image: "https://www.shein.com/cdn/shop/files/portable-humidifier.jpg?v=1729100000" },
  { id: 249, name: "Shein Oil Applicator", brand: "Shein", price: 30.00, category: "Tools", image: "https://www.shein.com/cdn/shop/files/oil-applicator-bottle.jpg?v=1729100000" },
  { id: 250, name: "Shein Professional Dye hair Comb 3pack", brand: "Shein", price: 65.00, category: "Tools", image: "https://www.shein.com/cdn/shop/files/professional-dye-comb-3pack.jpg?v=1729100000" },
  { id: 251, name: "Shein Random Color Hair Brush", brand: "Shein", price: 30.00, category: "Tools", image: "https://www.shein.com/cdn/shop/files/random-color-hair-brush.jpg?v=1729100000" },
  { id: 252, name: "Shein Stickers Pink", brand: "Shein", price: 24.00, category: "Accessories", image: "https://www.shein.com/cdn/shop/files/pink-stickers-pack.jpg?v=1729100000" },
  { id: 253, name: "Shein Spray Bottle", brand: "Shein", price: 80.00, category: "Tools", image: "https://www.shein.com/cdn/shop/files/travel-spray-bottle.jpg?v=1729100000" },
  { id: 254, name: "Splendit Shampoo Message Brush", brand: "Splendid", price: 50.00, category: "Tools", image: "https://www.splendid.co.za/cdn/shop/files/shampoo-massage-brush.jpg?v=1729100000" },
  { id: 255, name: "Women's Wide Brim Satin Sleep Cap, Hair Bonnet", brand: "Shein", price: 50.00, category: "Accessories", image: "https://www.shein.com/cdn/shop/files/wide-brim-satin-sleep-cap.jpg?v=1729100000" },
  
  // Cream of Nature
  { id: 256, name: "Cream of Nature – Argan Oil Intensive Conditioning", brand: "Cream of Nature", price: 70.00, category: "Conditioner", image: "https://www.cremeofnature.com/cdn/shop/files/argan-intensive-conditioning.jpg?v=1729100000" },
  { id: 257, name: "Cream of Nature – Argan Oil Strength & Shine", brand: "Cream of Nature", price: 70.00, category: "Treatment", image: "https://www.cremeofnature.com/cdn/shop/files/argan-strength-shine.jpg?v=1729100000" },
  { id: 258, name: "Cream of Nature – Pure Honey Conditioner", brand: "Cream of Nature", price: 70.00, category: "Conditioner", image: "https://www.cremeofnature.com/cdn/shop/files/pure-honey-conditioner.jpg?v=1729100000" },
  { id: 259, name: "Cream of Nature – Pure Honey Detangler 236.5ml", brand: "Cream of Nature", price: 70.00, category: "Treatment", image: "https://www.cremeofnature.com/cdn/shop/files/pure-honey-detangler-236ml.jpg?v=1729100000" },
  { id: 260, name: "Cream of Nature – Pure Honey Shampoo 355ml", brand: "Cream of Nature", price: 70.00, category: "Shampoo", image: "https://www.cremeofnature.com/cdn/shop/files/pure-honey-shampoo-355ml.jpg?v=1729100000" },
  { id: 261, name: "Cream of Nature – Argan Oil Perfect Edges 66ml", brand: "Cream of Nature", price: 70.00, category: "Gel", image: "https://www.cremeofnature.com/cdn/shop/files/argan-perfect-edges-66ml.jpg?v=1729100000" },
  { id: 262, name: "Cream of Nature – Pure Honey Edge Control 63g", brand: "Cream of Nature", price: 70.00, category: "Gel", image: "https://www.cremeofnature.com/cdn/shop/files/pure-honey-edge-control-63g.jpg?v=1729100000" },
  { id: 263, name: "Cream of Nature – Twist & Curl Pudding 354ml", brand: "Cream of Nature", price: 80.00, category: "Styling", image: "https://www.cremeofnature.com/cdn/shop/files/twist-curl-pudding-354ml.jpg?v=1729100000" },
  
  // Palmer's
  { id: 264, name: "Palmer's – Chai Seed & Argan Oil Hair Mask 60g", brand: "Palmer's", price: 40.00, category: "Mask", image: "https://www.palmers.com/cdn/shop/files/chai-seed-argan-mask-60g.jpg?v=1729100000" },
  { id: 265, name: "Palmer's – Cocoa Butter Formula Length Retention", brand: "Palmer's", price: 40.00, category: "Treatment", image: "https://www.palmers.com/cdn/shop/files/cocoa-butter-length-retention.jpg?v=1729100000" },
  { id: 266, name: "Palmer's – Cocoa Butter Formula Length Retention", brand: "Palmer's", price: 95.00, category: "Treatment", image: "https://www.palmers.com/cdn/shop/files/cocoa-butter-length-retention.jpg?v=1729100000" },
  { id: 267, name: "Palmer's – Cocoa Butter Length Retention", brand: "Palmer's", price: 95.00, category: "Treatment", image: "https://www.palmers.com/cdn/shop/files/cocoa-butter-length-retention.jpg?v=1729100000" },
  { id: 268, name: "Palmer's – Leave-In Conditioner Cocoa Butter", brand: "Palmer's", price: 90.00, category: "Conditioner", image: "https://www.palmers.com/cdn/shop/files/leave-in-cocoa-butter.jpg?v=1729100000" },
  { id: 269, name: "Palmer's ��� Coconut Oil Deep Conditioner 60g", brand: "Palmer's", price: 40.00, category: "Conditioner", image: "https://www.palmers.com/cdn/shop/files/coconut-deep-conditioner-60g.jpg?v=1729100000" },
  { id: 270, name: "Palmer's – Coconut Oil Leave-In Conditioner", brand: "Palmer's", price: 90.00, category: "Conditioner", image: "https://www.palmers.com/cdn/shop/files/coconut-leave-in-conditioner.jpg?v=1729100000" },
  { id: 271, name: "Palmer's – Coconut Oil Repairing Conditioner", brand: "Palmer's", price: 90.00, category: "Conditioner", image: "https://www.palmers.com/cdn/shop/files/coconut-repairing-conditioner.jpg?v=1729100000" },
  { id: 272, name: "Palmer's – Coconut Oil Shampoo 400ml", brand: "Palmer's", price: 80.00, category: "Shampoo", image: "https://www.palmers.com/cdn/shop/files/coconut-shampoo-400ml.jpg?v=1729100000" },
  { id: 273, name: "Palmer's – Olive Oil Shine Therapy Conditioner", brand: "Palmer's", price: 95.00, category: "Conditioner", image: "https://www.palmers.com/cdn/shop/files/olive-shine-therapy-conditioner.jpg?v=1729100000" },
  { id: 274, name: "Palmer's – Olive Oil Shine Therapy Deep", brand: "Palmer's", price: 40.00, category: "Treatment", image: "https://www.palmers.com/cdn/shop/files/olive-shine-deep-treatment.jpg?v=1729100000" },
  { id: 275, name: "Palmer's – Olive Oil Shine Therapy Shampoo 400ml", brand: "Palmer's", price: 95.00, category: "Shampoo", image: "https://www.palmers.com/cdn/shop/files/olive-shine-shampoo-400ml.jpg?v=1729100000" },
  
  // ORS
  { id: 276, name: "ORS – Argan Oil Fortifying Hail Oil", brand: "ORS", price: 50.00, category: "Oil", image: "https://www.orshaircare.com/cdn/shop/files/argan-fortifying-hair-oil.jpg?v=1729100000" },
  { id: 277, name: "ORS – Black Castor Hair Oil 100ml", brand: "ORS", price: 60.00, category: "Oil", image: "https://www.orshaircare.com/cdn/shop/files/black-castor-hair-oil-100ml.jpg?v=1729100000" },
  { id: 278, name: "ORS – Fortifying Hair Food 125ml", brand: "ORS", price: 50.00, category: "Treatment", image: "https://www.orshaircare.com/cdn/shop/files/fortifying-hair-food-125ml.jpg?v=1729100000" },
  { id: 279, name: "ORS – Mousse Coconut Olive 227ml", brand: "ORS", price: 70.00, category: "Styling", image: "https://www.orshaircare.com/cdn/shop/files/coconut-olive-mousse-227ml.jpg?v=1729100000" },
  { id: 280, name: "ORS – Wrap/set Mousse 207ml", brand: "ORS", price: 65.00, category: "Styling", image: "https://www.orshaircare.com/cdn/shop/files/wrap-set-mousse-207ml.jpg?v=1729100000" },
  
  // EFO & Shea Moisture & Afri Pure
  { id: 281, name: "EFO – Organics Shampoo & Conditioner", brand: "EFO Organics", price: 170.00, category: "Combo", image: "https://www.efoorganics.com/cdn/shop/files/organics-shampoo-conditioner-set.jpg?v=1729100000" },
  { id: 282, name: "Shea Moisture – Conditioner", brand: "Shea Moisture", price: 175.00, category: "Conditioner", image: "https://www.sheamoisture.com/cdn/shop/files/raw-shea-conditioner.jpg?v=1729100000" },
  { id: 283, name: "Shea Moisture – Shampoo", brand: "Shea Moisture", price: 175.00, category: "Shampoo", image: "https://www.sheamoisture.com/cdn/shop/files/raw-shea-shampoo.jpg?v=1729100000" },
  { id: 284, name: "Shea Moisture Products Set Assorted", brand: "Shea Moisture", price: 120.00, category: "Combo", image: "https://www.sheamoisture.com/cdn/shop/files/assorted-products-set.jpg?v=1729100000" },
  { id: 285, name: "Afri Pure – Miracle Growth Oil 50ml", brand: "Afri Pure", price: 100.00, category: "Oil", image: "https://afrpure.co.za/cdn/shop/files/miracle-growth-oil-50ml.jpg?v=1729100000" },
  { id: 286, name: "Afri Pure – Aloe Oil Calming Refreshing", brand: "Afri Pure", price: 30.00, category: "Oil", image: "https://afrpure.co.za/cdn/shop/files/aloe-oil-calming.jpg?v=1729100000" },
  { id: 287, name: "Afri Pure – Coconut Oil Moisturizes Hair", brand: "Afri Pure", price: 60.00, category: "Oil", image: "https://afrpure.co.za/cdn/shop/files/coconut-oil-hair.jpg?v=1729100000" },
  { id: 288, name: "Afri Pure – Strengthening Hair", brand: "Afri Pure", price: 70.00, category: "Oil", image: "https://afrpure.co.za/cdn/shop/files/strengthening-hair-oil.jpg?v=1729100000" },
  { id: 289, name: "Afri Pure – Blended Tea Tree Oil 100ml", brand: "Afri Pure", price: 45.00, category: "Oil", image: "https://afrpure.co.za/cdn/shop/files/blended-tea-tree-oil-100ml.jpg?v=1729100000" },
  { id: 290, name: "Afri Pure – Body Oil All Rounder 180ml", brand: "Afri Pure", price: 85.00, category: "Body Care", image: "https://afrpure.co.za/cdn/shop/files/body-oil-all-rounder-180ml.jpg?v=1729100000" },
  { id: 291, name: "Afri Pure – Body oil Glo to Go 180ml", brand: "Afri Pure", price: 85.00, category: "Body Care", image: "https://afrpure.co.za/cdn/shop/files/glo-to-go-body-oil-180ml.jpg?v=1729100000" },
  { id: 292, name: "Afri Pure – Body Oil Moisture Burst 180ml", brand: "Afri Pure", price: 85.00, category: "Body Care", image: "https://afrpure.co.za/cdn/shop/files/moisture-burst-body-oil-180ml.jpg?v=1729100000" },
  { id: 293, name: "Afri Pure – Vit Me C + E 180ml", brand: "Afri Pure", price: 45.00, category: "Body Care", image: "https://afrpure.co.za/cdn/shop/files/vit-c-e-body-oil-180ml.jpg?v=1729100000" },
  { id: 294, name: "Afri Pure – Vitamin E Blended Oil 100ml", brand: "Afri Pure", price: 70.00, category: "Oil", image: "https://afrpure.co.za/cdn/shop/files/vitamin-e-blended-oil-100ml.jpg?v=1729100000" },
  { id: 295, name: "Afri Pure – Hair Elixir Rosemary & Mint 100ml", brand: "Afri Pure", price: 60.00, category: "Oil", image: "https://afrpure.co.za/cdn/shop/files/rosemary-mint-elixir-100ml.jpg?v=1729100000" },
  { id: 296, name: "Afri Pure – Hair Elixir Shea Butter 100ml", brand: "Afri Pure", price: 80.00, category: "Oil", image: "https://afrpure.co.za/cdn/shop/files/shea-butter-elixir-100ml.jpg?v=1729100000" },
  { id: 297, name: "Afri Pure – Jamaican Black Castor Oil 200ml", brand: "Afri Pure", price: 60.00, category: "Oil", image: "https://afrpure.co.za/cdn/shop/files/jbco-200ml.jpg?v=1729100000" },
  { id: 298, name: "Afri Pure – Oil Blend 100ml Argan", brand: "Afri Pure", price: 30.00, category: "Oil", image: "https://afrpure.co.za/cdn/shop/files/oil-blend-argan-100ml.jpg?v=1729100000" },
  { id: 299, name: "Afri Pure – Oil Blend 100ml Avocado", brand: "Afri Pure", price: 30.00, category: "Oil", image: "https://afrpure.co.za/cdn/shop/files/oil-blend-avocado-100ml.jpg?v=1729100000" },
  { id: 300, name: "Afri Pure – Oil Blend 100ml Jojoba", brand: "Afri Pure", price: 30.00, category: "Oil", image: "https://afrpure.co.za/cdn/shop/files/oil-blend-jojoba-100ml.jpg?v=1729100000" },
  { id: 301, name: "Afri Pure – Oil Blend 100ml Peppermint", brand: "Afri Pure", price: 30.00, category: "Oil", image: "https://afrpure.co.za/cdn/shop/files/oil-blend-peppermint-100ml.jpg?v=1729100000" },
  
  // Mrs J Accessories & Aunt Jackie's
  { id: 302, name: "3-in-1 Hair Dryer, Volumizer & Styler", brand: "Mrs J Accessories", price: 190.00, category: "Tools", image: "https://mrsjaccessories.co.za/cdn/shop/files/3in1-hair-dryer-volumizer-styler.jpg?v=1729100000" },
  { id: 303, name: "Hair Pins – Jolene Atlantis", brand: "Mrs J Accessories", price: 30.00, category: "Accessories", image: "https://mrsjaccessories.co.za/cdn/shop/files/jolene-atlantis-hair-pins.jpg?v=1729100000" },
  { id: 304, name: "Shine N Jam Conditioning Gel Extra Hold 4 oz 227ml", brand: "Mrs J Accessories", price: 90.00, category: "Gel", image: "https://mrsjaccessories.co.za/cdn/shop/files/shine-n-jam-extra-hold-227ml.jpg?v=1729100000" },
  { id: 305, name: "Aunt Jackie's – Treatment Mixed 227g", brand: "Aunt Jackie's", price: 130.00, category: "Treatment", image: "https://auntjackies.com/cdn/shop/files/treatment-mixed-227g.jpg?v=1729100000" },
  { id: 306, name: "Aunt Jackie's – 1 Cool It 284g", brand: "Aunt Jackie's", price: 120.00, category: "Treatment", image: "https://auntjackies.com/cdn/shop/files/cool-it-284g.jpg?v=1729100000" },
  { id: 307, name: "Aunt Jackie's – 2 Flawless 284g", brand: "Aunt Jackie's", price: 120.00, category: "Treatment", image: "https://auntjackies.com/cdn/shop/files/flawless-284g.jpg?v=1729100000" },
  { id: 308, name: "Aunt Jackie's – 3 Hydrate Me 284g", brand: "Aunt Jackie's", price: 135.00, category: "Treatment", image: "https://auntjackies.com/cdn/shop/files/hydrate-me-284g.jpg?v=1729100000" },
  { id: 309, name: "Aunt Jackie's – Aloe & Mint Spa like Bundle", brand: "Aunt Jackie's", price: 350.00, category: "Combo", image: "https://auntjackies.com/cdn/shop/files/aloe-mint-spa-bundle.jpg?v=1729100000" },
  { id: 310, name: "Aunt Jackie's – Balance 118ml", brand: "Aunt Jackie's", price: 60.00, category: "Oil", image: "https://auntjackies.com/cdn/shop/files/balance-118ml.jpg?v=1729100000" },
  { id: 311, name: "Aunt Jackie's – Butter Crème 213g", brand: "Aunt Jackie's", price: 75.00, category: "Treatment", image: "https://auntjackies.com/cdn/shop/files/butter-creme-213g.jpg?v=1729100000" },
  { id: 312, name: "Aunt Jackie's – Coco Repair 426g", brand: "Aunt Jackie's", price: 75.00, category: "Conditioner", image: "https://auntjackies.com/cdn/shop/files/coco-repair-426g.jpg?v=1729100000" },
  { id: 313, name: "Aunt Jackie's – Coco Wash 355ml", brand: "Aunt Jackie's", price: 75.00, category: "Shampoo", image: "https://auntjackies.com/cdn/shop/files/coco-wash-355ml.jpg?v=1729100000" },
  { id: 314, name: "Aunt Jackie's – Curl Boss 426g", brand: "Aunt Jackie's", price: 80.00, category: "Gel", image: "https://auntjackies.com/cdn/shop/files/curl-boss-426g.jpg?v=1729100000" },
  { id: 315, name: "Aunt Jackie's – Curl La La 426g", brand: "Aunt Jackie's", price: 90.00, category: "Gel", image: "https://auntjackies.com/cdn/shop/files/curl-la-la-426g.jpg?v=1729100000" },
  { id: 316, name: "Aunt Jackie's – Don't Shrink 426g", brand: "Aunt Jackie's", price: 130.00, category: "Gel", image: "https://auntjackies.com/cdn/shop/files/dont-shrink-426g.jpg?v=1729100000" },
  { id: 317, name: "Aunt Jackie's – Frizz Patrol 244ml", brand: "Aunt Jackie's", price: 37.00, category: "Styling", image: "https://auntjackies.com/cdn/shop/files/frizz-patrol-244ml.jpg?v=1729100000" },
  { id: 318, name: "Aunt Jackie's – Frizz Rebel 118ml", brand: "Aunt Jackie's", price: 130.00, category: "Treatment", image: "https://auntjackies.com/cdn/shop/files/frizz-rebel-118ml.jpg?v=1729100000" },
  { id: 319, name: "Aunt Jackie's – Ice Curls 426g", brand: "Aunt Jackie's", price: 73.00, category: "Gel", image: "https://auntjackies.com/cdn/shop/files/ice-curls-426g.jpg?v=1729100000" },
  { id: 320, name: "Aunt Jackie's – In Control 426g", brand: "Aunt Jackie's", price: 110.00, category: "Conditioner", image: "https://auntjackies.com/cdn/shop/files/in-control-426g.jpg?v=1729100000" },
  { id: 321, name: "Aunt Jackie's – Kids Baby Curls 426g", brand: "Aunt Jackie's", price: 80.00, category: "Styling", image: "https://auntjackies.com/cdn/shop/files/kids-baby-curls-426g.jpg?v=1729100000" },
  { id: 322, name: "Aunt Jackie's – Kids Heads Up 355ml", brand: "Aunt Jackie's", price: 70.00, category: "Shampoo", image: "https://auntjackies.com/cdn/shop/files/kids-heads-up-355ml.jpg?v=1729100000" },
  { id: 323, name: "Aunt Jackie's – Kids Knot Havin It 355ml", brand: "Aunt Jackie's", price: 80.00, category: "Conditioner", image: "https://auntjackies.com/cdn/shop/files/kids-knot-havin-it-355ml.jpg?v=1729100000" },
  { id: 324, name: "Aunt Jackie's – Kids Soft & Sassy 426g", brand: "Aunt Jackie's", price: 170.00, category: "Conditioner", image: "https://auntjackies.com/cdn/shop/files/kids-soft-sassy-426g.jpg?v=1729100000" },
  { id: 325, name: "Aunt Jackie's – Knot on My Watch 355ml", brand: "Aunt Jackie's", price: 65.00, category: "Treatment", image: "https://auntjackies.com/cdn/shop/files/knot-on-my-watch-355ml.jpg?v=1729100000" },
  { id: 326, name: "Aunt Jackie's – Lather Up 284g", brand: "Aunt Jackie's", price: 60.00, category: "Shampoo", image: "https://auntjackies.com/cdn/shop/files/lather-up-284g.jpg?v=1729100000" },
  { id: 327, name: "Aunt Jackie's – Nourish My Hair 118ml", brand: "Aunt Jackie's", price: 290.00, category: "Oil", image: "https://auntjackies.com/cdn/shop/files/nourish-my-hair-118ml.jpg?v=1729100000" },
  { id: 328, name: "Aunt Jackie's – Oh So Clean 355ml", brand: "Aunt Jackie's", price: 61.00, category: "Shampoo", image: "https://auntjackies.com/cdn/shop/files/oh-so-clean-355ml.jpg?v=1729100000" },
  { id: 329, name: "Aunt Jackie's – Perfect Hydrate Your Curls Kit", brand: "Aunt Jackie's", price: 95.00, category: "Combo", image: "https://auntjackies.com/cdn/shop/files/perfect-hydrate-curls-kit.jpg?v=1729100000" },
  { id: 330, name: "Aunt Jackie's – Power Wash 355ml", brand: "Aunt Jackie's", price: 120.00, category: "Shampoo", image: "https://auntjackies.com/cdn/shop/files/power-wash-355ml.jpg?v=1729100000" },
  { id: 331, name: "Aunt Jackie's – Purify Me 355ml", brand: "Aunt Jackie's", price: 50.00, category: "Treatment", image: "https://auntjackies.com/cdn/shop/files/purify-me-355ml.jpg?v=1729100000" },
  { id: 332, name: "Aunt Jackie's – Quench 355ml", brand: "Aunt Jackie's", price: 60.00, category: "Conditioner", image: "https://auntjackies.com/cdn/shop/files/quench-355ml.jpg?v=1729100000" },
  { id: 333, name: "Aunt Jackie's – Repair My Hair 118ml", brand: "Aunt Jackie's", price: 75.00, category: "Treatment", image: "https://auntjackies.com/cdn/shop/files/repair-my-hair-118ml.jpg?v=1729100000" },
  { id: 334, name: "Aunt Jackie's – Seal It Up 213g", brand: "Aunt Jackie's", price: 80.00, category: "Treatment", image: "https://auntjackies.com/cdn/shop/files/seal-it-up-213g.jpg?v=1729100000" },
  { id: 335, name: "Aunt Jackie's – Slicked 113ml", brand: "Aunt Jackie's", price: 100.00, category: "Gel", image: "https://auntjackies.com/cdn/shop/files/slicked-113ml.jpg?v=1729100000" },
  { id: 336, name: "Aunt Jackie's – Soft All Over 237ml", brand: "Aunt Jackie's", price: 110.00, category: "Oil", image: "https://auntjackies.com/cdn/shop/files/soft-all-over-237ml.jpg?v=1729100000" },
  { id: 337, name: "Aunt Jackie's – Spray Bottle 200ml", brand: "Aunt Jackie's", price: 60.00, category: "Tools", image: "https://auntjackies.com/cdn/shop/files/spray-bottle-200ml.jpg?v=1729100000" },
  { id: 338, name: "Aunt Jackie's – Tame My Edges 71g Smoothing Gel", brand: "Aunt Jackie's", price: 110.00, category: "Gel", image: "https://auntjackies.com/cdn/shop/files/tame-my-edges-71g.jpg?v=1729100000" },
  { id: 339, name: "Aunt Jackie's – Rescued 426g", brand: "Aunt Jackie's", price: 50.00, category: "Treatment", image: "https://auntjackies.com/cdn/shop/files/rescued-426g.jpg?v=1729100000" },
  { id: 340, name: "Aunt Jackie's – Curl La La Defining Curl Custard", brand: "Aunt Jackie's", price: 60.00, category: "Styling", image: "https://auntjackies.com/cdn/shop/files/curl-la-la-custard.jpg?v=1729100000" },
  { id: 341, name: "Aunt Jackie's – Curl La La Defining Curl Custard", brand: "Aunt Jackie's", price: 45.00, category: "Styling", image: "https://auntjackies.com/cdn/shop/files/curl-la-la-custard.jpg?v=1729100000" },
  { id: 342, name: "Aunt Jackie's – Elixirs Essentials Hair & Scalp Oils", brand: "Aunt Jackie's", price: 45.00, category: "Oil", image: "https://auntjackies.com/cdn/shop/files/elixirs-essentials-oils.jpg?v=1729100000" },
  
  // Dark & Lovely & Soft n Free & The Mane Choice
  { id: 343, name: "Dark & Lovely – Au Naturale Anti-Breakage Root to Tip Mender", brand: "Dark & Lovely", price: 60.00, category: "Treatment", image: "https://www.amazon.com/cdn/shop/files/dark-lovely-au-naturale-root-tip-mender.jpg?v=1729100000" },
  { id: 344, name: "Dark & Lovely – Au Naturale Clump Control Curl Milk", brand: "Dark & Lovely", price: 90.00, category: "Styling", image: "https://www.amazon.com/cdn/shop/files/dark-lovely-curl-defining-creme-glaze.jpg?v=1729100000" },
  { id: 345, name: "Dark & Lovely – Au Naturale Coil Moisturizing Soufflé", brand: "Dark & Lovely", price: 90.00, category: "Treatment", image: "https://theglamourshop.com/cdn/shop/files/dark-lovely-coil-moisturizing-souffle.jpg?v=1729100000" },
  { id: 346, name: "Soft n Free – GroHealthy Curl Activator Moisturizer 355ml", brand: "Soft n Free", price: 70.00, category: "Styling", image: "https://www.amazon.com/cdn/shop/files/sofn-free-curl-activator-moisturizer.jpg?v=1729100000" },
  { id: 347, name: "Soft n Free – GroHealthy Curl Defining Pudding 355ml", brand: "Soft n Free", price: 70.00, category: "Styling", image: "https://www.amazon.com/cdn/shop/files/sofn-free-curl-defining-pudding.jpg?v=1729100000" },
  { id: 348, name: "Soft n Free – GroHealthy Olive Oil Anti-Breakage Formula", brand: "Soft n Free", price: 80.00, category: "Treatment", image: "https://www.amazon.com/cdn/shop/files/sofn-free-olive-oil-deep-conditioning-treatment.jpg?v=1729100000" },
  { id: 349, name: "Soft n Free – GroHealthy Scalp Remedy Shampoo & Conditioner", brand: "Soft n Free", price: 90.00, category: "Combo", image: "https://www.amazon.com/cdn/shop/files/sofn-free-scalp-remedy-shampoo-conditioner.jpg?v=1729100000" },
  { id: 350, name: "The Mane Choice – 3-in-1 Revitalize & Refresh Conditioner", brand: "The Mane Choice", price: 60.00, category: "Conditioner", image: "https://themanechoice.com/cdn/shop/files/the-mane-choice-alpha-revitalize-refresh-3-in-1.jpg?v=1729100000" },
  { id: 351, name: "The Mane Choice – Crystal Orchid Biotin Infused Styling Gel", brand: "The Mane Choice", price: 60.00, category: "Gel", image: "https://themanechoice.com/cdn/shop/files/the-mane-choice-crystal-orchid-styling-gel.jpg?v=1729100000" },
  { id: 352, name: "The Mane Choice – Do It FRO The Culture Twist & Set Butter", brand: "The Mane Choice", price: 60.00, category: "Styling", image: "https://www.kiyobeauty.com/cdn/shop/files/the-mane-choice-do-it-fro-bold-buttery-gel.jpg?v=1729100000" },
  
  // Eco Gel & Skala
  { id: 353, name: "Eco Gel – Argan Oil Styling Gel", brand: "Eco Gel", price: 65.00, category: "Gel", image: "https://ecostyle.com/cdn/shop/files/eco-argan-oil-styling-gel.jpg?v=1729100000" },
  { id: 354, name: "Eco Gel – Black Castor & Flaxseed Oil Gel", brand: "Eco Gel", price: 30.00, category: "Gel", image: "https://www.amazon.com/cdn/shop/files/eco-black-castor-flaxseed-gel.jpg?v=1729100000" },
  { id: 355, name: "Eco Gel – Eco Gel Olive Oil", brand: "Eco Gel", price: 60.00, category: "Gel", image: "https://www.amazon.com/cdn/shop/files/eco-olive-oil-styling-gel.jpg?v=1729100000" },
  { id: 356, name: "Eco Gel – Eco Gel Sport", brand: "Eco Gel", price: 60.00, category: "Gel", image: "https://ecostyle.com/cdn/shop/files/eco-blue-sport-gel.jpg?v=1729100000" },
  { id: 357, name: "Eco Gel – Eco Styler Gel Super Protein", brand: "Eco Gel", price: 170.00, category: "Gel", image: "https://ecostyle.com/cdn/shop/files/eco-super-protein-gel.jpg?v=1729100000" },
  { id: 358, name: "Skala – Ceramidas Treatment Cream", brand: "Skala", price: 120.00, category: "Treatment", image: "https://skalabrasil.com/cdn/shop/files/skala-ceramidas-treatment-cream.jpg?v=1729100000" },
  { id: 359, name: "Skala – Divino Potão Treatment Cream", brand: "Skala", price: 50.00, category: "Treatment", image: "https://skalabrasil.com/cdn/shop/files/skala-divino-potao-treatment-cream.jpg?v=1729100000" },
  { id: 360, name: "Skala – Expert Curls Treatment Cream", brand: "Skala", price: 80.00, category: "Treatment", image: "https://skalastore.com/cdn/shop/files/skala-expert-curls-treatment-cream.jpg?v=1729100000" },
  { id: 361, name: "Skala – Tutano Treatment Cream", brand: "Skala", price: 125.00, category: "Treatment", image: "https://skalabrasil.com/cdn/shop/files/skala-mais-crespos-treatment-cream.jpg?v=1729100000" },
];

export const categories = [
  "All",
  "Shampoo",
  "Conditioner",
  "Treatment",
  "Oil",
  "Mask",
  "Styling",
  "Gel",
  "Hair Color",
  "Tools",
  "Accessories",
  "Body Care",
  "Men's Care",
  "Combo",
  "Fragrance",
];

export const brands = Array.from(new Set(products.map(p => p.brand))).sort();
