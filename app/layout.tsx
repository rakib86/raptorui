import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import LeftSidebar from "@/components/left-sidebar"
import RightSidebar from "@/components/right-sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "shadcn/ui Clone",
  description: "A clone of shadcn/ui documentation site",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex h-screen overflow-hidden">
            <LeftSidebar />
            <main className="flex-1 overflow-auto">
              <div className="container mx-auto max-w-4xl py-6 px-4">
                {children}
              </div>
            </main>
            <RightSidebar />
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}