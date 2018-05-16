/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
// grunt connect task

module.exports =
{
  // to start the server for hosting
  devServer: 
  {
    options: 
    { 
      hostname: "*",
      port: "<%= oraclejet.ports.server %>",
      livereload: "<%= oraclejet.ports.livereload %>",
      open: true
    }
  },

  releaseServer: 
  {
    options: 
    {
      port: "<%= oraclejet.ports.server %>",
      base: ["release"],
      open: true
    }
  }
};
