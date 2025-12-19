import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about our company, mission, vision, and the team behind our innovative digital solutions. Discover what drives us to deliver excellence.",
    openGraph: {
        title: "About Us | Brand",
        description:
            "Learn about our company, mission, vision, and the team behind our innovative digital solutions.",
    },
};

export default function AboutPage() {
    return <AboutContent />;
}
