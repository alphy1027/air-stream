import { FormInputs } from "@/app/contact-us/components/ContactForm";
import { Resend } from "resend";
import ContactEmailTemplate from "@/components/emails/templates/ContactEmailTemplate";
import { contact } from "@/content/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const formData: FormInputs = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: `Airstream Cooling Systems Ltd <${contact.info.email}>`,
      to: [contact.info.email2],
      subject: "New Contact form submission",
      replyTo: formData.email,
      react: ContactEmailTemplate({ formData }),
    });

    if (error) {
      console.log("Email Error :: ", error.message);
      return Response.json({ success: false, error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.log("Email Error :: ", error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}
