import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import AppMainHead from "@/components/section/AppMainHead";
import CallToAction from "@/components/section/CallToAction";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppMainHead />
      <Header />
      <main className="flex-1 flex flex-col pb-brand-spacing gap-y-brand-spacing-2xl">
        <>{children}</>
        <CallToAction />
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            removeDelay: 1000,
            style: {
              background: "#fff",
              color: "#363636",
              borderRadius: "4px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
