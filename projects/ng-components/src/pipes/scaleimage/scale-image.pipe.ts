import { Pipe, PipeTransform } from '@angular/core';
import { prefixScaleImageUrl } from '../../utils/prefixScaleImageUrl';

@Pipe({
  name: 'scaleImage',
  pure: true
})
export class ScaleImagePipe implements PipeTransform {
  transform(imageUrl: string, width: number) {
    return prefixScaleImageUrl(imageUrl, {
      width: width,
      padCanvas: false
    });
  }
}
