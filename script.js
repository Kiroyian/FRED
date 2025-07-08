
const itemList = [];

function addItem() {
  const name = document.getElementById('itemName').value.trim();
  const price = parseFloat(document.getElementById('itemPrice').value.trim());

  if (!name || isNaN(price)) return alert('Please enter valid item name and price.');

  itemList.push({ name, price });
  document.getElementById('itemName').value = '';
  document.getElementById('itemPrice').value = '';
  renderList();
}

function renderList() {
  const listEl = document.getElementById('list');
  listEl.innerHTML = '';
  itemList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = ${item.name} - KES ${item.price.toFixed(2)};
    listEl.appendChild(li);
  });
}

function splitCosts() {
  const peopleCount = parseInt(document.getElementById('people').value.trim());
  if (isNaN(peopleCount) || peopleCount < 1) return alert('Enter a valid number of people.');

  const total = itemList.reduce((sum, item) => sum + item.price, 0);
  const perPerson = (total / peopleCount).toFixed(2);

  const splitList = document.getElementById('split');
  splitList.innerHTML = '';
  for (let i = 1; i <= peopleCount; i++) {
    const li = document.createElement('li');
    li.textContent = Person ${i} owes: KES ${perPerson};
    splitList.appendChild(li);
  }
}