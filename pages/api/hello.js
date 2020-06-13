export default (req, res) => {
  return setTimeout(() => res.send({ message: "Hello world" }), 3000);
};
