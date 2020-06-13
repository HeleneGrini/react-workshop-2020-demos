export default (req, res) => {
  const items = [
    {
      label: "Brød",
      id: "1",
    },
    {
      label: "Epler",
      id: "2",
    },
    {
      label: "Ost",
      id: "3",
    },
    {
      label: "Banan",
      id: "4",
    },
    {
      label: "Havregryn",
      id: "5",
    },
    {
      label: "Peanøttsmør",
      id: "6",
    },
    {
      label: "Tomat",
      id: "7",
    },
  ];
  // res.status(500).send("Internal server error");
  setTimeout(() => res.send(items), 3000);
};
