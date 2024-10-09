"use client";

import { useState } from "react";
import { Header } from "@/app/(main)/dashboard/components/header";
import { Sidebar } from "@/app/(main)/dashboard/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 lg:pl-72">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex-1">
          <div className="h-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
