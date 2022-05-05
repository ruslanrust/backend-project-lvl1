#!/usr/bin/env node

import gameEngine from '../src/index.js';
import { startRound, gameDiscription } from '../src/games/even.js';

gameEngine(gameDiscription, startRound);
