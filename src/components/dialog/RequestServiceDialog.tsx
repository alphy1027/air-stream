import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "../UI-primitives/button";
import Text from "../UI-primitives/text/Text";
import RequestServiceForm from "./components/RequestServiceForm";

export default function RequestServiceDialog({ defaultService = "" }: { defaultService?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={`${!defaultService ? "w-fit" : "w-full"}`}>Request service</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-brand-spacing sm:p-brand-spacing-lg flex flex-col gap-y-brand-spacing">
        <DialogHeader>
          <DialogTitle asChild>
            <h3>Request a Service</h3>
          </DialogTitle>
          <DialogDescription asChild>
            <Text>Fill in your details below and our team will get back to you shortly.</Text>
          </DialogDescription>
        </DialogHeader>
        <RequestServiceForm defaultService={defaultService} />
      </DialogContent>
    </Dialog>
  );
}
