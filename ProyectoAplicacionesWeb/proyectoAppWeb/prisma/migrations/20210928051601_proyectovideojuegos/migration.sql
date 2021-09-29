/*
  Warnings:

  - You are about to drop the `EPN_USUARIO` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MASCOTA` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VIDEOJUEGO` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `MASCOTA` DROP FOREIGN KEY `MASCOTA_usuarioId_fkey`;

-- DropTable
DROP TABLE `EPN_USUARIO`;

-- DropTable
DROP TABLE `MASCOTA`;

-- DropTable
DROP TABLE `VIDEOJUEGO`;

-- CreateTable
CREATE TABLE `VIDEOJUEGOS` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `creador` VARCHAR(191),
    `nombre` VARCHAR(191),
    `fechaLanzamiento` DATETIME(3) NOT NULL,
    `disponibilidad` BOOLEAN NOT NULL,
    `costo` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
