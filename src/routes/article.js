const express = require("express");
const { validateArticle, Article } = require("../models/Article");
const router = express.Router();
const validateMiddleWare = require("../middlewares/validateMiddleware");

import { verifyToken } from "../controllers/verifyToken";
import validateMiddleware from "../middlewares/validateMiddleware";

/**
 * @swagger
 * security:
 *   bearerAuth: []
 * /article:
 *   get:
 *     summary: GET Articles
 *     tags:
 *       - Articles
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
 *                 $ref: '#/components/schemas/Article'
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       properties:
 *         heading:
 *           type: string
 *           description: Title of the article
 *           example: Women in technology number is rising everyday
 *         content:
 *           type: string
 *           description: Details of the article
 *           example: Women used to fear technology field and think that it is only for men, but as time comes, they are realising how capable they are.
 *         image:
 *           type: string
 *           description: The image in the article.
 *           example: women.png
 */

router.get("/", async (req, res) => {
  try {
    const articles = await Article.find({});
    res.status(200).send(articles);
  } catch (error) {
    res.status(404).send({ error: "Problem getting articles" });
  }
});

/**
 * @swagger
 * "/article/{articleId}":
 *   get:
 *     summary: Find the article by ID
 *     tags:
 *       - Articles
 *     parameters:
 *       - name: articleId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The Id of the article
 *     responses:
 *       "200":
 *         description:Operation is successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Article"
 *       "404":
 *         description: Article is not found
 */

router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findOne({ _id: req.params.id });
    if (article) {
      res.status(200).send(article);
    } else {
      res.status(404).send({ error: "Article doesn't exist !" });
    }
  } catch (err) {
    res.status(404).send({ error: "Article doesn't exist !" });
    // console.log(err)
  }
});

/**
 * @swagger
 * /articles:
 *   post:
 *     summary: Add New Article
 *     tags:
 *       - Article
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
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

router.post(
  "/",
  verifyToken,
  validateMiddleware(validateArticle),
  async (req, res) => {
    // console.log(req.body)
    try {
      const newArticle = await new Article({
        heading: req.body.heading,
        content: req.body.content,
        userId: req.user["id"],
        image: req.body.image,
      });
      // console.log(req.user["id"])
      await newArticle.save();

      res.status(201).send({ Message: "New Article Created" });
    } catch (error) {
      res
        .status(400)
        .send({ error: "There was a problem publishing the article" });
      //    console.log(error)
    }
  }
);

/**
 * @swagger
 * "/article/{articleId}":
 *   delete:
 *     summary: Delete an article according to it's ID
 *     tags:
 *       - Article
 *     parameters:
 *       - name: articleId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The Id of the article
 *     responses:
 *       "200":
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Article"
 *       "404":
 *         description: Article not found
 */

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    let articleUser = await Article.findOne({ _id: req.params.id });
    if (req.user["id"] == articleUser["userId"]) {
      await Article.deleteOne({ _id: req.params.id });
      res.status(202).send({ Message: "Article deleted successfully" });
    } else {
      res
        .status(401)
        .send({ Message: "Not Authorized to perform this operation" });
    }
  } catch {
    res.status(404).send({ error: "This article doesn't exist!" });
  }
});

router.put("/:id", verifyToken, async (req, res) => {
  try {
    let articleUser = await Article.findOne({ _id: req.params.id });
    if (req.user["id"] == articleUser["userId"]) {
      const article = await Article.findOne({ _id: req.params.id });

      if (req.body.heading) {
        article.heading = req.body.heading;
      }

      if (req.body.content) {
        article.content = req.body.content;
      }
      if (req.body.image) {
        article.image = req.body.image;
      }
      await article.save();
      res.status(200).send(article);
    } else {
      res
        .status(401)
        .send({ Message: "Not Authorized to perform this operation" });
    }
  } catch (err) {
    res.status(404).send({ error: "We couldn't find that article " });
    // console.log(err);
  }
});

module.exports = router;
