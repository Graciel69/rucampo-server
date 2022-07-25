const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const TracksSchema = new mongoose.Schema(
  {
    name: { type: String },
    album: { type: String },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return true;
        },
        message: "ERROR_URL",
      },
    },
    artist: {
      name: { type: String },
      nickname: { type: String },
      nationality: { type: String },
    },
    duration: {
      start: { type: Number },
      end: { type: Number },
    },
    mediaId: { type: mongoose.Types.ObjectId },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

TracksSchema.statics.findAllData = function () {
  const joinData = this.aggregate([
    {
      $lookup: {
        from: "storages",
        localField: "mediaId", //Relacionar con Storages, donde el campo padre del aricho (mediaId) Tracks.meadiaId
        foreignField: "_id", //Se relaciona con el Id del archivo
        as: "audio", //esto se guardara en un alias que se llamara audio
      },
    },

    {
      $unwind: "$audio",
    },
  ]);

  return joinData;
};

TracksSchema.statics.findOneData = function (id) {
  const joinData = this.aggregate([
    {
      $lookup: {
        from: "storages",
        localField: "mediaId", //Relacionar con Storages, donde el campo padre del aricho (mediaId)
        foreignField: "_id", //Se relaciona con el Id del archivo
        as: "audio", //esto se guardara en un alias que se llamara audio
      },
    },

    {
      $unwind: "$audio",
    },

    {
      $match: {
        _id: mongoose.Types.ObjectId(id),
      },
    },
  ]);

  return joinData;
};

TracksSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("tracks", TracksSchema);
