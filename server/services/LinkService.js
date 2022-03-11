const Link = require("../models/Link");

class LinkService {
  async getAll() {
    return Link.find();
  }

  async getByLink(slug) {
    const result = await Link.find({ slug });
    return result;
  }

  async create(link) {
    const existingLink = await Link.find({ slug: link.slug });
    if (existingLink) {
      throw new Error("Existing link");
    } else {
      const newLink = new Link(link);
      return await newLink.save();
    }
  }
}

module.exports = new LinkService();
