import {Model, model, property} from '@loopback/repository';

@model()
export class CambioCredenciales extends Model {
  @property({
    type: 'string',
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  claveActual: string;

  @property({
    type: 'string',
    required: true,
  })
  nuevaClave: string;


  constructor(data?: Partial<CambioCredenciales>) {
    super(data);
  }
}

export interface CambioCredencialesRelations {
  // describe navigational properties here
}

export type CambioCredencialesWithRelations = CambioCredenciales & CambioCredencialesRelations;
