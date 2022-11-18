export class Despesa {
  id: string;  
  descricao: string;    
  valor: number;
  vencimento?: Date;

  constructor(id: string, descricao: string, valor: number, vencimento: Date = new Date()) {
    this.id = id;
    this.descricao = descricao;
    this.valor = valor;
    this.vencimento = vencimento;
  }

  public static clone(desp: Despesa) {
    let d: Despesa = new Despesa(desp.id, desp.descricao, desp.valor, desp.vencimento);
    return d;
  }

  /**
   * Transforma um objeto pego da API para a versão salva no WebStorage
   * @param desp
   * @returns
   */
  public static toWS(desp: Despesa) {
    let d: Despesa = new Despesa(desp.id, desp.descricao, desp.valor);
    d.id = desp.id;
    d.descricao = desp.descricao;
    d.valor = desp.valor;
    d.vencimento = desp.vencimento;   
    return d;
  }
}
