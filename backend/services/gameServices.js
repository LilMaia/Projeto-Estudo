const gameMocker = require("../mockers/game_mocker");
const { Game } = require("../models");

const generateGames = async (quantidade) => {
  try {
    const games = gameMocker.generateGames(quantidade);
    const savedGames = await Game.bulkCreate(games);
    return savedGames;
  } catch (error) {
    console.error("Error ao gerar os games:", error);
    throw error;
  }
};

const getAllGames = async () => {
  try {
    const games = await Game.findAll();
    return games;
  } catch (error) {
    console.error("Error ao buscar os games:", error);
    throw error;
  }
};

const getGameById = async (id) => {
  try {
    const game = await Game.findByPk(id);
    return game;
  } catch (error) {
    console.error("Error ao buscar o game:", error);
    throw error;
  }
};

const createGame = async (gameData) => {
  try {
    const newGame = await Game.create(gameData);
    return newGame;
  } catch (error) {
    console.error("Error ao criar o game:", error);
    throw error;
  }
};

const updateGame = async (id, gameData) => {
  try {
    const [updated] = await Game.update(gameData, { where: { id } });
    if (updated) {
      const updatedGame = await Game.findByPk(id);
      return updatedGame;
    }
    throw new Error("Game não encontrado");
  } catch (error) {
    console.error("Error ao atualizar o game:", error);
    throw error;
  }
};

const deleteGame = async (id) => {
  try {
    const deleted = await Game.destroy({ where: { id } });
    return deleted;
  } catch (error) {
    console.error("Error ao deletar o game:", error);
    throw error;
  }
};

module.exports = {
  generateGames,
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
};
