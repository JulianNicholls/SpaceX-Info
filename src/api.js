const API_BASE_URL = 'https://api.spacexdata.com/v3/';

export async function loadLaunches() {
  const response = await fetch(`${API_BASE_URL}launches`);

  return await response.json();
}

export async function loadRockets() {
  const response = await fetch(`${API_BASE_URL}rockets`);

  return await response.json();
}
