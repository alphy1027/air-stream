import { Img, Link, Section } from "@react-email/components";

export const baseUrl = process.env.SITE_URL ? `https://${process.env.SITE_URL}` : "";

export default function EmailHeader() {
  return (
    <Section>
      <Link style={logo} target="_blank" href={baseUrl}>
        <Img src={`${baseUrl}/images/airstream-logo.png`} width="198" height="40" alt="Airstream logo" />
      </Link>
    </Section>
  );
}
const logo = {
  margin: "0 auto",
  fontSize: "24px",
  fontWeight: "800",
  width: "fit-content",
};
