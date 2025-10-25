// 🧾 Define all your product prices here
const products = [
  { code: "10001", name: "555 SARDINES IN TOMATO SAUCE EOE 155G", price_pc: 1, price_cs: 1},
  { code: "10002", name: "555 SARDINES IN TOMATO SAUCE WITH CHILI 155G", price_pc: 1, price_cs: 1},
  { code: "10003", name: "555 TUNA ADOBO EOE 155G", price_pc: 1, price_cs: 1},
  { code: "10004", name: "555 TUNA AFRITADA EOE 155G", price_pc: 1, price_cs: 1},
  { code: "10005", name: "555 TUNA CALDERETA EOE 155G", price_pc: 1, price_cs: 1},
  { code: "10006", name: "555 TUNA FLAKES IN OIL EOE 155G", price_pc: 1, price_cs: 1},
  { code: "10007", name: "555 TUNA MECHADO EOE 155G", price_pc: 1, price_cs: 1},
  { code: "10008", name: "ABSOLUTE DISTILLED WATER 1L", price_pc: 1, price_cs: 1},
  { code: "10009", name: "ABSOLUTE DISTILLED WATER 350ML", price_pc: 1, price_cs: 1},
  { code: "10010", name: "ABSOLUTE DISTILLED WATER 500ML", price_pc: 1, price_cs: 1},
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

