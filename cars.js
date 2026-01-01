// --- CONFIGURATION ---
const GLOBAL_WHATSAPP_NUMBER = "971554171152"; 

// --- 1. CATEGORIES DATA ---
const categories = [
    { id: "luxury-suv", title: "Luxury SUV", image: "https://imagizer.imageshack.com/img923/3585/oM1zEt.jpg" },
    { id: "economy-suv", title: "Economy SUV", image: "https://imagizer.imageshack.com/img924/2321/vHv3n4.jpg" },
    { id: "sport", title: "Sport Cars", image: "https://imagizer.imageshack.com/img921/6269/a7tCYA.jpg" },
    { id: "luxury-sedan", title: "Luxury Sedan", image: "https://imagizer.imageshack.com/img923/1557/txlWVO.jpg" },
    { id: "convertible", title: "Convertible Cars", image: "https://imagizer.imageshack.com/img921/9/SiyGVK.jpg" },
    { id: "super", title: "Super Cars", image: "https://imagizer.imageshack.com/img924/3425/c5FqXb.jpg" }
];

// --- 2. CARS DATA ---
const cars = [
    // --- LUXURY SUV ---
    {
        id: 1-9850,
        category: "luxury-suv",
        title: "Cadillac Escalade",
        details: "Matte Black • 7 Seats • Automatic • V8 Engine",
        description: "The Cadillac Escalade is a bold and spacious SUV car choice, offering premium comfort, commanding presence, and versatile seating—perfect for family trips, group travel, or anyone wanting a luxurious and roomy ride.",
        image: "https://imagizer.imageshack.com/img923/9963/IF8D8q.jpg",
        gallery: ["https://imagizer.imageshack.com/img922/3654/uNripE.jpg","https://imagizer.imageshack.com/img922/1052/ts4bTK.jpg","https://imagizer.imageshack.com/img923/9320/Z1mgIa.jpg","https://imagizer.imageshack.com/img922/9790/PJDAbD.jpg","https://imagizer.imageshack.com/img922/5375/TfNxgS.jpg","https://imagizer.imageshack.com/img921/4143/miENCd.jpg"]
    },
    {
        id: 28495,
        category: "luxury-suv",
        title: "Bently Bentayga",
        details: "Black • 5 Seats • Automatic • V8 Engine",
        description: "The Bentley Bentayga is an ultra-luxury SUV perfect, offering exceptional comfort, handcrafted elegance, and a commanding presence on the road—ideal for premium travel, special occasions, or those seeking a top-tier luxury experience.",
        image: "https://imagizer.imageshack.com/img922/1261/MSwX66.jpg",
        gallery: ["https://imagizer.imageshack.com/img921/3995/S17fNf.jpg","https://imagizer.imageshack.com/img924/5199/LP09cv.jpg","https://imagizer.imageshack.com/img922/6458/rk4Jr2.jpg","https://imagizer.imageshack.com/img924/2576/Yr4aZR.jpg","https://imagizer.imageshack.com/img924/6536/pc7HJv.jpg","https://imagizer.imageshack.com/img923/4504/VUtsZq.jpg","https://imagizer.imageshack.com/img922/9392/ykP5x3.jpg","https://imagizer.imageshack.com/img922/2903/YOmePT.jpg","https://imagizer.imageshack.com/img924/865/Kpf3KO.jpg","https://imagizer.imageshack.com/img923/6568/hOTPfe.jpg"]
    },
    {
        id: 44400,
        category: "luxury-suv",
        title: "AMG G-63 4x4²",
        details: "Sky Blue • 5 Seats • Automatic • V8 Engine",
        description: "The Mercedes-Benz G 63 AMG (Square) is a powerful and iconic car choice, offering rugged luxury, bold design, and commanding performance—perfect for standout travel, premium experiences, or anyone wanting a memorable ride with attitude.",
        image: "https://imagizer.imageshack.com/img923/3585/oM1zEt.jpg",
        gallery: ["https://imagizer.imageshack.com/img922/8321/DDoJZt.jpg","https://imagizer.imageshack.com/img923/7677/Wk6w94.jpg","https://imagizer.imageshack.com/img924/7351/BnjII7.jpg","https://imagizer.imageshack.com/img921/5470/pnheFE.jpg","https://imagizer.imageshack.com/img923/2323/pWYVbu.jpg","https://imagizer.imageshack.com/img924/2794/kQngX6.jpg","https://imagizer.imageshack.com/img921/9522/aWybcL.jpg","https://imagizer.imageshack.com/img922/8076/qfCT0l.jpg","https://imagizer.imageshack.com/img923/5161/a3IK9T.jpg"]
    },
    {
        id: 57417,
        category: "luxury-suv",
        title: "Lamborghini Urus",
        details: "Orange • 5 Seats • Automatic • V8 Engine",
        description: "The Lamborghini Urus is a high-performance luxury SUV, blending supercar-level speed with everyday comfort and striking style—ideal for premium trips, special occasions, or anyone seeking an unforgettable driving experience.",
        image: "https://imagizer.imageshack.com/img921/1594/QBvjMs.jpg",
        gallery: ["https://imagizer.imageshack.com/img923/7664/xAtfy5.jpg","https://imagizer.imageshack.com/img922/9898/DFMitN.jpg","https://imagizer.imageshack.com/img921/3069/L74gKt.jpg","https://imagizer.imageshack.com/img923/9830/220oQZ.jpg","https://imagizer.imageshack.com/img923/2203/REh1S6.jpg","https://imagizer.imageshack.com/img921/2899/s6dkla.jpg","https://imagizer.imageshack.com/img923/5677/NHjKej.jpg","https://imagizer.imageshack.com/img924/9587/FHk6km.jpg","https://imagizer.imageshack.com/img922/2374/KJ1tCO.jpg","https://imagizer.imageshack.com/img921/7278/7C30ae.jpg"]
    },
    {
        id: 9350,
        category: "luxury-suv",
        title: "Range Rover Defender",
        details: "Gondwana Stone • 5 Seats • Automatic • V6 Engine",
        description: "The Range Rover Defender is a rugged yet refined rent car choice, offering capable performance, spacious comfort, and premium design—perfect for adventure travel, family trips, or anyone wanting a versatile and memorable ride.",
        image: "https://imagizer.imageshack.com/img924/8053/FbWPgt.jpg",
        gallery: ["https://imagizer.imageshack.com/img921/23/ucSWpW.jpg","https://imagizer.imageshack.com/img921/724/gToteu.jpg","https://imagizer.imageshack.com/img924/6312/QljGGt.jpg","https://imagizer.imageshack.com/img924/1170/nKgt7c.jpg","https://imagizer.imageshack.com/img923/9812/TyVlBR.jpg","https://imagizer.imageshack.com/img924/2997/mmSF55.jpg","https://imagizer.imageshack.com/img923/18/YBIWtg.jpg"]
    },
    {
        id: 98924,
        category: "luxury-suv",
        title: "BMW X3",
        details: "Black • 5 Seats • Automatic • V6 Engine",
        description: "The BMW X3 is a versatile and stylish rent car choice, offering a comfortable ride, modern features, and confident performance—perfect for everyday travel, road trips, or anyone wanting a premium SUV experience.",
        image: "https://imagizer.imageshack.com/img924/6603/6z717X.jpg",
        gallery: ["https://imagizer.imageshack.com/img922/4811/1eR5tj.jpg","https://imagizer.imageshack.com/img922/2095/HB4iWe.jpg","https://imagizer.imageshack.com/img924/2430/zmyA9o.jpg","https://imagizer.imageshack.com/img922/1276/SjINeP.jpg","https://imagizer.imageshack.com/img922/9754/Dhk7Dd.jpg","https://imagizer.imageshack.com/img921/4551/X8VojF.jpg","https://imagizer.imageshack.com/img923/6900/Tr6zVS.jpg"]
    },
    {
        id: 79064,
        category: "luxury-suv",
        title: "Nissan Patrol",
        details: "Black • 8 Seats • Automatic • V6 Engine",
        description: "The Nissan Patrol is a rugged and comfortable rent car choice, offering strong performance, spacious seating, and reliable capability—perfect for family trips, off-road adventures, or anyone wanting a versatile and enjoyable ride.",
        image: "https://imagizer.imageshack.com/img922/1414/KIXLVy.jpg",
        gallery: ["https://imagizer.imageshack.com/img924/8186/RZJXJU.jpg","https://imagizer.imageshack.com/img924/235/eTT5pz.jpg","https://imagizer.imageshack.com/img922/9596/UOLYuo.jpg","https://imagizer.imageshack.com/img923/4500/fiQUhb.jpg","https://imagizer.imageshack.com/img924/7080/oLRXdo.jpg","https://imagizer.imageshack.com/img921/653/lbNg4e.jpg","https://imagizer.imageshack.com/img922/7498/GkDNjt.jpg"]
    },
    {
        id: 12991,
        category: "luxury-suv",
        title: "GMC Yukon",
        details: "Black • 8 Seats • Automatic • V6 Engine",
        description: "The GMC Yukon is a spacious and capable rent car choice, offering comfortable seating, versatile cargo space, and confident performance—perfect for family trips, group travel, or anyone wanting a reliable and roomy ride.",
        image: "https://imagizer.imageshack.com/img921/4355/nfVwUm.jpg",
        gallery: ["https://imagizer.imageshack.com/img922/9108/UBBrPq.jpg","https://imagizer.imageshack.com/img923/2248/x5h8fN.jpg","https://imagizer.imageshack.com/img924/2562/Hsfl7v.jpg","https://imagizer.imageshack.com/img924/1848/GQ093L.jpg","https://imagizer.imageshack.com/img922/6221/wnVuPQ.jpg","https://imagizer.imageshack.com/img924/9968/qfssWB.jpg","https://imagizer.imageshack.com/img921/7721/o9Rn2s.jpg","https://imagizer.imageshack.com/img922/9584/lbHPeX.jpg"]
    },
    {
        id: 45008,
        category: "luxury-suv",
        title: "Range Rover Sport",
        details: "Tourmaline Brown • 5 Seats • Automatic • V6 Engine",
        description: "The Range Rover Sport is a dynamic and refined rent car choice, blending sporty performance with premium comfort and style—perfect for confident travel and enjoyable journeys.",
        image: "https://imagizer.imageshack.com/img924/6283/XqNQRg.jpg",
        gallery: ["https://imagizer.imageshack.com/img921/6605/ysR5F8.jpg","https://imagizer.imageshack.com/img921/7117/EprxB4.jpg","https://imagizer.imageshack.com/img921/4512/MJKdok.jpg","https://imagizer.imageshack.com/img922/2811/HE83Jz.jpg","https://imagizer.imageshack.com/img923/3967/R7qn0I.jpg","https://imagizer.imageshack.com/img924/7339/PLNfcv.jpg","https://imagizer.imageshack.com/img923/8996/lDEa4e.jpg"]
    },
    {
        id: 79818,
        category: "luxury-suv",
        title: "Chevrolet Tahoe",
        details: "Tourmaline Brown • 8 Seats • Automatic • V8 Engine",
        description: "The Chevrolet Tahoe is a spacious and reliable rent car choice, offering roomy seating and versatile capability—ideal for family trips, group travel, or long drives.",
        image: "https://imagizer.imageshack.com/img922/263/UTYjyb.jpg",
        gallery: ["https://imagizer.imageshack.com/img921/6417/L6JdSX.jpg","https://imagizer.imageshack.com/img923/6941/mtfU3h.jpg","https://imagizer.imageshack.com/img921/4979/2XgM8W.jpg","https://imagizer.imageshack.com/img924/2590/yKvbop.jpg","https://imagizer.imageshack.com/img922/4067/KqTZB1.jpg","https://imagizer.imageshack.com/img921/2416/04xy1Y.jpg","https://imagizer.imageshack.com/img924/6981/zlFYra.jpg"]
    },
    {
        id: 2-9850,
        category: "luxury-suv",
        title: "Range Rover Vogue",
        details: "Black • 5 Seats • Automatic • V6 Engine",
        description: "The Range Rover Vogue is a sophisticated and comfortable rent car choice, offering elegant luxury and smooth performance—ideal for premium travel and refined journeys.",
        image: "https://imagizer.imageshack.com/img921/3161/5lSA8y.jpg",
        gallery: ["https://imagizer.imageshack.com/img923/4672/2VKeyG.jpg","https://imagizer.imageshack.com/img924/9620/3uyPv3.jpg","https://imagizer.imageshack.com/img923/2255/MvuIJ3.jpg","https://imagizer.imageshack.com/img923/8003/ZkTpRa.jpg","https://imagizer.imageshack.com/img922/5499/0XYn1T.jpg","https://imagizer.imageshack.com/img922/6605/wBPqIx.jpg","https://imagizer.imageshack.com/img924/5843/WTOrTt.jpg","https://imagizer.imageshack.com/img923/1041/7RpYRQ.jpg"]
    },
    {
        id: 9170,
        category: "luxury-suv",
        title: "Mercedes G63",
        details: "White • 5 Seats • Automatic • V8 Engine",
        description: "The Mercedes G63 is a bold and luxurious rent car choice, delivering powerful performance and iconic design—perfect for standout travel and unforgettable experiences.",
        image: "https://imagizer.imageshack.com/img923/8997/SVo9UM.jpg",
        gallery: ["https://imagizer.imageshack.com/img921/8329/duKSUH.jpg","https://imagizer.imageshack.com/img921/9652/GdZvnz.jpg","https://imagizer.imageshack.com/img922/5030/7bW44t.jpg","https://imagizer.imageshack.com/img922/5273/yqjQhI.jpg","https://imagizer.imageshack.com/img923/5637/LBLWzB.jpg","https://imagizer.imageshack.com/img923/4627/RcefhF.jpg","https://imagizer.imageshack.com/img922/7961/6zq0HY.jpg"]
    },
    {
        id: 8350,
        category: "luxury-suv",
        title: "Range Rover Sport",
        details: "White • 5 Seats • Automatic • V6 Engine",
        description: "The Range Rover Sport is a dynamic and refined rent car choice, blending sporty performance with premium comfort and style—perfect for confident travel and enjoyable journeys.",
        image: "https://imagizer.imageshack.com/img924/7305/6hdjS8.jpg",
        gallery: ["https://imagizer.imageshack.com/img923/3590/5iRSLS.jpg","https://imagizer.imageshack.com/img922/7223/sYV8Hm.jpg","https://imagizer.imageshack.com/img921/5840/sTFcch.jpg","https://imagizer.imageshack.com/img923/1002/9akcK3.jpg","https://imagizer.imageshack.com/img923/2002/QotM2A.jpg"]
    },
    {
        id: 24466,
        category: "luxury-suv",
        title: "Lamborghini Urus",
        details: "Matte Black • 5 Seats • Automatic • V8 Engine",
        description: "The Lamborghini Urus is a high-performance luxury SUV, blending supercar-level speed with everyday comfort and striking style—ideal for premium trips, special occasions, or anyone seeking an unforgettable driving experience.",
        image: "https://imagizer.imageshack.com/img924/9765/Wuvp7D.jpg",
        gallery: ["https://imagizer.imageshack.com/img923/8788/5js0vQ.jpg","https://imagizer.imageshack.com/img924/1953/L71o5j.jpg","https://imagizer.imageshack.com/img921/5923/iZ3e73.jpg","https://imagizer.imageshack.com/img923/3286/0GgW09.jpg","https://imagizer.imageshack.com/img922/3931/ba99ym.jpg","https://imagizer.imageshack.com/img924/1768/i5jPB6.jpg","https://imagizer.imageshack.com/img922/9416/aetplf.jpg","https://imagizer.imageshack.com/img923/1206/9lpJI2.jpg","https://imagizer.imageshack.com/img921/7964/tmJumP.jpg","https://imagizer.imageshack.com/img921/7321/yIjzgA.jpg"]
    },
    {
        id: 6380,
        category: "luxury-suv",
        title: "Range Rover Defender",
        details: "Matte Black • 5 Seats • Automatic • V8 Engine",
        description: "The Range Rover Defender is a rugged yet refined rent car choice, offering capable performance, spacious comfort, and premium design—perfect for adventure travel, family trips, or anyone wanting a versatile and memorable ride.",
        image: "https://imagizer.imageshack.com/img923/7760/dFxHgB.jpg",
        gallery: ["https://imagizer.imageshack.com/img924/3461/M2Y5s3.jpg","https://imagizer.imageshack.com/img921/3258/6HS66d.jpg","https://imagizer.imageshack.com/img924/7756/OJdVGW.jpg","https://imagizer.imageshack.com/img923/9227/dWUCia.jpg","https://imagizer.imageshack.com/img921/2683/FS93la.jpg","https://imagizer.imageshack.com/img922/8564/nz6J4X.jpg","https://imagizer.imageshack.com/img924/5347/zKR8ft.jpg"]
    },
    {
        id: 16067,
        category: "luxury-suv",
        title: "Nissan Patrol",
        details: "White • 8 Seats • Automatic • V6 Engine",
        description: "The Nissan Patrol is a rugged and comfortable rent car choice, offering strong performance, spacious seating, and reliable capability—perfect for family trips, off-road adventures, or anyone wanting a versatile and enjoyable ride.",
        image: "https://imagizer.imageshack.com/img923/1558/9v12ES.jpg",
        gallery: ["https://imagizer.imageshack.com/img921/5738/gGpBuM.jpg","https://imagizer.imageshack.com/img924/9414/6azNCJ.jpg","https://imagizer.imageshack.com/img921/9858/gN52J0.jpg","https://imagizer.imageshack.com/img921/4416/9vjSva.jpg","https://imagizer.imageshack.com/img921/1999/uB7O6e.jpg","https://imagizer.imageshack.com/img921/2770/QE5tEE.jpg"]
    },
    {
        id: 2-9350,
        category: "luxury-suv",
        title: "Range Rover Sport",
        details: "Matte Gray • 5 Seats • Automatic • V6 Engine",
        description: "The Range Rover Sport is a dynamic and refined rent car choice, blending sporty performance with premium comfort and style—perfect for confident travel and enjoyable journeys.",
        image: "https://imagizer.imageshack.com/img924/2459/HbBDla.jpg",
        gallery: ["https://imagizer.imageshack.com/img923/1398/1QKElV.jpg","https://imagizer.imageshack.com/img923/834/Mu6sx0.jpg","https://imagizer.imageshack.com/img921/8200/ZYjQck.jpg","https://imagizer.imageshack.com/img924/2145/V7Shpu.jpg","https://imagizer.imageshack.com/img923/9607/OREq6y.jpg"]
    },
    // --- ECONOMY SUV ---
    {
        id: 84985,
        category: "economy-suv",
        title: "Kia Sorento",
        details: "White • 7 Seats • Automatic • Efficient",
        description: "Discover the Kia Sorento 2023, a versatile SUV designed to accommodate your entire family in comfort and style. With its spacious interior, advanced technology features, and powerful performance, the Sorento is the perfect choice for your next adventure. Whether you’re heading on a road trip or simply need a reliable daily driver, the Sorento delivers a premium driving experience. Rent the Kia Sorento 2023 today and enjoy the ride.",
        image: "https://imagizer.imageshack.com/img922/5530/GhIy8K.jpg",
        gallery: ["https://imagizer.imageshack.com/img922/5530/GhIy8K.jpg","https://imagizer.imageshack.com/img924/5642/kundgP.jpg","https://imagizer.imageshack.com/img923/5159/zFRLww.jpg","https://imagizer.imageshack.com/img921/3923/mOJJYf.jpg","https://imagizer.imageshack.com/img923/2922/S8y5Cv.jpg","https://imagizer.imageshack.com/img923/6030/dpl5IG.jpg","https://imagizer.imageshack.com/img921/1706/YAgF96.jpg"]
    },
    {
        id: 32120,
        category: "economy-suv",
        title: "Kia Sportage",
        details: "Jungle Green • 5 Seats • Automatic • Efficient",
        description: "The Kia Sportage is a stylish and versatile compact SUV that offers a comfortable and enjoyable driving experience. With its sleek design, advanced technology, and spacious interior, it’s a great choice for families and individuals alike.",
        image: "https://imagizer.imageshack.com/img924/553/BR4sHm.jpg",
        gallery: ["https://imagizer.imageshack.com/img924/1581/8lqdb0.jpg","https://imagizer.imageshack.com/img924/5261/brpgFj.jpg","https://imagizer.imageshack.com/img922/567/Y0uu9a.jpg","https://imagizer.imageshack.com/img921/8981/Is9Sqb.jpg","https://imagizer.imageshack.com/img923/964/VJSlAm.jpg","https://imagizer.imageshack.com/img924/5993/BDAaSg.jpg","https://imagizer.imageshack.com/img922/3549/KbgLCw.jpg"]
    },
    {
        id: 84986,
        category: "economy-suv",
        title: "Kia Seltos",
        details: "Red • 5 Seats • Automatic • Efficient",
        description: "The Kia Seltos is a stylish and versatile compact SUV that offers a comfortable and enjoyable driving experience. With its sleek design, advanced technology, and spacious interior, it’s a great choice for families and individuals alike.",
        image: "https://imagizer.imageshack.com/img921/6829/nvtGSO.jpg",
        gallery: ["https://imagizer.imageshack.com/img921/6176/lSWTBG.jpg","https://imagizer.imageshack.com/img921/3308/FZMUPa.jpg","https://imagizer.imageshack.com/img923/8027/dkXVMX.jpg","https://imagizer.imageshack.com/img922/6467/65ksgM.jpg","https://imagizer.imageshack.com/img923/1792/oUIXl1.jpg","https://imagizer.imageshack.com/img923/3711/CIsD8g.jpg","https://imagizer.imageshack.com/img924/3344/85pyy6.jpg"]
    },
    {
        id: 31859,
        category: "economy-suv",
        title: "Kia Sportage",
        details: "White • 5 Seats • Automatic • Efficient",
        description: "The Kia Sportage is a stylish and versatile compact SUV that offers a comfortable and enjoyable driving experience. With its sleek design, advanced technology, and spacious interior, it’s a great choice for families and individuals alike.",
        image: "https://imagizer.imageshack.com/img924/2321/vHv3n4.jpg",
        gallery: ["https://imagizer.imageshack.com/img922/6047/XCILEm.jpg","https://imagizer.imageshack.com/img921/6303/AjQw3R.jpg","https://imagizer.imageshack.com/img922/2007/d6Gvqs.jpg","https://imagizer.imageshack.com/img923/4836/IscwKy.jpg","https://imagizer.imageshack.com/img922/6167/oWOI4w.jpg","https://imagizer.imageshack.com/img923/7581/6J0fud.jpg"]
    },
    // --- SPORT CARS ---
    {
        id: 51082,
        category: "sport",
        title: "Mercedes GT43 - GT63 Kit",
        details: "Black • 4 Seats • Automatic • V6 Engine",
        description: "Experience the epitome of luxury and performance. This sleek four-door coupe boasts a powerful turbocharged engine, delivering exhilarating acceleration and precise handling. Enjoy the comfort of premium leather seats, advanced technology, and a spacious interior. Whether you’re cruising the city or embarking on a road trip, the GT43 offers an unforgettable driving experience.",
        image: "https://imagizer.imageshack.com/img921/6269/a7tCYA.jpg",
        gallery: ["https://imagizer.imageshack.com/img923/6531/fX8tya.jpg","https://imagizer.imageshack.com/img921/6441/4pL2DH.jpg","https://imagizer.imageshack.com/img924/9937/XkPbYX.jpg","https://imagizer.imageshack.com/img921/7290/6YZzDX.jpg","https://imagizer.imageshack.com/img923/8905/Zrl9lS.jpg"]
    },
    // --- CONVERTIBLE CARS ---
    {
        id: 24740,
        category: "convertible",
        title: "Audi A5",
        details: "Black • 4 Seats • Automatic • V4 Engine",
        description: "The Audi A5 Cabriolet is a stylish and sporty convertible that offers a thrilling driving experience. With its sleek design, powerful engine, and comfortable interior, the A5 Cabriolet is perfect for those seeking a luxurious and open-air ride. The spacious cabin provides ample room for both passengers and luggage, making it ideal for weekend getaways or everyday driving.",
        image: "https://imagizer.imageshack.com/img924/7660/brfl1I.jpg",
        gallery: ["https://imagizer.imageshack.com/img921/9692/K8bcXu.jpg","https://imagizer.imageshack.com/img921/2334/gy9q0z.jpg","https://imagizer.imageshack.com/img921/3267/hpESbu.jpg","https://imagizer.imageshack.com/img923/2582/HdyNXr.jpg","https://imagizer.imageshack.com/img921/7185/eheMfO.jpg","https://imagizer.imageshack.com/img924/1996/pHVdtE.jpg","https://imagizer.imageshack.com/img923/1499/oWV9hB.jpg"]
    },
    {
        id: 11314,
        category: "convertible",
        title: "Mercedes CLE 200",
        details: "Black • 4 Seats • Automatic • V4 Engine",
        description: "Feel the wind in your hair and the sun on your face with the Mercedes-Benz CLE. This luxurious convertible seamlessly blends sophistication, performance, and open-air freedom. Its sleek lines and powerful engine will turn heads wherever you go, while its refined interior and advanced technology ensure a comfortable and connected driving experience. Whether you’re cruising along the coast or enjoying a scenic drive, the CLE promises an unforgettable journey.",
        image: "https://imagizer.imageshack.com/img922/7312/HTXmMK.jpg",
        gallery: ["https://imagizer.imageshack.com/img921/2453/0P6piO.jpg","https://imagizer.imageshack.com/img921/2186/3hk5Al.jpg","https://imagizer.imageshack.com/img922/7887/cb4vce.jpg","https://imagizer.imageshack.com/img921/484/XmZYzl.jpg","https://imagizer.imageshack.com/img923/6707/RCZ2Rg.jpg","https://imagizer.imageshack.com/img922/7316/Y1h2Jc.jpg","https://imagizer.imageshack.com/img924/4810/oMp1Nv.jpg","https://imagizer.imageshack.com/img921/5787/FXTE45.jpg","https://imagizer.imageshack.com/img924/9334/IWcvpQ.jpg","https://imagizer.imageshack.com/img923/5507/3KzepV.jpg","https://imagizer.imageshack.com/img924/2222/ynHPWY.jpg","https://imagizer.imageshack.com/img922/3492/xRbitI.jpg","https://imagizer.imageshack.com/img923/4379/b2WQEZ.jpg","https://imagizer.imageshack.com/img924/918/Y0VYIO.jpg","https://imagizer.imageshack.com/img922/8395/tRpl5N.jpg","https://imagizer.imageshack.com/img923/2442/vJNT64.jpg","https://imagizer.imageshack.com/img922/2774/oXLopP.jpg","https://imagizer.imageshack.com/img923/3233/7vXHzv.jpg"]
    },
    {
        id: 29746,
        category: "convertible",
        title: "BMW 420i",
        details: "Brooklyn Grey Metallic • 4 Seats • Automatic • V4 Engine",
        description: "Experience the thrill of driving the BMW 420i, a stylish and sporty coupe that combines sleek design with powerful performance. With its agile handling, luxurious interior, and advanced technology features, the 420i offers a truly enjoyable driving experience. Whether you’re cruising through the city or embarking on a scenic road trip, this BMW will turn heads and leave you wanting more. Rent the 420i today and elevate your driving experience.",
        image: "https://imagizer.imageshack.com/img921/9/SiyGVK.jpg",
        gallery: ["https://imagizer.imageshack.com/img921/8529/kJo9Q7.jpg","https://imagizer.imageshack.com/img924/6808/XH5fsj.jpg","https://imagizer.imageshack.com/img923/484/dcpP4p.jpg","https://imagizer.imageshack.com/img922/7688/SFvNAM.jpg","https://imagizer.imageshack.com/img923/8744/0RAZmz.jpg","https://imagizer.imageshack.com/img923/6163/5RkcCi.jpg","https://imagizer.imageshack.com/img921/6260/T2bCWI.jpg","https://imagizer.imageshack.com/img922/9274/DoAnsx.jpg","https://imagizer.imageshack.com/img923/4750/lKfVuh.jpg","https://imagizer.imageshack.com/img923/1632/n8ngG6.jpg","https://imagizer.imageshack.com/img923/65/JO2gpo.jpg","https://imagizer.imageshack.com/img921/1746/I2BLle.jpg","https://imagizer.imageshack.com/img922/8483/uY4qv4.jpg","https://imagizer.imageshack.com/img924/2346/ueAFzd.jpg"]
    },
    {
        id: 71916,
        category: "convertible",
        title: "Mercedes E200",
        details: "Graphite Grey Metallic • 4 Seats • Automatic • V4 Engine",
        description: "Feel the wind in your hair and the sun on your face with the Mercedes-Benz CLE. This luxurious convertible seamlessly blends sophistication, performance, and open-air freedom. Its sleek lines and powerful engine will turn heads wherever you go, while its refined interior and advanced technology ensure a comfortable and connected driving experience. Whether you’re cruising along the coast or enjoying a scenic drive, the CLE promises an unforgettable journey.",
        image: "https://imagizer.imageshack.com/img924/8/KHlTs2.jpg",
        gallery: ["https://imagizer.imageshack.com/img921/8196/MfaxbM.jpg","https://imagizer.imageshack.com/img923/5521/yEP7Wt.jpg","https://imagizer.imageshack.com/img923/9633/qWUHoI.jpg","https://imagizer.imageshack.com/img922/995/DDa3dF.jpg","https://imagizer.imageshack.com/img924/236/Gsggf1.jpg","https://imagizer.imageshack.com/img923/2305/89a57L.jpg","https://imagizer.imageshack.com/img924/5497/bq7mNl.jpg"]
    },
    {
        id: 98818,
        category: "convertible",
        title: "BMW 430i",
        details: "Tanzanite Blue • 4 Seats • Automatic • V4 Engine",
        description: "Experience the thrill of driving the BMW 430i, a stylish and sporty coupe that combines sleek design with powerful performance. With its agile handling, luxurious interior, and advanced technology features, the 430i offers a truly enjoyable driving experience. Whether you’re cruising through the city or embarking on a scenic road trip, this BMW will turn heads and leave you wanting more. Rent the BMW 430i today and elevate your driving experience.",
        image: "https://imagizer.imageshack.com/img924/7388/yMWM9D.jpg",
        gallery: ["https://imagizer.imageshack.com/img923/6682/OprVJA.jpg","https://imagizer.imageshack.com/img921/3883/leUFcC.jpg","https://imagizer.imageshack.com/img921/3298/WXpK1O.jpg","https://imagizer.imageshack.com/img922/4224/cFkvNL.jpg","https://imagizer.imageshack.com/img921/1950/DAgTJ8.jpg","https://imagizer.imageshack.com/img922/1291/Hj7Sou.jpg","https://imagizer.imageshack.com/img923/8889/DWnEnh.jpg"]
    },
    // --- SUPER CARS ---
    {
        id: 69750,
        category: "super",
        title: "Corvette Stingray",
        details: "Yellow • 2 Seats • Automatic • V8 Engine",
        description: "The Corvette Stingray is a high-performance sports car, delivering thrilling acceleration, sharp handling, and iconic style. It’s ideal for driving enthusiasts or anyone wanting an exciting and memorable ride.",
        image: "https://imagizer.imageshack.com/img924/1277/SpiHBO.jpg",
        gallery: ["https://imagizer.imageshack.com/img923/3292/BTMEy3.jpg","https://imagizer.imageshack.com/img924/5772/q4uAw5.jpg","https://imagizer.imageshack.com/img921/7771/ZXOyps.jpg","https://imagizer.imageshack.com/img924/1831/GiT7vx.jpg","https://imagizer.imageshack.com/img923/3218/dgzjQ6.jpg","https://imagizer.imageshack.com/img922/1251/cSA6C4.jpg","https://imagizer.imageshack.com/img922/1442/c5jlIw.jpg","https://imagizer.imageshack.com/img921/5616/HjbAmW.jpg","https://imagizer.imageshack.com/img922/3509/fIAVjG.jpg","https://imagizer.imageshack.com/img922/8499/Gi6cPh.jpg"]
    },
    {
        id: 3046,
        category: "super",
        title: "Ferrari F8 Tributo Spider",
        details: "Cherry Red • 2 Seats • Automatic • V8 Engine",
        description: "The Ferrari F8 Tributo Spider is an exhilarating supercar, offering breathtaking performance, iconic Italian design, and an unforgettable open-top driving experience—ideal for special occasions or luxury thrill seekers.",
        image: "https://imagizer.imageshack.com/img923/2377/WSRI2z.jpg",
        gallery: ["https://imagizer.imageshack.com/img923/8955/wLLgvo.jpg","https://imagizer.imageshack.com/img921/4233/KSwUCL.jpg","https://imagizer.imageshack.com/img921/3972/OKixPS.jpg","https://imagizer.imageshack.com/img924/6996/Pn1nOw.jpg","https://imagizer.imageshack.com/img922/5479/CXdECK.jpg","https://imagizer.imageshack.com/img922/3797/wFzUXr.jpg","https://imagizer.imageshack.com/img923/6271/M0cXdH.jpg","https://imagizer.imageshack.com/img922/9910/A7ggti.jpg","https://imagizer.imageshack.com/img924/4663/rgVLOy.jpg","https://imagizer.imageshack.com/img924/5996/VC6kUz.jpg"]
    },
    {
        id: 1-3064,
        category: "super",
        title: "Porsche 911 Turbo S",
        details: "Orange • 4 Seats • Automatic • V6 Engine",
        description: "The Porsche 911 Turbo S is an exceptional for delivering thrilling performance, precise handling, and iconic design—perfect for enthusiasts or anyone seeking a high-end, unforgettable driving experience.",
        image: "https://imagizer.imageshack.com/img921/8413/mMjt5c.jpg",
        gallery: ["https://imagizer.imageshack.com/img922/107/PPg2g1.jpg","https://imagizer.imageshack.com/img923/1593/COccIR.jpg","https://imagizer.imageshack.com/img924/2930/dZOmaa.jpg","https://imagizer.imageshack.com/img923/425/DCulsh.jpg","https://imagizer.imageshack.com/img922/505/kJtkbN.jpg","https://imagizer.imageshack.com/img922/3204/zrnogy.jpg","https://imagizer.imageshack.com/img924/42/0plBYv.jpg"]
    },
    {
        id: 2-3064,
        category: "super",
        title: "Lamborghini Huracán EVO Spyder",
        details: "Matte Black • 2 Seats • Automatic • V10 Engine",
        description: "The Lamborghini Huracán EVO Spyder is a thrilling supercar, offering an open-top driving experience with dynamic style and unmatched presence—ideal for luxury trips, special occasions, or anyone wanting an unforgettable ride.",
        image: "https://imagizer.imageshack.com/img921/4943/Cd7kqu.jpg",
        gallery: ["https://imagizer.imageshack.com/img922/7657/Jmh9ex.jpg","https://imagizer.imageshack.com/img922/3936/uXDG3E.jpg","https://imagizer.imageshack.com/img921/7438/XXtDmE.jpg","https://imagizer.imageshack.com/img922/7184/vHcWLl.jpg","https://imagizer.imageshack.com/img924/7082/cPPfKB.jpg","https://imagizer.imageshack.com/img923/8361/AqBLrI.jpg","https://imagizer.imageshack.com/img922/3855/0w8tnK.jpg","https://imagizer.imageshack.com/img924/1863/bYACwg.jpg","https://imagizer.imageshack.com/img921/5210/VjZ87O.jpg","https://imagizer.imageshack.com/img921/4843/xT0aWF.jpg"]
    },
    {
        id: 82153,
        category: "super",
        title: "McLaren 720s Spider",
        details: "Belize Blue • 2 Seats • Automatic • V8 Engine",
        description: "The McLaren 720S Spider is a stunning super car choice, offering breathtaking performance, dramatic design, and an exhilarating open-top driving experience—perfect for luxury travel, special occasions, or anyone seeking an unforgettable ride.",
        image: "https://imagizer.imageshack.com/img924/7369/nLhktp.jpg",
        gallery: ["https://imagizer.imageshack.com/img923/4866/7FnBFl.jpg","https://imagizer.imageshack.com/img924/1459/jj3xgT.jpg","https://imagizer.imageshack.com/img922/4488/rgletv.jpg","https://imagizer.imageshack.com/img923/9348/UgEHvV.jpg","https://imagizer.imageshack.com/img923/779/xyRAwC.jpg","https://imagizer.imageshack.com/img923/3037/UAS3Kz.jpg","https://imagizer.imageshack.com/img924/7012/roRhkH.jpg","https://imagizer.imageshack.com/img922/541/8orSEp.jpg","https://imagizer.imageshack.com/img921/1399/AmwH0I.jpg","https://imagizer.imageshack.com/img923/5770/0DXkpK.jpg"]
    },
    {
        id: 30611,
        category: "super",
        title: "Corvette C8",
        details: "Red • 2 Seats • Automatic • V8 Engine",
        description: "The Corvette C8 2023 is an exciting super car choice, offering impressive performance, striking design, and a thrilling driving experience—perfect for enthusiasts or anyone wanting a memorable ride.",
        image: "https://imagizer.imageshack.com/img922/1442/xpsy9V.jpg",
        gallery: ["https://imagizer.imageshack.com/img924/1844/4VX0hX.jpg","https://imagizer.imageshack.com/img921/1388/MZsIj6.jpg","https://imagizer.imageshack.com/img922/6273/L2qWZr.jpg","https://imagizer.imageshack.com/img921/63/X0qsRL.jpg","https://imagizer.imageshack.com/img922/4581/zPD024.jpg","https://imagizer.imageshack.com/img923/750/BK2ywh.jpg","https://imagizer.imageshack.com/img922/9193/mDASrB.jpg"]
    },
    {
        id: 3998,
        category: "super",
        title: "Porsche 911 GT3 RS",
        details: "Malachite Green Metallic • 2 Seats • Automatic • V6 Engine",
        description: "The Porsche 911 GT3 RS is an adrenaline-charged car choice, delivering track-inspired performance, sharp handling, and iconic design—perfect for driving enthusiasts looking for an unforgettable high-performance experience.",
        image: "https://imagizer.imageshack.com/img924/3425/c5FqXb.jpg",
        gallery: ["https://imagizer.imageshack.com/img923/8131/NuYgtk.jpg","https://imagizer.imageshack.com/img922/9026/g3qkIA.jpg","https://imagizer.imageshack.com/img922/2218/fgNQ3J.jpg","https://imagizer.imageshack.com/img924/5901/RoM7wy.jpg","https://imagizer.imageshack.com/img922/1477/YJneWY.jpg","https://imagizer.imageshack.com/img921/5272/VOYCzT.jpg","https://imagizer.imageshack.com/img922/2993/p382P3.jpg","https://imagizer.imageshack.com/img922/5328/AN7QK1.jpg","https://imagizer.imageshack.com/img924/8562/1XhuZI.jpg","https://imagizer.imageshack.com/img924/3466/PYrvMf.jpg","https://imagizer.imageshack.com/img921/2020/cHGz3s.jpg","https://imagizer.imageshack.com/img923/3168/SWMqOv.jpg"]
    },
    {
        id: 53619,
        category: "super",
        title: "Ferrari 296 GTB",
        details: "Black • 2 Seats • Automatic • V6 Engine",
        description: "The Ferrari 296 GTB is an exhilarating super car choice, offering thrilling performance, striking Italian design, and an unforgettable driving experience—perfect for luxury trips, special occasions, or anyone seeking pure excitement on the road.",
        image: "https://imagizer.imageshack.com/img924/87/C9W1To.jpg",
        gallery: ["https://imagizer.imageshack.com/img922/2968/cNSGhL.jpg","https://imagizer.imageshack.com/img921/7206/O77rAi.jpg","https://imagizer.imageshack.com/img924/8164/fNOJXo.jpg","https://imagizer.imageshack.com/img922/8075/othVwd.jpg","https://imagizer.imageshack.com/img924/5048/CfPd6r.jpg","https://imagizer.imageshack.com/img923/5572/uYZU74.jpg","https://imagizer.imageshack.com/img921/2235/2FZzvl.jpg","https://imagizer.imageshack.com/img924/1976/F72udJ.jpg","https://imagizer.imageshack.com/img921/7058/OGpRfX.jpg","https://imagizer.imageshack.com/img922/2326/tvV3q1.jpg"]
    },
    {
        id: 36295,
        category: "super",
        title: "Lamborghini Huracán EVO Spyder",
        details: "Yellow • 2 Seats • Automatic • V10 Engine",
        description: "The Lamborghini Huracán EVO Spyder is a thrilling supercar, offering an open-top driving experience with dynamic style and unmatched presence—ideal for luxury trips, special occasions, or anyone wanting an unforgettable ride.",
        image: "https://imagizer.imageshack.com/img922/3451/hSGvha.jpg",
        gallery: ["https://imagizer.imageshack.com/img922/1600/5nmDL9.jpg","https://imagizer.imageshack.com/img921/1539/PbPd3n.jpg","https://imagizer.imageshack.com/img924/7200/y2YTSp.jpg","https://imagizer.imageshack.com/img921/3420/t0VRTN.jpg","https://imagizer.imageshack.com/img924/2633/mol49D.jpg","https://imagizer.imageshack.com/img923/293/LUurso.jpg"]
    },
    {
        id: 45356,
        category: "super",
        title: "Porsche 911 Turbo S",
        details: "Black • 4 Seats • Automatic • V6 Engine",
        description: "The Porsche 911 Turbo S is an exceptional for delivering thrilling performance, precise handling, and iconic design—perfect for enthusiasts or anyone seeking a high-end, unforgettable driving experience.",
        image: "https://imagizer.imageshack.com/img923/6416/ilfhS7.jpg",
        gallery: ["https://imagizer.imageshack.com/img924/7821/bZiNCB.jpg","https://imagizer.imageshack.com/img921/8160/S599EP.jpg","https://imagizer.imageshack.com/img922/7798/63ZaKn.jpg","https://imagizer.imageshack.com/img921/7263/Aq6UhI.jpg","https://imagizer.imageshack.com/img923/7201/HaoqaJ.jpg","https://imagizer.imageshack.com/img923/7065/eQdV6g.jpg","https://imagizer.imageshack.com/img923/9674/tVVJ2B.jpg","https://imagizer.imageshack.com/img922/4236/GiEkuT.jpg","https://imagizer.imageshack.com/img921/2514/wG3S14.jpg"]
    },
    {
        id: 52440,
        category: "super",
        title: "Lamborghini Huracán EVO Spyder",
        details: "Black • 2 Seats • Automatic • V10 Engine",
        description: "The Lamborghini Huracán EVO Spyder is a thrilling supercar, offering an open-top driving experience with dynamic style and unmatched presence—ideal for luxury trips, special occasions, or anyone wanting an unforgettable ride.",
        image: "https://imagizer.imageshack.com/img924/8195/mJzl9q.jpg",
        gallery: ["https://imagizer.imageshack.com/img923/4874/b74QwG.jpg","https://imagizer.imageshack.com/img922/3163/znZbuI.jpg","https://imagizer.imageshack.com/img924/9487/fUDW0n.jpg","https://imagizer.imageshack.com/img921/8735/NPNz6f.jpg","https://imagizer.imageshack.com/img923/4167/E5llQI.jpg","https://imagizer.imageshack.com/img924/9093/MXtfWJ.jpg"]
    },
    // --- LUXURY SEDAN ---
    {
        id: 9270,
        category: "luxury-sedan",
        title: "BMW 740i",
        details: "White • 5 Seats • Automatic • V6 Engine",
        description: "The BMW 740i is a premium luxury sedan offering a smooth, powerful drive with exceptional comfort and advanced technology. Ideal for rent, it delivers an executive-class experience with refined performance, a spacious high-end interior, and a prestigious presence—perfect for business trips or luxury travel.",
        image: "https://imagizer.imageshack.com/img923/1008/XGH6qx.jpg",
        gallery: ["https://imagizer.imageshack.com/img924/3807/A466Y2.jpg","https://imagizer.imageshack.com/img921/1439/w99YiN.jpg","https://imagizer.imageshack.com/img923/2668/4iMcbk.jpg","https://imagizer.imageshack.com/img923/8238/l49NHO.jpg","https://imagizer.imageshack.com/img924/505/3cCtOs.jpg"]
    },
    {
        id: 9450,
        category: "luxury-sedan",
        title: "Mercedes S500",
        details: "Black • 5 Seats • Automatic • V6 Engine",
        description: "The Mercedes-Benz S500 is a top-tier luxury sedan designed for an exceptional rental experience. It offers unmatched comfort, elegant design, and a smooth, quiet ride—making it ideal for business travel, VIP transportation, or special occasions where premium comfort and prestige matter.",
        image: "https://imagizer.imageshack.com/img923/1557/txlWVO.jpg",
        gallery: ["https://imagizer.imageshack.com/img924/5136/URHs3O.jpg","https://imagizer.imageshack.com/img924/6917/ecGGqH.jpg", "https://imagizer.imageshack.com/img922/9651/8CBgXD.jpg", "https://imagizer.imageshack.com/img923/9462/aJfJmr.jpg", "https://imagizer.imageshack.com/img921/8845/gsVkAi.jpg", "https://imagizer.imageshack.com/img922/7162/cv1Eu6.jpg"]
    },
    {
        id: 41277,
        category: "luxury-sedan",
        title: "Kia K5",
        details: "Black • 5 Seats • Automatic • V4 Engine",
        description: "The Kia K5 is a stylish, sporty midsize sedan perfect for rent—offering modern tech, comfortable interior, and efficient performance. It’s a reliable and fun-to-drive choice for everyday trips or longer journeys with great value and features.",
        image: "https://imagizer.imageshack.com/img922/3849/0LtlUX.jpg",
        gallery: ["https://imagizer.imageshack.com/img922/4186/P6pphT.jpg","https://imagizer.imageshack.com/img923/4863/MQAjpt.jpg","https://imagizer.imageshack.com/img924/5697/my5VxW.jpg","https://imagizer.imageshack.com/img923/7245/eBWzSI.jpg","https://imagizer.imageshack.com/img921/6904/WCrLoa.jpg","https://imagizer.imageshack.com/img921/9872/w32lxa.jpg","https://imagizer.imageshack.com/img922/3976/Q4JYSG.jpg","https://imagizer.imageshack.com/img923/7803/j7jN1Z.jpg","https://imagizer.imageshack.com/img924/3894/XRpHRi.jpg"]
    },
    {
        id: 51317,
        category: "luxury-sedan",
        title: "Mercedes C200",
        details: "Graphite Grey Metallic • 5 Seats • Automatic • V4 Engine",
        description: "The Mercedes-Benz C200 is a stylish and refined sedan perfect for rent car use, offering a comfortable ride, elegant design, and modern features. It’s ideal for everyday travel, business trips, or city driving with a touch of premium appeal.",
        image: "https://imagizer.imageshack.com/img922/3759/9pr4j7.jpg",
        gallery: ["https://imagizer.imageshack.com/img923/5417/3pNrqh.jpg","https://imagizer.imageshack.com/img922/7057/tXXF5h.jpg","https://imagizer.imageshack.com/img924/3415/5jbujg.jpg","https://imagizer.imageshack.com/img922/5697/j0MI9P.jpg","https://imagizer.imageshack.com/img922/9962/jR9rgz.jpg","https://imagizer.imageshack.com/img924/9024/uyTg6m.jpg","https://imagizer.imageshack.com/img923/4667/srrZB5.jpg"]
    },
    {
        id: 76223,
        category: "luxury-sedan",
        title: "Kia K5",
        details: "Wolf Grey • 5 Seats • Automatic • V4 Engine",
        description: "The Kia K5 is a stylish, sporty midsize sedan perfect for rent—offering modern tech, comfortable interior, and efficient performance. It’s a reliable and fun-to-drive choice for everyday trips or longer journeys with great value and features.",
        image: "https://imagizer.imageshack.com/img922/2962/kqPTYc.jpg",
        gallery: ["https://imagizer.imageshack.com/img923/6507/p2QOld.jpg","https://imagizer.imageshack.com/img923/4593/EysMei.jpg","https://imagizer.imageshack.com/img921/9703/LhoOcf.jpg","https://imagizer.imageshack.com/img922/4100/WHSZID.jpg","https://imagizer.imageshack.com/img923/6365/Gr5TFz.jpg","https://imagizer.imageshack.com/img922/1401/tyo55T.jpg"]
    },
    {
        id: 27321,
        category: "luxury-sedan",
        title: "Mercedes E200",
        details: "White • 5 Seats • Automatic • V4 Engine",
        description: "The Mercedes-Benz E200 is a refined and comfortable sedan perfect for rent car use, offering smooth driving, elegant styling, and modern features. It’s ideal for business travel, city trips, or comfortable journeys with a premium feel.",
        image: "https://imagizer.imageshack.com/img924/3325/5sN4bJ.jpg",
        gallery: ["https://imagizer.imageshack.com/img921/5773/SzJ7zJ.jpg","https://imagizer.imageshack.com/img921/5328/dACKbU.jpg","https://imagizer.imageshack.com/img922/641/yJMGae.jpg","https://imagizer.imageshack.com/img921/4450/ScMJGe.jpg","https://imagizer.imageshack.com/img924/8288/h5ZXVr.jpg","https://imagizer.imageshack.com/img924/5640/3AEEXP.jpg"]
    }
];

