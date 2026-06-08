import Footer from "@/components/marketing/footer";
import Navbar from "@/components/marketing/navbar";
import JsonLd from "@/components/global/json-ld";

const MarketingLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <main className="w-full relative">
            <JsonLd />
            <Navbar />
            {children}
            <Footer />
        </main>
    );
};

export default MarketingLayout;
