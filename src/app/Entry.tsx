import Header from "@/components/global/Header";
export default function Entry({ children }: { children: React.ReactNode }) {
    return (
        <>
        <Header/>
        {children}
        </>
        

    )
}