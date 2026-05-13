import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateOcorrenciaDto } from './dto/create-ocorrencia.dto';
import { OcorrenciasService } from './ocorrencias.service';

@ApiTags('ocorrencias')
@Controller('ocorrencias')
export class OcorrenciasController {
    constructor(private readonly ocorrenciasService: OcorrenciasService) { }

    @Get()
    @ApiOperation({ summary: 'Listar todas as ocorrências' })
    @ApiQuery({
        name: 'slug',
        required: false,
        example: 'joais_henrique',
        description: 'Filtra ocorrências pelo slug do aluno',
    })
    async listar(@Query('slug') slug?: string) {
        if (slug) {
            return this.ocorrenciasService.listarPorSlug(slug);
        }

        return this.ocorrenciasService.listarTodas();
    }

    @Post()
    @ApiOperation({ summary: 'Criar uma nova ocorrência' })
    @ApiResponse({
        status: 201,
        description: 'Ocorrência criada com sucesso',
    })
    async criar(@Body() dados: CreateOcorrenciaDto) {
        return this.ocorrenciasService.criar(dados);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remover uma ocorrência pelo id' })
    remover(@Param('id') id: string) {
        return this.ocorrenciasService.remover(id);
    }
}