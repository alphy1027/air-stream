import { Img, Link } from "@react-email/components";

export const baseUrl = process.env.SITE_URL ? `${process.env.SITE_URL}` : "localhost:3000";

export default function EmailHeader() {
  return (
    <Link style={logo} target="_blank" href={baseUrl}>
      <Img
        style={{ margin: "0 auto" }}
        src={`${baseUrl}/images/airstream-logo.png`}
        width="172"
        height="48"
        alt="Airstream logo"
      />
    </Link>
  );
}

const logo = {
  margin: "20px auto",
  fontSize: "24px",
  fontWeight: "800",
  width: "fit-content",
};
