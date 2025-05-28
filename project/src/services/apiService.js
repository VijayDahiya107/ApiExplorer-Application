export const fetchAPIs = async () => {
  const response = await fetch('https://api.apis.guru/v2/list.json');
  if (!response.ok) throw new Error('Failed to fetch');
  return await response.json();
};
