import path from "path";
import { promises as fs } from "fs";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { requestorEmail } = await request.json();
  const filePath = path.resolve("./public/brailegawigawen.pdf");

  // Read the file and encode it in Base64
  const fileContent = await fs.readFile(filePath, "base64");

  try {
    const { data, error } = await resend.emails.send({
      from: "Braile Gawigawen <resume@brailegawigawen.dev>",
      to: [requestorEmail],
      subject: "Resume: Braile Gawigawen",
      text: "Hi! Here's a copy of my resume. You can reach out to me at braile.c.gawigawen@gmail.com",
      attachments: [
        {
          filename: "brailegawigawen.pdf",
          content: fileContent,
        },
      ],
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
