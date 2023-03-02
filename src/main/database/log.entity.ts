import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ApiEntity as Api } from './api.entity'

@Entity('log')
export class LogEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Api, api => api.logs)
  api: Api

  @CreateDateColumn()
  createTime: Date

  @Column('text')
  request: string

  @Column('text')
  response: string

  @Column('text')
  method: string

  @Column('text')
  requestHeader: string

  @Column('text')
  responseHeader: string

  @Column('text')
  error: string
}
