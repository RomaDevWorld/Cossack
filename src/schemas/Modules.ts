import { SchemaTypes, Schema, model } from 'mongoose'
import { ModulesI } from '../@types/schemas'

const ModulesSchema = new Schema<ModulesI>({
  guildId: {
    type: SchemaTypes.String,
    required: true,
    unique: true,
  },
  log: {
    channel: {
      type: SchemaTypes.String,
      unique: true,
      default: null,
    },
    types: {
      messageDelete: {
        type: SchemaTypes.Boolean,
        default: false,
      },
      messageUpdate: {
        type: SchemaTypes.Boolean,
        default: false,
      },
    },
  },
  lobby: {
    channel: {
      type: SchemaTypes.String,
      unique: true,
      default: null,
    },
    category: {
      type: SchemaTypes.String,
      unique: true,
      default: null,
    },
  },
})

export default model<ModulesI>('modules', ModulesSchema)
