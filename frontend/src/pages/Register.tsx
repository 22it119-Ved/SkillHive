import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export default function Register() {
	const [formData, setFormData] = useState({ 
		name: "", 
		email: "", 
		password: "", 
		role: "student" 
	});
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const response = await fetch(`${API_URL}/auth/signup`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok) {
				// Store user data in localStorage
				localStorage.setItem("userRole", data.user.role);
				localStorage.setItem("userName", data.user.name);
				localStorage.setItem("userEmail", data.user.email);
				localStorage.setItem("token", data.token);

				toast({
					title: `Registration Successful (${data.user.role})`,
					description: `Welcome, ${data.user.name}!`,
				});

				// Redirect based on role
				if (data.user.role === "student") {
					navigate("/student-dashboard");
				} else if (data.user.role === "faculty") {
					navigate("/faculty-dashboard");
				} else {
					navigate("/dashboard"); // fallback
				}
			} else {
				toast({
					title: "Registration Failed",
					description: data.error || "Registration failed",
					variant: "destructive",
				});
			}
		} catch (error) {
			toast({
				title: "Registration Failed",
				description: "Network error. Please try again.",
				variant: "destructive",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div style={{ padding: 32 }}>
			<h1 style={{ fontSize: 32, fontWeight: "bold" }}>Register</h1>
			<p style={{ margin: "16px 0" }}>Create your account.</p>
			
			<form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, maxWidth: 320 }}>
				<input
					type="text"
					placeholder="Full Name"
					value={formData.name}
					onChange={(e) => setFormData({ ...formData, name: e.target.value })}
					required
				/>
				<input
					type="email"
					placeholder="Email"
					value={formData.email}
					onChange={(e) => setFormData({ ...formData, email: e.target.value })}
					required
				/>
				<input
					type="password"
					placeholder="Password"
					value={formData.password}
					onChange={(e) => setFormData({ ...formData, password: e.target.value })}
					required
				/>
				<select
					value={formData.role}
					onChange={(e) => setFormData({ ...formData, role: e.target.value })}
					style={{ padding: 8, borderRadius: 4, border: "1px solid #d1d5db" }}
				>
					<option value="student">Student</option>
					<option value="faculty">Faculty</option>
				</select>
				<button type="submit" disabled={isLoading}>
					{isLoading ? "Creating account..." : "Create Account"}
				</button>
			</form>
		</div>
	);
}