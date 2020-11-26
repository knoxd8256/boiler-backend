// Type definitions for Boiler.ts
// Project: Boiler.ts
// Definitions by: David Knox <https://github.com/knoxd8256>

import { ObjectID } from "mongodb";
import { Router } from 'express';

export interface IPlate {
  _id?: string;
  name: string;
  tags: string[];
  repo: string;
  description: string;
  commands: string[];
}

export interface RouterListEntry {
  prefix: string,
  router: Router
}
