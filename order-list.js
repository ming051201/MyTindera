// 🧾 Define all your product prices here
const products = [
  { code: "10001", name: "555 SARDINES IN TOMATO SAUCE EOE 155G", price_pc: 24.40, price_cs: 2414.80},
  { code: "10002", name: "555 SARDINES IN TOMATO SAUCE WITH CHILI 155G", price_pc: 24.40, price_cs: 2412.30},
  { code: "10003", name: "555 TUNA ADOBO EOE 155G", price_pc: 29.20, price_cs: 1446.10},
  { code: "10004", name: "555 TUNA AFRITADA EOE 155G", price_pc: 28.60, price_cs: 1413.70},
  { code: "10005", name: "555 TUNA CALDERETA EOE 155G", price_pc: 28.60, price_cs: 1413.60},
  { code: "10006", name: "555 TUNA FLAKES IN OIL EOE 155G", price_pc: 31.70, price_cs: 1569.30},
  { code: "10007", name: "555 TUNA MECHADO EOE 155G", price_pc: 28.60, price_cs: 1413.60},
  { code: "10008", name: "ABSOLUTE DISTILLED WATER 1L", price_pc: 23.30, price_cs: 277.70},
  { code: "10009", name: "ABSOLUTE DISTILLED WATER 350ML", price_pc: 10.70, price_cs: 370.10},
  { code: "10010", name: "ABSOLUTE DISTILLED WATER 500ML", price_pc: 14.90, price_cs: 352.30},
  { code: "10011", name: "AJINOMOTO CRISPY FRY BREADING MIX ORIGINAL 238G", price_pc: 70.20, price_cs: 1672.80},
  { code: "10012", name: "AJINOMOTO GINISA MIX 8G", price_pc: 51.70, price_cs: 2770.60},
  { code: "10013", name: "AJINOMOTO GINISA MIX 100G", price_pc: 39.00, price_cs: 1842.30},
  { code: "10014", name: "AJINOMOTO VETSIN BLUE UMAMI SEASONING 11G", price_pc: 63.70, price_cs: 4172.90},
  { code: "10015", name: "ALASKA CONDENSADA SWEETENED CONDENSED CREAMER 370G", price_pc: 55.10, price_cs: 2627.60},
  { code: "10016", name: "ALASKA CREMA ALL PURPOSE 135ML", price_pc: 35.80, price_cs: 1280.20},
  { code: "10017", name: "ALASKA CREMA ALL PURPOSE 250ML", price_pc: 64.60, price_cs: 2291.30},
  { code: "10018", name: "ALASKA EVAPORADA 140ML", price_pc: 19.20, price_cs: 911.40},
  { code: "10019", name: "ALASKA EVAPORADA 360ML", price_pc: 34.70, price_cs: 1651.50},
  { code: "10020", name: "ALFONSO 1 LIGHT 1.75L", price_pc: 626.10, price_cs: 3722.80},
  { code: "10021", name: "ALFONSO 1 LIGHT 700ML", price_pc: 255.00, price_cs: 3021.00},
  { code: "10022", name: "ALFONSO 1 LIGHT 1L", price_pc: 285.50, price_cs: 3412.70},
  { code: "10023", name: "ARGENTINA  BEEF LOAF 100G", price_pc: 17.80, price_cs: 845.80},
  { code: "10024", name: "ARGENTINA  BEEF LOAF 150G", price_pc: 20.80, price_cs: 982.90},
  { code: "10025", name: "ARGENTINA  BEEF LOAF 250G", price_pc: 30.90, price_cs: 1461.40},

  { code: "10026", name: "ARGENTINA  MEAT LOAF 150G", price_pc: 22.40, price_cs: 1065.50},
  { code: "10027", name: "ARGENTINA  MEAT LOAF 250G", price_pc: 32.70, price_cs: 1550.10},
  { code: "10028", name: "ARGENTINA CORNED BEEF 150G", price_pc: 35.30, price_cs: 1677.20},
  { code: "10029", name: "ARGENTINA CORNED BEEF 175G", price_pc: 40.60, price_cs: 1930.30},
  { code: "10030", name: "ARGENTINA CORNED BEEF EOE 260G", price_pc: 57.30, price_cs: 2728.00},
  { code: "10031", name: "ARGENTINA  MEAT LOAF 100G", price_pc: 17.50, price_cs: 826.00},
  { code: "10032", name: "ARGENTINA FIESTA SAUSAGE 175G", price_pc: 29.80, price_cs: 1410.10},
  { code: "10033", name: "ARIEL POWDER TWIN JUMBO PACK CLEAN & BRIGHT 66G (64G) 6S", price_pc: 82.80, price_cs: 2904.00},
  { code: "10034", name: "ARIEL POWDER TWIN JUMBO PACK WITH DOWNY FLORAL PASSION 66G (64G) 6S", price_pc: 81.70, price_cs: 2903.40},
  { code: "10035", name: "ARIEL POWDER TWIN JUMBO PACK WITH DOWNY FRESH GARDEN BLOOM 66G (64G) 6S", price_pc: 82.10, price_cs: 2920.10},
  { code: "10036", name: "ARIEL POWDER TWIN JUMBO PACK SUNRISE FRESH (GREEN) 66G (64G) 6S", price_pc: 82.10, price_cs: 2920.10},
  { code: "10037", name: "BEAR BRAND FORTIFIED CHOCOMILK DRINK 29G (SWAK)", price_pc: 90.60, price_cs: 2157.60},
  { code: "10038", name: "BEAR BRAND FORTIFIED POWDERED MILK DRINK 90G", price_pc: 37.00, price_cs: 4408.90},
  { code: "10039", name: "BEAR BRAND FORTIFIED POWDERED MILK DRINK 135G", price_pc: 47.70, price_cs: 3399.30},
  { code: "10040", name: "BEAR BRAND FORTIFIED POWDERED MILK DRINK 33G (SWAK)", price_pc: 90.60, price_cs: 2157.60},
  { code: "10041", name: "BEAR BRAND STERILIZED MILK 1L", price_pc: 108.10, price_cs: 1280.50},
  { code: "10042", name: "BEAR BRAND STERILIZED MILK 200ML (SINGLE)", price_pc: 28.20, price_cs: 895.50},
  { code: "10043", name: "BENG-BENG CHOCOLATE CARAMEL CRISPY WAFER 26.5G (22G)", price_pc: 85.10, price_cs: 975.60},
  { code: "10044", name: "BREEZE POWDER DETERGENT 3X ROSE GOLD PERFUME 87G 6S", price_pc: 111.30, price_cs: 1995.30},
  { code: "10045", name: "BREEZE POWDER DETERGENT TWIN PACK ROSE GOLD PERFUME 66G (64G) 6S", price_pc: 80.50, price_cs: 1915.50},
  { code: "10046", name: "BREEZE POWDER DETERGENT TWIN PACK ACTIVBLEACH 76G 6S", price_pc: 80.50, price_cs: 1915.50},
  { code: "10047", name: "BREEZE POWDER DETERGENT 3X ACTIVBLEACH 90G 6S", price_pc: 114.00, price_cs: 2050.80},
  { code: "10048", name: "COCO PANDAN PREMIUM RICE 25KG", price_pc: 1040.40, price_cs: 0},
  { code: "10049", name: "BUTTER CREAM CRACKERS 25G", price_pc: 63.00, price_cs: 1242.10},
  { code: "10050", name: "BUTTER CREAM CRACKERS CHOCOLATE 25G", price_pc: 63.00, price_cs: 1242.10},

  { code: "10051", name: "BUTTER CREAM CRACKERS ENSAYMADA 25G", price_pc: 64.00, price_cs: 1257.90},
  { code: "10052", name: "BUTTER CREAM CRACKERS LECHE FLAN 25G", price_pc: 62.90, price_cs: 1244.40},
  { code: "10053", name: "BUTTER CREAM CRACKERS UBE 25G", price_pc: 62.90, price_cs: 1244.40},
  { code: "10054", name: "CAREFREE BREATHABLE PANTY LINER FLATS SHOWER FRESH 8S", price_pc: 24.30, price_cs: 1148.90},
  { code: "10055", name: "CAREFREE BREATHABLE PANTY LINER FLATS SHOWER FRESH 20S", price_pc: 56.30, price_cs: 1334.70},
  { code: "10056", name: "CAREFREE HEALTHY FRESH PANTY LINER TEA TREE 8S", price_pc: 29.90, price_cs: 1433.70},
  { code: "10057", name: "CAREFREE HEALTHY FRESH PANTY LINER TEA TREE 20S", price_pc: 69.10, price_cs: 1639.00},
  { code: "10058", name: "CAREFREE SUPER DRY PANTY LINER SHOWER FRESH 8S", price_pc: 24.20, price_cs: 1144.40},
  { code: "10059", name: "CAREFREE SUPER DRY PANTY LINER SHOWER FRESH 20S", price_pc: 56.00, price_cs: 1334.70},
  { code: "10060", name: "CDO KARNE NORTE CLASSIC GUISADO EOE 150G", price_pc: 29.20, price_cs: 1389.80},
  { code: "10061", name: "CDO KARNE NORTE CLASSIC GUISADO EOE 260G", price_pc: 47.60, price_cs: 2265.20},
  { code: "10062", name: "CDO KARNE NORTE CLASSIC GUISADO EOE 175G", price_pc: 33.30, price_cs: 1578.40},
  { code: "10063", name: "CENTURY TUNA FLAKES IN OIL EOE 155G", price_pc: 36.10, price_cs: 1789.20},
  { code: "10064", name: "CENTURY TUNA FLAKES IN OIL EOE 180G", price_pc: 45.30, price_cs: 2153.70},
  { code: "10065", name: "CENTURY TUNA HOT AND SPICY EOE 155G", price_pc: 36.40, price_cs: 1805.30},
  { code: "10066", name: "CENTURY TUNA HOT AND SPICY EOE 180G", price_pc: 45.70, price_cs: 2175.60},
  { code: "10067", name: "COLUMBIA'S CHAMPI CHOCOLATE FILLED CHEWY CHOCOLATE CANDY 3.3G 50S NET WT. 165G", price_pc: 36.20, price_cs: 1437.40},
  { code: "10068", name: "CHAMPION POWDER DETERGENT SUPRA POWER SUPRA CLEAN ORIGINAL SCENT 35G 6S", price_pc: 32.30, price_cs: 1529.10},
  { code: "10069", name: "CHAMPION POWDER DETERGENT SUPRA POWER WITH FABRIC CONDITIONER FLORAL SCENT 35G 6S", price_pc: 32.40, price_cs: 1530.10},
  { code: "10070", name: "CHAMPION POWDER DETERGENT SUPRA POWER ANTI-BACTERIAL SUNNY FRESH SCENT 35G 6S", price_pc: 32.60, price_cs: 1549.80},
  { code: "10071", name: "CHOOEY CHOCO CHEWY BUTTERSCOTCH CARAMEL 40S", price_pc: 56.50, price_cs: 555.30},
  { code: "10072", name: "CHOOEY TOFFEE CHEWY BUTTER TOFFEE 40S", price_pc: 56.50, price_cs: 555.30},
  { code: "10073", name: "CHUCKIE CHOCOLATE MILK DRINK 180ML", price_pc: 23.00, price_cs: 728.10},
  { code: "10074", name: "CLEAR MEN ANTI-DANDRUFF SAHMPOO COOL SPORT MENTHOL 12ML 6S", price_pc: 38.60, price_cs: 1831.00},
  { code: "10075", name: "CLOSE-UP TOOTHPASTE TWIN PACK COOL MINT 20G 12S", price_pc: 100.00, price_cs: 1177.40},

  { code: "10076", name: "CLOSE-UP TOOTHPASTE TWIN PACK GREEN MENTHOL FRESH 20G 12S", price_pc: 96.30, price_cs: 1145.40},
  { code: "10077", name: "CLOSE-UP TOOTHPASTE TWIN PACK RED HOT  20G 12S", price_pc: 96.30, price_cs: 1145.40},
  { code: "10078", name: "COBRA ENERGY DRINK ASTIG BERRY BLAST (STRAWBERRY) 290ML (300ML)", price_pc: 18.50, price_cs: 217.70},
  { code: "10079", name: "COBRA ENERGY DRINK BERRY BLAST (STRAWBERRY) 350ML (330ML)", price_pc: 21.80, price_cs: 515.70},
  { code: "10080", name: "COBRA ENERGY DRINK ASTIG ORIGINAL 290ML (300ML)", price_pc: 19.20, price_cs: 222.90},
  { code: "10081", name: "COBRA ENERGY DRINK DEFENSE VITAMIN C 330ML (350ML)", price_pc: 22.10, price_cs: 526.70},
  { code: "10082", name: "COBRA ENERGY DRINK ORIGINAL 330ML (350ML)", price_pc: 21.70, price_cs: 515.90},
  { code: "10083", name: "COBRA ENERGY DRINK PLUS SMART 330ML (350ML)", price_pc: 22.10, price_cs: 526.00},
  { code: "10084", name: "COBRA RISE ENERGY DRINK BLUE COLA 290ML (300ML)", price_pc: 19.30, price_cs: 220.20},
  { code: "10085", name: "COBRA RISE ENERGY DRINK LEMON BLAST 290ML (300ML)", price_pc: 19.30, price_cs: 220.20},
  { code: "10086", name: "COBRA ENERGY DRINK PLUS FIT 330ML (350ML)", price_pc: 22.40, price_cs: 532.60},
  { code: "10087", name: "COKE ORIGINAL TASTE (REGULAR) MISMO 290ML", price_pc: 17.70, price_cs: 203.40},
  { code: "10088", name: "NESTLE COFFEE-MATE COFFEE CREAMER 80G", price_pc: 25.20, price_cs: 1795.00},
  { code: "10089", name: "NESTLE COFFEE-MATE COFFEE CREAMER 5G", price_pc: 24.80, price_cs: 1950.10},
  { code: "10090", name: "NESTLE COFFEE-MATE COFFEE CREAMER 150G", price_pc: 47.80, price_cs: 2846.70},
  { code: "10091", name: "COLGATE TOOTHPASTE TWIN PACK GREAT REGULAR FLAVOR 20G (18G) (22G)", price_pc: 109.10, price_cs: 1293.80},
  { code: "10092", name: "COLGATE TOOTHPASTE TWIN PACK CHARCOAL CLEAN 20G (18G) (22G)", price_pc: 115.20, price_cs: 1362.00},
  { code: "10093", name: "COLGATE TOOTHPASTE TWIN PACK FRESH CONFIDENCE WITH COOLING CRYSTALS COOL MENTHOL FRESH (GREEN) 20G (18G) (22G) (24G)", price_pc: 105.80, price_cs: 1258.50},
  { code: "10094", name: "COLGATE TOOTHPASTE TWIN PACK FRESH CONFIDENCE WITH COOLING CRYSTALS SPICY FRESH (PINK) 20G (18G) (22G)", price_pc: 98.50, price_cs: 1171.60},
  { code: "10095", name: "COLGATE TOOTHPASTE TWIN PACK FRESH CONFIDENCE WHITE BLAST OCEAN FRESH 20G (18G) (22G)", price_pc: 116.40, price_cs: 1382.70},
  { code: "10096", name: "COLGATE TOOTHBRUSH CLASSIC ADULT FLOW WRAP 1PC 6S", price_pc: 92.50, price_cs: 1093.90},
  { code: "10097", name: "COLGATE TOOTHBRUSH CLASSIC DEEP CLEAN ADULT MEDIUM 2PC 12S", price_pc: 388.50, price_cs: 2319.50},
  { code: "10098", name: "CREAMSILK CONDITIONER HAIRFALL DEFENSE (GREEN) 13ML 12S", price_pc: 77.50, price_cs: 1842.00},
  { code: "10099", name: "CREAMSILK CONDITIONER HAIRFALL DEFENSE (GREEN) 22ML 12S", price_pc: 110.80, price_cs: 2622.50},
  { code: "10100", name: "CREAMSILK CONDITIONER STANDOUT STRAIGHT (PINK) 13ML 12S", price_pc: 77.50, price_cs: 1842.00},
  
  { code: "10101", name: "CREAMSILK CONDITIONER STANDOUT STRAIGHT (PINK) 22ML 12S", price_pc: 110.80, price_cs: 2622.50},
  { code: "10102", name: "DATU PUTI SOY SAUCE SAKTO 60ML 6S", price_pc: 26.20, price_cs: 610.10},
  { code: "10103", name: "DATU PUTI SOY SAUCE (SUP) 200ML", price_pc: 10.30, price_cs: 609.80},
  { code: "10104", name: "DATU PUTI VINEGAR 385ML (PET)", price_pc: 19.00, price_cs: 450.80},
  { code: "10105", name: "DATU PUTI VINEGAR SAKTO 60ML 6S", price_pc: 21.00, price_cs: 497.90},
  { code: "10106", name: "DEL MONTE FIESTA FRUIT COCKTAIL 432G (1.5 FRUIT COCKTAIL)", price_pc: 68.20, price_cs: 1613.90},
  { code: "10107", name: "DEL MONTE FIESTA FRUIT COCKTAIL 836G (2.5)", price_pc: 91.00, price_cs: 2160.10},
  { code: "10108", name: "DEL MONTE FIESTA FRUIT COCKTAIL 3033G (GAL)", price_pc: 298.90, price_cs: 1781.00},
  { code: "10109", name: "DEL MONTE 100% PINEAPPLE JUICE WITH VITAMINS ACE 220ML (202 ACE)", price_pc: 30.80, price_cs: 738.30},
  { code: "10110", name: "DEL MONTE 100% PINEAPPLE JUICE FIBER-ENRICHED 220ML (202 FIBER)", price_pc: 32.90, price_cs: 783.80},
  { code: "10111", name: "DEL MONTE JUICE DRINK FOUR SEASONS 220ML (202 FOUR SEASONS)", price_pc: 30.30, price_cs: 719.70},
  { code: "10112", name: "DEL MONTE 100% PINEAPPLE JUICE HEART SMART 220ML (202 HEART SMART)", price_pc: 32.30, price_cs: 765.90},
  { code: "10113", name: "DEL MONTE JUICE DRINK PINEAPPLE ORANGE 220ML (202 PINE ORANGE)", price_pc: 31.00, price_cs: 730.20},
  { code: "10114", name: "DEL MONTE JUICE DRINK SWEETENED PINEAPPLE 220ML (202 SWEET PINE)", price_pc: 30.70, price_cs: 726.30},
  { code: "10115", name: "DEL MONTE ELBOW MACARONI 1KG", price_pc: 125.40, price_cs: 1237.00},
  { code: "10116", name: "DEL MONTE ELBOW MACARONI 200G", price_pc: 46.70, price_cs: 2301.60},
  { code: "10117", name: "DEL MONTE ELBOW MACARONI 400G", price_pc: 74.90, price_cs: 1847.90},
  { code: "10118", name: "DEL MONTE PINEAPPLE CHUNKS EOE 227G (FLAT CHUNKS)", price_pc: 34.20, price_cs: 815.50},
  { code: "10119", name: "DEL MONTE PINEAPPLE TIDBITS 115G", price_pc: 16.30, price_cs: 774.00},
  { code: "10120", name: "DEL MONTE PINEAPPLE TIDBITS 200G", price_pc: 29.00, price_cs: 688.30},
  { code: "10121", name: "DEL MONTE PINEAPPLE TIDBITS EOE 227G (FLAT TIDBITS)", price_pc: 36.30, price_cs: 865.20},
  { code: "10122", name: "DEL MONTE PINEAPPLE TIDBITS 432G (1.5 TIDBITS)", price_pc: 59.30, price_cs: 1407.00},
  { code: "10123", name: "DEL MONTE SPAGHETTI SAUCE FILIPINO STYLE 250G", price_pc: 34.20, price_cs: 1611.10},
  { code: "10124", name: "DEL MONTE SPAGHETTI SAUCE SWEET STYLE 250G", price_pc: 37.50, price_cs: 892.60},
  { code: "10125", name: "DEL MONTE TOMATO PASTE 150G", price_pc: 32.10, price_cs: 1525.00},

  { code: "10126", name: "DEL MONTE TOMATO SAUCE ORIGINAL STYLE 115G", price_pc: 18.70, price_cs: 883.70},
  { code: "10127", name: "DEL MONTE TOMATO SAUCE ORIGINAL STYLE 200G", price_pc: 23.90, price_cs: 1136.90},
  { code: "10128", name: "TODAY'S MIXED FRUIT 432G (1.5 TODAY'S)", price_pc: 60.50, price_cs: 1436.90},
  { code: "10129", name: "TODAY'S MIXED FRUIT 432G (1.5 TODAY'S)", price_pc: 81.30, price_cs: 1929.50},
  { code: "10130", name: "TODAY'S MIXED FRUIT 3033G (GAL TODAY'S)", price_pc: 256.70, price_cs: 1524.60},
  { code: "10131", name: "DOVE DERMA CARE SCALP ANTI-DANDRUFF SHAMPOO HAIRFALL RECOVERY (GREEN) 10ML", price_pc: 68.60, price_cs: 1645.10},
  { code: "10132", name: "DOVE SHAMPOO BIOTIN HAIRFALL RESCUE (GREEN) 12ML", price_pc: 67.40, price_cs: 1541.80},
  { code: "10133", name: "DOWNY FABRIC CONDITIONER ANTIBAC (BLUE) ) DALAWANG LABAHAN 36ML (38ML) 6S", price_pc: 52.00, price_cs: 1230.90},
  { code: "10134", name: "DOWNY FABRIC CONDITIONER PREMIUM PARFUM FRENCH LAVENDER (PURPLE) DALAWANG LABAHAN 32ML (36ML) 6S", price_pc: 52.60, price_cs: 1235.90},
  { code: "10135", name: "DOWNY FABRIC CONDITIONER EXPERT KONTRA KULOB (BLUE GREEN) DALAWANG LABAHAN 36ML 6S", price_pc: 52.00, price_cs: 1230.90},
  { code: "10136", name: "DOWNY FABRIC CONDITIONER PASSION (RED) DALAWANG LABAHAN 32ML(36ML) 12S", price_pc: 103.90, price_cs: 1230.90},
  { code: "10137", name: "DOWNY FABRIC CONDITIONER PREMIUM PARFUM MYSTIQUE (BLACK) DALAWANG LABAHAN 32ML (36ML) 6S", price_pc: 52.50, price_cs: 1241.70},
  { code: "10138", name: "DOWNY FABRIC CONDITIONER SUNRISE FRESH (BLUE) DALAWANG LABAHAN 40ML (38ML) 6S", price_pc: 52.00, price_cs: 1230.90},
  { code: "10139", name: "DOWNY FABRIC CONDITIONER GARDEN BLOOM (PINK) SINGLES 24ML(26ML) 12S", price_pc: 72.50, price_cs: 2146.80},
  { code: "10140", name: "DOWNY FABRIC CONDITIONER EXPERT KONTRA KULOB (BLUE GREEN) SINGLES 22ML (24ML) 12S", price_pc: 72.50, price_cs: 2146.80},
  { code: "10141", name: "DOWNY FABRIC CONDITIONER PASSION (RED) SINGLES 20ML (24ML) 12S", price_pc: 73.40, price_cs: 2166.10},
  { code: "10142", name: "DOWNY FABRIC CONDITIONER PREMIUM PARFUM MYSTIQUE (BLACK) SINGLES 20ML (24ML) 12S", price_pc: 74.00, price_cs: 2193.80},
  { code: "10143", name: "DOWNY FABRIC CONDITIONER SPRING BLOSSOM SINGLES 22ML (24ML) 12S", price_pc: 73.80, price_cs: 2166.10},
  { code: "10144", name: "DOWNY FABRIC CONDITIONER SUNRISE FRESH (BLUE) SINGLES 24ML (26ML) 12S", price_pc: 73.40, price_cs: 2166.10},
  { code: "10145", name: "DOWNY FABRIC CONDITIONER ANTIBAC (BLUE) ) TRI-PID 66ML (75ML) 12S", price_pc: 197.60, price_cs: 2932.80},
  { code: "10146", name: "DOWNY FABRIC CONDITIONER PREMIUM PARFUM FRENCH LAVENDER (PURPLE) TRI-PID 63ML 12S", price_pc: 214.20, price_cs: 3213.00},
  { code: "10147", name: "DOWNY FABRIC CONDITIONER GARDEN BLOOM (PINK) TRI-PID 69ML (75ML) 12S", price_pc: 197.60, price_cs: 2932.80},
  { code: "10148", name: "DOWNY FABRIC CONDITIONER EXPERT KONTRA KULOB (BLUE GREEN) TRI-PID 66ML (75ML) 12S", price_pc: 197.60, price_cs: 2932.80},
  { code: "10149", name: "DOWNY FABRIC CONDITIONER PASSION (RED) TRI-PID 63ML (75ML) 12S", price_pc: 200.60, price_cs: 2977.50},
  { code: "10150", name: "DOWNY FABRIC CONDITIONER PREMIUM PARFUM MYSTIQUE (BLACK) TRI-PID 63ML (75ML) 12S", price_pc: 200.60, price_cs: 2977.50},

  { code: "10151", name: "DOWNY FABRIC CONDITIONER SPRING BLOSSOM TRI-PID 66ML (75ML) 12S", price_pc: 198.80, price_cs: 2932.80},
  { code: "10152", name: "DOWNY FABRIC CONDITIONER SUNRISE FRESH (BLUE) TRI-PID 69ML (75ML) 12S", price_pc: 197.60, price_cs: 2932.80},
  { code: "10153", name: "EMPERADOR BRANDY DOUBLE LIGHT 1L", price_pc: 176.30, price_cs: 2107.20},
  { code: "10154", name: "EMPERADOR BRANDY DOUBLE LIGHT 1.5L", price_pc: 354.00, price_cs: 2123.70},
  { code: "10155", name: "EMPERADOR BRANDY DOUBLE LIGHT 750ML", price_pc: 134.70, price_cs: 1607.70},
  { code: "10156", name: "EMPERADOR BRANDY LIGHT 1L", price_pc: 176.30, price_cs: 2093.20},
  { code: "10157", name: "EMPERADOR BRANDY LIGHT 1.5L", price_pc: 356.10, price_cs: 2115.80},
  { code: "10158", name: "EMPERADOR BRANDY LIGHT 350ML", price_pc: 69.00, price_cs: 1368.90},
  { code: "10159", name: "EMPERADOR BRANDY LIGHT 500ML", price_pc: 94.40, price_cs: 1405.40},
  { code: "10160", name: "EMPERADOR BRANDY LIGHT 750ML", price_pc: 134.90, price_cs: 1601.10},
  { code: "10161", name: "ENERGEN CEREAL DRINK CHOCOLATE HANGER 40G 10S", price_pc: 89.40, price_cs: 2126.30},
  { code: "10162", name: "ENERGEN CEREAL DRINK VANILLA HANGER 40G 10S", price_pc: 89.40, price_cs: 2126.30},
  { code: "10163", name: "EQ PLUS DISPOSABLE BABY DIAPERS L 12S", price_pc: 104.70, price_cs: 1450.80},
  { code: "10164", name: "EQ PLUS DISPOSABLE BABY DIAPERS S 12S", price_pc: 83.10, price_cs: 1479.90},
  { code: "10165", name: "EQ PLUS DISPOSABLE BABY DIAPERS XL 12S", price_pc: 124.10, price_cs: 1474.20},
  { code: "10166", name: "EQ PLUS DISPOSABLE BABY DIAPERS XXL 12S", price_pc: 145.50, price_cs: 1425.00},
  { code: "10167", name: "EQ PANTS DISPOSABLE BABY DIAPERS L 24S", price_pc: 196.10, price_cs: 1553.00},
  { code: "10168", name: "EQ PANTS DISPOSABLE BABY DIAPERS M 24S", price_pc: 175.80, price_cs: 1391.80},
  { code: "10169", name: "EQ PANTS DISPOSABLE BABY DIAPERS XL 24S", price_pc: 214.70, price_cs: 1700.40},
  { code: "10170", name: "EQ PANTS DISPOSABLE BABY DIAPERS XXL 10S", price_pc: 98.70, price_cs: 1878.30},
  { code: "10171", name: "FITA CRACKERS SINGLES 30G 10S", price_pc: 58.40, price_cs: 1386.40},
  { code: "10172", name: "FRES MINT CANDY CHERRY 3G 50S NET WT. 150G", price_pc: 43.20, price_cs: 1023.00},
  { code: "10173", name: "FRES MINT CANDY GRAPE 3G 50S NET WT. 150G", price_pc: 44.20, price_cs: 1041.60},
  { code: "10174", name: "COLUMBIA'S FRUTOS SOFT CHEWY CANDY SAMPALOK 3.3G 50S NET WT. 165G", price_pc: 35.40, price_cs: 1401.90},
  { code: "10175", name: "COLUMBIA'S FRUTOS SOFT CHEWY CANDY ASSORTED 3.6G 50S NET WT. 180G", price_pc: 35.40, price_cs: 1400.10},

  { code: "10176", name: "COLUMBIA'S FRUTOS SOFT CHEWY CANDY TROPICAL FRUITS 3.3G 50S NET WT. 165G", price_pc: 35.50, price_cs: 1402.50},
  { code: "10177", name: "FUDGEE BARR CHOCOLATE CREAM-FILLED CHOCOLATE CAKE BAR 40G 10S", price_pc: 77.80, price_cs: 772.00},
  { code: "10178", name: "FUDGEE BARR MILK CUSTARD CREAM-FILLED VANILLA CAKE BAR 39G 10S", price_pc: 77.70, price_cs: 768.80},
  { code: "10179", name: "FUDGEE BARR MOCHA CAKE BAR WITH VANILLA CREAM FILLING 39G 10S", price_pc: 77.90, price_cs: 771.20},
  { code: "10180", name: "GATORADE SPORTS DRINK BLUE BOLT 350ML", price_pc: 33.00, price_cs: 784.30},
  { code: "10181", name: "GATORADE SPORTS DRINK BLUE BOLT 500ML", price_pc: 40.80, price_cs: 973.10},
  { code: "10182", name: "GATORADE SPORTS DRINK TROPICAL FRUIT 350ML", price_pc: 33.00, price_cs: 784.30},
  { code: "10183", name: "GATORADE SPORTS DRINK TROPICAL FRUIT 500ML", price_pc: 41.80, price_cs: 994.20},
  { code: "10184", name: "GREAT TASTE COFFEE 3-IN-1 WHITE 30G 10S", price_pc: 80.70, price_cs: 1918.30},
  { code: "10185", name: "GREAT TASTE COFFEE 3-IN-1 WHITE TWIN PACK 50G 10S", price_pc: 123.40, price_cs: 2933.50},
  { code: "10186", name: "HAPEE TOOTHPASTE EXPLOSIVE MENTHOL RED 55G 6S", price_pc: 69.70, price_cs: 827.60},
  { code: "10187", name: "HAPEE TOOTHPASTE FRESH GREEN OUTBURST 55G 6S", price_pc: 70.30, price_cs: 827.60},
  { code: "10188", name: "HAPEE TOOTHPASTE OUTRAGEOUS BLUE CHILL 55G 6S", price_pc: 76.50, price_cs: 918.00},
  { code: "10189", name: "HAPPY ABSORBENT COTTON 10G", price_pc: 5.00, price_cs: 484.10},
  { code: "10190", name: "HAPPY ABSORBENT COTTON 40G", price_pc: 17.00, price_cs: 1211.70},
  { code: "10191", name: "HAPPY ABSORBENT COTTON 80G", price_pc: 30.80, price_cs: 1098.00},
  { code: "10192", name: "HAPPY CLOTH-LIKE DISPOSABLE DIAPERS L 4S", price_pc: 30.30, price_cs: 897.70},
  { code: "10193", name: "HAPPY CLOTH-LIKE DISPOSABLE DIAPERS M 4S", price_pc: 27.00, price_cs: 800.90},
  { code: "10194", name: "HAPPY CLOTH-LIKE DISPOSABLE DIAPERS XL 4S", price_pc: 33.50, price_cs: 991.20},
  { code: "10195", name: "HERMANO SUGAR BROWN 1KG", price_pc: 83.20, price_cs: 4117.50},
  { code: "10196", name: "HERMANO SUGAR BROWN 500G", price_pc: 41.70, price_cs: 4123.50},
  { code: "10197", name: "HERMANO SUGAR REFINED 1KG", price_pc: 87.80, price_cs: 4344.80},
  { code: "10198", name: "HERMANO SUGAR REFINED 500G", price_pc: 43.90, price_cs: 4344.70},
  { code: "10199", name: "HERMANO SUGAR PREMIUM RAW 1KG", price_pc: 84.90, price_cs: 4200.50},
  { code: "10200", name: "HERMANO SUGAR PREMIUM RAW 500G", price_pc: 42.60, price_cs: 4214.00},

];

