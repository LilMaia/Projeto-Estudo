const gameService = require('../services/gameServices');

const generateGamesWithQuantity = async (req, res) => {
    const { quantidade } = req.body;
    try {
        const games = await gameService.generateGames(quantidade);
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ message: 'Error ao gerar os games', error });
    }
};

const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAllGames();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ message: 'Error ao buscar os games', error });
    }
};

const getGameById = async (req, res) => {
    const { id } = req.params;
    try {
        const game = await gameService.getGameById(id);
        if (game) {
            res.status(200).json(game);
        } else {
            res.status(404).json({ message: 'Game não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error ao buscar o game', error });
    }
};

const createGame = async (req, res) => {
    const gameData = req.body;
    try {
        const newGame = await gameService.createGame(gameData);
        res.status(201).json(newGame);
    } catch (error) {
        res.status(500).json({ message: 'Error ao criar o game', error });
    }
};

const updateGame = async (req, res) => {
    const { id } = req.params;
    const gameData = req.body;
    try {
        const updatedGame = await gameService.updateGame(id, gameData);
        if (updatedGame) {
            res.status(200).json(updatedGame);
        } else {
            res.status(404).json({ message: 'Game não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error ao atualizar o game', error });
    }
};

const deleteGame = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedGame = await gameService.deleteGame(id);
        if (deletedGame) {
            res.status(200).json({ message: 'Game deletado com sucesso' });
        } else {
            res.status(404).json({ message: 'Game não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error ao deletar o game', error });
    }
};

module.exports = {
    generateGamesWithQuantity,
    getAllGames,
    getGameById,
    createGame,
    updateGame,
    deleteGame
};