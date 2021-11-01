import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {UsuarioRol} from '../models';
import {UsuarioRolRepository} from '../repositories';

export class UsuarioRolController {
  constructor(
    @repository(UsuarioRolRepository)
    public usuarioRolRepository : UsuarioRolRepository,
  ) {}

  @post('/usuario-roles')
  @response(200, {
    description: 'UsuarioRol model instance',
    content: {'application/json': {schema: getModelSchemaRef(UsuarioRol)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsuarioRol, {
            title: 'NewUsuarioRol',
            exclude: ['_id'],
          }),
        },
      },
    })
    usuarioRol: Omit<UsuarioRol, '_id'>,
  ): Promise<UsuarioRol> {
    return this.usuarioRolRepository.create(usuarioRol);
  }

  @get('/usuario-roles/count')
  @response(200, {
    description: 'UsuarioRol model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UsuarioRol) where?: Where<UsuarioRol>,
  ): Promise<Count> {
    return this.usuarioRolRepository.count(where);
  }

  @get('/usuario-roles')
  @response(200, {
    description: 'Array of UsuarioRol model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UsuarioRol, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UsuarioRol) filter?: Filter<UsuarioRol>,
  ): Promise<UsuarioRol[]> {
    return this.usuarioRolRepository.find(filter);
  }

  @patch('/usuario-roles')
  @response(200, {
    description: 'UsuarioRol PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsuarioRol, {partial: true}),
        },
      },
    })
    usuarioRol: UsuarioRol,
    @param.where(UsuarioRol) where?: Where<UsuarioRol>,
  ): Promise<Count> {
    return this.usuarioRolRepository.updateAll(usuarioRol, where);
  }

  @get('/usuario-roles/{id}')
  @response(200, {
    description: 'UsuarioRol model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UsuarioRol, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(UsuarioRol, {exclude: 'where'}) filter?: FilterExcludingWhere<UsuarioRol>
  ): Promise<UsuarioRol> {
    return this.usuarioRolRepository.findById(id, filter);
  }

  @patch('/usuario-roles/{id}')
  @response(204, {
    description: 'UsuarioRol PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsuarioRol, {partial: true}),
        },
      },
    })
    usuarioRol: UsuarioRol,
  ): Promise<void> {
    await this.usuarioRolRepository.updateById(id, usuarioRol);
  }

  @put('/usuario-roles/{id}')
  @response(204, {
    description: 'UsuarioRol PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() usuarioRol: UsuarioRol,
  ): Promise<void> {
    await this.usuarioRolRepository.replaceById(id, usuarioRol);
  }

  @del('/usuario-roles/{id}')
  @response(204, {
    description: 'UsuarioRol DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.usuarioRolRepository.deleteById(id);
  }
}
