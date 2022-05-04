const express = require("express");
const { Query, validateQuery } = require("../models/Query");
const router = express.Router();

const validateMiddleware = require("../middlewares/validateMiddleware");

import { verifyToken } from "../controllers/verifyToken";

/**
 * @swagger
 * /query:
 *   get:
 *     summary: GET Queries
 *     tags:
 *       - Queries
 *     responses:
 *       '400':
 *         description: Bad Request
 *       '200':
 *         description: A list of queries.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Query'
 * tags:
 *   - name: Auth
 *     description: Routes to access the authentication
 *   - name: Likes
 *     description: Access to Likes
 *   - name: Queries
 *     description: Access to Queries
 *   - name: Comment
 *     description: Access to Comments
 * components:
 *   schemas:
 *     Query:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The user's name.
 *           example: NZIZA Derrick
 *         mail:
 *           type: string
 *           description: The user's email.
 *           example: nziza01@gmail.com
 *         subject:
 *           type: string
 *           description: the query subject.
 *           example: it might be better if i reach on you
 *         message:
 *           type: string
 *           description: The  message is in the query.
 *           example: i want tolink up and talk to Nziza's friends.
 */

router.get("/", verifyToken, async (req, res) => {
  try {
    const queries = await Query.find();
    const user = req.user;
    res.status(200).send(queries);
  } catch (error) {
    res.status(404).send({ Message: "Problem getting articles" });
  }
});

/**
 * @swagger
 * /query:
 *   post:
 *     summary: Add New Query
 *     tags:
 *       - Queries
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *               $ref: '#/components/schemas/Query'
 *     responses:
 *       '400':
 *         description: Bad Request
 *       '201':
 *         description: Query added.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Message:
 *                   type: string
 */

router.post("/", validateMiddleware(validateQuery), async (req, res) => {
  try {
    const newQuery = new Query({
      name: req.body.username,
      email: req.body.email,
      message: req.body.message,
      subject: req.body.subject,
    });

    await newQuery.save();
    res.status(201).send({ Message: "New Query is submitted successfully" });
  } catch (error) {
    console.log(req.body);
    res
      .status(400)
      .send({ error: "There was a problem while submitting the query" });
  }
});

module.exports = router;
