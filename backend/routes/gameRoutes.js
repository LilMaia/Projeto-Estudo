const { Router } = require("express");
const gameController = require('../controllers/gameController');

const gameRoutes = Router();

/**
 * @swagger
 * /generateGames:
 *   post:
 *     summary: Gera uma quantidade especificada de jogos falsos
 *     tags: [Games]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: integer
 *                 description: O número de jogos a serem gerados
 *                 example: 5
 *     responses:
 *       200:
 *         description: Jogos gerados com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   company:
 *                     type: string
 *                   website:
 *                     type: string
 *                   launchYear:
 *                     type: string
 *                     format: date
 *                   genre:
 *                     type: string
 *       400:
 *         description: Erro na requisição
 */
gameRoutes.post('/generateGames', gameController.generateGamesWithQuantity);


/**
 * @swagger
 * /games:
 *   get:
 *     summary: Retorna todos os jogos
 *     tags: [Games]
 *     responses:
 *       200:
 *         description: Lista de jogos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   company:
 *                     type: string
 *                   website:
 *                     type: string
 *                   launchYear:
 *                     type: string
 *                     format: date
 *                   genre:
 *                     type: string
 *       500:
 *         description: Erro ao buscar os games
 */
gameRoutes.get('/games', gameController.getAllGames);

/**
 * @swagger
 * /games/{id}:
 *   get:
 *     summary: Retorna um jogo pelo ID
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do jogo
 *     responses:
 *       200:
 *         description: Jogo encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 company:
 *                   type: string
 *                 website:
 *                   type: string
 *                 launchYear:
 *                   type: string
 *                   format: date
 *                 genre:
 *                   type: string
 *       404:
 *         description: Jogo não encontrado
 *       500:
 *         description: Erro ao buscar o game
 */
gameRoutes.get('/games/:id', gameController.getGameById);

/**
 * @swagger
 * /games:
 *   post:
 *     summary: Cria um novo jogo
 *     tags: [Games]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               company:
 *                 type: string
 *               website:
 *                 type: string
 *               launchYear:
 *                 type: string
 *                 format: date
 *               genre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Jogo criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 company:
 *                   type: string
 *                 website:
 *                   type: string
 *                 launchYear:
 *                   type: string
 *                   format: date
 *                 genre:
 *                   type: string
 *       500:
 *         description: Erro ao criar o game
 */
gameRoutes.post('/games', gameController.createGame);

/**
 * @swagger
 * /games/{id}:
 *   put:
 *     summary: Atualiza um jogo pelo ID
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do jogo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               company:
 *                 type: string
 *               website:
 *                 type: string
 *               launchYear:
 *                 type: string
 *                 format: date
 *               genre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Jogo atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 company:
 *                   type: string
 *                 website:
 *                   type: string
 *                 launchYear:
 *                   type: string
 *                   format: date
 *                 genre:
 *                   type: string
 *       404:
 *         description: Jogo não encontrado
 *       500:
 *         description: Erro ao atualizar o game
 */
gameRoutes.put('/games/:id', gameController.updateGame);

/**
 * @swagger
 * /games/{id}:
 *   delete:
 *     summary: Deleta um jogo pelo ID
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do jogo
 *     responses:
 *       200:
 *         description: Jogo deletado com sucesso
 *       404:
 *         description: Jogo não encontrado
 *       500:
 *         description: Erro ao deletar o game
 */
gameRoutes.delete('/games/:id', gameController.deleteGame);

module.exports = gameRoutes;