import { PrismaClient } from "@prisma/client";


//Nota: El prisma extended solo se usara para consultas donde se necesite concatenar el nombre y apellido del cliente
const prismaExtended = new PrismaClient().$extends({ 
    result: {
      cliente: { // Solo afecta al model Cliente
        fullname: {
          needs: { nombre: true, apellido: true },
          compute(cliente) {
            return `${cliente.nombre} ${cliente.apellido}`;
          },
        },
      }
    }
});

export default prismaExtended