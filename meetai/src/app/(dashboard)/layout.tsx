import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSideBar } from "@/modules/dashboard/ui/components/dashboard-sidebar";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return ( 
        <SidebarProvider>
            <DashboardSideBar />
            <main className="flex flex-col h-screen">
                {children}
            </main>
        </SidebarProvider>
     );
}
 
export default Layout;