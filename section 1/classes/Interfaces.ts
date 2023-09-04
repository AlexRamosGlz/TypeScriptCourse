interface ITask {
  getSummary: () => string;
}

class Task implements ITask {
  private titulo: string;
  private descripcion: string;

  constructor(titulo: string, descripcion: string) {
    this.descripcion = descripcion;
    this.titulo = titulo;
  }

  public getSummary() {
    return `titulo: ${this.titulo} \nDescripcion: ${this.descripcion}`;
  }
}

const task = new Task("limpiar", "Limpiar mi casa");

console.log(task.getSummary());
