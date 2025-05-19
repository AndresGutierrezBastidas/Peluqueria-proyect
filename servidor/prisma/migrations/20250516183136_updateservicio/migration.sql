-- CreateTable
CREATE TABLE `cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(15) NOT NULL,
    `apellido` VARCHAR(15) NOT NULL,
    `email` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Cliente_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hora` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hora` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profesional` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reserva` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fechaCreada` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fechaReserva` DATE NOT NULL,
    `total` INTEGER NOT NULL,
    `servicioId` INTEGER NOT NULL,
    `clienteId` INTEGER NOT NULL,
    `horaId` INTEGER NOT NULL,

    INDEX `clienteId`(`clienteId`),
    INDEX `horaId`(`horaId`),
    INDEX `servicioId`(`servicioId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `servicio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(30) NOT NULL,
    `precio` INTEGER NOT NULL,
    `descripcion` VARCHAR(500) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `password` VARCHAR(15) NOT NULL,
    `rol` INTEGER NOT NULL DEFAULT 1,
    `clientId` INTEGER NOT NULL,

    UNIQUE INDEX `Usuario_clientId_key`(`clientId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `servicioprofesional` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `servicioId` INTEGER NOT NULL,
    `profesionalId` INTEGER NOT NULL,

    INDEX `profesionalId`(`profesionalId`),
    INDEX `servicioId`(`servicioId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `reserva` ADD CONSTRAINT `reserva_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reserva` ADD CONSTRAINT `reserva_horaId_fkey` FOREIGN KEY (`horaId`) REFERENCES `hora`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reserva` ADD CONSTRAINT `reserva_servicioId_fkey` FOREIGN KEY (`servicioId`) REFERENCES `servicio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usuario` ADD CONSTRAINT `usuario_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `servicioprofesional` ADD CONSTRAINT `servicioProfesional_profesionalId_fkey` FOREIGN KEY (`profesionalId`) REFERENCES `profesional`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `servicioprofesional` ADD CONSTRAINT `servicioProfesional_servicioId_fkey` FOREIGN KEY (`servicioId`) REFERENCES `servicio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
