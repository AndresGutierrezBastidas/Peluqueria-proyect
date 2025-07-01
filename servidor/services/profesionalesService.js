import prisma from '../lib/prisma.js';
import  logger  from '../logs.js';

/**
 * Obtiene todos los profesionales registrados
 * @returns {Promise<Array<Profesional>>} Lista de profesionales
 * @throws {Error} Si ocurre un error en la consulta
 */
export async function getProfesionales() {
    try {
        const profesionales = await prisma.profesional.findMany();
        logger.info('Profesionales obtenidos correctamente', { count: profesionales.length });
        return profesionales;
    } catch (error) {
        logger.error(`Error en getProfesionales: ${error.message}`, {
            error,
            stack: error.stack
        });
        throw new Error('No se pudieron obtener los profesionales');
    }
}

/**
 * Obtiene profesionales por servicio
 * @param {number|string} servicioId - ID del servicio
 * @returns {Promise<Array<Profesional>>} Lista de profesionales del servicio
 * @throws {Error} Si ocurre un error en la consulta
 */
export async function getProfServicio(servicioId) {
    try {
        if (!servicioId) {
            logger.warn('Intento de obtener profesionales sin servicioId');
            throw new Error('servicioId es requerido');
        }

        const profServicio = await prisma.profesional.findMany({
            where: {
                serPro: {
                    some: {
                        servicioId: Number(servicioId),
                    }
                }
            },
            include: {
                serPro: true
            }
        });

        logger.info(`Profesionales obtenidos para servicio ${servicioId}`, {
            count: profServicio.length
        });

        return profServicio;
    } catch (error) {
        logger.error(`Error en getProfServicio para servicio ${servicioId}`, {
            error: error.message,
            stack: error.stack,
            servicioId
        });
        throw new Error('No se pudieron obtener los profesionales del servicio');
    }
}

/**
 * Actualiza un profesional existente
 * @param {number|string} id - ID del profesional a actualizar
 * @param {Object} profesional - Datos del profesional a actualizar
 * @returns {Promise<Profesional>} Profesional actualizado
 * @throws {Error} Si ocurre un error en la actualización
 */
export async function updateProf(id, profesional) {
    try {
        if (!id || !profesional) {
            logger.warn('Intento de actualización con datos inválidos', { id, profesional });
            throw new Error('Datos de actualización inválidos');
        }

        const updateProfesionales = await prisma.profesional.update({
            where: { id: Number(id) },
            data: profesional
        });

        logger.info('Profesional actualizado correctamente', { profesionalId: id });
        return updateProfesionales;
    } catch (error) {
        logger.error('Error en updateProf', { 
            message: error.message,
            stack: error.stack,
            id,
            profesionalData: profesional
        });
        throw new Error('No se pudo actualizar el profesional');
    }
}

/**
 * Crea un nuevo profesional
 * @param {Object} data - Datos del nuevo profesional
 * @param {string} data.nombre - Nombre del profesional
 * @returns {Promise<Profesional>} Nuevo profesional creado
 * @throws {Error} Si ocurre un error al crear
 */
export async function addProfesionalService(data) {
    try {
        const { nombre } = data;
        
        if (!nombre) {
            logger.warn('Intento de crear profesional sin nombre');
            throw new Error('El nombre es requerido');
        }

        const nuevoProfesional = await prisma.profesional.create({
            data: { nombre }
        });

        logger.info('Nuevo profesional creado', { profesionalId: nuevoProfesional.id });
        return nuevoProfesional;
    } catch (error) {
        logger.error('Error al crear profesional', {
            error: error.message,
            stack: error.stack,
            inputData: data
        });
        throw new Error('No se pudo crear el profesional');
    }
}