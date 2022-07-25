const models = {
  usersModel: require("./nosql/user"),
  tracksModel: require("./nosql/tracks"),
  storageModel: require("./nosql/storage"),
  inmueblesModel: require("./mysql/inmuebles"),
  propietariosModel: require("./mysql/propietarios"),
};

module.exports = models;
