export default function handler(req, res) {
  const { name, email, message } = req.body;
  console.log(name, email, message);
  res.status(200).json({ status: "OK" });
}
