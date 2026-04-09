import { contact } from "@/content/contact";
import WhatsappIcon from "./icons/WhatsappIcon";

export default function WhatsappFixedIcon() {
  return (
    <a
      href={`https://wa.me/${contact.info.whatsapp}?text=Hi%2C%20I%E2%80%99m%20interested%20in%20your%20HVAC%20and%20refrigeration%20services.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 hover:scale-105 duration-300 ease-in"
    >
      <WhatsappIcon />
    </a>
  );
}
