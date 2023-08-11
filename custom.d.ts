// import { Thema } from "src/common/interface";
declare module "*.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
}

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  // export interface DefaultTheme extends Thema { }
}
