import axios from 'axios';

export async function generateGames(amount) {
  try {
    const response = await axios.post('http://localhost:3000/generateGames', {
      amount,
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao gerar os jogos:', error);
    throw error;
  }
}