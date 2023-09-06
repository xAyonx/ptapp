const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class BasicCrudService {
  constructor (model) {
    this.model = model
  }

  async getAll () {
    return await prisma[this.model].findMany()
  }

  async getById (id) {
    return await prisma[this.model].findUnique({
      where: { id }
    })
  }

  async create (payload) {
    return await prisma[this.model].create({
      data: {
        ...payload
      }
    })
  }

  async update (id, payload) {
    return await prisma[this.model].update({
      where: { id },
      data: {
        ...payload
      }
    })
  }

  async delete (id) {
    return await prisma[this.model].delete({
      where: { id }
    })
  }
}

module.exports = BasicCrudService
