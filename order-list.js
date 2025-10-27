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

