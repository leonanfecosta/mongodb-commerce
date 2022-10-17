db.produtos.find(
  {
    $or: [{ curtidas: 36 }, { vendidos: 85 }],
  },
  {
    _id: 0,
    nome: true,
    vendidos: true,
    curtidas: true,
  }
);
