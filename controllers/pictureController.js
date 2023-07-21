const fs = require("fs");
const Picture = require("../models/Picture");

exports.create = async (req, res) => {
  try {
    const {
      name,
      idade,
      descricao,
      uf,
      cidade,
      adotado,
    } = req.body;

    const file = req.file;
    const picture = new Picture({
      name,
      foto: file.path,
      idade,
      descricao,
      uf,
      cidade,
      adotado
    });

    await picture.save();
    res.json(picture);
  } catch (err) {
    res.status(500).json({ message: "Erro ao salvar a imagem." });
  }
};

exports.remove = async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id);
    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }
    fs.unlinkSync(picture.foto);
    await picture.remove();
    res.json({ message: "Imagem removida com sucesso" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao remover a imagem" });
  }
};

exports.findAll = async (req, res) => {
  try {
    const pictures = await Picture.find();
    res.json(pictures);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar as imagens." });
  }
};