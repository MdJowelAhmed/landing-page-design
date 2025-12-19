import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with us. We'd love to hear about your project and discuss how we can help you achieve your digital goals.",
    openGraph: {
        title: "Contact Us | Brand",
        description:
            "Get in touch with us. We'd love to hear about your project and discuss how we can help you achieve your digital goals.",
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
