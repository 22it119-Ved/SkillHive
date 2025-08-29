import React, { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";

export default function Dashboard() {
  const [role, setRole] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    setRole(localStorage.getItem("userRole"));
    setName(localStorage.getItem("userName"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    window.location.href = "/login";
  };

  if (role === "admin") {
    return (
      <div style={{ padding: 32 }}>
        <h1 style={{ fontSize: 32, fontWeight: "bold" }}>Welcome back, Admin! 👋</h1>
        <p style={{ margin: "16px 0" }}>This is the admin dashboard. You can manage users, courses, and more.</p>
        <Button style={{ marginBottom: 16 }} onClick={() => alert("Create Course Clicked!")}>Create Course</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    );
  }

  return (
    <div style={{ padding: 32 }}>
      <h1 style={{ fontSize: 32, fontWeight: "bold" }}>Welcome back, {name || "User"}! 👋</h1>
      <p style={{ margin: "16px 0" }}>Continue your learning journey and track your progress.</p>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
} 