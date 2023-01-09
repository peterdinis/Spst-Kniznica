import { ApiProperty } from "@nestjs/swagger";

export class ExternalIdDto {
    @ApiProperty()
    externalId: string;
}