const BasicCrudService = require('./basic-crud-service')

class TrainerService extends BasicCrudService {
  constructor () {
    super('trainer')
  }
}

module.exports = new TrainerService()
