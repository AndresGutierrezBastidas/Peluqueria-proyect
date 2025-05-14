import { PrismaClient } from "@prisma/client"; // Desde acá se tiene que exportar la variable de prisma para su uso

const prisma = new PrismaClient();


export default prisma;