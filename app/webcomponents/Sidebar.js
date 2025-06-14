// SidebarLayout.jsx
import React from "react";
import Footer from "../webcomponents/Footer";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, PhoneIncoming, UserRound, TrendingUp,Landmark } from "lucide-react";

export default function SidebarLayout({ component, bgImage}) {
  const items = [
    { title: "Home", url: "/", icon: Home },
    { title: "Buy Properties", url: "./../buy", icon: TrendingUp },
    { title: "Sell Properties", url: "./../sell", icon: Landmark },
    { title: "ContactUs", url: "./../contact", icon: PhoneIncoming },
    { title: "Profile", url: "./../admindash", icon: UserRound },
  ];

  return (
    <>
      <SidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main
          style={{
            width: "100%",
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <SidebarTrigger />
          {component}
        </main>
      </SidebarProvider>
    </>
  );
}
