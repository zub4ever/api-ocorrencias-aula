import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOcorrenciaDto } from './dto/create-ocorrencia.dto';
import { OcorrenciaEntity } from './ocorrencia.entity';

@Injectable()
export class OcorrenciasService {
    constructor(
        @InjectRepository(OcorrenciaEntity)
        private readonly repository: Repository<OcorrenciaEntity>,
    ) { }

    async listarTodas(): Promise<OcorrenciaEntity[]> {
        return this.repository.find({ order: { createdAt: 'DESC' } });
    }

    async listarPorSlug(slug: string): Promise<OcorrenciaEntity[]> {
        return this.repository.find({
            where: { slug },
            order: { createdAt: 'DESC' },
        });
    }

    async criar(dados: CreateOcorrenciaDto): Promise<OcorrenciaEntity> {
        const ocorrencia = this.repository.create(dados);
        return this.repository.save(ocorrencia);
    }

    async remover(id: string): Promise<{ mensagem: string }> {
        const result = await this.repository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException('Ocorrência não encontrada');
        }

        return {
            mensagem: 'Ocorrência removida com sucesso',
        };
    }
}