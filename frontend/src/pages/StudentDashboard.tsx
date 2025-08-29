import React, { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";

export default function StudentDashboard() {
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
      <h1 style={{ fontSize: 32, fontWeight: "bold" }}>Student Dashboard</h1>
      <p style={{ margin: "16px 0" }}>
        Welcome {name}! Here are your courses and progress.
      </p>
      
      <div style={{ display: "grid", gap: 16, marginTop: 24 }}>
        <div style={{ 
          border: "1px solid #e5e7eb", 
          borderRadius: 8, 
          padding: 16,
          backgroundColor: "#f9fafb"
        }}>
          <h3 style={{ margin: "0 0 8px 0", fontWeight: "bold" }}>My Courses</h3>
          <p style={{ margin: 0, color: "#6b7280" }}>Continue your learning journey</p>
          <Button style={{ marginTop: 12 }} onClick={() => alert("View Courses Clicked!")}>
            View Courses
          </Button>
        </div>

        <div style={{ 
          border: "1px solid #e5e7eb", 
          borderRadius: 8, 
          padding: 16,
          backgroundColor: "#f9fafb"
        }}>
          <h3 style={{ margin: "0 0 8px 0", fontWeight: "bold" }}>Progress</h3>
          <p style={{ margin: 0, color: "#6b7280" }}>Track your learning progress</p>
          <Button style={{ marginTop: 12 }} onClick={() => alert("View Progress Clicked!")}>
            View Progress
          </Button>
        </div>

        <div style={{ 
          border: "1px solid #e5e7eb", 
          borderRadius: 8, 
          padding: 16,
          backgroundColor: "#f9fafb"
        }}>
          <h3 style={{ margin: "0 0 8px 0", fontWeight: "bold" }}>Assignments</h3>
          <p style={{ margin: 0, color: "#6b7280" }}>Check your pending assignments</p>
          <Button style={{ marginTop: 12 }} onClick={() => alert("View Assignments Clicked!")}>
            View Assignments
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
