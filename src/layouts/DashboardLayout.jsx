import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <>
    
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
}
