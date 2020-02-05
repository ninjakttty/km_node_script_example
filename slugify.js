#!/usr/bin/env node
const getStdin = require('get-stdin')
const slugify = require('slugify')

;(async () => {
  const input = await getStdin()
  const slugifiedInput = slugify(input)
  console.log(slugifiedInput)
})()
