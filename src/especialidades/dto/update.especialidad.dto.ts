import { PartialType } from "@nestjs/mapped-types";
import { CreateEspecialidadDto } from "./create.especilidad.dto.js";

export class UpdateEspecialidadDto extends PartialType(CreateEspecialidadDto){}