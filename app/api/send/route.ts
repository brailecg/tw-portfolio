import path from "path";
import { promises as fs } from "fs";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendResume(requestorEmail: string) {
  const filePath = path.resolve("./public/brailegawigawen.pdf");
  // Read the file and encode it in Base64
  const fileContent = await fs.readFile(filePath, "base64");

  try {
    const { data, error } = await resend.emails.send({
      from: "Braile Gawigawen <resume@brailegawigawen.com>",
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

export async function POST(request: Request) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const { requestorEmail, gRecaptchaToken } = await request.json();

  const recaptchaData = `secret=${secretKey}&response=${gRecaptchaToken}`;

  let res;
  try {
    res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      body: recaptchaData,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return Response.json({ status: 500 });
        }
        return response.json(); // assuming the response is JSON
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  } catch (e) {
    return Response.json({ status: 500 });
  }

  if (res && res?.success && res?.score > 0.5) {
    return sendResume(requestorEmail);
  }
}
