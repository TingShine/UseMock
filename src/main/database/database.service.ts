import { join } from 'path'
import { DataSource, Repository } from 'typeorm'
import { app } from 'electron'
import { Injectable as EinfInjectable } from 'einf'
import type { ICreateProjectParams, ISearchProjectParams } from '@common/types'
import { ProjectEntity } from './project.entity'
import { ApiEntity } from './api.entity'
import { LogEntity } from './log.entity'

@EinfInjectable()
export class DatabaseService {
  private connection = new DataSource({
    type: 'sqlite',
    database: join(app.getPath('appData'), app.getName(), './data/user.db'),
    entities: [ProjectEntity, ApiEntity, LogEntity],
    synchronize: true,
  })

  constructor() {
    this.connection.initialize().then((connect) => {
      this.projectRepository = connect.getRepository<ProjectEntity>(ProjectEntity)
      this.apiRepository = connect.getRepository<ApiEntity>(ApiEntity)
    })
  }

  private projectRepository: Repository<ProjectEntity>
  private apiRepository

  /**
   * 查找项目
   * 支持分页、模糊查询
   */
  async findProjects(params: ISearchProjectParams) {
    const { name, status, page, pageSize } = params || {}

    const db = this.projectRepository.createQueryBuilder('project').leftJoinAndSelect('project.apis', 'api')
    db.andWhere('project.deleted = false')

    if (name)
      db.andWhere('project.name Like :name').setParameters({ name: `%${name}%` })

    if (status)
      db.andWhere('project.status = :status', { status })

    const total = await db.getCount()
    let result

    if (!page || !pageSize)
      result = await db.select().getMany()
    else
      result = await db.select().skip((page - 1) * pageSize).take(pageSize).getMany()

    return {
      total,
      data: result,
    }
  }

  /** 创建项目 */
  async createProject(params: ICreateProjectParams) {
    const project = this.projectRepository.create({
      name: params.name,
      status: params.isActive === undefined ? 'success' : params.isActive ? 'success' : 'unactive',
      prefix: params?.prefix || '',
      description: params?.description || '',
    })

    return await this.projectRepository.save(project)
  }

  /** 改变项目状态 */
  async changeProjectStatus(uid: string) {
    const project = await this.projectRepository.findOneBy({ id: uid })

    const statusMap = {
      success: 'unactive',
      unactive: 'success',
      failure: 'success',
    }

    project.status = statusMap[project.status]
    await this.projectRepository.save(project)

    return project
  }
}
