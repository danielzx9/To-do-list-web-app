import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [form, setForm] = useState({ username: "", password: "" });
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSummit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("auth/login", form);
            login(res.data.token);
            navigate("/");
        } catch (err) {
            alert("Login failed");
        }

    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80">
                <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>
                <input
                    className="w-full mb-2 p-2 border"
                    placeholder="Usuario"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                />
                <input
                    type="password"
                    className="w-full mb-4 p-2 border"
                    placeholder="Contraseña"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <button className="bg-blue-600 text-white w-full py-2 rounded">Entrar</button>
            </form>
        </div>
    );
}