// --- DOM ELEMENTS ---
const categoryGrid = document.getElementById('category-grid');
const carGrid = document.getElementById('car-grid');
const navHeader = document.getElementById('nav-header');
const btnBack = document.getElementById('btn-back');
const pageTitle = document.getElementById('page-title');
const pageDesc = document.getElementById('page-desc');

// --- 1. RENDER CATEGORIES ---
function renderCategories() {
    let html = '';
    categories.forEach(cat => {
        html += `
            <article class="card" onclick="showCars('${cat.id}', '${cat.title}')" style="cursor: pointer;">
                <div class="img-wrapper skeleton-anim">
                    <img src="${cat.image}" alt="${cat.title}" class="card-image" loading="lazy" onload="this.classList.add('loaded'); this.parentElement.classList.remove('skeleton-anim')">
                </div>
                <div class="card-content">
                    <h2 class="apt-title gradient-text">${cat.title}</h2>
                    <div class="btn-container" style="margin-top: 15px;">
                        <button class="btn-explore">View Cars</button>
                    </div>
                </div>
            </article>
        `;
    });
    categoryGrid.innerHTML = html;
}

// --- 2. SHOW CARS (Filter by Category) ---
function showCars(categoryId, categoryTitle) {
    // 1. Filter Data
    const filteredCars = cars.filter(car => car.category === categoryId);

    // 2. Render Grid
    if (filteredCars.length === 0) {
        carGrid.innerHTML = `<p style="color:white; text-align:center; grid-column: 1/-1;">No cars available in this category yet.</p>`;
    } else {
        let html = '';
        filteredCars.forEach(car => {
            html += `
                <article class="card">
                    <div class="img-wrapper skeleton-anim">
                        <img src="${car.image}" alt="${car.title}" class="card-image" loading="lazy" onload="this.classList.add('loaded'); this.parentElement.classList.remove('skeleton-anim')">
                    </div>
                    <div class="card-content">
                        <h2 class="apt-title gradient-text">${car.title}</h2>
                        <p class="apt-details">${car.details}</p>
                        <div class="btn-container">
                            <button class="btn-explore" onclick="openModal(${car.id})">Details</button>
                        </div>
                    </div>
                </article>
            `;
        });
        carGrid.innerHTML = html;
    }

    // 3. Switch View
    categoryGrid.style.display = 'none';
    carGrid.style.display = 'grid';
    
    // 4. Update Header
    navHeader.style.display = 'flex'; // Show back button
    pageTitle.textContent = categoryTitle;
    pageDesc.style.display = 'none'; // Hide main description to save space
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 3. GO BACK TO CATEGORIES ---
btnBack.addEventListener('click', () => {
    categoryGrid.style.display = 'grid';
    carGrid.style.display = 'none';
    navHeader.style.display = 'none';
    pageTitle.textContent = "Car Categories";
    pageDesc.style.display = 'block';
});

// --- INITIALIZE ---
document.addEventListener('DOMContentLoaded', renderCategories);


// ========================================================
//  MODAL LOGIC (Reused exactly from Apartments)
// ========================================================

const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalMainImg = document.getElementById('modal-main-img');
const mainImgContainer = document.getElementById('main-img-container');
const modalThumbs = document.getElementById('modal-thumbnails');
const linkWhatsapp = document.getElementById('link-whatsapp');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

// Fast Tap Fix
function attachFastClick(element, callback) {
    if (!element) return;
    element.addEventListener('touchstart', (e) => {
        if (e.cancelable) e.preventDefault();
        callback();
    }, { passive: false });
    element.addEventListener('click', (e) => {
        e.preventDefault();
        callback();
    });
}
attachFastClick(btnPrev, () => changeImage(-1));
attachFastClick(btnNext, () => changeImage(1));

let currentGallery = [];
let currentImgIndex = 0;

function openModal(id) {
    if (!modalOverlay) return;

    const car = cars.find(c => c.id === id);
    if (!car) return;

    modalTitle.textContent = car.title;
    modalDesc.textContent = car.description;
    
    if (linkWhatsapp) {
        const waMsg = encodeURIComponent(`I am interested in renting the ${car.title}`);
        linkWhatsapp.href = `https://wa.me/${GLOBAL_WHATSAPP_NUMBER}?text=${waMsg}`;
    }

    currentGallery = car.gallery && car.gallery.length > 0 ? car.gallery : [car.image];
    currentImgIndex = 0;
    
    let thumbsHtml = '';
    currentGallery.forEach((img, index) => {
        thumbsHtml += `<img src="${img}" class="thumb" onclick="setMainImage(${index})" onerror="this.style.display='none'">`;
    });
    modalThumbs.innerHTML = thumbsHtml;

    modalThumbs.scrollLeft = 0; 
    updateGalleryDisplay();

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (modalThumbs) modalThumbs.scrollLeft = 0;
    if (modalOverlay) modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
}

function updateGalleryDisplay() {
    modalMainImg.classList.remove('visible');
    mainImgContainer.classList.add('skeleton-anim');

    const newSrc = currentGallery[currentImgIndex];
    
    modalMainImg.onload = function() {
        modalMainImg.classList.add('visible');
        mainImgContainer.classList.remove('skeleton-anim');
    };
    modalMainImg.src = newSrc;

    // Preload
    if (currentGallery.length > 1) {
        const nextIndex = (currentImgIndex + 1) % currentGallery.length;
        const prevIndex = (currentImgIndex - 1 + currentGallery.length) % currentGallery.length;
        new Image().src = currentGallery[nextIndex];
        new Image().src = currentGallery[prevIndex];
    }
    
    // Thumbnails
    const thumbs = modalThumbs.children;
    for (let i = 0; i < thumbs.length; i++) {
        thumbs[i].classList.remove('active');
    }
    if (thumbs[currentImgIndex]) {
        thumbs[currentImgIndex].classList.add('active');
        try {
            thumbs[currentImgIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } catch (e) {}
    }

    const total = currentGallery.length;
    if (btnPrev) btnPrev.style.display = (total > 1 && currentImgIndex > 0) ? 'block' : 'none';
    if (btnNext) btnNext.style.display = (total > 1 && currentImgIndex < total - 1) ? 'block' : 'none';
}

function changeImage(direction) {
    currentImgIndex += direction;
    if (currentImgIndex >= currentGallery.length) currentImgIndex = currentGallery.length - 1;
    if (currentImgIndex < 0) currentImgIndex = 0;
    updateGalleryDisplay();
}

function setMainImage(index) {
    currentImgIndex = index;
    updateGalleryDisplay();
}