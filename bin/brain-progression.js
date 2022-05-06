#!/usr/bin/env node

import gameEngine from '../src/index.js';
import { makeRound, gameDescription } from '../src/games/progression.js';

gameEngine(gameDescription, makeRound);
