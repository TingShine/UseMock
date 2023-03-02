import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { LogEntity as Log } from './log.entity'
import { ProjectEntity as Project } from './project.entity'

@Entity('api')
export class ApiEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('boolean', { default: true })
  isActive: boolean

  @Column('text')
  url: string

  @Column({ type: 'text' })
  method: string

  @Column('text')
  description: string

  @Column('text', { unique: true })
  name: string

  @ManyToOne(() => Project, project => project.apis)
  project: Project

  @OneToMany(() => Log, log => log.api)
  logs: Log

  @Column({ type: 'text' })
  template: string

  @UpdateDateColumn()
  updateTime: Date
}
