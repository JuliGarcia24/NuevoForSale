export class Zona {
    private nombre: string;
    private valor: number;

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setValor(valor: number) {
        this.valor = valor;
    }

    public getValor(): number {
        return this.valor;
    }
}