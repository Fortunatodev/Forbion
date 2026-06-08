import Dashboard from "@/components/marketing/dashboard";
import React from 'react'
import { generateMetadata as baseMeta } from "@/utils";

export const metadata = baseMeta({ noIndex: true });

const DashboardPage = () => {
    return (
        <div className="w-screen h-screen">
            <Dashboard />
        </div>
    )
};

export default DashboardPage;

