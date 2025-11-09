import { ServiceRequest } from "@/components/dialog/components/RequestServiceForm";
import { Text, Heading } from "@react-email/components";
import * as React from "react";
import { EmailTemplate } from "./EmailTemplate";

export default function RequestServiceTemplate({ serviceData }: { serviceData: ServiceRequest }) {
  return (
    <EmailTemplate>
      <Heading as="h2">Service Request for: {serviceData.service}</Heading>
      <Text>
        From: <span style={{ fontWeight: "bold" }}>{serviceData.fullName}</span>
      </Text>
      <Text>
        Email: <span style={{ fontWeight: "bold" }}>{serviceData.email}</span>
      </Text>
      <Text>
        Phone: <span style={{ fontWeight: "bold" }}>{serviceData.phone}</span>
      </Text>
      <Text>
        Message: <span style={{ fontWeight: "bold" }}>{serviceData.message}</span>
      </Text>
    </EmailTemplate>
  );
}
