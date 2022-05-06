#!/usr/bin/env node

import gameEngine from '../src/index.js';
import { makeRound, gameDescription } from '../src/games/gcd.js';

gameEngine(gameDescription, makeRound);
