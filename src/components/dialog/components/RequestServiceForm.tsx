import ErrorIcon from "@/app/contact-us/icons/ErrorIcon";
import LoaderIcon from "@/app/home/icons/LoaderIcon";
import Button from "@/components/UI-primitives/button";
import ErrorText from "@/components/UI-primitives/text/ErrorText";
import { DialogClose } from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/content/services";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export interface ServiceRequest {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
}

export default function RequestServiceForm() {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ServiceRequest>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const submitServiceForm = async (data: ServiceRequest) => {
    console.log("App data", data);
    const res = await fetch("/api/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log("response :: ", res);
    if (res.ok) {
      reset();
      toast.success("Request successfully sent");
    } else {
      toast.error("Something went wrong, please try again");
    }
  };

  return (
    <form onSubmit={handleSubmit(submitServiceForm)} className="flex flex-col gap-brand-spacing">
      {errors.root?.message && (
        <div className="bg-red-200 p-3 rounded-brand-radius flex items-center gap-brand-spacing-xs">
          <ErrorIcon />
          <ErrorText>{errors.root?.message}</ErrorText>
        </div>
      )}
      <FieldGroup>
        <FieldSet>
          <FieldGroup className="flex flex-col gap-brand-spacing-sm">
            <Controller
              name="fullName"
              control={control}
              rules={{
                required: "Please fill in your Full Name",
                minLength: { value: 3, message: "You must have more than 3 characters" },
              }}
              render={({ field }) => (
                <Field className="flex flex-col gap-y-2">
                  <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
                  <Input {...field} id="fullName" type="text" placeholder="John Doe" required />
                  {errors.fullName && <ErrorText>{errors.fullName.message}</ErrorText>}
                </Field>
              )}
            />

            <Controller
              name="email"
              control={control}
              rules={{ required: "Please fill in your Email" }}
              render={({ field }) => (
                <Field className="flex flex-col gap-y-2">
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input {...field} id="email" type="email" placeholder="you@example.com" required />
                  {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                </Field>
              )}
            />

            <Controller
              name="phone"
              control={control}
              rules={{
                required: "Please fill in your Phone Number",
                minLength: { value: 10, message: "Enter a valid Phone Number" },
              }}
              render={({ field }) => (
                <Field className="flex flex-col gap-y-2">
                  <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                  <Input {...field} id="phone" type="tel" placeholder="+254 7** *** ***" required />
                  {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
                </Field>
              )}
            />

            <Controller
              name="service"
              control={control}
              rules={{ required: "Please select a service" }}
              render={({ field }) => (
                <Field className="flex flex-col gap-y-2">
                  <FieldLabel htmlFor="service">Service</FieldLabel>
                  <Select onValueChange={field.onChange} {...field} defaultValue="">
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
                  {errors.service && <ErrorText>{errors.service.message}</ErrorText>}
                </Field>
              )}
            />
          </FieldGroup>
        </FieldSet>

        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <Field className="flex flex-col gap-y-2">
              <FieldLabel htmlFor="message">Additional Message (Optional)</FieldLabel>
              <Textarea {...field} id="message" placeholder="Add any additional comments" className="resize-none" />
              {errors.message && <ErrorText>{errors.message.message}</ErrorText>}
            </Field>
          )}
        />
      </FieldGroup>
      <Field
        orientation="horizontal"
        className="flex flex-col justify-end sm:flex-row pt-6 items-center sm:gap-brand-spacing"
      >
        <Button
          disabled={isSubmitting}
          type="submit"
          className="w-full sm:w-fit"
          leftIcon={isSubmitting && <LoaderIcon className="fill-brand-white" />}
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </Button>
        <DialogClose asChild>
          <Button type="button" variant="transparent" className="w-full sm:w-fit">
            Cancel
          </Button>
        </DialogClose>
      </Field>
    </form>
  );
}
