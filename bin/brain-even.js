#!/usr/bin/env node

import gameEngine from '../src/index.js';
import { makeRound, gameDescription } from '../src/games/even.js';

gameEngine(gameDescription, makeRound);
