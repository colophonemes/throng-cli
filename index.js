#!/usr/bin/env node
const program = require('commander')
const throng = require('throng')
const path = require('path')

program
  .version('0.0.1')
  .option('-s, --script <path>', 'Full path to script file to cluster')
  .option('-w, --workers <n>', 'Number of workers to spawn (default: CPU count)')
  .option('-l, --lifetime <n>', 'ms to keep cluster alive (default: Infinity)')
  .option('-g, --grace <n>', 'ms grace period after worker SIGTERM (default: 5000)')
  .parse(process.argv)

throng({
  workers: program.workers,
  lifetime: program.lifetime,
  grace: program.grace,
  start: () => require(path.join(process.cwd(), program.script))
})
