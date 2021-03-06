// API v3 is apparently deprecated, but V4 is very different
const API_BASE_URL: string = 'https://api.spacexdata.com/v3/';
const APIV4_BASE_URL: string = 'https://api.spacexdata.com/v4/';

export async function loadSection(section: string) {
  const response = await fetch(`${API_BASE_URL}${section}`);

  return await response.json();
}

export async function loadSectionV4(section: string) {
  const response = await fetch(`${APIV4_BASE_URL}${section}`);

  return await response.json();
}

export const loadCapsules = async () => loadSection('capsules');
export const loadCores = async () => loadSection('cores');
export const loadDragons = async () => loadSection('dragons');
export const loadHistory = async () => loadSection('history');
export const loadInfo = async () => loadSection('info');
export const loadLaunchPads = async () => loadSection('launchpads');
export const loadLandingPads = async () => loadSection('landpads');
export const loadLaunches = async () => loadSection('launches');
export const loadMissions = async () => loadSection('missions');
export const loadPayloads = async () => loadSection('payloads');
export const loadRockets = async () => loadSection('rockets');
export const loadRoadster = async () => loadSection('roadster');
export const loadShips = async () => loadSection('ships');
