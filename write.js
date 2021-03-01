const fs = require('fs')
const { exit } = require('process')

const file = 'tools.json'
const tool = process.argv[2]

fs.readFile(file, { encoding: 'utf-8' }, (err, data) => {
  const tools = err ? [] : JSON.parse(data)
  const number = process.argv[3]
  tools.push({ name: tool, score: number })

  fs.writeFile(file, JSON.stringify(tools), { encoding: 'utf-8' }, err => {
    exit(err ? 1 : 0)
  })
})
