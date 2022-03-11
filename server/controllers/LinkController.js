const linkService = require("../services/LinkService");

async function get(req, res) {
  res.json(await linkService.getAll());
}

async function create(req, res) {
  const link = req.body;
  res.json(await linkService.create(link));
}

async function getByLink(req, res) {
  const link = req.body;
  res.json(await linkService.getByLink(link));
}

module.exports = { get, create, getByLink };
