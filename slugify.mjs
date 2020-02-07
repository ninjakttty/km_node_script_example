#!/usr/bin/env node --harmony-top-level-await --no-warnings

import getStdin from 'get-stdin'
import slugify from 'slugify'

const input = await getStdin()
const slugifiedInput = slugify(input)
console.log(slugifiedInput)
