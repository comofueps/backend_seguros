-- Consulta SQL para insertar 20 registros a la tabla persona
INSERT INTO `personas`(`DNI`, `nombre`, `apellido`, `direccion`, `ciudad`, `tipoPersona`, `telefono`)
VALUES
  ('1234567891', 'Laura', 'García', 'Carrera Falsa 456', 'Bogotá', 'Activo', '3212345679'),
  ('2345678902', 'Andrés', 'Martínez', 'Calle Imaginaria 123', 'Medellín', 'Inactivo', '3456789013'),
  ('3456789013', 'Sofía', 'Sánchez', 'Avenida de Sueños 789', 'Cali', 'Activo', '4567890124'),
  ('4567890124', 'Diego', 'Ramírez', 'Carrera Ficticia 123', 'Medellín', 'Inactivo', '5678901235'),
  ('5678901235', 'Valentina', 'Hernández', 'Avenida Falsa 789', 'Bogotá', 'Activo', '6789012346'),
  ('6789012346', 'Juan', 'Gómez', 'Calle Imaginaria 456', 'Cali', 'Inactivo', '7890123457'),
  ('7890123457', 'Camila', 'López', 'Carrera de Sueños 123', 'Medellín', 'Activo', '8901234567'),
  ('8901234567', 'Samuel', 'Pérez', 'Avenida de Ilusiones 789', 'Bogotá', 'Inactivo', '9012345678'),
  ('9012345678', 'Valeria', 'Rodríguez', 'Calle de Ensueño 456', 'Cali', 'Activo', '1234567890'),
  ('1234567892', 'Mateo', 'Fernández', 'Carrera de Fantasía 123', 'Bogotá', 'Inactivo', '2345678901'),
  ('2345678903', 'Isabella', 'Mendoza', 'Avenida de Sueños 456', 'Medellín', 'Activo', '3456789014'),
  ('3456789014', 'David', 'González', 'Calle de la Imaginación 789', 'Cali', 'Inactivo', '4567890125'),
  ('4567890125', 'Daniela', 'Gutiérrez', 'Avenida Ficticia 123', 'Medellín', 'Activo', '5678901236'),
  ('1234567890', 'Juan', 'Pérez', 'Calle Falsa 123', 'Bogotá', 'Activo', '3212345678'),
  ('2345678901', 'Ana', 'Gómez', 'Carrera Ficticia 456', 'Medellín', 'Inactivo', '3456789012'),
  ('3456789012', 'Luis', 'Rodríguez', 'Avenida Imaginaria 789', 'Cali', 'Activo', '4567890123'),
  ('7890123456', 'María', 'López', 'Calle de Sueños 987', 'Bogotá', 'Inactivo', '6789012345'),
  ('1005414203', 'Brayan', 'Arevalo', 'Calle 34a', 'Riohacha', 'Activo', '3017168236'),
  ('1005414222', 'Eduardo', 'Arevalo', 'Calle 34a', 'Riohacha', 'Activo', '3012012111'),
  ('5678901236', 'Carlos', 'Santos', 'Carrera de los Sueños 456', 'Bogotá', 'Inactivo', '6789012347');

-- Consulta SQL para insertar 20 registros a la tabla vehiculo
INSERT INTO `vehiculos`(`matricula`, `marca`, `modelo`)
VALUES
  ('ABC123', 'Toyota', 'Corolla'),
  ('DEF456', 'Honda', 'Civic'),
  ('GHI789', 'Ford', 'Mustang'),
  ('JKL012', 'Chevrolet', 'Silverado'),
  ('MNO345', 'Nissan', 'Altima'),
  ('PQR678', 'Volkswagen', 'Jetta'),
  ('STU901', 'BMW', '3 Series'),
  ('VWX234', 'Mercedes-Benz', 'C-Class'),
  ('YZA567', 'Audi', 'A4'),
  ('BCD890', 'Hyundai', 'Elantra'),
  ('EFG123', 'Kia', 'Optima'),
  ('HIJ456', 'Mazda', 'Mazda3'),
  ('KLM789', 'Subaru', 'Impreza'),
  ('NOP012', 'Lexus', 'ES'),
  ('PQR345', 'Jeep', 'Wrangler'),
  ('STU678', 'Ram', '1500'),
  ('VWX901', 'GMC', 'Sierra'),
  ('YZA234', 'Dodge', 'Challenger'),
  ('BCD567', 'Jeep', 'Cherokee'),
  ('EFG890', 'Subaru', 'Outback');

  -- Consulta SQL para insertar 20 registros a la tabla posser
