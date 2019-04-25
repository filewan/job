const jobStageRef = {
  'gst': {
    'gst-3b': [
      ['Document collection',null,'unassigned',[],0],
      ['Tax sheet',null,'unassigned',[],0],
      ['Review',null,'unassigned',[],0], 
      ['Payment collection',null,'unassigned',[],0],
      ['Online filing',null,'unassigned',[],0],
    ]  
  },
};

const createJob = (profile, job) => {
  let result = false;
  const jobModel = {
    name: '',
    type: '',
    sub_type: '',
    stages: [],
    history:[],
    profile: [],
    currentStage: {
      stage: 0,
      data : {
        name: '',
        owner: null,
        status: 'unassigned',
        due: null,
      }
    },
    documents: [],
    payment: {}
  };
  console.log('1');
  if (jobStageRef[job.type][job.sub_type]) {
    console.log('2');
    console.log(jobStageRef[job.type][job.sub_type]);
    for (let i=0; i< jobStageRef[job.type][job.sub_type].length; i++) {
      let temp = jobStageRef[job.type][job.sub_type][i];
      jobModel.stages.push({
        name: temp[0],
        owner: temp[1],
        status:temp[2],
        comment: temp[3],
        callcount: temp[4],
      });
      console.log('l', i);
    }
    jobModel.name = job.name;
    jobModel.type = job.type;
    jobModel.sub_type = job.sub_type;
    console.log('6');
    jobModel.currentStage.data.name = jobStageRef[job.type][job.sub_type][0][0];
    jobModel.profile = profile;
    console.log('7');
    result = jobModel;
  }
  console.log('8');
  return result;
}

module.exports = {
  createJob,
}