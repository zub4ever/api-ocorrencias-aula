import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OcorrenciasController } from './ocorrencias.controller';
import { OcorrenciasService } from './ocorrencias.service';
import { OcorrenciaEntity } from './ocorrencia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OcorrenciaEntity])],
  controllers: [OcorrenciasController],
  providers: [OcorrenciasService],
})
export class OcorrenciasModule { }
