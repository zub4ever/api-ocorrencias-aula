import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OcorrenciasModule } from './ocorrencias/ocorrencias.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'postgres',
      port: Number(process.env.POSTGRES_PORT || 3652),
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'postgres',
      database: process.env.POSTGRES_DB || 'ocorrencias',
      autoLoadEntities: true,
      synchronize: true,
    }),
    OcorrenciasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
