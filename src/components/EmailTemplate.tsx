import { FormInputs } from "@/app/contact-us/components/ContactForm";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface TemplateProps {
  formData: FormInputs;
}

const baseUrl = process.env.SITE_URL ? `https://${process.env.SITE_URL}` : "";

export const EmailTemplate = ({ formData }: TemplateProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>HVAC Services in Kenya.</Preview>
      <Container style={container}>
        <Link style={logo} href={baseUrl}>
          <Heading as="h1" className="text-center">
            Air<Text style={logoSpan}>stream</Text>
          </Heading>
        </Link>
        <Text style={subheading}>New Contact Form Submission from Website</Text>
        <Text style={paragraph}>From: {formData.fullName}</Text>
        <Text style={paragraph}>Email: {formData.email}</Text>
        <Text style={paragraph}>Message:</Text>
        <Text style={paragraph}>{formData.message}</Text>
        <Section style={btnContainer}>
          <Button style={button} href={baseUrl}>
            Open Site
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The Airstream team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Ambank House 13th Floor, Suite 14 | University Way P.O Box 53025-00200, Nairobi</Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 8px 48px",
};

const logo = {
  margin: "0 auto",
  fontSize: "24px",
  fontWeight: "800",
  width: "fit-content",
};

const logoSpan = {
  color: "#0344dc",
};

const subheading = {
  fontSize: "18px",
  lineHeight: "26px",
  fontWeight: "700",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#0344dc",
  borderRadius: "4px",
  color: "#fff",
  margin: "0 auto",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px 32px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
