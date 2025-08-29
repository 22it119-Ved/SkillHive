import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export default function Login() {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const response = await fetch(`${API_URL}/auth/login`, {
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
					title: `Login Successful (${data.user.role})`,
					description: `Welcome back, ${data.user.name}!`,
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
					title: "Login Failed",
					description: data.message || "Invalid credentials",
					variant: "destructive",
				});
			}
		} catch (error) {
			toast({
				title: "Login Failed",
				description: "Network error. Please try again.",
				variant: "destructive",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div style={{ padding: 32 }}>
			<h1 style={{ fontSize: 32, fontWeight: "bold" }}>Login</h1>
			<form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, maxWidth: 320 }}>
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
					onChange={(e) =>
						setFormData({ ...formData, password: e.target.value })
					}
					required
				/>
				<button type="submit" disabled={isLoading}>
					{isLoading ? "Signing in..." : "Sign in"}
				</button>
			</form>
		</div>
	);
}