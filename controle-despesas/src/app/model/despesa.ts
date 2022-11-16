export class Despesa {
  id!: string;
  descricao: string;    
  valor: number;
  vencimento?: Date;

  constructor(descricao: string, valor: number) {
    this.id = String(Math.round(Math.random() * 1000));
    this.descricao = descricao;
    this.valor = valor;
    this.vencimento = new Date();

  }

  public static clone(desp: Despesa) {
    let d: Despesa = new Despesa(desp.descricao, desp.valor);
    d.descricao = desp.descricao;
    d.valor = desp.valor;
    d.vencimento = desp.vencimento;
    return d;
  }

  /**
   * Transforma um objeto pego da API para a versão salva no WebStorage
   * @param desp
   * @returns
   */
  public static toWS(desp: Despesa) {
    let d: Despesa = new Despesa(desp.descricao, desp.valor);
    d.descricao = desp.descricao;
    d.valor = desp.valor;
    d.vencimento = desp.vencimento;   
    return d;
  }
}
