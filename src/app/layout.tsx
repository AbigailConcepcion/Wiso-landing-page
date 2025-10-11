import type {Metadata}
from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({variable: "--font-geist-sans", subsets: ["latin"]});

const geistMono = Geist_Mono({variable: "--font-geist-mono", subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Wiso - International Services Organization",
    description: "Wiso provides professional digital solutions including web design, e-commerce, educational platforms, and custom web applications",
    icons: {
        icon: '/wiso.svg',
        shortcut: '/wiso.svg',
        apple: '/wiso.svg'
    }
};

export default function RootLayout({children} : Readonly < {
    children : React.ReactNode;
} >) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Imperial+Script&family=Dancing+Script:wght@400..700&family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet"/>
            </head>
            <body className={
                `${
                    geistSans.variable
                } ${
                    geistMono.variable
                } antialiased`
            }>
                <Header/>
                <main className="min-h-screen">
                    {children} </main>
                <WhatsAppButton/>
            </body>
        </html>
    );
}
