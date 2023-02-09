import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pipeline } from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';
import { Apollo } from 'apollo-angular';
import {
  createPipelineQuery,
  deletePipelineQuery,
  getPipelineQuery,
  listPipelinesQuery,
  setPipelinePositionQuery,
  updatePipelineQuery,
} from '@shared/graphql/queries/pipelines';

@Injectable({
  providedIn: 'root',
})
export class PipelineServiceService {
  authenticatedBaseurl: string;

  constructor(private apollo: Apollo) {}

  createPipeline(pipeline: Pipeline): Observable<Pipeline | undefined> {
    return this.apollo
      .mutate({
        mutation: createPipelineQuery,
        variables: {
          in: {
            pipeline,
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response?.data?.createPipeline?.pipeline;
        })
      );
  }

  updatePipeline(id: string, pipeline: Pipeline): Observable<Pipeline> {
    return this.apollo
      .mutate({
        mutation: updatePipelineQuery,
        variables: {
          in: {
            id,
            pipeline,
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response?.data?.updatePipeline?.pipeline;
        })
      );
  }

  refreshPipelines() {
    return this.getPipelines('0', 100, '');
  }

  getPipelines(skip: string, limit: number, orderBy: string): Observable<Pipeline[] | undefined> {
    return this.apollo
      .query({
        query: listPipelinesQuery,
        variables: {
          in: {
            skip,
            limit,
            order_by: orderBy,
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response.data?.pipelines?.pipelines;
        })
      );
  }

  getPipeline(id: string): Observable<Pipeline | undefined> {
    return this.apollo
      .query({
        query: getPipelineQuery,
        variables: {
          in: {
            id,
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response?.data?.pipeline?.pipeline;
        })
      );
  }

  deletePipeline(id: string): Observable<boolean | undefined> {
    return this.apollo
      .mutate({
        mutation: deletePipelineQuery,
        variables: {
          in: {
            id,
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response?.data?.deletePipeline.success;
        })
      );
  }

  setPipelinePosition(id: string, timestamp: number): Observable<boolean> {
    return this.apollo
      .mutate({
        mutation: setPipelinePositionQuery,
        variables: {
          in: {
            id,
            timestamp,
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response?.data?.setPipelinePosition.success;
        })
      );
  }
}
