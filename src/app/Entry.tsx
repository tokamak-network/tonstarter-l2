import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
export default function Entry({ children }: { children: React.ReactNode }) {
    return (
        <>
        <Header/>
        {children}
        <Footer />
        </>
        

    )
}