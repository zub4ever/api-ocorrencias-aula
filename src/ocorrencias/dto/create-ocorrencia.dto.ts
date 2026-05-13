import { ApiProperty } from '@nestjs/swagger';

export class CreateOcorrenciaDto {
    @ApiProperty({
        example: 'Buraco na rua',
        description: 'Título da ocorrência',
    })
    titulo: string;

    @ApiProperty({
        example: 'Buraco grande próximo ao cruzamento',
        description: 'Descrição da ocorrência',
    })
    descricao: string;

    @ApiProperty({
        example: 'Centro',
        description: 'Local da ocorrência',
    })
    local: string;

    @ApiProperty({
        example: 'joais_henrique',
        description: 'Slug do aluno que enviou a ocorrência',
    })
    slug: string;
}