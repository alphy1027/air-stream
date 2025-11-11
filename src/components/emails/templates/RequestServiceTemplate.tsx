import { ServiceRequest } from "@/components/dialog/components/RequestServiceForm";
import { Text, Heading, Button } from "@react-email/components";
import * as React from "react";
import { EmailTemplate } from "./EmailTemplate";

export default function RequestServiceTemplate({ serviceData }: { serviceData: ServiceRequest }) {
  return (
    <EmailTemplate>
      <Heading as="h2">Service Request for: {serviceData.service}</Heading>
      <Text>
        From: <span style={span}>{serviceData.fullName}</span>
      </Text>
      <Text>
        Email: <span style={span}>{serviceData.email}</span>
      </Text>
      <Text>
        Phone: <span style={span}>{serviceData.phone}</span>
      </Text>
      <Text>Message:</Text>
      <Text>{serviceData.message}</Text>
      <Button href={`tel:${serviceData.phone}`} style={button}>
        Call Now
      </Button>
    </EmailTemplate>
  );
}

const span = {
  fontWeight: "500",
  fontSize: "18px",
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
