import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../../components/ui/sidebar";

type NavItem = {
  title: string;
  url: string;
  icon: React.ComponentType<any>;
};

type Props = {
  items: NavItem[];
  collapsed?: boolean;
};

export default function SidebarNav({ items, collapsed }: Props) {
  return (
    <SidebarContent className="px-3">
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild tooltip={item.title}>
                  <NavLink
                    to={item.url}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-md px-3 py-2 transition-all duration-200 ${
                        isActive
                          ? "bg-[#BEDBFF]  font-semibold"
                          : "text-[#BEDBFF] hover:bg-slate-50 hover:text-[#BEDBFF]"
                      }`
                    }
       
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    {!collapsed && <span className="text-[13px] leading-none">{item.title}</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
}
