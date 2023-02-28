import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ApiEntity as Api } from './api.entity'

@Entity('project')
export class ProjectEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number

  @Column({ type: 'text', length: 32 })
  name: string

  @Column({ type: 'text', length: 200 })
  description?: string

  @Column('text')
  prefix?: string

  @Column({ type: 'boolean', default: false, select: false })
  deleted: boolean

  @Column({ type: 'text' })
  status: string

  @OneToMany(() => Api, api => api.project)
  apis: Api[]
}
