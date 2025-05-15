/*
  Warnings:

  - You are about to drop the column `hora` on the `reserva` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `reserva` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[horaId]` on the table `Reserva` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[clienteId]` on the table `Reserva` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clienteId` to the `Reserva` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horaId` to the `Reserva` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `reserva` DROP FOREIGN KEY `Reserva_usuarioId_fkey`;

-- DropIndex
DROP INDEX `Reserva_usuarioId_key` ON `reserva`;

-- AlterTable
ALTER TABLE `reserva` DROP COLUMN `hora`,
    DROP COLUMN `usuarioId`,
    ADD COLUMN `clienteId` INTEGER NOT NULL,
    ADD COLUMN `horaId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Hora` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hora` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Reserva_horaId_key` ON `Reserva`(`horaId`);

-- CreateIndex
CREATE UNIQUE INDEX `Reserva_clienteId_key` ON `Reserva`(`clienteId`);

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_horaId_fkey` FOREIGN KEY (`horaId`) REFERENCES `Hora`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
