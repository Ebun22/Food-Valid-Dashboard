import { Navbar } from "../components"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-row w-full h-full">
            <Navbar />
            <div className="m-12 w-full h-full">
                {children}
            </div>
        
        </div>
    )
}
