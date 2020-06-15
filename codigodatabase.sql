CREATE DATABASE `proyecto-prog-II`;
USE `proyecto-prog-II`;
-- / Creación de las tablas
CREATE TABLE `usuarios` (
 `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `nombreCompleto` varchar(255) NOT NULL,
 `email` varchar(255) NOT NULL UNIQUE,
 `password` varchar(255) NOT NULL,
 `fechaNacimiento` datetime NOT NULL,
 `createdAt` timestamp NULL DEFAULT NULL,
 `updatedAt` timestamp NULL DEFAULT NULL
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
;CREATE TABLE `resenas` (
 `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `peliculaId` varchar(50) NULL DEFAULT NULL,
 `usuarioId` int(11) UNSIGNED NULL DEFAULT NULL,
 `textoResena` varchar(255) NOT NULL,
 `puntaje` decimal(3,1) NULL DEFAULT NULL,
 `createdAt` timestamp NULL DEFAULT NULL,
 `updatedAt` timestamp NULL DEFAULT NULL,
 FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
-- / Inserción de datos
INSERT INTO `usuarios` (`nombreCompleto`, `email`, `password`, `fechaNacimiento`) 
VALUES 
	('Jon Doe', 'jondoe@email.com', '123abc', '2010-03-25'),
	('Jane Doe', 'janedoe@email.com', '123abc', '2010-03-25'),
	('Jon Snow', 'jonsnow@email.com', '123abc', '2010-03-25');
INSERT INTO `resenas` (`peliculaId`, `usuarioId`, `textoResena`, `puntaje`) 
VALUES 
	(60625, 1, 'película muy buena', 10),
	(70594, 2, 'película regular', 6.5),
	(34567, 2, 'película muy mala', 0);
