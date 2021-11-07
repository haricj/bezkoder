module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Tutorial;
  };
  
  /*This Sequelize Model represents tutorials table in MySQL database. These columns will be generated automatically: id, title, description, published, createdAt, updatedAt.

  After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them:
  
  create a new Tutorial: create(object)
  find a Tutorial by id: findByPk(id)
  get all Tutorials: findAll()
  update a Tutorial by id: update(data, where: { id: id })
  remove a Tutorial: destroy(where: { id: id })
  remove all Tutorials: destroy(where: {})
  find all Tutorials by title: findAll({ where: { title: ... } })
  These functions will be used in our Controller.
  
  We can improve the example by adding Comments for each Tutorial. It is the One-to-Many Relationship and I write a tutorial for this at:
  Sequelize Associations: One-to-Many example – Node.js, MySQL
  
  Or you can add Tags for each Tutorial and add Tutorials to Tag (Many-to-Many Relationship):
  Sequelize Many-to-Many Association example with Node.js & MySQL
  */