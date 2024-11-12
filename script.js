const centers = [
    { id: 1, name: 'Interbank Central', waitTime: '2-5 min', address: 'Av. Principal 123', optimalTime: '10:30 AM' },
    { id: 2, name: 'RENIEC Sede Lima', waitTime: '10-15 min', address: 'Jr. de la Unión 456', optimalTime: '2:00 PM' },
    { id: 3, name: 'Claro Atención Cliente', waitTime: '5-10 min', address: 'Av. Arequipa 789', optimalTime: '11:45 AM' },
  ];
  
  let currentView = 'home';
  let selectedCenter = null;
  
  function render() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    
    if (currentView === 'home') {
      mainContent.innerHTML = `
        <input type="search" placeholder="Buscar centro de atención..." class="search-input">
        ${centers.map(center => `
          <div class="card" onclick="viewCenterDetail(${center.id})">
            <h2 class="card-title">${center.name}</h2>
            <p class="card-details">📍 ${center.address}</p>
            <p class="card-details">⏱️ Tiempo de espera: ${center.waitTime}</p>
          </div>
        `).join('')}
      `;
    } else if (currentView === 'centerDetail') {
      mainContent.innerHTML = `
        <button class="button" onclick="goBack()">⬅ Volver</button>
        <h1 class="center-title">${selectedCenter.name}</h1>
        <div class="tab-buttons">
          <button class="tab-button active" onclick="showTab('info')">Info</button>
          <button class="tab-button" onclick="showTab('reserve')">Reservar</button>
          <button class="tab-button" onclick="showTab('history')">Historial</button>
        </div>
        <div class="tab-content" id="tab-content">Selecciona una pestaña para ver detalles.</div>
      `;
    }
  }
  
  function viewCenterDetail(id) {
    selectedCenter = centers.find(center => center.id === id);
    currentView = 'centerDetail';
    render();
  }
  
  function goBack() {
    currentView = 'home';
    render();
  }
  
  function showTab(tab) {
    const tabContent = document.getElementById('tab-content');
    document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));
  
    if (tab === 'info') {
      tabContent.innerHTML = `
        <p><strong>Dirección:</strong> ${selectedCenter.address}</p>
        <p><strong>Horario óptimo:</strong> ${selectedCenter.optimalTime}</p>
        <button onclick="notify()" class="button">Notificarme</button>
      `;
    } else if (tab === 'reserve') {
      tabContent.innerHTML = `
        <label for="reserveTime">Selecciona la hora de llegada:</label>
        <input type="time" id="reserveTime" class="search-input">
        <button onclick="reserve()" class="button">Reservar Turno</button>
      `;
    } else if (tab === 'history') {
      tabContent.innerHTML = `
        <p>Historial de visitas y tiempo ahorrado.</p>
      `;
    }
  }
  
  function notify() {
    alert('Notificación configurada.');
  }
  
  function reserve() {
    alert('Turno reservado.');
  }
  
  document.addEventListener('DOMContentLoaded', render);
  