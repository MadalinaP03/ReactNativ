// constants/index.js
export const apiKey = '4be34cd6ac5040159c594455250904';

export const traduceriVreme = {
    'Sunny': 'Senin',
    'Clear': 'Senin',
    'Partly cloudy': 'Parțial înnorat',
    'Cloudy': 'Înnorat',
    'Overcast': 'Înnorat complet',
    'Mist': 'Ceață',
    'Patchy rain possible': 'Ploaie slabă posibilă',
    'Light rain': 'Ploaie slabă',
    'Moderate rain': 'Ploaie moderată',
    'Heavy rain': 'Ploaie puternică',
    'Moderate rain at times': 'Ploaie moderată temporară',
    'Heavy rain at times': 'Ploaie puternică temporară',
    'Moderate or heavy freezing rain': 'Ploaie înghețată moderată sau puternică',
    'Moderate or heavy rain shower': 'Aversă moderată sau puternică',
    'Moderate or heavy rain with thunder': 'Ploaie moderată sau puternică cu tunete',
    'Snow': 'Ninsoare',
    'Light snow': 'Ninsoare slabă',
    'Heavy snow': 'Ninsoare puternică',
};

export const traduciConditie = (conditie) => {
  return traduceriVreme[conditie] || conditie || 'Necunoscut';
};