INSERT INTO `possers`(`tarjetaPropiedad`, `ciudadExp`, `VehiculoId`, `PersonaId`)
VALUES
  ('ABC123456', 'Bogotá', 1, 2),
  ('DEF456789', 'Medellín', 2, 3),
  ('GHI123456', 'Cali', 3, 4),
  ('JKL789012', 'Bogotá', 4, 5),
  ('MNO234567', 'Medellín', 5, 6),
  ('PQR567890', 'Cali', 6, 7),
  ('STU123456', 'Bogotá', 7, 8),
  ('VWX789012', 'Medellín', 8, 9),
  ('YZA234567', 'Cali', 9, 10),
  ('BCD567890', 'Bogotá', 10, 11),
  ('EFG123456', 'Medellín', 11, 12),
  ('HIJ789012', 'Cali', 12, 13),
  ('KLM234567', 'Bogotá', 13, 14),
  ('NOP567890', 'Medellín', 14, 15),
  ('PQR123456', 'Cali', 15, 16),
  ('STU789012', 'Bogotá', 16, 17),
  ('VWX234567', 'Medellín', 17, 18),
  ('YZA567890', 'Cali', 18, 19),
  ('BCD123456', 'Bogotá', 19, 20),
  ('EFG789012', 'Medellín', 20, 1);

  -- Consulta SQL para insertar 20 registros a la tabla involocurar
  INSERT INTO `involucrar`(`hora`, `PersonaId`, `VehiculoId`)
VALUES
  ('2023-10-09 08:30:00', 1, 1),
  ('2023-10-09 09:15:00', 2, 2),
  ('2023-10-09 10:00:00', 3, 3),
  ('2023-10-09 10:45:00', 4, 4),
  ('2023-10-09 11:30:00', 5, 5),
  ('2023-10-09 12:15:00', 6, 6),
  ('2023-10-09 13:00:00', 7, 7),
  ('2023-10-09 13:45:00', 8, 8),
  ('2023-10-09 14:30:00', 9, 9),
  ('2023-10-09 15:15:00', 10, 10),
  ('2023-10-09 16:00:00', 11, 11),
  ('2023-10-09 16:45:00', 12, 12),
  ('2023-10-09 17:30:00', 13, 13),
  ('2023-10-09 18:15:00', 14, 14),
  ('2023-10-09 19:00:00', 15, 15),
  ('2023-10-09 19:45:00', 16, 16),
  ('2023-10-09 20:30:00', 17, 17),
  ('2023-10-09 21:15:00', 18, 18),
  ('2023-10-09 22:00:00', 19, 19),
  ('2023-10-09 22:45:00', 20, 20);

-- Consulta SQL para insertar 20 registros a la talba multas
INSERT INTO `multas`(`consecutivoMultas`, `fechayHora`, `lugarInfraccion`, `PersonaId`)
VALUES
  (1, '2023-10-09 08:30:00', 'Calle Falsa 123', 1),
  (2, '2023-10-09 09:15:00', 'Avenida Imaginaria 456', 2),
  (3, '2023-10-09 10:00:00', 'Carrera de Fantasía 789', 3),
  (4, '2023-10-09 10:45:00', 'Calle de los Sueños 123', 4),
  (5, '2023-10-09 11:30:00', 'Avenida de la Ilusión 456', 5),
  (6, '2023-10-09 12:15:00', 'Carrera de la Imaginación 789', 6),
  (7, '2023-10-09 13:00:00', 'Calle de Ensueño 123', 7),
  (8, '2023-10-09 13:45:00', 'Avenida de Ensueño 456', 8),
  (9, '2023-10-09 14:30:00', 'Carrera de los Deseos 789', 9),
  (10, '2023-10-09 15:15:00', 'Calle de la Esperanza 123', 10),
  (11, '2023-10-09 16:00:00', 'Avenida de la Imaginación 456', 11),
  (12, '2023-10-09 16:45:00', 'Carrera de las Fantasías 789', 12),
  (13, '2023-10-09 17:30:00', 'Calle de los Sueños 123', 13),
  (14, '2023-10-09 18:15:00', 'Avenida de los Deseos 456', 14),
  (15, '2023-10-09 19:00:00', 'Carrera de la Ilusión 789', 15),
  (16, '2023-10-09 19:45:00', 'Calle de la Esperanza 123', 16),
  (17, '2023-10-09 20:30:00', 'Avenida de los Sueños 456', 17),
  (18, '2023-10-09 21:15:00', 'Carrera de la Imaginación 789', 18),
  (19, '2023-10-09 22:00:00', 'Calle de las Fantasías 123', 19),
  (20, '2023-10-09 22:45:00', 'Avenida de la Esperanza 456', 20);


  


