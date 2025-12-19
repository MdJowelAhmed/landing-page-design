import Link from "next/link";

const footerLinks = {
    content: [
        { href: "/", label: "Home" },
        { href: "/services", label: "Our Service" },
        { href: "/contact", label: "Contact Us" },
        { href: "/about", label: "About Us" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-[#F8F6F3] border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center space-x-3">
                            {/* Logo Icon */}
                            <div className="w-12 h-12 rounded-full border-2 border-[#0D9488] flex items-center justify-center">
                                <svg className="w-7 h-7 text-[#0D9488]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                        </Link>
                        <h3 className="mt-4 text-xl font-bold text-[#1E293B]">
                            Duty Hour App
                        </h3>
                        <p className="text-sm text-[#64748B] font-medium">
                            Built for Operational Integrity
                        </p>
                        <p className="mt-4 text-sm text-[#64748B] max-w-sm">
                            The Duty Hour App is committed to delivering the most accurate, fraud-proof attendance data available to businesses worldwide.
                        </p>
                    </div>

                    {/* Content Links */}
                    <div className="md:col-span-1 md:mx-auto">
                        <h3 className="text-sm font-semibold text-[#1E293B] mb-4">
                            Content
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.content.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[#64748B] hover:text-[#0D9488] transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Download Section */}
                    <div className="md:col-span-1">
                        <p className="text-sm text-[#64748B] mb-4">
                            Get Exclusive News On New Features And Subscription Offers.
                        </p>
                        <h3 className="text-sm font-semibold text-[#1E293B] mb-4">
                            Download Now
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {/* App Store Button */}
                            <a
                                href="#"
                                className="inline-flex items-center px-4 py-2 bg-[#1E293B] text-white rounded-lg hover:bg-[#0F172A] transition-colors"
                            >
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-[10px] leading-none">Download on the</div>
                                    <div className="text-sm font-semibold leading-tight">Apple Store</div>
                                </div>
                            </a>
                            {/* Google Play Button */}
                            <a
                                href="#"
                                className="inline-flex items-center px-4 py-2 bg-[#1E293B] text-white rounded-lg hover:bg-[#0F172A] transition-colors"
                            >
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-[10px] leading-none">Get it on</div>
                                    <div className="text-sm font-semibold leading-tight">Google Play</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-[#64748B]">
                            © {new Date().getFullYear()} Duty Hour App. All rights reserved.
                        </p>
                        <p className="text-sm text-[#64748B]">
                            Built for Operational Integrity
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
