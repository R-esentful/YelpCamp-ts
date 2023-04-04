declare module "*.png";
declare module "*.gif";
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}
declare module "*.jpeg";
declare module "*.jpg";
