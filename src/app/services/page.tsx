import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Explore our comprehensive range of digital services including web development, mobile apps, UI/UX design, and cloud solutions.",
    openGraph: {
        title: "Services | Brand",
        description:
            "Explore our comprehensive range of digital services including web development, mobile apps, UI/UX design, and cloud solutions.",
    },
};

export default function ServicesPage() {
    return <ServicesContent />;
}
