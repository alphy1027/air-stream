import { Resend } from "resend";
import { ServiceRequest } from "@/components/dialog/components/RequestServiceForm";
import RequestServiceTemplate from "@/components/emails/templates/RequestServiceTemplate";
import { contact } from "@/content/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const serviceData: ServiceRequest = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: `Airstream Cooling Systems Ltd <${contact.info.email}>`,
      to: [contact.info.email],
      subject: "New Service Request ",
      replyTo: serviceData.email,
      react: RequestServiceTemplate({ serviceData }),
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
