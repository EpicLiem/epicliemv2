export async function POST(req: Request, res: Response) {
  const { name, email, message } = req.body;

  const contact = await Contact.create({
    name,
    email,
    message,
  });

  return res.status(200).json(contact);
}
