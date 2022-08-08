/** @deprecated VERY LIKELY DOES NOT WORK IN ALL RBXTS ENVS */
type aead_chacha_poly = {
  poly_keygen: (key:string, nonce:string) => string;
  encrypt: (aad: any, key: any, iv: any, constant: any, plain: any) => any;
  decrypt: (aad: any, key: any, iv: any, constant: any, plain: any) => any;
}
declare const aead_chacha_poly: aead_chacha_poly;
export = aead_chacha_poly
