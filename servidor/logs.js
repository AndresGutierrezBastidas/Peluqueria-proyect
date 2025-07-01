import winston from 'winston';
import fs from 'fs';
import path from 'path';
import DailyRotateFile from 'winston-daily-rotate-file';

// Definir la ruta de los logs
const logsDirectory = path.join('C:', 'Users', 'epsil', 'OneDrive', 'Escritorio', 'logstest');

// Crear el directorio si no existe
if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory, { recursive: true });
}

// Función para formatear la fecha con día de la semana
const getDetailedDate = () => {
    const now = new Date();
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const dayName = days[now.getDay()];
    return `${dayName}, ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
};

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(info => {
            return `[${getDetailedDate()}] [${info.level.toUpperCase()}]: ${info.message}`;
        })
    ),
    transports: [
        // Archivo de errores (rotación diaria)
        new DailyRotateFile({
            filename: path.join(logsDirectory, 'error-%DATE%.txt'),
            datePattern: 'YYYY-MM-DD',
            level: 'error',
            zippedArchive: true, // Opcional: comprimir archivos viejos
            maxSize: '5m', // Opcional: tamaño máximo por archivo
            maxFiles: '30d' // Opcional: conservar logs por 30 días
        }),
        // Archivo combinado (rotación diaria)
        new DailyRotateFile({
            filename: path.join(logsDirectory, 'combined-%DATE%.txt'),
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '5m',
            maxFiles: '30d'
        })
    ]
});

// Configuración para consola (con colores)
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.printf(info => {
                return `[${getDetailedDate()}] ${info.level}: ${info.message}`;
            })
        )
    }));
}

export default logger;