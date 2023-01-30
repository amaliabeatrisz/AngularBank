import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];

constructor() {
  this.listaTransferencia = [];
}

get transferencias(){
  return this.listaTransferencia;
}

adicionar(transferencia: any){
  this.tratarDados(transferencia);
  this.transferencias.push(transferencia);
}

private tratarDados(transferencia: any){
  transferencia.data = new Date();

}

}
