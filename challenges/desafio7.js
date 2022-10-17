db.produtos.find(
  {
    vendidos: { $ne: 50 },
    tags: { $exists: false },
  },
  {
    _id: 0,
    nome: true,
    vendidos: true,
  },
);
