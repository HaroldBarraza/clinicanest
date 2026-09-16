import { PartialType } from "@nestjs/mapped-types";
import { CreateCitasDto } from "./create-citas.dto.js";

export class UpdateCitasDto extends PartialType(CreateCitasDto){}
    