// 🧹 Clears all quantity boxes
function clearOrders() {
  document.querySelectorAll('.qty-box').forEach(box => box.value = 0);
  updateOrderSummary();
  alert("All quantities cleared!");
}

// 🪟 Show modal
function showOrderSummary() {
  document.getElementById('order-summary-overlay').style.display = 'flex';
  document.body.classList.add('modal-open');
  updateOrderSummary();
}

// 🪟 Close modal
function closeSummary() {
  document.getElementById('order-summary-overlay').style.display = 'none';
  document.body.classList.remove('modal-open');
}

// 📊 Update Order Summary
function updateOrderSummary() {
  const content = document.getElementById('order-summary-content');
  const totalEl = document.getElementById('order-summary-total');
  const productElements = document.querySelectorAll('.product');
  let summaryHTML = '';
  let total = 0;

  productElements.forEach(prod => {
    const code = prod.querySelector('h3').textContent.trim();
    const name = prod.querySelector('p').textContent.trim();
    const qtyBoxes = prod.querySelectorAll('.qty-box');
    let subtotal = 0;
    let details = '';

    const productData = products.find(p => p.code === code);
    if (!productData) return;

    qtyBoxes.forEach((box, index) => {
      const qty = parseInt(box.value) || 0;
      if (qty <= 0) return;

      const type = index === 0 ? 'PC' : 'CS';
      const price = (type === 'PC') ? productData.price_pc : productData.price_cs;
      const itemTotal = qty * price;
      subtotal += itemTotal;
      details += `${type}: ${qty} × ₱${price.toFixed(2)} = ₱${itemTotal.toFixed(2)}<br>`;
    });

    if (subtotal > 0) {
      total += subtotal;
      summaryHTML += `
        <div style="margin-bottom:10px; border-bottom:1px solid #ddd; padding-bottom:5px;">
          <strong>${code}</strong> - ${name}<br>
          ${details}
          <strong>Subtotal:</strong> ₱${subtotal.toFixed(2)}
        </div>`;
    }
  });

  content.innerHTML = summaryHTML || '<p>No items in basket.</p>';
  totalEl.textContent = `Total: ₱${total.toFixed(2)}`;
}

