import { ServiceRequest } from "@/components/dialog/components/RequestServiceForm";
import { Text, Heading } from "@react-email/components";
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
    </EmailTemplate>
  );
}

const span = {
  fontWeight: "bold",
  fontSize: "20px",
};
