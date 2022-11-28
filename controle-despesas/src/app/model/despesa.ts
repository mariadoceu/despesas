export class Despesa {
  id: string;  
  descricao: string;    
  valor!: number;
  vencimento?: Date;

  constructor(id: string, descricao: string) {
    this.id = id;
    this.descricao = descricao;

  }

  public static clone(desp: Despesa) {
    let d: Despesa = new Despesa(desp.id, desp.descricao);
    return d;
  }

  /**
   * Transforma um objeto pego da API para a versão salva no WebStorage
   * @param desp
   * @returns
   */
  public static toWS(desp: Despesa) {
    let d: Despesa = new Despesa(desp.id, desp.descricao);
    d.id = desp.id;
    d.descricao = desp.descricao;
    d.valor = desp.valor;
    d.vencimento = desp.vencimento;   
    return d;
  }
}