// 🧠 Live update
document.querySelectorAll('.qty-box').forEach(box => {
  box.addEventListener('input', updateOrderSummary);
});

// 🧭 Close modal by clicking outside
document.getElementById('order-summary-overlay').addEventListener('click', e => {
  if (e.target.id === 'order-summary-overlay') closeSummary();
});

// ✅ SEARCH + PAGINATION (WORKS WITH SEARCH)
const productsPerPage = 25;
const allProducts = Array.from(document.querySelectorAll('.product'));
const paginationContainer = document.getElementById('pagination');
const searchBox = document.querySelector('.search-box');

let filteredProducts = [...allProducts];
let currentPage = 1;

// 🔍 SEARCH FUNCTION — updates pagination
searchBox.addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase().trim();

  filteredProducts = allProducts.filter(prod => {
    const code = prod.querySelector('h3').textContent.toLowerCase();
    const name = prod.querySelector('p').textContent.toLowerCase();
    return code.includes(searchTerm) || name.includes(searchTerm);
  });

  currentPage = 1;
  displayProducts(currentPage);
});

// 📄 DISPLAY PRODUCTS PER PAGE
function displayProducts(page) {
  allProducts.forEach(prod => prod.style.display = 'none');
  const start = (page - 1) * productsPerPage;
  const end = start + productsPerPage;
  const visibleProducts = filteredProducts.slice(start, end);
  visibleProducts.forEach(prod => prod.style.display = 'flex');
  updatePaginationButtons(page);
}

