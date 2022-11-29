/**
 *  "id": 1,
      "descricao": "Salario Rodney",
      "valor": 2000
 */
export class Receita {
    id: string;  
    descricao: string;    
    valor!: number;

    constructor(id: string, descricao: string, valor: number) {
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
      }

      public static clone(desp: Receita) {
        let d: Receita = new Receita(desp.id, desp.descricao, desp.valor);
        return d;
      }
}
