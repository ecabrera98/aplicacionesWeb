-- CreateTable
CREATE TABLE `VIDEOJUEGO` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `creador` VARCHAR(191),
    `nombre` VARCHAR(191),
    `fechaCreacion` DATETIME(3) NOT NULL,
    `aniolanzamiento` INTEGER NOT NULL,
    `costo` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
