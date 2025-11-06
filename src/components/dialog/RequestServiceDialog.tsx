import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Button from "../UI-primitives/button";
import Text from "../UI-primitives/text/Text";
import { services } from "@/content/services";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function RequestServiceDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Request service</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-brand-spacing-lg flex flex-col gap-y-brand-spacing">
        <DialogHeader>
          <DialogTitle asChild>
            <h3>Request a Service</h3>
          </DialogTitle>
          <DialogDescription asChild>
            <Text>Fill in your details below and our team will get back to you shortly.</Text>
          </DialogDescription>
        </DialogHeader>
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldGroup className="flex flex-col gap-brand-spacing-sm">
                <Field className="flex flex-col gap-y-2">
                  <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
                  <Input id="fullName" type="text" placeholder="John Doe" required />
                </Field>

                <Field className="flex flex-col gap-y-2">
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </Field>

                <Field className="flex flex-col gap-y-2">
                  <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                  <Input id="phone" type="tel" placeholder="+254 7** *** ***" required />
                </Field>

                <Field className="flex flex-col gap-y-2">
                  <FieldLabel htmlFor="service">Service</FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.link} value={service.title}>
                          {service.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </FieldGroup>
            </FieldSet>

            <FieldSet>
              <FieldGroup>
                <Field className="flex flex-col gap-y-2">
                  <FieldLabel htmlFor="message">Additional Message (Optional)</FieldLabel>
                  <Textarea id="message" placeholder="Add any additional comments" className="resize-none" />
                </Field>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </form>
        <DialogFooter className="flex justify-end items-center gap-brand-spacing">
          <DialogClose asChild>
            <Button variant="transparent" className="">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
