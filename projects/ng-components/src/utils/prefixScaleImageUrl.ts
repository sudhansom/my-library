import { isExternalUrl } from "./isExternalUrl";

interface IPrefixImageUtlOptions {
  context?: string;
  width?: number;
  height?: number;
  bgcolor?: string;
  position?: string;
  padCanvas?: boolean;
  cover?: boolean;
  maxScale?: number;
  fallbackPath?: string;
}

export const prefixScaleImageUrl = (value: string, options: IPrefixImageUtlOptions) => {
  if (isExternalUrl(value)) {
    return value;
  }
  else {
    var query : any = {
      path: value,
      context: options.context,
      width: options.width,
      height: options.height,

      bgcolor: options.bgcolor,
      position: options.position,

      padCanvas: options.padCanvas,
      cover: options.cover,

      maxScale: options.maxScale,
      fallbackPath: options.fallbackPath
    };

    const params = Object.keys(query)
      .filter(key => {
        const val = query[key];

        return val !== null && val !== undefined && val !== '';
      })
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
      .join('&')

    return `/.0/cms/scaleImage.aspx?${params}`;
  }
}
