import { Pipe, PipeTransform } from '@angular/core';
import { Dependency } from '@shared/dependency-error-modal/dependencies';

@Pipe({
  name: 'dependencyIsPipeline',
})
export class DependencyIsPipelinePipe implements PipeTransform {
  transform(dependencies: Dependency[], ...args: unknown[]): unknown {
    return dependencies?.filter((dependency) => dependency.id.startsWith('pipeline'));
  }
}
