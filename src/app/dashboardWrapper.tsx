"use client";
import React from "react";
import Navbar from "@/components/Navbar/navbar";
import Sidebar from "@/components/Sidebar/sidebar";
import { useAppSelector } from "@/redux/hooks";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const DashboardLayout = ({children}: {children:React.ReactNode}) => {
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

    return (
        <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
            <Sidebar/>

            <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${isSidebarCollapsed ? "" : "md:pl-64"}`}>
                <Navbar/>
                {children}
            </main>
        </div>
    );
}

const DashboardWrapper = ({children}: {children: React.ReactNode}) => {
    return (
        <Provider store={store}>
            <DashboardLayout>
                {children}
            </DashboardLayout>
        </Provider>
    );
}

export default DashboardWrapper;