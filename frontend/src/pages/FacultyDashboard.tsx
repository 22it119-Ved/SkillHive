import React, { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";

export default function FacultyDashboard() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    setName(localStorage.getItem("userName"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div style={{ padding: 32 }}>
      <h1 style={{ fontSize: 32, fontWeight: "bold" }}>Faculty Dashboard</h1>
      <p style={{ margin: "16px 0" }}>
        Welcome {name}! Manage your courses and students here.
      </p>
      
      <div style={{ display: "grid", gap: 16, marginTop: 24 }}>
        <div style={{ 
          border: "1px solid #e5e7eb", 
          borderRadius: 8, 
          padding: 16,
          backgroundColor: "#f9fafb"
        }}>
          <h3 style={{ margin: "0 0 8px 0", fontWeight: "bold" }}>My Courses</h3>
          <p style={{ margin: 0, color: "#6b7280" }}>Manage your teaching courses</p>
          <Button style={{ marginTop: 12 }} onClick={() => alert("Manage Courses Clicked!")}>
            Manage Courses
          </Button>
        </div>

        <div style={{ 
          border: "1px solid #e5e7eb", 
          borderRadius: 8, 
          padding: 16,
          backgroundColor: "#f9fafb"
        }}>
          <h3 style={{ margin: "0 0 8px 0", fontWeight: "bold" }}>Students</h3>
          <p style={{ margin: 0, color: "#6b7280" }}>View and manage your students</p>
          <Button style={{ marginTop: 12 }} onClick={() => alert("View Students Clicked!")}>
            View Students
          </Button>
        </div>

        <div style={{ 
          border: "1px solid #e5e7eb", 
          borderRadius: 8, 
          padding: 16,
          backgroundColor: "#f9fafb"
        }}>
          <h3 style={{ margin: "0 0 8px 0", fontWeight: "bold" }}>Assignments</h3>
          <p style={{ margin: 0, color: "#6b7280" }}>Create and grade assignments</p>
          <Button style={{ marginTop: 12 }} onClick={() => alert("Manage Assignments Clicked!")}>
            Manage Assignments
          </Button>
        </div>

        <div style={{ 
          border: "1px solid #e5e7eb", 
          borderRadius: 8, 
          padding: 16,
          backgroundColor: "#f9fafb"
        }}>
          <h3 style={{ margin: "0 0 8px 0", fontWeight: "bold" }}>Analytics</h3>
          <p style={{ margin: 0, color: "#6b7280" }}>View course analytics and reports</p>
          <Button style={{ marginTop: 12 }} onClick={() => alert("View Analytics Clicked!")}>
            View Analytics
          </Button>
        </div>
      </div>

      <Button 
        style={{ marginTop: 24 }} 
        onClick={handleLogout}
        variant="outline"
      >
        Logout
      </Button>
    </div>
  );
}
