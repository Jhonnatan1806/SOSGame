import { GamePlayers } from "@/classes/enums/GamePlayers";

/**
 * @class WinLine
 * @classdesc Representa una línea ganadora del juego.
 * @interface
 */
export interface WinLine {
    startRow: number;
    startColumn: number;
    endRow: number;
    endColumn: number;
    player: GamePlayers;
}