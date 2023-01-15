export async function api(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erro: " + response.status)
    return await response.json();
  } catch (error) {
    return false;
  }
}
