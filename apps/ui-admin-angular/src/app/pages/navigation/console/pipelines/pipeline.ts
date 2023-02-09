import { Transform } from '@fortawesome/fontawesome-svg-core';

export interface Pipeline {
  id: string;
  name: string;
  steps: (TransformStep | FilterStep)[];
  retry_interval: number;
  max_retries: number;
  outputs: string[];
}

export interface FilterStep {
  function: string;
  outputs: string[];
  required: boolean;
  type: string;
}

export interface TransformStep {
  function: string;
  outputs: string[];
  required: boolean;
  type: string;
}
