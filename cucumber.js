module.exports = {
    default: {
      paths: ['features/*.feature'],
      require: ['steps/*.js'], 
      format: ['progress', 'html:cucumber-report.html']},
   
  };
  