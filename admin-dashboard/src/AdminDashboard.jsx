import React, { useEffect, useState } from 'react';

function AdminDashboard() {
  const [shops, setShops] = useState([]);
  const [newShop, setNewShop] = useState('');
  const backendURL = 'https://acciomai.onrender.com'; // your backend base URL

  useEffect(() => {
    fetch(backendURL + '/verified-shops')
      .then(res => res.json())
      .then(data => setShops(data || []));
  }, []);

  const updateShops = (newList) => {
    fetch(backendURL + '/update-shops', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ shops: newList })
    }).then(() => setShops(newList));
  };

  const removeShop = (shop) => {
    const updated = shops.filter(s => s !== shop);
    updateShops(updated);
  };

  const addShop = () => {
    if (!newShop.trim()) return;
    const updated = [...shops, newShop.trim()];
    updateShops(updated);
    setNewShop('');
  };

  return (
    <div>
      <ul>
        {shops.map((shop, idx) => (
          <li key={idx}>
            ✔ {shop} <button onClick={() => removeShop(shop)}>❌ Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newShop}
        onChange={e => setNewShop(e.target.value)}
        placeholder="New shop name"
      />
      <button onClick={addShop}>➕ Add Shop</button>
    </div>
  );
}

export default AdminDashboard;