// 🧭 UPDATE PAGINATION BUTTONS
function updatePaginationButtons(activePage) {
  paginationContainer.innerHTML = '';
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  if (totalPages <= 1) return;

  const prevBtn = document.createElement('button');
  prevBtn.textContent = '← Previous';
  prevBtn.disabled = activePage === 1;
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      displayProducts(currentPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
  paginationContainer.appendChild(prevBtn);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.classList.toggle('active', i === activePage);
    btn.addEventListener('click', () => {
      currentPage = i;
      displayProducts(currentPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    paginationContainer.appendChild(btn);
  }

  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Next →';
  nextBtn.disabled = activePage === totalPages;
  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      displayProducts(currentPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
  paginationContainer.appendChild(nextBtn);
}

// 🚀 INITIALIZE PAGE
displayProducts(currentPage);

// ⬅️ Go back button
function goBack() {
  window.history.back();
}

// ✅ FINALIZE ORDER (saves both PC + CS)
function finalizeOrder() {
  const orders = [];

  document.querySelectorAll('.product').forEach(prod => {
    const code = prod.querySelector('h3').textContent.trim();
    const name = prod.querySelector('p').textContent.trim();
    const qtyBoxes = prod.querySelectorAll('.qty-box');
    const productData = products.find(p => p.code === code);
    if (!productData) return;

    qtyBoxes.forEach((box, index) => {
      const qty = parseInt(box.value) || 0;
      if (qty > 0) {
        const type = index === 0 ? 'PC' : 'CS';
        const price = (type === 'PC') ? productData.price_pc : productData.price_cs;
        const total = qty * price;
        orders.push({ code, name, type, qty, price, total });
      }
    });
  });

  localStorage.setItem('finalizedOrders', JSON.stringify(orders));
  window.location.href = 'finalize.html';
}

window.addEventListener("load", () => {
  // Get all <img> elements inside your product list
  const productImages = document.querySelectorAll(".product");

  productImages.forEach(img => {
    const preload = new Image();
    preload.src = img.src;
  });
});

