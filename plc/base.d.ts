export type base = {
  /** Encodes {@link unencoded} using the selected module's baseXX encoder */
  encode: (unencoded:string)=>string;
}