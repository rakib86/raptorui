"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const topics = [
  "Overview",
  "Installation",
  "Usage",
  "Props",
  "Examples",
  "Accessibility",
  "API Reference",
]

export default function RightSidebar() {
  return (
    <Sidebar side="right" className="border-l">
      <SidebarHeader>
        <h2 className="text-lg font-semibold">Topics</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {topics.map((topic) => (
            <SidebarMenuItem key={topic}>
              <SidebarMenuButton asChild>
                <a href={`#${topic.toLowerCase().replace(" ", "-")}`}>{topic}</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

