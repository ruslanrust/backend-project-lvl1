#!/usr/bin/env node

import gameEngine from '../src/index.js';
import { startRound, gameDiscription } from '../src/games/calc.js';

gameEngine(gameDiscription, startRound);
