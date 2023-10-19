import { IsDate, IsString } from "class-validator";

export class CreatePacienteDto {
    
    @IsString({ message: "El nombre debe ser una cadena de texto" })
    nombre: string;

    @IsString({ message: "El número de seguro social debe estar definido" })
    NSS: string;

    @IsString({ message: "El sexo debe estar definido" })
    sexo: string;

    // @IsDate({ message: "La fecha de nacimiento debe ser valida" })
    fechaNacimiento: string;
}
