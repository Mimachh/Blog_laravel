import { PageProps } from '@/types';
import AdminLayout from '@/Layouts/AdminLayout';

const Dashboard = ({ auth }: PageProps) => {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome back, {auth.user.name}!</p>
        </div>

    );
}


Dashboard.layout = (page: React.ReactNode) => {
    return <AdminLayout>{page}</AdminLayout>;
  };
  
export default Dashboard;