/**
 * Representa un tablero de juego.
 */
export class Board {
    private readonly rows: number;
    private readonly columns: number;
    private readonly grid: string[][];

    /**
     * Crear un tablero de juego.
     *
     * @param rows - Número de filas del tablero (opcional).
     * @param columns - Número de columnas del tablero (opcional).
     */
    constructor(rows: number = 3, columns: number = 3) {
        this.rows = rows;
        this.columns = columns;
        this.grid = new Array(this.rows);
        this.grid = new Array(rows)
            .fill(null)
            .map(() => new Array(columns).fill(""));
    }

    /**
     * Retorna el número de filas del tablero.
     *
     * @returns Número de filas del tablero.
     */
    public getRows(): number {
        return this.rows;
    }

    /**
     * Retorna el número de columnas del tablero.
     *
     * @returns Número de columnas del tablero.
     */
    public getColumns(): number {
        return this.columns;
    }

    /**
     * Retorna el tablero de juego.
     *
     * @returns Tablero de juego.
     */
    public getGrid(): string[][] {
        return this.grid;
    }

    /**
     * Establece el valor de una celda del tablero.
     *
     * @param row - Posición de la fila.
     * @param column - Posición de la columna.
     * @param value - Valor a asignar.
     */
    public setCell(row: number, column: number, value: string): void {
        this.grid[row][column] = value;
    }

    /**
     * Obtiene el valor de una celda del tablero.
     *
     * @param row - Posición de la fila.
     * @param column - Posición de la columna.
     * @returns Valor de la celda.
     */
    public getCell(row: number, column: number): string {
        return this.grid[row][column];
    }

    /**
     * Retorna `true` si el tablero está vacío.
     *
     * @returns `true` si el tablero está vacío, `false` en caso contrario.
     */
    public isEmpty(): boolean {
        return this.grid.every((row) => row.every((cell) => cell === ""));
    }

    /**
     * Retorna `true` si el tablero está lleno.
     *
     * @returns `true` si el tablero está lleno, `false` en caso contrario.
     */
    public isFull(): boolean {
        return this.grid.every((row) => row.every((cell) => cell !== ""));
    }

    /**
     * Limpia el tablero.
     */
    public reset(): void {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                this.setCell(row, column, "");
            }
        }
    }
}
