import { loginUser } from "../services/usuariosService.js";



export async function iniciarSesion(req, res) {
    try {
        const { email, password } = req.params

        const response = await loginUser(email, password);

        if (response.email === email && response.password === password) {

            res.status(200).json(response)
        } else {
            res.status(401).json({ message: 'Credenciales inválidas' });
        }
    } catch (error) {
        console.error("Error en createServicio:", error.message);
        res.status(500).json({ error: 'Hubo un error al iniciar sesión' });
    }
}
