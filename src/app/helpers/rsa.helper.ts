import { Injectable } from '@angular/core';
import * as Forge from 'node-forge';
// Add comment
@Injectable({
  providedIn: 'root',
})
export class RSAHelper {
  publicKey: string = `-----BEGIN PUBLIC KEY-----
  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCEKfugJmnCR4hvQdF59dOUKyW/
  5TpNcN1p2dNqtDbEYM9od3/K0MmnN4wk5IGnkaejT1BISRjAIQ7LVUorr/c0UoPQ
  AWdAXsX12DYxZIpaAQ/J+GMOHXNTcT3bWmZuZXUoR+usP1rlwYwlsimuPmdCXpNn
  IZGLTEVLs5rFeafNbQIDAQAB
  -----END PUBLIC KEY-----`;

  constructor() {}

  encryptWithPublicKey(valueToEncrypt: string): string {
    const rsa = Forge.pki.publicKeyFromPem(this.publicKey);
    return window.btoa(rsa.encrypt(valueToEncrypt.toString()));
  }
}
