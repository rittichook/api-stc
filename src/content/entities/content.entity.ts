import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contents')
export class Content {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    title: string;

    @Column()
    thumbnail_image: string;

    @Column()
    description: string;

    @Column()
    number_clicks: string;

    @Column()
    status: boolean;

    @Column({nullable: true})
    categoly_id: number;

    @Column('timestamp with time zone', {
        name: 'published_date',
        default: () => 'now()',
      })
      published_date: Date;

    @Column('timestamp with time zone', {
        name: 'created_at',
        default: () => 'now()',
      })
      createdAt: Date;
    
      @Column('uuid', { name: 'created_by', nullable: true })
      createdBy: string | null;
    
      @Column('timestamp with time zone', {
        name: 'updated_at',
        default: () => 'now()',
      })
      updatedAt: Date;
    
      @Column('uuid', { name: 'updated_by', nullable: true })
      updatedBy: string | null;
    
      @Column('timestamp with time zone', { name: 'deleted_at', nullable: true })
      deletedAt: Date | null;
    
      @Column('uuid', { name: 'deleted_by', nullable: true })
      deletedBy: string | null;




}



