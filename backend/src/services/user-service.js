const BasicCrudService = require('./basic-crud-service')

class UserService extends BasicCrudService {
  constructor () {
    super('user')
  }
}

module.exports = new UserService()
