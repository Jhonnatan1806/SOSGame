"use client";
import { Difficulty, GameMode, GameType } from "@/classes/constants";
import React, { createContext, useContext, useState } from "react";

interface GameContextType {
    gameType: GameType;
    gameMode: GameMode;
    gameDifficulty: Difficulty;
    gameSize: number;
    setGameType: (type: GameType) => void;
    setGameMode: (mode: GameMode) => void;
    setGameDifficulty: (difficulty: Difficulty) => void;
    setGameSize: (size: number) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGameContext = () => useContext(GameContext);

interface GameProviderProps {
    children: React.ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
    const [gameType, setGameType] = useState(GameType.SIMPLE_GAME);
    const [gameMode, setGameMode] = useState(GameMode.PVP);
    const [gameDifficulty, setGameDifficulty] = useState(Difficulty.EASY);
    const [gameSize, setGameSize] = useState(3);

    const value: GameContextType = {
        gameType,
        gameMode,
        gameDifficulty,
        gameSize,
        setGameType,
        setGameMode,
        setGameDifficulty,
        setGameSize,
    };

    return (
        <GameContext.Provider value={value}>{children}</GameContext.Provider>
    );
};
