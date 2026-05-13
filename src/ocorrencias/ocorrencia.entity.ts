import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('ocorrencias')
export class OcorrenciaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    titulo: string;

    @Column()
    descricao: string;

    @Column()
    local: string;

    @Column()
    slug: string;

    @CreateDateColumn({
        type: 'timestamp with time zone',
        name: 'created_at',
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp with time zone',
        name: 'updated_at',
    })
    updatedAt: Date;
}
