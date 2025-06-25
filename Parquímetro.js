class Parquimetro {
    constructor(valor) {
      this.valor = parseFloat(valor);
      this.tempo = 0;
      this.troco = 0;
    }
  
    calcularTempo() {
      if (this.valor < 1) {
        return 'Valor insuficiente. O mínimo é R$1,00.';
      }
  
      if (this.valor >= 3) {
        this.tempo = 120;
        this.troco = this.valor - 3;
      } else if (this.valor >= 1.75) {
        this.tempo = 60;
        this.troco = this.valor - 1.75;
      } else {
        this.tempo = 30;
        this.troco = this.valor - 1;
      }
  
      return `Tempo: ${this.tempo} min<br>Troco: R$${this.troco.toFixed(2)}`;
    }
  }
  
  function simular() {
    const valorInput = document.getElementById('valor').value;
    const resultado = document.getElementById('resultado');
  
    const parquimetro = new Parquimetro(valorInput);
    resultado.innerHTML = parquimetro.calcularTempo();
  }