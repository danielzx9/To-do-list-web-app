import { useState, useContext } from "react";
import { AuthContext } from "../AuthContext.jsx";
import axios from "../utils/axiosInstance.js";
import Button from "../components/ui/Button.jsx";
import Input from "../components/ui/Input.jsx";

export default function Login() {
    const [form, setForm] = useState({ username: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            const res = await axios.post("auth/login", form);
            login(res.data.token);
        } catch (err) {
            alert("Error en el login. Verifica tus credenciales.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
            <h2 className="text-xl font-bold text-center mb-6 text-gray-800">
                Iniciar sesión
            </h2>
            
            <div className="form-group">
                <label className="form-label">Usuario</label>
                <Input
                    placeholder="Ingresa tu nombre de usuario"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                    required
                    disabled={isLoading}
                    className="form-input"
                />
            </div>
            
            <div className="form-group">
                <label className="form-label">Contraseña</label>
                <Input
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                    disabled={isLoading}
                    className="form-input"
                />
            </div>
            
            <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isLoading}
                className="btn btn-primary w-full"
            >
                {isLoading ? (
                    <>
                        <span className="loading-spinner mr-2"></span>
                        Iniciando...
                    </>
                ) : (
                    'Entrar'
                )}
            </Button>
        </form>
    );
}

