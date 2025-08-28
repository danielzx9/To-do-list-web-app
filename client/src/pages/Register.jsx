import { useState } from "react";
import axios from "../utils/axiosInstance.js";
import Button from "../components/ui/Button.jsx";
import Input from "../components/ui/Input.jsx";

export default function Register() {
    const [form, setForm] = useState({ username: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            await axios.post("auth/register", form);
            alert("Registro exitoso! Ahora puedes iniciar sesión.");
            setForm({ username: "", password: "" });
        } catch (err) {
            alert("Error en el registro. El usuario ya existe o hay un problema.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
            <h2 className="text-xl font-bold text-center mb-6 text-gray-800">
                Registrarse
            </h2>
            
            <div className="form-group">
                <label className="form-label">Usuario</label>
                <Input
                    placeholder="Elige un nombre de usuario"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                    required
                    disabled={isLoading}
                    className="form-input"
                    minLength={3}
                />
            </div>
            
            <div className="form-group">
                <label className="form-label">Contraseña</label>
                <Input
                    type="password"
                    placeholder="Elige una contraseña segura"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                    disabled={isLoading}
                    className="form-input"
                    minLength={6}
                />
            </div>
            
            <Button
                type="submit"
                variant="success"
                size="lg"
                disabled={isLoading}
                className="btn btn-success w-full"
            >
                {isLoading ? (
                    <>
                        <span className="loading-spinner mr-2"></span>
                        Registrando...
                    </>
                ) : (
                    'Registrarse'
                )}
            </Button>
        </form>
    );
}
