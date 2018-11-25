var manifest = require('../../../assets/mix-manifest.json');
module.exports = {


  friendlyName: 'View welcome page',


  description: 'Display the dashboard "Welcome" page.',
  locals: {
    layout: false
  },


  exits: {

    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/dashboard/welcome',
      description: 'Display the welcome page for authenticated users.'
    },

  },


  fn: async function (inputs, exits) {
    return exits.success({mix: manifest});

  }


};
