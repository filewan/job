const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

module.exports =mongoose.model('Job', new Schema({
  name: {type: String, index: true},
  type: {type: String},
  sub_type: {type: String},
  stages:[{name: String, owner: String, status: String, comment: [String], callcount: {type: Number, default: null}}],
  history:[{name: String, owner: String, status: String}],
  profile: {type: [{name: {type: String, index: true}, pan: {type:String, index: true}, phone: Number}], default: null},
  currentStage: {
    stage: Number, 
    data: {
      name: String, 
      owner: {type:String, index:true},
      status: {type:String, index:true},
      due: Date
    }
  },
  documents:[{
    type: String,
    url: String,
    date: {type:Schema.Types.Mixed}
  }],
  payment: {type:Schema.Types.Mixed, index: true},
}, { collection: 'Job',
      timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
      },
    }
  ));