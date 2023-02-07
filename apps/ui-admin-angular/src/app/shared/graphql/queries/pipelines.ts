import { gql } from 'apollo-angular';
import { PipelinesListResponse } from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';

export const listPipelinesQuery = gql`
  query ListPipelines($in: PipelinesListRequestInput) {
    pipelines(in: $in) {
      pipelines {
        id
        created_at
        updated_at
        name
        outputs
        steps {
          function
          outputs
          required
          type
        }
        persist_output
        retry_interval
        max_retries
      }
    }
  }
`;

export const getPipelineQuery = gql`
  query Pipeline($in: PipelinesGetRequestInput) {
    pipeline(in: $in) {
      pipeline {
        id
        created_at
        updated_at
        name
        outputs
        steps {
          function
          outputs
          required
          type
        }
        persist_output
        retry_interval
        max_retries
      }
    }
  }
`;

export const createPipelineQuery = gql`
  mutation CreatePipeline($in: PipelinesCreateRequestInput) {
    createPipeline(in: $in) {
      pipeline {
        id
        created_at
        updated_at
        name
        outputs
        steps {
          function
          outputs
          required
          type
        }
        persist_output
        retry_interval
        max_retries
      }
    }
  }
`;

export const updatePipelineQuery = gql`
  mutation UpdatePipeline($in: PipelinesUpdateRequestInput) {
    updatePipeline(in: $in) {
      pipeline {
        id
        created_at
        updated_at
        name
        outputs
        steps {
          function
          outputs
          required
          type
        }
        persist_output
        retry_interval
        max_retries
      }
    }
  }
`;

export const deletePipelineQuery = gql`
  mutation DeletePipeline($in: PipelinesDeleteRequestInput) {
    deletePipeline(in: $in) {
      success
    }
  }
`;

export const setPipelinePositionQuery = gql`
  mutation SetPipelinePosition($in: SetPipelinePositionRequestInput) {
    setPipelinePosition(in: $in) {
      success
    }
  }
`;
