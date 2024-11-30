"use client"

import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const components = [
  "Accordion",
  "Alert",
  "AlertDialog",
  "AspectRatio",
  "Avatar",
  "Badge",
  "Button",
  "Calendar",
  "Card",
  "Checkbox",
  "Collapsible",
  "Command",
  "ContextMenu",
  "Dialog",
  "DropdownMenu",
  "Form",
  "HoverCard",
  "Input",
  "Label",
  "Menubar",
  "NavigationMenu",
  "Popover",
  "Progress",
  "RadioGroup",
  "ScrollArea",
  "Select",
  "Separator",
  "Sheet",
  "Skeleton",
  "Slider",
  "Switch",
  "Table",
  "Tabs",
  "Textarea",
  "Toast",
  "Toggle",
  "Tooltip",
]

export default function LeftSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r">
      <SidebarHeader>
        <Button variant="ghost" className="w-full justify-start text-lg font-bold">
          shadcn/ui Clone
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {components.map((component) => (
            <SidebarMenuItem key={component}>
              <SidebarMenuButton asChild>
                <Link
                  href={`/components/${component.toLowerCase()}`}
                  className={cn(
                    "w-full",
                    pathname === `/components/${component.toLowerCase()}` && "bg-accent"
                  )}
                >
                  {component}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

