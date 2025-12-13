"use client";
import Input from "@/components/UI-primitives/input/Input";
import TextArea from "@/components/UI-primitives/input/TextArea";
import Button from "@/components/UI-primitives/button";
import { useForm } from "react-hook-form";
import ErrorText from "@/components/UI-primitives/text/ErrorText";
import ErrorIcon from "../icons/ErrorIcon";
import LoaderIcon from "@/app/home/icons/LoaderIcon";
import toast from "react-hot-toast";

export interface FormInputs {
  fullName: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>();

  const submitContactForm = async (data: FormInputs) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log("response :: ", res);
    if (res.ok) {
      reset();
      toast.success("Message sent successfully");
    } else {
      toast.error("Something went wrong, please try again");
    }
  };

  return (
    <form onSubmit={handleSubmit(submitContactForm)} className="card gap-y-brand-spacing-xs">
      {errors.root?.message && (
        <div className="bg-red-200 p-3 rounded-brand-radius flex items-center gap-brand-spacing-xs">
          <ErrorIcon />
          <ErrorText>{errors.root?.message}</ErrorText>
        </div>
      )}
      <Input
        disabled={isSubmitting}
        id="fullName"
        label="Full Name"
        type="text"
        error={errors.fullName?.message}
        placeholder="Full Name"
        {...register("fullName", {
          required: "This field is required",
          minLength: { message: "Name should be atleast 4 characters", value: 4 },
          maxLength: { message: "Name can not exceed 25 characters", value: 25 },
        })}
        required
        minLength={3}
      />
      <Input
        disabled={isSubmitting}
        id="email"
        label="Email"
        type="email"
        error={errors.email?.message}
        placeholder="Email"
        {...register("email", {
          required: "This field is required",
        })}
      />
      <TextArea
        disabled={isSubmitting}
        rows={4}
        id="message"
        label="Message"
        placeholder="Message"
        error={errors.message?.message}
        {...register("message", {
          required: "This field is required",
          minLength: { message: "Message is too short", value: 8 },
        })}
        required
        minLength={3}
      />
      <Button
        disabled={isSubmitting}
        leftIcon={isSubmitting ? <LoaderIcon className="fill-foreground-accent-btn" /> : null}
        type="submit"
        variant="accent"
        className="self-end mt-4"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
