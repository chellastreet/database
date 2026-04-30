import React, { useEffect, useMemo, useRef, useState } from "react";

const initialSeasons = [
  {
    id: "s1",
    name: "Temporada 1",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=185545",
    teams: [
      { id: "torrent-fs", name: "Torrent" },
      { id: "inter-torrent", name: "Inter Torrent" },
      { id: "santos-torrent", name: "Santos Torrent" },
    ],
    matches: [
      {
        id: "s1-j1-1",
        round: 1,
        homeTeamId: "torrent-fs",
        awayTeamId: "inter-torrent",
        homeGoals: 14,
        awayGoals: 12,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=34271027",
        homeScorersText: "Christian Miquel (3)\nFran Delgado (8)\nJorge Pina (3)",
        awayScorersText: "Borja Pérez (6)\nEdu Lozoya (6)",
      },
      {
        id: "s1-j2-1",
        round: 2,
        homeTeamId: "torrent-fs",
        awayTeamId: "santos-torrent",
        homeGoals: 32,
        awayGoals: 12,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=34271029",
        homeScorersText: "Christian Miquel (10)\nDani Galvis (2)\nFran Delgado (12)\nJorge Pina (8)",
        awayScorersText: "Borja Muñoz (8)\nJulio Valerio (4)",
      },
      {
        id: "s1-j3-1",
        round: 3,
        homeTeamId: "inter-torrent",
        awayTeamId: "santos-torrent",
        homeGoals: 24,
        awayGoals: 15,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=34271031",
        homeScorersText: "Borja Pérez (12)\nEdu Lozoya (12)",
        awayScorersText: "Borja Muñoz (5)\nJulio Valerio (2)\nPablo Bellido (8)",
      },
      {
        id: "s1-j4-1",
        round: 4,
        homeTeamId: "inter-torrent",
        awayTeamId: "torrent-fs",
        homeGoals: 18,
        awayGoals: 21,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=34271033",
        homeScorersText: "Alejandro López (3)\nBorja Pérez (5)\nEdu Lozoya (10)",
        awayScorersText: "Christian Miquel (10)\nFran Delgado (3)\nIsmael Cases (1)\nJorge Pina (7)",
      },
      {
        id: "s1-j5-1",
        round: 5,
        homeTeamId: "santos-torrent",
        awayTeamId: "torrent-fs",
        homeGoals: 21,
        awayGoals: 17,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=34271035",
        homeScorersText: "Borja Muñoz (5)\nJorge Forano (9)\nJulio Valerio (1)\nLuis Herraiz (4)\nPablo Bellido (2)",
        awayScorersText: "Christian Miquel (3)\nFran Delgado (3)\nIsmael Cases (5)\nJorge Torrent (6)",
      },
      {
        id: "s1-j6-1",
        round: 6,
        homeTeamId: "santos-torrent",
        awayTeamId: "inter-torrent",
        homeGoals: 13,
        awayGoals: 21,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=34271037",
        homeScorersText: "Ismael Cases (3)\nJorge Forano (1)\nPablo Bellido (9)",
        awayScorersText: "Alejandro López (3)\nÁngel Cases (5)\nBorja Pérez (2)\nEdu Lozoya (4)\nJaume Aracil (2)\nVicente Cárcel (5)",
      },
    ],
    byes: [
      { round: 1, teamId: "santos-torrent" },
      { round: 2, teamId: "inter-torrent" },
      { round: 3, teamId: "torrent-fs" },
      { round: 4, teamId: "santos-torrent" },
      { round: 5, teamId: "inter-torrent" },
      { round: 6, teamId: "torrent-fs" },
    ],
    scorers: [
      { id: "s1-p1", player: "Edu Lozoya", teamId: "inter-torrent", goals: 32 },
      { id: "s1-p2", player: "Fran Delgado", teamId: "torrent-fs", goals: 26 },
      { id: "s1-p3", player: "Christian Miquel", teamId: "torrent-fs", goals: 26 },
      { id: "s1-p4", player: "Borja Pérez", teamId: "inter-torrent", goals: 25 },
      { id: "s1-p5", player: "Pablo Bellido", teamId: "santos-torrent", goals: 19 },
      { id: "s1-p6", player: "Jorge Pina", teamId: "torrent-fs", goals: 18 },
      { id: "s1-p7", player: "Borja Muñoz", teamId: "santos-torrent", goals: 18 },
      { id: "s1-p8", player: "Jorge Forano", teamId: "santos-torrent", goals: 10 },
      { id: "s1-p9", player: "Julio Valerio", teamId: "santos-torrent", goals: 7 },
      { id: "s1-p10", player: "Jorge Torrent", teamId: "torrent-fs", goals: 6 },
      { id: "s1-p11", player: "Ismael Cases", teamId: "torrent-fs", goals: 6 },
      { id: "s1-p12", player: "Alejandro López", teamId: "inter-torrent", goals: 6 },
      { id: "s1-p13", player: "Ángel Cases", teamId: "inter-torrent", goals: 5 },
      { id: "s1-p14", player: "Vicente Cárcel", teamId: "inter-torrent", goals: 5 },
      { id: "s1-p15", player: "Luis Herraiz", teamId: "santos-torrent", goals: 4 },
      { id: "s1-p16", player: "Ismael Cases", teamId: "santos-torrent", goals: 3 },
      { id: "s1-p17", player: "Dani Galvis", teamId: "torrent-fs", goals: 2 },
      { id: "s1-p18", player: "Jaume Aracil", teamId: "inter-torrent", goals: 2 },
    ],
  },
  {
    id: "s2",
    name: "Temporada 2",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=217196",
    teams: [
      { id: "inter-torrent-s2", name: "Inter torrent" },
      { id: "torrent-fs-s2", name: "Torrent" },
      { id: "santos-torrent-s2", name: "Santos Torrent" },
      { id: "torrent-saint-germain-s2", name: "Torrent Saint-Germain" },
    ],
    matches: [
      {
        id: "s2-j1-1",
        round: 1,
        homeTeamId: "santos-torrent-s2",
        awayTeamId: "torrent-fs-s2",
        homeGoals: 6,
        awayGoals: 10,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=47937943",
        homeScorersText: "Borja Muñoz (1)\nBorja Pérez (4)\nJorge Forano (1)",
        awayScorersText: "Fran Delgado (5)\nJorge Pina (2)\nJuan Muñoz (3)",
      },
      {
        id: "s2-j1-2",
        round: 1,
        homeTeamId: "inter-torrent-s2",
        awayTeamId: "torrent-saint-germain-s2",
        homeGoals: 15,
        awayGoals: 12,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=47937944",
        homeScorersText: "Christian Miquel (3)\nEdu Lozoya (7)\nPepe Vilanova (5)",
        awayScorersText: "Christian Miquel (p.p.) (1)\nJorge Rubio (1)\nJulio Valerio (2)\nLuis Herraiz (2)\nOscar Gil (3)\nPablo Bellido (3)",
      },
      {
        id: "s2-j2-1",
        round: 2,
        homeTeamId: "torrent-saint-germain-s2",
        awayTeamId: "torrent-fs-s2",
        homeGoals: 9,
        awayGoals: 8,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=47937945",
        homeScorersText: "Julio Valerio (3)\nLuis Herraiz (1)\nOscar Gil (3)\nPablo Bellido (2)",
        awayScorersText: "Fran Delgado (1)\nJorge Pina (5)\nJuan Muñoz (2)",
      },
      {
        id: "s2-j2-2",
        round: 2,
        homeTeamId: "inter-torrent-s2",
        awayTeamId: "santos-torrent-s2",
        homeGoals: 18,
        awayGoals: 7,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=47937946",
        homeScorersText: "Christian Miquel (2)\nEdu Lozoya (7)\nPepe Vilanova (9)",
        awayScorersText: "Borja Muñoz (1)\nBorja Pérez (4)\nJaume Aracil (1)\nJorge Forano (1)",
      },
      {
        id: "s2-j3-1",
        round: 3,
        homeTeamId: "inter-torrent-s2",
        awayTeamId: "torrent-fs-s2",
        homeGoals: 3,
        awayGoals: 6,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=47937947",
        homeScorersText: "Edu Lozoya (2)\nPepe Vilanova (1)",
        awayScorersText: "Fran Delgado (1)\nJorge Pina (2)\nJuan Muñoz (3)",
      },
      {
        id: "s2-j3-2",
        round: 3,
        homeTeamId: "torrent-saint-germain-s2",
        awayTeamId: "santos-torrent-s2",
        homeGoals: 8,
        awayGoals: 6,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=47937948",
        homeScorersText: "Jorge Rubio (1)\nJulio Valerio (1)\nLuis Herraiz (1)\nOscar Gil (1)\nPablo Bellido (4)",
        awayScorersText: "Borja Muñoz (3)\nBorja Pérez (1)\nJorge Forano (2)",
      },
      {
        id: "s2-j4-1",
        round: 4,
        homeTeamId: "torrent-fs-s2",
        awayTeamId: "santos-torrent-s2",
        homeGoals: 4,
        awayGoals: 5,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=47937949",
        homeScorersText: "Fran Delgado (2)\nJuan Muñoz (2)",
        awayScorersText: "Borja Muñoz (1)\nBorja Pérez (2)\nJaume Aracil (1)\nJorge Forano (1)",
      },
      {
        id: "s2-j4-2",
        round: 4,
        homeTeamId: "torrent-saint-germain-s2",
        awayTeamId: "inter-torrent-s2",
        homeGoals: 5,
        awayGoals: 7,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=47937950",
        homeScorersText: "Jaume Aracil (1)\nPablo Bellido (1)\nToni Serrano (3)",
        awayScorersText: "Christian Miquel (1)\nEdu Lozoya (2)\nPepe Vilanova (4)",
      },
      {
        id: "s2-j5-1",
        round: 5,
        homeTeamId: "torrent-fs-s2",
        awayTeamId: "torrent-saint-germain-s2",
        homeGoals: 12,
        awayGoals: 3,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=47937951",
        homeScorersText: "Fran Delgado (3)\nJorge Pina (1)\nJuan Muñoz (8)",
        awayScorersText: "Oscar Gil (2)\nPablo Bellido (1)",
      },
      {
        id: "s2-j5-2",
        round: 5,
        homeTeamId: "santos-torrent-s2",
        awayTeamId: "inter-torrent-s2",
        homeGoals: 16,
        awayGoals: 13,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=47937952",
        homeScorersText: "Borja Muñoz (4)\nBorja Pérez (8)\nJaume Aracil (4)",
        awayScorersText: "Edu Lozoya (2)\nPepe Vilanova (7)\nToni Serrano (4)",
      },
      {
        id: "s2-j6-1",
        round: 6,
        homeTeamId: "santos-torrent-s2",
        awayTeamId: "torrent-saint-germain-s2",
        homeGoals: 9,
        awayGoals: 5,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=47937953",
        homeScorersText: "Borja Muñoz (4)\nBorja Pérez (4)\nJaume Aracil (1)",
        awayScorersText: "Jorge Rubio (1)\nJulio Valerio (1)\nLuis Herraiz (1)\nOscar Gil (1)\nPablo Bellido (1)",
      },
      {
        id: "s2-j6-2",
        round: 6,
        homeTeamId: "torrent-fs-s2",
        awayTeamId: "inter-torrent-s2",
        homeGoals: 4,
        awayGoals: 5,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=47937954",
        homeScorersText: "Fran Delgado (2)\nJorge Pina (2)",
        awayScorersText: "Christian Miquel (3)\nPepe Vilanova (2)",
      },
    ],
    byes: [],
    scorers: [
      { id: "s2-p1", player: "Pepe Vilanova", teamId: "inter-torrent-s2", goals: 28 },
      { id: "s2-p2", player: "Borja Pérez", teamId: "santos-torrent-s2", goals: 23 },
      { id: "s2-p3", player: "Edu Lozoya", teamId: "inter-torrent-s2", goals: 20 },
      { id: "s2-p4", player: "Juan Muñoz", teamId: "torrent-fs-s2", goals: 18 },
      { id: "s2-p5", player: "Fran Delgado", teamId: "torrent-fs-s2", goals: 14 },
      { id: "s2-p6", player: "Borja Muñoz", teamId: "santos-torrent-s2", goals: 14 },
      { id: "s2-p7", player: "Jorge Pina", teamId: "torrent-fs-s2", goals: 12 },
      { id: "s2-p8", player: "Pablo Bellido", teamId: "torrent-saint-germain-s2", goals: 12 },
      { id: "s2-p9", player: "Oscar Gil", teamId: "torrent-saint-germain-s2", goals: 10 },
      { id: "s2-p10", player: "Christian Miquel", teamId: "inter-torrent-s2", goals: 9 },
      { id: "s2-p11", player: "Jaume Aracil", teamId: "santos-torrent-s2", goals: 7 },
      { id: "s2-p12", player: "Julio Valerio", teamId: "torrent-saint-germain-s2", goals: 7 },
      { id: "s2-p13", player: "Luis Herraiz", teamId: "torrent-saint-germain-s2", goals: 5 },
      { id: "s2-p14", player: "Jorge Forano", teamId: "santos-torrent-s2", goals: 5 },
      { id: "s2-p15", player: "Toni Serrano", teamId: "inter-torrent-s2", goals: 4 },
      { id: "s2-p16", player: "Toni Serrano", teamId: "torrent-saint-germain-s2", goals: 3 },
      { id: "s2-p17", player: "Jorge Rubio", teamId: "torrent-saint-germain-s2", goals: 3 },
      { id: "s2-p18", player: "Christian Miquel (p.p.)", teamId: "torrent-saint-germain-s2", goals: 1 },
      { id: "s2-p19", player: "Jaume Aracil", teamId: "torrent-saint-germain-s2", goals: 1 },
    ],
  },
  {
    id: "s3",
    name: "Temporada 3",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=185551",
    teams: [
      { id: "inter-torrent-s3", name: "Inter Torrent" },
      { id: "torrent-fs-s3", name: "Torrent" },
      { id: "torrent-saint-germain-s3", name: "Torrent Saint Germain" },
      { id: "santos-torrent-s3", name: "Santos Torrent" },
    ],
    matches: [
      {
        id: "s3-j1-1",
        round: 1,
        homeTeamId: "torrent-saint-germain-s3",
        awayTeamId: "torrent-fs-s3",
        homeGoals: 14,
        awayGoals: 5,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=34272516",
        homeScorersText: "Jorge Pina (4)\nJulio Valero (5)\nLuis Herraiz (1)\nÓscar Fabian (4)",
        awayScorersText: "Borja Pérez (3)\nFran Delgado (2)",
      },
      {
        id: "s3-j1-2",
        round: 1,
        homeTeamId: "santos-torrent-s3",
        awayTeamId: "inter-torrent-s3",
        homeGoals: 7,
        awayGoals: 7,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=34272517",
        homeScorersText: "Christian Miquel (4)\nEdu Lozoya (3)",
        awayScorersText: "Pablo Bellido (2)\nPepe Vilanova (5)",
      },
      {
        id: "s3-j2-1",
        round: 2,
        homeTeamId: "inter-torrent-s3",
        awayTeamId: "torrent-saint-germain-s3",
        homeGoals: 7,
        awayGoals: 2,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=34272518",
        homeScorersText: "Pablo Bellido (2)\nPepe Vilanova (4)\nToni Serrano (1)",
        awayScorersText: "Jorge Pina (1)\nLuis Herraiz (1)",
      },
      {
        id: "s3-j2-2",
        round: 2,
        homeTeamId: "santos-torrent-s3",
        awayTeamId: "torrent-fs-s3",
        homeGoals: 7,
        awayGoals: 6,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=34272519",
        homeScorersText: "Christian Miquel (3)\nEdu Lozoya (3)\nJorge Forano (1)",
        awayScorersText: "Borja Pérez (4)\nFran Delgado (2)",
      },
      {
        id: "s3-j3-1",
        round: 3,
        homeTeamId: "torrent-saint-germain-s3",
        awayTeamId: "santos-torrent-s3",
        homeGoals: 5,
        awayGoals: 6,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=34272520",
        homeScorersText: "Jorge Pina (2)\nÓscar Fabian (3)",
        awayScorersText: "Christian Miquel (3)\nJuanito Muñoz (3)",
      },
      {
        id: "s3-j3-2",
        round: 3,
        homeTeamId: "inter-torrent-s3",
        awayTeamId: "torrent-fs-s3",
        homeGoals: 6,
        awayGoals: 1,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=34272521",
        homeScorersText: "Pablo Bellido (1)\nPepe Vilanova (3)\nToni Serrano (2)",
        awayScorersText: "Borja Pérez (1)",
      },
      {
        id: "s3-j4-1",
        round: 4,
        homeTeamId: "torrent-fs-s3",
        awayTeamId: "torrent-saint-germain-s3",
        homeGoals: 16,
        awayGoals: 7,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=34272522",
        homeScorersText: "Borja Pérez (5)\nChristian Miquel (3)\nFran Delgado (4)\nJaume Aracil (4)",
        awayScorersText: "Dani Cantero (4)\nJorge Pina (2)\nÓscar Fabian (1)",
      },
      {
        id: "s3-j4-2",
        round: 4,
        homeTeamId: "inter-torrent-s3",
        awayTeamId: "santos-torrent-s3",
        homeGoals: 6,
        awayGoals: 5,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=34272523",
        homeScorersText: "Pablo Bellido (1)\nPepe Vilanova (3)\nToni Serrano (2)",
        awayScorersText: "Christian Miquel (3)\nJuanito Muñoz (2)",
      },
      {
        id: "s3-j5-1",
        round: 5,
        homeTeamId: "torrent-saint-germain-s3",
        awayTeamId: "inter-torrent-s3",
        homeGoals: 8,
        awayGoals: 6,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=34272524",
        homeScorersText: "Dani Cantero (3)\nJorge Pina (4)\nÓscar Fabian (1)",
        awayScorersText: "Pablo Bellido (3)\nPepe Vilanova (3)",
      },
      {
        id: "s3-j5-2",
        round: 5,
        homeTeamId: "torrent-fs-s3",
        awayTeamId: "santos-torrent-s3",
        homeGoals: 18,
        awayGoals: 4,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=34272525",
        homeScorersText: "Borja Muñoz (3)\nBorja Pérez (6)\nFran Delgado (4)\nJaume Aracil (4)\nJorge Rubio (1)",
        awayScorersText: "Christian Miquel (4)",
      },
      {
        id: "s3-j6-1",
        round: 6,
        homeTeamId: "santos-torrent-s3",
        awayTeamId: "torrent-saint-germain-s3",
        homeGoals: 7,
        awayGoals: 14,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=34272526",
        homeScorersText: "Jorge Forano (4)\nJuanito Muñoz (3)",
        awayScorersText: "Jorge Pina (5)\nJulio Valero (5)\nÓscar Fabian (4)",
      },
      {
        id: "s3-j6-2",
        round: 6,
        homeTeamId: "torrent-fs-s3",
        awayTeamId: "inter-torrent-s3",
        homeGoals: 10,
        awayGoals: 8,
        cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=34272527",
        homeScorersText: "Borja Muñoz (3)\nBorja Pérez (5)\nFran Delgado (2)",
        awayScorersText: "Pablo Bellido (2)\nPepe Vilanova (4)\nToni Serrano (2)",
      },
    ],
    byes: [],
    scorers: [
      { id: "s3-p1", player: "Borja Pérez", teamId: "torrent-fs-s3", goals: 24 },
      { id: "s3-p2", player: "Pepe Vilanova", teamId: "inter-torrent-s3", goals: 22 },
      { id: "s3-p3", player: "Jorge Pina", teamId: "torrent-saint-germain-s3", goals: 18 },
      { id: "s3-p4", player: "Christian Miquel", teamId: "santos-torrent-s3", goals: 17 },
      { id: "s3-p5", player: "Fran Delgado", teamId: "torrent-fs-s3", goals: 14 },
      { id: "s3-p6", player: "Óscar Fabian", teamId: "torrent-saint-germain-s3", goals: 13 },
      { id: "s3-p7", player: "Pablo Bellido", teamId: "inter-torrent-s3", goals: 11 },
      { id: "s3-p8", player: "Julio Valero", teamId: "torrent-saint-germain-s3", goals: 10 },
      { id: "s3-p9", player: "Juanito Muñoz", teamId: "santos-torrent-s3", goals: 8 },
      { id: "s3-p10", player: "Jaume Aracil", teamId: "torrent-fs-s3", goals: 8 },
      { id: "s3-p11", player: "Dani Cantero", teamId: "torrent-saint-germain-s3", goals: 7 },
      { id: "s3-p12", player: "Toni Serrano", teamId: "inter-torrent-s3", goals: 7 },
      { id: "s3-p13", player: "Borja Muñoz", teamId: "torrent-fs-s3", goals: 6 },
      { id: "s3-p14", player: "Edu Lozoya", teamId: "santos-torrent-s3", goals: 6 },
      { id: "s3-p15", player: "Jorge Forano", teamId: "santos-torrent-s3", goals: 5 },
      { id: "s3-p16", player: "Christian Miquel", teamId: "torrent-fs-s3", goals: 3 },
      { id: "s3-p17", player: "Luis Herraiz", teamId: "torrent-saint-germain-s3", goals: 2 },
      { id: "s3-p18", player: "Jorge Rubio", teamId: "torrent-fs-s3", goals: 1 },
    ],
  },
  {
    id: "s4",
    name: "Temporada 4",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=195094",
    teams: [
      { id: "inter-torrent-s4", name: "Inter Torrent" },
      { id: "torrent-fs-s4", name: "Torrent" },
      { id: "santos-torrent-s4", name: "Santos Torrent" },
      { id: "tsg-s4", name: "TSG" },
      { id: "torrent-city-s4", name: "Torrent City Fs" },
    ],
    officialStandings: [
      { teamId: "inter-torrent-s4", teamName: "Inter Torrent", pts: 9, pj: 4, pg: 3, pe: 0, pp: 0, gf: 13, gc: 9, dg: 4 },
      { teamId: "torrent-fs-s4", teamName: "Torrent", pts: 9, pj: 4, pg: 3, pe: 0, pp: 1, gf: 33, gc: 23, dg: 10 },
      { teamId: "santos-torrent-s4", teamName: "Santos Torrent", pts: 6, pj: 4, pg: 2, pe: 0, pp: 2, gf: 20, gc: 22, dg: -2 },
      { teamId: "tsg-s4", teamName: "TSG", pts: 3, pj: 4, pg: 1, pe: 0, pp: 2, gf: 30, gc: 22, dg: 8 },
      { teamId: "torrent-city-s4", teamName: "Torrent City Fs", pts: 0, pj: 4, pg: 0, pe: 0, pp: 4, gf: 16, gc: 36, dg: -20 },
    ],
    matches: [
      { id: "s4-j1-1", round: 1, homeTeamId: "inter-torrent-s4", awayTeamId: "torrent-city-s4", homeGoals: 4, awayGoals: 3, status: "played" },
      { id: "s4-j1-2", round: 1, homeTeamId: "tsg-s4", awayTeamId: "torrent-fs-s4", homeGoals: 8, awayGoals: 14, status: "played" },
      { id: "s4-j2-1", round: 2, homeTeamId: "torrent-fs-s4", awayTeamId: "inter-torrent-s4", homeGoals: 3, awayGoals: 4, status: "played" },
      { id: "s4-j2-2", round: 2, homeTeamId: "santos-torrent-s4", awayTeamId: "torrent-city-s4", homeGoals: 6, awayGoals: 5, status: "played" },
      { id: "s4-j3-1", round: 3, homeTeamId: "inter-torrent-s4", awayTeamId: "santos-torrent-s4", homeGoals: 5, awayGoals: 3, status: "played" },
      { id: "s4-j3-2", round: 3, homeTeamId: "torrent-city-s4", awayTeamId: "tsg-s4", homeGoals: 2, awayGoals: 17, status: "played" },
      { id: "s4-j4-1", round: 4, homeTeamId: "tsg-s4", awayTeamId: "santos-torrent-s4", homeGoals: 5, awayGoals: 6, status: "played" },
      { id: "s4-j4-2", round: 4, homeTeamId: "torrent-city-s4", awayTeamId: "torrent-fs-s4", homeGoals: 6, awayGoals: 9, status: "played" },
      { id: "s4-j5-1", round: 5, homeTeamId: "inter-torrent-s4", awayTeamId: "tsg-s4", status: "no_presentado" },
      { id: "s4-j5-2", round: 5, homeTeamId: "santos-torrent-s4", awayTeamId: "torrent-fs-s4", homeGoals: 5, awayGoals: 7, status: "played" },
    ],
    byes: [
      { round: 1, teamId: "santos-torrent-s4" },
      { round: 2, teamId: "tsg-s4" },
      { round: 3, teamId: "torrent-fs-s4" },
      { round: 4, teamId: "inter-torrent-s4" },
      { round: 5, teamId: "torrent-city-s4" },
    ],
    scorers: [
      { id: "s4-p1", player: "Fran Ortega", teamId: "tsg-s4", goals: 18 },
      { id: "s4-p2", player: "Borja Pérez", teamId: "torrent-fs-s4", goals: 15 },
      { id: "s4-p3", player: "Pepe Vilanova", teamId: "inter-torrent-s4", goals: 10 },
      { id: "s4-p4", player: "Fran Delgado", teamId: "torrent-fs-s4", goals: 9 },
      { id: "s4-p5", player: "Christian Miquel", teamId: "santos-torrent-s4", goals: 9 },
      { id: "s4-p6", player: "Alejandro Temporal", teamId: "torrent-city-s4", goals: 8 },
      { id: "s4-p7", player: "Borja Muñoz", teamId: "torrent-fs-s4", goals: 6 },
      { id: "s4-p8", player: "Jorge Forano", teamId: "santos-torrent-s4", goals: 6 },
      { id: "s4-p9", player: "Jorge Pina", teamId: "tsg-s4", goals: 6 },
      { id: "s4-p10", player: "Julio Valerio", teamId: "tsg-s4", goals: 6 },
      { id: "s4-p11", player: "David Tormo", teamId: "torrent-city-s4", goals: 5 },
      { id: "s4-p12", player: "Edu Lozoya", teamId: "santos-torrent-s4", goals: 5 },
      { id: "s4-p13", player: "Jaume Aracil", teamId: "torrent-fs-s4", goals: 3 },
      { id: "s4-p14", player: "Carles Aguado", teamId: "torrent-city-s4", goals: 3 },
      { id: "s4-p15", player: "Toni Serrano", teamId: "inter-torrent-s4", goals: 3 },
    ],
  },
  {
    id: "s5",
    name: "Temporada 5",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=217201",
    teams: [
      { id: "torrent-fs-s5", name: "Torrent" },
      { id: "torrent-saint-germain-s5", name: "Torrent Saint-Germain" },
      { id: "torrent-city-s5", name: "Torrent City" },
      { id: "inter-torrent-s5", name: "Inter Torrent" },
    ],
    officialStandings: [
      { teamId: "torrent-fs-s5", teamName: "Torrent", pts: 12, pj: 6, pg: 4, pe: 0, pp: 2, gf: 55, gc: 38, dg: 17 },
      { teamId: "torrent-saint-germain-s5", teamName: "Torrent Saint-Germain", pts: 12, pj: 6, pg: 4, pe: 0, pp: 2, gf: 70, gc: 43, dg: 27 },
      { teamId: "torrent-city-s5", teamName: "Torrent City", pts: 9, pj: 6, pg: 3, pe: 0, pp: 3, gf: 34, gc: 54, dg: -20 },
      { teamId: "inter-torrent-s5", teamName: "Inter Torrent", pts: 3, pj: 6, pg: 1, pe: 0, pp: 5, gf: 38, gc: 62, dg: -24 },
    ],
    matches: [
      { id: "s5-j1-1", round: 1, homeTeamId: "torrent-saint-germain-s5", awayTeamId: "torrent-city-s5", homeGoals: 14, awayGoals: 4, status: "played" },
      { id: "s5-j1-2", round: 1, homeTeamId: "inter-torrent-s5", awayTeamId: "torrent-fs-s5", homeGoals: 6, awayGoals: 15, status: "played" },
      { id: "s5-j2-1", round: 2, homeTeamId: "torrent-fs-s5", awayTeamId: "torrent-saint-germain-s5", homeGoals: 13, awayGoals: 5, status: "played" },
      { id: "s5-j2-2", round: 2, homeTeamId: "inter-torrent-s5", awayTeamId: "torrent-city-s5", homeGoals: 9, awayGoals: 7, status: "played" },
      { id: "s5-j3-1", round: 3, homeTeamId: "torrent-saint-germain-s5", awayTeamId: "inter-torrent-s5", homeGoals: 13, awayGoals: 6, status: "played" },
      { id: "s5-j3-2", round: 3, homeTeamId: "torrent-fs-s5", awayTeamId: "torrent-city-s5", homeGoals: 4, awayGoals: 2, status: "played" },
      { id: "s5-j4-1", round: 4, homeTeamId: "torrent-city-s5", awayTeamId: "torrent-saint-germain-s5", homeGoals: 7, awayGoals: 5, status: "played" },
      { id: "s5-j4-2", round: 4, homeTeamId: "torrent-fs-s5", awayTeamId: "inter-torrent-s5", homeGoals: 10, awayGoals: 3, status: "played" },
      { id: "s5-j5-1", round: 5, homeTeamId: "torrent-saint-germain-s5", awayTeamId: "torrent-fs-s5", homeGoals: 16, awayGoals: 9, status: "played" },
      { id: "s5-j5-2", round: 5, homeTeamId: "torrent-city-s5", awayTeamId: "inter-torrent-s5", homeGoals: 8, awayGoals: 6, status: "played" },
      { id: "s5-j6-1", round: 6, homeTeamId: "inter-torrent-s5", awayTeamId: "torrent-saint-germain-s5", homeGoals: 4, awayGoals: 17, status: "played" },
      { id: "s5-j6-2", round: 6, homeTeamId: "torrent-city-s5", awayTeamId: "torrent-fs-s5", homeGoals: 6, awayGoals: 4, status: "played" },
    ],
    byes: [],
    scorers: [
      { id: "s5-p1", player: "Fran Ortega", teamId: "torrent-saint-germain-s5", goals: 35 },
      { id: "s5-p2", player: "Borja Pérez", teamId: "torrent-fs-s5", goals: 27 },
      { id: "s5-p3", player: "Jorge Pina", teamId: "torrent-saint-germain-s5", goals: 20 },
      { id: "s5-p4", player: "Borja Muñoz", teamId: "torrent-fs-s5", goals: 14 },
      { id: "s5-p5", player: "Juanito Muñoz", teamId: "inter-torrent-s5", goals: 11 },
      { id: "s5-p6", player: "David Tormo", teamId: "torrent-city-s5", goals: 10 },
      { id: "s5-p7", player: "Carles Aguado", teamId: "torrent-city-s5", goals: 10 },
      { id: "s5-p8", player: "Pablo Bellido", teamId: "inter-torrent-s5", goals: 8 },
      { id: "s5-p9", player: "Fran Delgado", teamId: "torrent-fs-s5", goals: 7 },
      { id: "s5-p10", player: "Alexis Trujillo", teamId: "inter-torrent-s5", goals: 6 },
      { id: "s5-p11", player: "Jaume Aracil", teamId: "torrent-fs-s5", goals: 6 },
      { id: "s5-p12", player: "Oscar Gil", teamId: "torrent-saint-germain-s5", goals: 6 },
      { id: "s5-p13", player: "Jesús Lara", teamId: "torrent-city-s5", goals: 5 },
      { id: "s5-p14", player: "Pablo Ricart", teamId: "torrent-city-s5", goals: 5 },
      { id: "s5-p15", player: "Alejandro Temporal", teamId: "torrent-city-s5", goals: 4 },
      { id: "s5-p16", player: "Julio Valerio", teamId: "torrent-saint-germain-s5", goals: 4 },
      { id: "s5-p17", player: "Luis Herraiz", teamId: "inter-torrent-s5", goals: 3 },
      { id: "s5-p18", player: "Jason Robles", teamId: "inter-torrent-s5", goals: 3 },
      { id: "s5-p19", player: "David Tormo", teamId: "inter-torrent-s5", goals: 3 },
      { id: "s5-p20", player: "Dalí", teamId: "torrent-saint-germain-s5", goals: 2 },
      { id: "s5-p21", player: "Dani Galvis", teamId: "torrent-fs-s5", goals: 1 },
      { id: "s5-p22", player: "Fran Delgado", teamId: "torrent-saint-germain-s5", goals: 1 },
    ],
  },
  {
    id: "s6",
    name: "Temporada 6",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=246572",
    teams: [
      { id: "santos-torrent-s6", name: "Santos Torrent" },
      { id: "torrent-fs-s6", name: "Torrent" },
      { id: "inter-torrent-s6", name: "Inter Torrent" },
      { id: "torrent-city-s6", name: "Torrent City" },
    ],
    matches: [
      { id: "s6-j1-1", round: 1, homeTeamId: "inter-torrent-s6", awayTeamId: "torrent-fs-s6", homeGoals: 3, awayGoals: 6, status: "played" },
      { id: "s6-j1-2", round: 1, homeTeamId: "santos-torrent-s6", awayTeamId: "torrent-city-s6", homeGoals: 10, awayGoals: 5, status: "played" },
      { id: "s6-j2-1", round: 2, homeTeamId: "inter-torrent-s6", awayTeamId: "santos-torrent-s6", homeGoals: 5, awayGoals: 10, status: "played" },
      { id: "s6-j2-2", round: 2, homeTeamId: "torrent-fs-s6", awayTeamId: "torrent-city-s6", homeGoals: 9, awayGoals: 6, status: "played" },
      { id: "s6-j3-1", round: 3, homeTeamId: "torrent-fs-s6", awayTeamId: "santos-torrent-s6", homeGoals: 4, awayGoals: 8, status: "played" },
      { id: "s6-j3-2", round: 3, homeTeamId: "inter-torrent-s6", awayTeamId: "torrent-city-s6", homeGoals: 10, awayGoals: 2, status: "played" },
      { id: "s6-j4-1", round: 4, homeTeamId: "torrent-fs-s6", awayTeamId: "inter-torrent-s6", homeGoals: 4, awayGoals: 4, status: "played" },
      { id: "s6-j4-2", round: 4, homeTeamId: "torrent-city-s6", awayTeamId: "santos-torrent-s6", homeGoals: 4, awayGoals: 3, status: "played" },
      { id: "s6-j5-1", round: 5, homeTeamId: "torrent-city-s6", awayTeamId: "torrent-fs-s6", homeGoals: 3, awayGoals: 6, status: "played" },
      { id: "s6-j5-2", round: 5, homeTeamId: "santos-torrent-s6", awayTeamId: "inter-torrent-s6", status: "pending" },
      { id: "s6-j6-1", round: 6, homeTeamId: "santos-torrent-s6", awayTeamId: "torrent-fs-s6", homeGoals: 6, awayGoals: 4, status: "played" },
      { id: "s6-j6-2", round: 6, homeTeamId: "torrent-city-s6", awayTeamId: "inter-torrent-s6", homeGoals: 3, awayGoals: 10, status: "played" },
    ],
    byes: [],
    scorers: [
      { id: "s6-p1", player: "Borja Pérez", teamId: "torrent-fs-s6", goals: 18 },
      { id: "s6-p2", player: "Guille Simó", teamId: "santos-torrent-s6", goals: 18 },
      { id: "s6-p3", player: "Pepe Vilanova", teamId: "inter-torrent-s6", goals: 14 },
      { id: "s6-p4", player: "David Tormo", teamId: "torrent-city-s6", goals: 11 },
      { id: "s6-p5", player: "Dani Cantero", teamId: "santos-torrent-s6", goals: 10 },
      { id: "s6-p6", player: "Christian Miquel", teamId: "inter-torrent-s6", goals: 7 },
      { id: "s6-p7", player: "Alejandro Temporal", teamId: "torrent-city-s6", goals: 7 },
      { id: "s6-p8", player: "Jaume Aracil", teamId: "torrent-fs-s6", goals: 6 },
      { id: "s6-p9", player: "Fran Delgado", teamId: "torrent-fs-s6", goals: 5 },
      { id: "s6-p10", player: "Fran Cubas", teamId: "santos-torrent-s6", goals: 4 },
      { id: "s6-p11", player: "Borja Muñoz", teamId: "torrent-fs-s6", goals: 4 },
      { id: "s6-p12", player: "Alejandro Baviera", teamId: "inter-torrent-s6", goals: 3 },
      { id: "s6-p13", player: "Oscar Gil", teamId: "inter-torrent-s6", goals: 3 },
      { id: "s6-p14", player: "Pablo Ricart", teamId: "torrent-city-s6", goals: 3 },
      { id: "s6-p15", player: "Toni Serrano", teamId: "inter-torrent-s6", goals: 3 },
      { id: "s6-p16", player: "Juanito Muñoz", teamId: "santos-torrent-s6", goals: 2 },
      { id: "s6-p17", player: "Christian Miquel", teamId: "santos-torrent-s6", goals: 2 },
      { id: "s6-p18", player: "Edu Lozoya", teamId: "inter-torrent-s6", goals: 2 },
      { id: "s6-p19", player: "Borja Muñoz", teamId: "torrent-city-s6", goals: 1 },
      { id: "s6-p20", player: "Javier Ribera", teamId: "santos-torrent-s6", goals: 1 },
      { id: "s6-p21", player: "Sergio Choa", teamId: "torrent-city-s6", goals: 1 },
    ],
  },
  {
    id: "s7",
    name: "Temporada 7",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=246753",
    teams: [
      { id: "torrent-fs-s7", name: "Torrent" },
      { id: "torrent-saint-germain-s7", name: "Torrent Saint-Germain" },
      { id: "inter-torrent-s7", name: "Inter Torrent" },
    ],
    matches: [
      { id: "s7-j1-1", round: 1, homeTeamId: "torrent-fs-s7", awayTeamId: "torrent-saint-germain-s7", homeGoals: 6, awayGoals: 5, status: "played" },
      { id: "s7-j2-1", round: 2, homeTeamId: "inter-torrent-s7", awayTeamId: "torrent-saint-germain-s7", homeGoals: 10, awayGoals: 11, status: "played" },
      { id: "s7-j3-1", round: 3, homeTeamId: "torrent-fs-s7", awayTeamId: "inter-torrent-s7", homeGoals: 7, awayGoals: 7, status: "played" },
    ],
    byes: [
      { round: 1, teamId: "inter-torrent-s7" },
      { round: 2, teamId: "torrent-fs-s7" },
      { round: 3, teamId: "torrent-saint-germain-s7" },
    ],
    scorers: [
      { id: "s7-p1", player: "Jaume Aracil", teamId: "torrent-fs-s7", goals: 8 },
      { id: "s7-p2", player: "Edu Lozoya", teamId: "torrent-saint-germain-s7", goals: 7 },
      { id: "s7-p3", player: "Héctor", teamId: "inter-torrent-s7", goals: 4 },
      { id: "s7-p4", player: "David Tormo", teamId: "torrent-saint-germain-s7", goals: 3 },
      { id: "s7-p5", player: "Borja Muñoz", teamId: "torrent-saint-germain-s7", goals: 3 },
      { id: "s7-p6", player: "Christian Miquel", teamId: "torrent-fs-s7", goals: 2 },
      { id: "s7-p7", player: "David Onate", teamId: "inter-torrent-s7", goals: 2 },
      { id: "s7-p8", player: "Fran Delgado", teamId: "torrent-fs-s7", goals: 2 },
      { id: "s7-p9", player: "Jorge Forano", teamId: "torrent-saint-germain-s7", goals: 2 },
      { id: "s7-p10", player: "Toni Serrano", teamId: "inter-torrent-s7", goals: 2 },
      { id: "s7-p11", player: "Victor Moreno", teamId: "inter-torrent-s7", goals: 1 },
      { id: "s7-p12", player: "Julio Valerio", teamId: "inter-torrent-s7", goals: 1 },
      { id: "s7-p13", player: "Rafa Benlloch", teamId: "torrent-saint-germain-s7", goals: 1 },
      { id: "s7-p14", player: "Borja Pérez", teamId: "torrent-fs-s7", goals: 1 },
    ],
  },
  {
    id: "s8",
    name: "Temporada 8",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=184223",
    teams: [
      { id: "tsg-s8", name: "TSG" },
      { id: "inter-torrent-s8", name: "Inter Torrent" },
      { id: "torrent-fs-s8", name: "Torrent" },
    ],
    matches: [
      { id: "s8-j1-1", round: 1, homeTeamId: "torrent-fs-s8", awayTeamId: "inter-torrent-s8", homeGoals: 10, awayGoals: 8, status: "played" },
      { id: "s8-j2-1", round: 2, homeTeamId: "tsg-s8", awayTeamId: "torrent-fs-s8", homeGoals: 21, awayGoals: 7, status: "played" },
      { id: "s8-j3-1", round: 3, homeTeamId: "tsg-s8", awayTeamId: "inter-torrent-s8", homeGoals: 6, awayGoals: 7, status: "played" },
    ],
    byes: [
      { round: 1, teamId: "tsg-s8" },
      { round: 2, teamId: "inter-torrent-s8" },
      { round: 3, teamId: "torrent-fs-s8" },
    ],
    scorers: [
      { id: "s8-p1", player: "Edu Lozoya", teamId: "tsg-s8", goals: 9 },
      { id: "s8-p2", player: "Jonatan Benítez", teamId: "torrent-fs-s8", goals: 9 },
      { id: "s8-p3", player: "Julio Valerio", teamId: "tsg-s8", goals: 6 },
      { id: "s8-p4", player: "Óscar Gil", teamId: "inter-torrent-s8", goals: 6 },
      { id: "s8-p5", player: "Óscar Gil", teamId: "tsg-s8", goals: 5 },
      { id: "s8-p6", player: "Pepe Vilanova", teamId: "inter-torrent-s8", goals: 4 },
      { id: "s8-p7", player: "Borja Muñoz", teamId: "tsg-s8", goals: 4 },
      { id: "s8-p8", player: "Fran Delgado", teamId: "torrent-fs-s8", goals: 3 },
      { id: "s8-p9", player: "Juanito Muñoz", teamId: "inter-torrent-s8", goals: 3 },
      { id: "s8-p10", player: "Miguel Romero", teamId: "torrent-fs-s8", goals: 2 },
      { id: "s8-p11", player: "David Onate", teamId: "torrent-fs-s8", goals: 2 },
      { id: "s8-p12", player: "Jorge Pina", teamId: "tsg-s8", goals: 2 },
      { id: "s8-p13", player: "(Propia Puerta)", teamId: "torrent-fs-s8", goals: 1 },
      { id: "s8-p14", player: "Jorge Pina", teamId: "inter-torrent-s8", goals: 1 },
      { id: "s8-p15", player: "David Tormo", teamId: "tsg-s8", goals: 1 },
      { id: "s8-p16", player: "Jason Robles", teamId: "inter-torrent-s8", goals: 1 },
    ],
  },
  {
    id: "s9",
    name: "Temporada 9",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=179058",
    teams: [
      { id: "inter-torrent-s9", name: "Inter Torrent" },
      { id: "torrent-fs-s9", name: "Torrent" },
      { id: "torrent-saint-germain-s9", name: "Torrent Saint Germain" },
    ],
    matches: [
      { id: "s9-j1-1", round: 1, homeTeamId: "inter-torrent-s9", awayTeamId: "torrent-fs-s9", homeGoals: 5, awayGoals: 3, status: "played" },
      { id: "s9-j2-1", round: 2, homeTeamId: "torrent-saint-germain-s9", awayTeamId: "inter-torrent-s9", homeGoals: 8, awayGoals: 14, status: "played" },
      { id: "s9-j3-1", round: 3, homeTeamId: "torrent-saint-germain-s9", awayTeamId: "torrent-fs-s9", homeGoals: 5, awayGoals: 8, status: "played" },
      { id: "s9-j4-1", round: 4, homeTeamId: "torrent-fs-s9", awayTeamId: "inter-torrent-s9", homeGoals: 4, awayGoals: 8, status: "played" },
      { id: "s9-j5-1", round: 5, homeTeamId: "inter-torrent-s9", awayTeamId: "torrent-saint-germain-s9", homeGoals: 8, awayGoals: 15, status: "played" },
      { id: "s9-j6-1", round: 6, homeTeamId: "torrent-fs-s9", awayTeamId: "torrent-saint-germain-s9", homeGoals: 13, awayGoals: 10, status: "played" },
    ],
    byes: [
      { round: 1, teamId: "torrent-saint-germain-s9" },
      { round: 2, teamId: "torrent-fs-s9" },
      { round: 3, teamId: "inter-torrent-s9" },
      { round: 4, teamId: "torrent-saint-germain-s9" },
      { round: 5, teamId: "torrent-fs-s9" },
      { round: 6, teamId: "inter-torrent-s9" },
    ],
    scorers: [
      { id: "s9-p1", player: "Pepe Vilanova", teamId: "inter-torrent-s9", goals: 16 },
      { id: "s9-p2", player: "Jason Robles", teamId: "inter-torrent-s9", goals: 13 },
      { id: "s9-p3", player: "Jorge Pina", teamId: "torrent-saint-germain-s9", goals: 13 },
      { id: "s9-p4", player: "Borja Pérez", teamId: "torrent-fs-s9", goals: 11 },
      { id: "s9-p5", player: "Sergio Pérez", teamId: "torrent-fs-s9", goals: 10 },
      { id: "s9-p6", player: "Borja Muñoz", teamId: "torrent-saint-germain-s9", goals: 8 },
      { id: "s9-p7", player: "Christian Miquel", teamId: "torrent-saint-germain-s9", goals: 6 },
      { id: "s9-p8", player: "Bogdan", teamId: "torrent-saint-germain-s9", goals: 4 },
      { id: "s9-p9", player: "Fran Delgado", teamId: "torrent-fs-s9", goals: 4 },
      { id: "s9-p10", player: "Julio Valerio", teamId: "torrent-saint-germain-s9", goals: 3 },
      { id: "s9-p11", player: "Jaume Aracil", teamId: "torrent-fs-s9", goals: 3 },
      { id: "s9-p12", player: "Fran Delgado", teamId: "inter-torrent-s9", goals: 3 },
      { id: "s9-p13", player: "David Tormo", teamId: "inter-torrent-s9", goals: 2 },
      { id: "s9-p14", player: "Edu Lozoya", teamId: "torrent-saint-germain-s9", goals: 2 },
      { id: "s9-p15", player: "Seddik", teamId: "torrent-saint-germain-s9", goals: 2 },
      { id: "s9-p16", player: "Borja Muñoz", teamId: "inter-torrent-s9", goals: 1 },
    ],
  },
  {
    id: "s10",
    name: "Temporada 10",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=314555",
    teams: [
      { id: "torrent-fs-s10", name: "Torrent" },
      { id: "tsg-s10", name: "TSG" },
      { id: "inter-torrent-s10", name: "Inter Torrent" },
      { id: "alaquas-fs-s10", name: "Alaquàs FS" },
      { id: "santos-torrent-s10", name: "Santos Torrent" },
    ],
    officialStandings: [
      { teamId: "torrent-fs-s10", teamName: "Torrent", pts: 18, pj: 6, pg: 6, pe: 0, pp: 0, gf: 54, gc: 29, dg: 25 },
      { teamId: "tsg-s10", teamName: "TSG", pts: 7, pj: 6, pg: 2, pe: 1, pp: 3, gf: 40, gc: 45, dg: -5 },
      { teamId: "inter-torrent-s10", teamName: "Inter Torrent", pts: 7, pj: 6, pg: 2, pe: 1, pp: 3, gf: 27, gc: 32, dg: -5 },
      { teamId: "alaquas-fs-s10", teamName: "Alaquàs FS", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 10, gc: 14, dg: -4 },
      { teamId: "santos-torrent-s10", teamName: "Santos Torrent", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 13, gc: 24, dg: -11 },
    ],
    matches: [
      { id: "s10-j1-1", round: 1, homeTeamId: "tsg-s10", awayTeamId: "alaquas-fs-s10", homeGoals: 4, awayGoals: 5, status: "played" },
      { id: "s10-j1-2", round: 1, homeTeamId: "torrent-fs-s10", awayTeamId: "inter-torrent-s10", homeGoals: 9, awayGoals: 5, status: "played" },
      { id: "s10-j2-1", round: 2, homeTeamId: "inter-torrent-s10", awayTeamId: "tsg-s10", homeGoals: 5, awayGoals: 5, status: "played" },
      { id: "s10-j2-2", round: 2, homeTeamId: "torrent-fs-s10", awayTeamId: "alaquas-fs-s10", homeGoals: 7, awayGoals: 5, status: "played" },
      { id: "s10-j3-1", round: 3, homeTeamId: "tsg-s10", awayTeamId: "torrent-fs-s10", homeGoals: 4, awayGoals: 11, status: "played" },
      { id: "s10-j3-2", round: 3, homeTeamId: "inter-torrent-s10", awayTeamId: "alaquas-fs-s10", homeGoals: 3, awayGoals: 0, status: "played" },
      { id: "s10-j4-1", round: 4, homeTeamId: "santos-torrent-s10", awayTeamId: "tsg-s10", homeGoals: 9, awayGoals: 13, status: "played" },
      { id: "s10-j4-2", round: 4, homeTeamId: "inter-torrent-s10", awayTeamId: "torrent-fs-s10", homeGoals: 6, awayGoals: 9, status: "played" },
      { id: "s10-j5-1", round: 5, homeTeamId: "tsg-s10", awayTeamId: "inter-torrent-s10", homeGoals: 9, awayGoals: 5, status: "played" },
      { id: "s10-j5-2", round: 5, homeTeamId: "santos-torrent-s10", awayTeamId: "torrent-fs-s10", homeGoals: 4, awayGoals: 8, status: "played" },
      { id: "s10-j6-1", round: 6, homeTeamId: "torrent-fs-s10", awayTeamId: "tsg-s10", homeGoals: 10, awayGoals: 5, status: "played" },
      { id: "s10-j6-2", round: 6, homeTeamId: "santos-torrent-s10", awayTeamId: "inter-torrent-s10", homeGoals: 0, awayGoals: 3, status: "no_presentado" },
    ],
    byes: [
      { round: 1, teamId: "santos-torrent-s10" },
      { round: 2, teamId: "santos-torrent-s10" },
      { round: 3, teamId: "santos-torrent-s10" },
      { round: 4, teamId: "alaquas-fs-s10" },
      { round: 5, teamId: "alaquas-fs-s10" },
      { round: 6, teamId: "alaquas-fs-s10" },
    ],
    scorers: [
      { id: "s10-p1", player: "Borja Pérez", teamId: "torrent-fs-s10", goals: 13 },
      { id: "s10-p2", player: "Jonatan Benítez", teamId: "torrent-fs-s10", goals: 13 },
      { id: "s10-p3", player: "Sergio Pérez", teamId: "torrent-fs-s10", goals: 9 },
      { id: "s10-p4", player: "Borja Muñoz", teamId: "tsg-s10", goals: 8 },
      { id: "s10-p5", player: "Miguel Romero", teamId: "tsg-s10", goals: 5 },
      { id: "s10-p6", player: "Julio Valerio", teamId: "tsg-s10", goals: 4 },
      { id: "s10-p7", player: "Javi García", teamId: "alaquas-fs-s10", goals: 4 },
      { id: "s10-p8", player: "Fran Delgado", teamId: "santos-torrent-s10", goals: 4 },
      { id: "s10-p9", player: "Fran Delgado", teamId: "torrent-fs-s10", goals: 4 },
      { id: "s10-p10", player: "David Tormo", teamId: "tsg-s10", goals: 4 },
      { id: "s10-p11", player: "Pepe Vilanova", teamId: "inter-torrent-s10", goals: 4 },
      { id: "s10-p12", player: "Pablo Castillo", teamId: "tsg-s10", goals: 3 },
      { id: "s10-p13", player: "Fran Delgado", teamId: "inter-torrent-s10", goals: 3 },
      { id: "s10-p14", player: "Jaume Aracil", teamId: "santos-torrent-s10", goals: 3 },
      { id: "s10-p15", player: "Jaume Aracil", teamId: "torrent-fs-s10", goals: 2 },
      { id: "s10-p16", player: "Jonatan Benítez", teamId: "tsg-s10", goals: 2 },
      { id: "s10-p17", player: "Jorge Pina", teamId: "tsg-s10", goals: 2 },
      { id: "s10-p18", player: "José Manuel Monzó", teamId: "alaquas-fs-s10", goals: 2 },
      { id: "s10-p19", player: "Pablo Castillo", teamId: "inter-torrent-s10", goals: 2 },
      { id: "s10-p20", player: "Juan Luis Segura", teamId: "torrent-fs-s10", goals: 2 },
      { id: "s10-p21", player: "Jason Rebles", teamId: "inter-torrent-s10", goals: 2 },
      { id: "s10-p22", player: "Dani Galvis", teamId: "torrent-fs-s10", goals: 2 },
      { id: "s10-p23", player: "Toni Serrano", teamId: "santos-torrent-s10", goals: 2 },
      { id: "s10-p24", player: "Toni Serrano", teamId: "inter-torrent-s10", goals: 1 },
      { id: "s10-p25", player: "Pablo Valiente", teamId: "tsg-s10", goals: 1 },
      { id: "s10-p26", player: "Samuel Estudillo", teamId: "alaquas-fs-s10", goals: 1 },
      { id: "s10-p27", player: "Christian Miquel", teamId: "tsg-s10", goals: 1 },
      { id: "s10-p28", player: "Abel Toledo", teamId: "alaquas-fs-s10", goals: 1 },
      { id: "s10-p29", player: "Alejandro Cuadrado", teamId: "santos-torrent-s10", goals: 1 },
      { id: "s10-p30", player: "Borja Muñoz", teamId: "inter-torrent-s10", goals: 1 },
      { id: "s10-p31", player: "Borja Muñoz", teamId: "santos-torrent-s10", goals: 1 },
      { id: "s10-p32", player: "Jason Robles", teamId: "tsg-s10", goals: 1 },
      { id: "s10-p33", player: "Francesc Andreu", teamId: "santos-torrent-s10", goals: 1 },
      { id: "s10-p34", player: "Guillermo Vidal", teamId: "alaquas-fs-s10", goals: 1 },
      { id: "s10-p35", player: "Juanito Muñoz", teamId: "tsg-s10", goals: 1 },
      { id: "s10-p36", player: "Juanjo Cegarra", teamId: "inter-torrent-s10", goals: 1 },
      { id: "s10-p37", player: "Julio Valerio", teamId: "inter-torrent-s10", goals: 1 },
      { id: "s10-p38", player: "Miguel Romero", teamId: "inter-torrent-s10", goals: 1 },
      { id: "s10-p39", player: "Juan Luis Segura", teamId: "santos-torrent-s10", goals: 1 },
      { id: "s10-p40", player: "Javi Martínez", teamId: "alaquas-fs-s10", goals: 1 },
    ],
  },
  {
    id: "s11",
    name: "Temporada 11",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=208751",
    teams: [
      { id: "tsg-s11", name: "TSG" },
      { id: "torrent-fs-s11", name: "Torrent" },
      { id: "inter-torrent-s11", name: "Inter Torrent" },
    ],
    matches: [
      { id: "s11-j1-1", round: 1, homeTeamId: "torrent-fs-s11", awayTeamId: "tsg-s11", homeGoals: 5, awayGoals: 6, status: "played" },
      { id: "s11-j2-1", round: 2, homeTeamId: "inter-torrent-s11", awayTeamId: "tsg-s11", homeGoals: 5, awayGoals: 5, status: "played" },
      { id: "s11-j3-1", round: 3, homeTeamId: "torrent-fs-s11", awayTeamId: "inter-torrent-s11", homeGoals: 2, awayGoals: 7, status: "played" },
      { id: "s11-j4-1", round: 4, homeTeamId: "tsg-s11", awayTeamId: "torrent-fs-s11", homeGoals: 7, awayGoals: 0, status: "played" },
      { id: "s11-j5-1", round: 5, homeTeamId: "tsg-s11", awayTeamId: "inter-torrent-s11", homeGoals: 14, awayGoals: 1, status: "played" },
      { id: "s11-j6-1", round: 6, homeTeamId: "inter-torrent-s11", awayTeamId: "torrent-fs-s11", homeGoals: 1, awayGoals: 12, status: "played" },
      { id: "s11-j7-1", round: 7, homeTeamId: "torrent-fs-s11", awayTeamId: "tsg-s11", homeGoals: 2, awayGoals: 3, status: "played" },
      { id: "s11-j8-1", round: 8, homeTeamId: "inter-torrent-s11", awayTeamId: "tsg-s11", homeGoals: 6, awayGoals: 7, status: "played" },
      { id: "s11-j9-1", round: 9, homeTeamId: "torrent-fs-s11", awayTeamId: "inter-torrent-s11", homeGoals: 14, awayGoals: 8, status: "played" },
    ],
    byes: [
      { round: 1, teamId: "inter-torrent-s11" },
      { round: 2, teamId: "torrent-fs-s11" },
      { round: 3, teamId: "tsg-s11" },
      { round: 4, teamId: "inter-torrent-s11" },
      { round: 5, teamId: "torrent-fs-s11" },
      { round: 6, teamId: "tsg-s11" },
      { round: 7, teamId: "inter-torrent-s11" },
      { round: 8, teamId: "torrent-fs-s11" },
      { round: 9, teamId: "tsg-s11" },
    ],
    scorers: [
      { id: "s11-p1", player: "Edu Lozoya", teamId: "tsg-s11", goals: 15 },
      { id: "s11-p2", player: "Borja Pérez", teamId: "torrent-fs-s11", goals: 12 },
      { id: "s11-p3", player: "Jorge Pina", teamId: "tsg-s11", goals: 11 },
      { id: "s11-p4", player: "David Tormo", teamId: "tsg-s11", goals: 9 },
      { id: "s11-p5", player: "Óscar Gil", teamId: "torrent-fs-s11", goals: 7 },
      { id: "s11-p6", player: "Óscar Gil", teamId: "inter-torrent-s11", goals: 5 },
      { id: "s11-p7", player: "Fran Delgado", teamId: "torrent-fs-s11", goals: 5 },
      { id: "s11-p8", player: "Joel Mora", teamId: "torrent-fs-s11", goals: 4 },
      { id: "s11-p9", player: "Edu Lozoya", teamId: "inter-torrent-s11", goals: 4 },
      { id: "s11-p10", player: "Borja Muñoz", teamId: "tsg-s11", goals: 3 },
      { id: "s11-p11", player: "Jaume Aracil", teamId: "torrent-fs-s11", goals: 3 },
      { id: "s11-p12", player: "Julio Valerio", teamId: "inter-torrent-s11", goals: 3 },
      { id: "s11-p13", player: "Julio Valerio", teamId: "tsg-s11", goals: 3 },
      { id: "s11-p14", player: "Toni Serrano", teamId: "inter-torrent-s11", goals: 3 },
      { id: "s11-p15", player: "Sergio Pérez", teamId: "inter-torrent-s11", goals: 2 },
      { id: "s11-p16", player: "Migue Andreu", teamId: "inter-torrent-s11", goals: 2 },
      { id: "s11-p17", player: "Pepe Vilanova", teamId: "tsg-s11", goals: 1 },
      { id: "s11-p18", player: "Sergio Pérez", teamId: "torrent-fs-s11", goals: 1 },
      { id: "s11-p19", player: "Toni Serrano", teamId: "torrent-fs-s11", goals: 1 },
      { id: "s11-p20", player: "Jaume Aracil (pp)", teamId: "inter-torrent-s11", goals: 1 },
      { id: "s11-p21", player: "Javi Martínez", teamId: "inter-torrent-s11", goals: 1 },
      { id: "s11-p22", player: "Jason Robles", teamId: "inter-torrent-s11", goals: 1 },
      { id: "s11-p23", player: "Jorge Pina", teamId: "inter-torrent-s11", goals: 1 },
      { id: "s11-p24", player: "Juanito Muñoz", teamId: "inter-torrent-s11", goals: 1 },
      { id: "s11-p25", player: "Julian Moreno", teamId: "inter-torrent-s11", goals: 1 },
      { id: "s11-p26", player: "Borja Muñoz (pp)", teamId: "torrent-fs-s11", goals: 1 },
      { id: "s11-p27", player: "Borja Pérez", teamId: "inter-torrent-s11", goals: 1 },
      { id: "s11-p28", player: "Alejandro Cuadrado", teamId: "inter-torrent-s11", goals: 1 },
      { id: "s11-p29", player: "Borja Muñoz", teamId: "inter-torrent-s11", goals: 1 },
      { id: "s11-p30", player: "Dani Galvis", teamId: "torrent-fs-s11", goals: 1 },
    ],
  },
  {
    id: "s12",
    name: "Temporada 12",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=246110",
    teams: [
      { id: "torrent-saint-germain-s12", name: "Torrent Saint-Germain" },
      { id: "torrent-fs-s12", name: "Torrent" },
      { id: "pcd-torrent-s12", name: "P.C.D. Torrent" },
    ],
    officialStandings: [
      { teamId: "torrent-saint-germain-s12", teamName: "Torrent Saint-Germain", pts: 12, pj: 4, pg: 4, pe: 0, pp: 0, gf: 44, gc: 15, dg: 29 },
      { teamId: "torrent-fs-s12", teamName: "Torrent", pts: 6, pj: 4, pg: 2, pe: 0, pp: 2, gf: 35, gc: 22, dg: 13 },
      { teamId: "pcd-torrent-s12", teamName: "P.C.D. Torrent", pts: 4, pj: 4, pg: 0, pe: 0, pp: 4, gf: 11, gc: 53, dg: -42 },
    ],
    matches: [
      { id: "s12-j1-1", round: 1, homeTeamId: "torrent-saint-germain-s12", awayTeamId: "torrent-fs-s12", homeGoals: 6, awayGoals: 3, status: "played" },
      { id: "s12-j2-1", round: 2, homeTeamId: "torrent-saint-germain-s12", awayTeamId: "pcd-torrent-s12", homeGoals: 15, awayGoals: 2, status: "played" },
      { id: "s12-j3-1", round: 3, homeTeamId: "torrent-fs-s12", awayTeamId: "pcd-torrent-s12", homeGoals: 10, awayGoals: 4, status: "played" },
      { id: "s12-j4-1", round: 4, homeTeamId: "torrent-fs-s12", awayTeamId: "torrent-saint-germain-s12", homeGoals: 8, awayGoals: 9, status: "played" },
      { id: "s12-j5-1", round: 5, homeTeamId: "pcd-torrent-s12", awayTeamId: "torrent-saint-germain-s12", homeGoals: 2, awayGoals: 14, status: "played" },
      { id: "s12-j6-1", round: 6, homeTeamId: "pcd-torrent-s12", awayTeamId: "torrent-fs-s12", homeGoals: 3, awayGoals: 14, status: "played" },
    ],
    byes: [
      { round: 1, teamId: "pcd-torrent-s12" },
      { round: 2, teamId: "torrent-fs-s12" },
      { round: 3, teamId: "torrent-saint-germain-s12" },
      { round: 4, teamId: "pcd-torrent-s12" },
      { round: 5, teamId: "torrent-fs-s12" },
      { round: 6, teamId: "torrent-saint-germain-s12" },
    ],
    scorers: [
      { id: "s12-p1", player: "Jorge Pina", teamId: "torrent-saint-germain-s12", goals: 19 },
      { id: "s12-p2", player: "Óscar Fabian", teamId: "torrent-fs-s12", goals: 10 },
      { id: "s12-p3", player: "Marcos", teamId: "torrent-saint-germain-s12", goals: 9 },
      { id: "s12-p4", player: "Fran Delgado", teamId: "torrent-fs-s12", goals: 7 },
      { id: "s12-p5", player: "Sergio Pérez", teamId: "torrent-fs-s12", goals: 7 },
      { id: "s12-p6", player: "Pepe Vilanova", teamId: "torrent-saint-germain-s12", goals: 5 },
      { id: "s12-p7", player: "Petrika Tanasa", teamId: "torrent-saint-germain-s12", goals: 4 },
      { id: "s12-p8", player: "Alberto Serramitjana", teamId: "torrent-fs-s12", goals: 4 },
      { id: "s12-p9", player: "Borja Pérez", teamId: "torrent-fs-s12", goals: 3 },
      { id: "s12-p10", player: "Ivan Llamas", teamId: "pcd-torrent-s12", goals: 3 },
      { id: "s12-p11", player: "Miguel Romero", teamId: "torrent-fs-s12", goals: 3 },
      { id: "s12-p12", player: "Adrián Marín", teamId: "pcd-torrent-s12", goals: 3 },
      { id: "s12-p13", player: "Joel Mora", teamId: "pcd-torrent-s12", goals: 3 },
      { id: "s12-p14", player: "David Tormo", teamId: "torrent-saint-germain-s12", goals: 2 },
      { id: "s12-p15", player: "Borja Muñoz", teamId: "torrent-saint-germain-s12", goals: 2 },
      { id: "s12-p16", player: "Dani Carretero", teamId: "torrent-saint-germain-s12", goals: 1 },
      { id: "s12-p17", player: "Jason Robles", teamId: "torrent-saint-germain-s12", goals: 1 },
      { id: "s12-p18", player: "Jesús García", teamId: "pcd-torrent-s12", goals: 1 },
      { id: "s12-p19", player: "Petroleros", teamId: "pcd-torrent-s12", goals: 1 },
      { id: "s12-p20", player: "Pablo García", teamId: "torrent-fs-s12", goals: 1 },
    ],
  },
  {
    id: "s13",
    name: "Temporada 13",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=295129",
    teams: [
      { id: "inter-torrent-s13", name: "Inter Torrent" },
      { id: "santos-torrent-s13", name: "Santos Torrent" },
      { id: "torrent-fs-s13", name: "Torrent" },
    ],
    matches: [
      { id: "s13-j1-1", round: 1, homeTeamId: "torrent-fs-s13", awayTeamId: "santos-torrent-s13", homeGoals: 3, awayGoals: 6, status: "played" },
      { id: "s13-j2-1", round: 2, homeTeamId: "santos-torrent-s13", awayTeamId: "inter-torrent-s13", homeGoals: 5, awayGoals: 4, status: "played" },
      { id: "s13-j3-1", round: 3, homeTeamId: "inter-torrent-s13", awayTeamId: "torrent-fs-s13", homeGoals: 5, awayGoals: 4, status: "played" },
      { id: "s13-j4-1", round: 4, homeTeamId: "torrent-fs-s13", awayTeamId: "inter-torrent-s13", homeGoals: 4, awayGoals: 4, status: "played" },
      { id: "s13-j5-1", round: 5, homeTeamId: "santos-torrent-s13", awayTeamId: "inter-torrent-s13", homeGoals: 1, awayGoals: 8, status: "played" },
    ],
    byes: [
      { round: 1, teamId: "inter-torrent-s13" },
      { round: 2, teamId: "torrent-fs-s13" },
      { round: 3, teamId: "santos-torrent-s13" },
      { round: 4, teamId: "santos-torrent-s13" },
      { round: 5, teamId: "torrent-fs-s13" },
    ],
    scorers: [
      { id: "s13-p1", player: "Javi Martínez", teamId: "inter-torrent-s13", goals: 7 },
      { id: "s13-p2", player: "Jorge Pina", teamId: "torrent-fs-s13", goals: 5 },
      { id: "s13-p3", player: "Alberto Serramitjana", teamId: "inter-torrent-s13", goals: 5 },
      { id: "s13-p4", player: "Christian Miquel", teamId: "santos-torrent-s13", goals: 5 },
      { id: "s13-p5", player: "Carlos Alejos", teamId: "torrent-fs-s13", goals: 4 },
      { id: "s13-p6", player: "Manolo Jiménez", teamId: "inter-torrent-s13", goals: 3 },
      { id: "s13-p7", player: "Sergio Pérez", teamId: "inter-torrent-s13", goals: 3 },
      { id: "s13-p8", player: "Vicente Lucena", teamId: "inter-torrent-s13", goals: 2 },
      { id: "s13-p9", player: "Adrián Marin", teamId: "santos-torrent-s13", goals: 2 },
      { id: "s13-p10", player: "Fran Delgado", teamId: "santos-torrent-s13", goals: 2 },
      { id: "s13-p11", player: "Joel Mora", teamId: "santos-torrent-s13", goals: 2 },
      { id: "s13-p12", player: "Jose Manuel Monzó", teamId: "torrent-fs-s13", goals: 1 },
      { id: "s13-p13", player: "Fran Delgado", teamId: "torrent-fs-s13", goals: 1 },
      { id: "s13-p14", player: "Propia Puerta", teamId: "inter-torrent-s13", goals: 1 },
      { id: "s13-p15", player: "Propia Puerta", teamId: "santos-torrent-s13", goals: 1 },
    ],
  },
  {
    id: "s14",
    name: "Temporada 14",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=311601",
    teams: [
      { id: "santos-torrent-s14", name: "Santos Torrent" },
      { id: "torrent-fs-s14", name: "Torrent" },
      { id: "inter-torrent-s14", name: "Inter Torrent" },
    ],
    matches: [
      { id: "s14-j1-1", round: 1, homeTeamId: "inter-torrent-s14", awayTeamId: "santos-torrent-s14", homeGoals: 6, awayGoals: 3, status: "played" },
      { id: "s14-j2-1", round: 2, homeTeamId: "santos-torrent-s14", awayTeamId: "torrent-fs-s14", homeGoals: 7, awayGoals: 3, status: "played" },
      { id: "s14-j3-1", round: 3, homeTeamId: "torrent-fs-s14", awayTeamId: "inter-torrent-s14", homeGoals: 4, awayGoals: 2, status: "played" },
      { id: "s14-j4-1", round: 4, homeTeamId: "santos-torrent-s14", awayTeamId: "torrent-fs-s14", homeGoals: 7, awayGoals: 3, status: "played" },
      { id: "s14-j5-1", round: 5, homeTeamId: "inter-torrent-s14", awayTeamId: "santos-torrent-s14", homeGoals: 3, awayGoals: 4, status: "played" },
    ],
    byes: [
      { round: 1, teamId: "torrent-fs-s14" },
      { round: 2, teamId: "inter-torrent-s14" },
      { round: 3, teamId: "santos-torrent-s14" },
      { round: 4, teamId: "inter-torrent-s14" },
      { round: 5, teamId: "torrent-fs-s14" },
    ],
    scorers: [
      { id: "s14-p1", player: "Edu Lozoya", teamId: "santos-torrent-s14", goals: 8 },
      { id: "s14-p2", player: "Pablo Fernández", teamId: "torrent-fs-s14", goals: 5 },
      { id: "s14-p3", player: "Manolo Jiménez", teamId: "santos-torrent-s14", goals: 4 },
      { id: "s14-p4", player: "Borja Pérez", teamId: "inter-torrent-s14", goals: 4 },
      { id: "s14-p5", player: "Jason Robles", teamId: "santos-torrent-s14", goals: 4 },
      { id: "s14-p6", player: "Javi Martínez", teamId: "torrent-fs-s14", goals: 3 },
      { id: "s14-p7", player: "Jorge Pina", teamId: "inter-torrent-s14", goals: 3 },
      { id: "s14-p8", player: "Christian Miquel", teamId: "santos-torrent-s14", goals: 3 },
      { id: "s14-p9", player: "Fran Delgado", teamId: "torrent-fs-s14", goals: 2 },
      { id: "s14-p10", player: "Jose Manuel Monzó", teamId: "santos-torrent-s14", goals: 2 },
      { id: "s14-p11", player: "Jorge López", teamId: "inter-torrent-s14", goals: 2 },
      { id: "s14-p12", player: "Toni Serrano", teamId: "inter-torrent-s14", goals: 2 },
    ],
  },
  {
    id: "s15",
    name: "Temporada 15",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=313736",
    teams: [
      { id: "torrent-fs-s15", name: "Torrent" },
      { id: "silla-fs-s15", name: "Silla FS" },
      { id: "santos-torrent-s15", name: "Santos Torrent" },
    ],
    matches: [
      { id: "s15-j1-1", round: 1, homeTeamId: "santos-torrent-s15", awayTeamId: "torrent-fs-s15", homeGoals: 4, awayGoals: 15, status: "played" },
      { id: "s15-j2-1", round: 2, homeTeamId: "torrent-fs-s15", awayTeamId: "silla-fs-s15", homeGoals: 4, awayGoals: 4, status: "played" },
      { id: "s15-j3-1", round: 3, homeTeamId: "torrent-fs-s15", awayTeamId: "santos-torrent-s15", homeGoals: 7, awayGoals: 1, status: "played" },
      { id: "s15-j4-1", round: 4, homeTeamId: "silla-fs-s15", awayTeamId: "santos-torrent-s15", homeGoals: 7, awayGoals: 2, status: "played" },
      { id: "s15-j5-1", round: 5, homeTeamId: "santos-torrent-s15", awayTeamId: "torrent-fs-s15", homeGoals: 2, awayGoals: 5, status: "played" },
      { id: "s15-j6-1", round: 6, homeTeamId: "silla-fs-s15", awayTeamId: "torrent-fs-s15", homeGoals: 4, awayGoals: 5, status: "played" },
      { id: "s15-j7-1", round: 7, homeTeamId: "santos-torrent-s15", awayTeamId: "silla-fs-s15", homeGoals: 5, awayGoals: 4, status: "played" },
      { id: "s15-j8-1", round: 8, homeTeamId: "torrent-fs-s15", awayTeamId: "silla-fs-s15", homeGoals: 7, awayGoals: 7, status: "played" },
      { id: "s15-j9-1", round: 9, homeTeamId: "silla-fs-s15", awayTeamId: "santos-torrent-s15", homeGoals: 4, awayGoals: 3, status: "played" },
    ],
    byes: [
      { round: 1, teamId: "silla-fs-s15" },
      { round: 2, teamId: "santos-torrent-s15" },
      { round: 3, teamId: "silla-fs-s15" },
      { round: 4, teamId: "torrent-fs-s15" },
      { round: 5, teamId: "silla-fs-s15" },
      { round: 6, teamId: "santos-torrent-s15" },
      { round: 7, teamId: "torrent-fs-s15" },
      { round: 8, teamId: "santos-torrent-s15" },
      { round: 9, teamId: "torrent-fs-s15" },
    ],
    scorers: [
      { id: "s15-p1", player: "Edu Lozoya", teamId: "torrent-fs-s15", goals: 15 },
      { id: "s15-p2", player: "Víctor Duran", teamId: "silla-fs-s15", goals: 8 },
      { id: "s15-p3", player: "Pepe Vilanova", teamId: "torrent-fs-s15", goals: 7 },
      { id: "s15-p4", player: "Xiri", teamId: "silla-fs-s15", goals: 6 },
      { id: "s15-p5", player: "Jorge Pina", teamId: "torrent-fs-s15", goals: 5 },
      { id: "s15-p6", player: "Christian Miquel", teamId: "torrent-fs-s15", goals: 5 },
      { id: "s15-p7", player: "Jesús Blanco", teamId: "santos-torrent-s15", goals: 4 },
      { id: "s15-p8", player: "Jonny Estribas", teamId: "santos-torrent-s15", goals: 3 },
      { id: "s15-p9", player: "Alberto López", teamId: "silla-fs-s15", goals: 3 },
      { id: "s15-p10", player: "Fran Delgado", teamId: "torrent-fs-s15", goals: 3 },
      { id: "s15-p11", player: "Guillermo Longinos", teamId: "silla-fs-s15", goals: 3 },
      { id: "s15-p12", player: "Alberto Serramitjana", teamId: "santos-torrent-s15", goals: 2 },
      { id: "s15-p13", player: "Antonio Serramitjana", teamId: "santos-torrent-s15", goals: 2 },
      { id: "s15-p14", player: "Raúl", teamId: "santos-torrent-s15", goals: 2 },
      { id: "s15-p15", player: "Vicente Lucena", teamId: "silla-fs-s15", goals: 2 },
      { id: "s15-p16", player: "Vicente Martínez", teamId: "santos-torrent-s15", goals: 1 },
      { id: "s15-p17", player: "Jorge", teamId: "silla-fs-s15", goals: 1 },
      { id: "s15-p18", player: "Nacho Payá", teamId: "santos-torrent-s15", goals: 1 },
      { id: "s15-p19", player: "Pablo Dueñas", teamId: "torrent-fs-s15", goals: 1 },
      { id: "s15-p20", player: "Adrián Marín", teamId: "santos-torrent-s15", goals: 1 },
      { id: "s15-p21", player: "Javier Blanco", teamId: "santos-torrent-s15", goals: 1 },
    ],
  },
  {
    id: "s16",
    name: "Temporada 16",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=337022",
    teams: [
      { id: "torrent-fs-s16", name: "Torrent" },
      { id: "torrent-paraiso-s16", name: "Torrent Paraíso Interior FS" },
      { id: "torrent-pirates-s16", name: "Torrent Pirates FS" },
    ],
    officialStandings: [
      { teamId: "torrent-fs-s16", teamName: "Torrent", pts: 15, pj: 6, pg: 5, pe: 0, pp: 1, gf: 28, gc: 16, dg: 12 },
      { teamId: "torrent-paraiso-s16", teamName: "Torrent Paraíso Interior FS", pts: 9, pj: 6, pg: 3, pe: 0, pp: 3, gf: 18, gc: 18, dg: 0 },
      { teamId: "torrent-pirates-s16", teamName: "Torrent Pirates FS", pts: 3, pj: 6, pg: 1, pe: 0, pp: 5, gf: 11, gc: 23, dg: -12 },
    ],
    matches: [
      { id: "s16-j1-1", round: 1, homeTeamId: "torrent-fs-s16", awayTeamId: "torrent-pirates-s16", homeGoals: 4, awayGoals: 0, status: "played" },
      { id: "s16-j2-1", round: 2, homeTeamId: "torrent-fs-s16", awayTeamId: "torrent-paraiso-s16", homeGoals: 5, awayGoals: 6, status: "played" },
      { id: "s16-j3-1", round: 3, homeTeamId: "torrent-pirates-s16", awayTeamId: "torrent-paraiso-s16", homeGoals: 3, awayGoals: 5, status: "played" },
      { id: "s16-j4-1", round: 4, homeTeamId: "torrent-pirates-s16", awayTeamId: "torrent-fs-s16", homeGoals: 3, awayGoals: 6, status: "played" },
      { id: "s16-j5-1", round: 5, homeTeamId: "torrent-paraiso-s16", awayTeamId: "torrent-fs-s16", homeGoals: 2, awayGoals: 3, status: "played" },
      { id: "s16-j6-1", round: 6, homeTeamId: "torrent-paraiso-s16", awayTeamId: "torrent-pirates-s16", homeGoals: 2, awayGoals: 3, status: "played" },
      { id: "s16-j7-1", round: 7, homeTeamId: "torrent-fs-s16", awayTeamId: "torrent-pirates-s16", homeGoals: 6, awayGoals: 2, status: "played" },
      { id: "s16-j8-1", round: 8, homeTeamId: "torrent-fs-s16", awayTeamId: "torrent-paraiso-s16", homeGoals: 4, awayGoals: 3, status: "played" },
      { id: "s16-j9-1", round: 9, homeTeamId: "torrent-pirates-s16", awayTeamId: "torrent-paraiso-s16", status: "no_presentado" },
    ],
    byes: [
      { round: 1, teamId: "torrent-paraiso-s16" },
      { round: 2, teamId: "torrent-pirates-s16" },
      { round: 3, teamId: "torrent-fs-s16" },
      { round: 4, teamId: "torrent-paraiso-s16" },
      { round: 5, teamId: "torrent-pirates-s16" },
      { round: 6, teamId: "torrent-fs-s16" },
      { round: 7, teamId: "torrent-paraiso-s16" },
      { round: 8, teamId: "torrent-pirates-s16" },
      { round: 9, teamId: "torrent-fs-s16" },
    ],
    scorers: [
      { id: "s16-p1", player: "Pablo Fernández", teamId: "torrent-paraiso-s16", goals: 9 },
      { id: "s16-p2", player: "Pepe Vilanova", teamId: "torrent-fs-s16", goals: 7 },
      { id: "s16-p3", player: "Jorge Pina", teamId: "torrent-fs-s16", goals: 7 },
      { id: "s16-p4", player: "Edu Lozoya", teamId: "torrent-pirates-s16", goals: 6 },
      { id: "s16-p5", player: "Fran Delgado", teamId: "torrent-fs-s16", goals: 4 },
      { id: "s16-p6", player: "Jaume Aracil", teamId: "torrent-fs-s16", goals: 3 },
      { id: "s16-p7", player: "Sergio Pérez", teamId: "torrent-fs-s16", goals: 3 },
      { id: "s16-p8", player: "Alberto Serramitjana", teamId: "torrent-paraiso-s16", goals: 3 },
      { id: "s16-p9", player: "Antonio Serramitjana", teamId: "torrent-paraiso-s16", goals: 2 },
      { id: "s16-p10", player: "Borja Pérez", teamId: "torrent-fs-s16", goals: 2 },
      { id: "s16-p11", player: "Omar Kafernawi", teamId: "torrent-paraiso-s16", goals: 2 },
      { id: "s16-p12", player: "Javi Martínez", teamId: "torrent-fs-s16", goals: 2 },
      { id: "s16-p13", player: "David Tormo", teamId: "torrent-pirates-s16", goals: 2 },
      { id: "s16-p14", player: "Francesc Andreu", teamId: "torrent-paraiso-s16", goals: 1 },
      { id: "s16-p15", player: "Christian Miquel", teamId: "torrent-pirates-s16", goals: 1 },
      { id: "s16-p16", player: "Fran Cubas", teamId: "torrent-pirates-s16", goals: 1 },
      { id: "s16-p17", player: "Borja Muñoz", teamId: "torrent-pirates-s16", goals: 1 },
      { id: "s16-p18", player: "Antonio García", teamId: "torrent-paraiso-s16", goals: 1 },
    ],
  },
  {
    id: "s17",
    name: "Temporada 17",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=347043",
    teams: [
      { id: "torrent-saint-germain-s17", name: "Torrent Saint-Germain" },
      { id: "torrent-fs-s17", name: "Torrent" },
      { id: "inter-torrent-s17", name: "Inter Torrent" },
    ],
    matches: [
      { id: "s17-j1-1", round: 1, homeTeamId: "inter-torrent-s17", awayTeamId: "torrent-fs-s17", homeGoals: 2, awayGoals: 5, status: "played" },
      { id: "s17-j2-1", round: 2, homeTeamId: "inter-torrent-s17", awayTeamId: "torrent-saint-germain-s17", homeGoals: 4, awayGoals: 4, status: "played" },
      { id: "s17-j3-1", round: 3, homeTeamId: "torrent-fs-s17", awayTeamId: "torrent-saint-germain-s17", homeGoals: 2, awayGoals: 10, status: "played" },
      { id: "s17-j4-1", round: 4, homeTeamId: "torrent-fs-s17", awayTeamId: "inter-torrent-s17", status: "pending" },
      { id: "s17-j5-1", round: 5, homeTeamId: "torrent-saint-germain-s17", awayTeamId: "inter-torrent-s17", homeGoals: 7, awayGoals: 3, status: "played" },
      { id: "s17-j6-1", round: 6, homeTeamId: "torrent-saint-germain-s17", awayTeamId: "torrent-fs-s17", status: "pending" },
    ],
    byes: [
      { round: 1, teamId: "torrent-saint-germain-s17" },
      { round: 2, teamId: "torrent-fs-s17" },
      { round: 3, teamId: "inter-torrent-s17" },
      { round: 4, teamId: "torrent-saint-germain-s17" },
      { round: 5, teamId: "torrent-fs-s17" },
      { round: 6, teamId: "inter-torrent-s17" },
    ],
    scorers: [
      { id: "s17-p1", player: "Óscar Gil", teamId: "torrent-saint-germain-s17", goals: 7 },
      { id: "s17-p2", player: "Alberto Serramitjana", teamId: "torrent-saint-germain-s17", goals: 5 },
      { id: "s17-p3", player: "Edu Sanz", teamId: "torrent-fs-s17", goals: 4 },
      { id: "s17-p4", player: "Sergio Pérez", teamId: "torrent-saint-germain-s17", goals: 3 },
      { id: "s17-p5", player: "Christian Miquel", teamId: "torrent-saint-germain-s17", goals: 3 },
      { id: "s17-p6", player: "Edu Sanz", teamId: "inter-torrent-s17", goals: 3 },
      { id: "s17-p7", player: "Fran Delgado", teamId: "torrent-fs-s17", goals: 2 },
      { id: "s17-p8", player: "Sergio Pérez", teamId: "inter-torrent-s17", goals: 2 },
      { id: "s17-p9", player: "Fran Delgado", teamId: "inter-torrent-s17", goals: 1 },
      { id: "s17-p10", player: "Toni Serrano", teamId: "torrent-saint-germain-s17", goals: 1 },
      { id: "s17-p11", player: "Jaume Aracil", teamId: "inter-torrent-s17", goals: 1 },
      { id: "s17-p12", player: "Jaume Aracil", teamId: "torrent-saint-germain-s17", goals: 1 },
      { id: "s17-p13", player: "Miguel Ángel Almagro", teamId: "torrent-fs-s17", goals: 1 },
      { id: "s17-p14", player: "Óscar Gil", teamId: "inter-torrent-s17", goals: 1 },
      { id: "s17-p15", player: "Alejandro Cuadrado", teamId: "inter-torrent-s17", goals: 1 },
      { id: "s17-p16", player: "Antonio Serramitjana", teamId: "torrent-saint-germain-s17", goals: 1 },
    ],
  },
  {
    id: "s18",
    name: "Temporada 18",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=459900",
    teams: [
      { id: "inter-torrent-s18", name: "Inter Torrent" },
      { id: "torrent-saint-germain-s18", name: "Torrent Saint Germain SC" },
      { id: "torrent-sc-s18", name: "Torrent" },
    ],
    matches: [
      { id: "s18-j1-1", round: 1, homeTeamId: "inter-torrent-s18", awayTeamId: "torrent-saint-germain-s18", homeGoals: 5, awayGoals: 3, status: "played" },
      { id: "s18-j2-1", round: 2, homeTeamId: "torrent-saint-germain-s18", awayTeamId: "torrent-sc-s18", homeGoals: 6, awayGoals: 7, status: "played" },
      { id: "s18-j3-1", round: 3, homeTeamId: "torrent-sc-s18", awayTeamId: "inter-torrent-s18", homeGoals: 8, awayGoals: 10, status: "played" },
      { id: "s18-j4-1", round: 4, homeTeamId: "torrent-saint-germain-s18", awayTeamId: "inter-torrent-s18", homeGoals: 7, awayGoals: 3, status: "played" },
      { id: "s18-j5-1", round: 5, homeTeamId: "torrent-sc-s18", awayTeamId: "torrent-saint-germain-s18", homeGoals: 5, awayGoals: 10, status: "played" },
      { id: "s18-j6-1", round: 6, homeTeamId: "inter-torrent-s18", awayTeamId: "torrent-sc-s18", homeGoals: 10, awayGoals: 4, status: "played" },
    ],
    byes: [
      { round: 1, teamId: "torrent-sc-s18" },
      { round: 2, teamId: "inter-torrent-s18" },
      { round: 3, teamId: "torrent-saint-germain-s18" },
      { round: 4, teamId: "torrent-sc-s18" },
      { round: 5, teamId: "inter-torrent-s18" },
      { round: 6, teamId: "torrent-saint-germain-s18" },
    ],
    scorers: [
      { id: "s18-p1", player: "Borja Pérez", teamId: "torrent-sc-s18", goals: 15 },
      { id: "s18-p2", player: "Jorge Pina", teamId: "torrent-saint-germain-s18", goals: 15 },
      { id: "s18-p3", player: "Pepe Vilanova", teamId: "inter-torrent-s18", goals: 11 },
      { id: "s18-p4", player: "Iván Vilanova", teamId: "inter-torrent-s18", goals: 9 },
      { id: "s18-p5", player: "Jose Manuel Monzó", teamId: "torrent-saint-germain-s18", goals: 7 },
      { id: "s18-p6", player: "Fran Delgado", teamId: "torrent-sc-s18", goals: 5 },
      { id: "s18-p7", player: "Jaume Aracil", teamId: "inter-torrent-s18", goals: 5 },
      { id: "s18-p8", player: "Christian Miquel", teamId: "torrent-saint-germain-s18", goals: 4 },
      { id: "s18-p9", player: "Álvaro Giner", teamId: "inter-torrent-s18", goals: 3 },
      { id: "s18-p10", player: "Juanjo Cegarra", teamId: "torrent-sc-s18", goals: 2 },
      { id: "s18-p11", player: "Pau Gil", teamId: "torrent-sc-s18", goals: 2 },
    ],
  },
  {
    id: "s19",
    name: "Temporada 19",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=471542",
    teams: [
      { id: "tsg-s19", name: "TSG" },
      { id: "santos-torrent-s19", name: "Santos Torrent" },
      { id: "torrent-sc-s19", name: "Torrent" },
    ],
    matches: [
      { id: "s19-j1-1", round: 1, homeTeamId: "tsg-s19", awayTeamId: "santos-torrent-s19", homeGoals: 11, awayGoals: 11, status: "played" },
      { id: "s19-j2-1", round: 2, homeTeamId: "tsg-s19", awayTeamId: "torrent-sc-s19", homeGoals: 11, awayGoals: 9, status: "played" },
      { id: "s19-j3-1", round: 3, homeTeamId: "santos-torrent-s19", awayTeamId: "torrent-sc-s19", homeGoals: 16, awayGoals: 13, status: "played" },
      { id: "s19-j4-1", round: 4, homeTeamId: "santos-torrent-s19", awayTeamId: "tsg-s19", homeGoals: 11, awayGoals: 16, status: "played" },
      { id: "s19-j5-1", round: 5, homeTeamId: "torrent-sc-s19", awayTeamId: "tsg-s19", homeGoals: 11, awayGoals: 16, status: "played" },
      { id: "s19-j6-1", round: 6, homeTeamId: "torrent-sc-s19", awayTeamId: "santos-torrent-s19", homeGoals: 3, awayGoals: 0, status: "played" },
      { id: "s19-j7-1", round: 7, homeTeamId: "torrent-sc-s19", awayTeamId: "santos-torrent-s19", homeGoals: 16, awayGoals: 17, status: "played" },
      { id: "s19-j8-1", round: 8, homeTeamId: "tsg-s19", awayTeamId: "santos-torrent-s19", homeGoals: 18, awayGoals: 12, status: "played" },
    ],
    byes: [
      { round: 1, teamId: "torrent-sc-s19" },
      { round: 2, teamId: "santos-torrent-s19" },
      { round: 3, teamId: "tsg-s19" },
      { round: 4, teamId: "torrent-sc-s19" },
      { round: 5, teamId: "santos-torrent-s19" },
      { round: 6, teamId: "tsg-s19" },
      { round: 7, teamId: "tsg-s19" },
      { round: 8, teamId: "torrent-sc-s19" },
    ],
    scorers: [
      { id: "s19-p1", player: "Ivan Vilanova", teamId: "tsg-s19", goals: 35 },
      { id: "s19-p2", player: "Eduardo Lozoya", teamId: "santos-torrent-s19", goals: 33 },
      { id: "s19-p3", player: "Borja Pérez", teamId: "torrent-sc-s19", goals: 28 },
      { id: "s19-p4", player: "Jorge Pina", teamId: "tsg-s19", goals: 25 },
      { id: "s19-p5", player: "Christian Miquel", teamId: "santos-torrent-s19", goals: 20 },
      { id: "s19-p6", player: "Julio Valerio", teamId: "tsg-s19", goals: 15 },
      { id: "s19-p7", player: "Pablo Bellido", teamId: "santos-torrent-s19", goals: 14 },
      { id: "s19-p8", player: "Antoni Serrano", teamId: "torrent-sc-s19", goals: 12 },
      { id: "s19-p9", player: "Francisco Manuel Delgado", teamId: "torrent-sc-s19", goals: 9 },
    ],
  },
  {
    id: "s20",
    name: "Temporada 20",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=480260",
    teams: [
      { id: "torrent-saint-germain-s20", name: "Torrent Saint-Germain" },
      { id: "torrent-sc-s20", name: "Torrent" },
      { id: "santos-torrent-s20", name: "Santos Torrent" },
      { id: "inter-torrent-s20", name: "Inter Torrent" },
    ],
    matches: [
      { id: "s20-j1-1", round: 1, homeTeamId: "torrent-sc-s20", awayTeamId: "torrent-saint-germain-s20", homeGoals: 3, awayGoals: 9, status: "played" },
      { id: "s20-j1-2", round: 1, homeTeamId: "santos-torrent-s20", awayTeamId: "inter-torrent-s20", homeGoals: 10, awayGoals: 9, status: "played" },
      { id: "s20-j2-1", round: 2, homeTeamId: "inter-torrent-s20", awayTeamId: "torrent-sc-s20", homeGoals: 9, awayGoals: 10, status: "played" },
      { id: "s20-j2-2", round: 2, homeTeamId: "santos-torrent-s20", awayTeamId: "torrent-saint-germain-s20", homeGoals: 7, awayGoals: 10, status: "played" },
      { id: "s20-j3-1", round: 3, homeTeamId: "torrent-sc-s20", awayTeamId: "santos-torrent-s20", homeGoals: 8, awayGoals: 11, status: "played" },
      { id: "s20-j3-2", round: 3, homeTeamId: "inter-torrent-s20", awayTeamId: "torrent-saint-germain-s20", homeGoals: 9, awayGoals: 19, status: "played" },
      { id: "s20-j4-1", round: 4, homeTeamId: "torrent-saint-germain-s20", awayTeamId: "torrent-sc-s20", homeGoals: 13, awayGoals: 7, status: "played" },
      { id: "s20-j4-2", round: 4, homeTeamId: "inter-torrent-s20", awayTeamId: "santos-torrent-s20", homeGoals: 10, awayGoals: 5, status: "played" },
      { id: "s20-j5-1", round: 5, homeTeamId: "torrent-sc-s20", awayTeamId: "inter-torrent-s20", homeGoals: 11, awayGoals: 7, status: "played" },
      { id: "s20-j5-2", round: 5, homeTeamId: "torrent-saint-germain-s20", awayTeamId: "santos-torrent-s20", homeGoals: 11, awayGoals: 9, status: "played" },
      { id: "s20-j6-1", round: 6, homeTeamId: "santos-torrent-s20", awayTeamId: "torrent-sc-s20", homeGoals: 8, awayGoals: 11, status: "played" },
      { id: "s20-j6-2", round: 6, homeTeamId: "torrent-saint-germain-s20", awayTeamId: "inter-torrent-s20", homeGoals: 17, awayGoals: 11, status: "played" },
    ],
    byes: [],
    scorers: [
      { id: "s20-p1", player: "Jorge Pina", teamId: "torrent-saint-germain-s20", goals: 32 },
      { id: "s20-p2", player: "Christian Miquel", teamId: "santos-torrent-s20", goals: 28 },
      { id: "s20-p3", player: "Edu Lozoya", teamId: "torrent-saint-germain-s20", goals: 26 },
      { id: "s20-p4", player: "Borja Pérez", teamId: "inter-torrent-s20", goals: 20 },
      { id: "s20-p5", player: "Fran Delgado", teamId: "torrent-sc-s20", goals: 18 },
      { id: "s20-p6", player: "Francesc Andreu", teamId: "torrent-saint-germain-s20", goals: 14 },
      { id: "s20-p7", player: "Iván Vilanova", teamId: "torrent-sc-s20", goals: 14 },
      { id: "s20-p8", player: "Julio Valerio", teamId: "inter-torrent-s20", goals: 13 },
      { id: "s20-p9", player: "Pablo Bellido", teamId: "santos-torrent-s20", goals: 11 },
      { id: "s20-p10", player: "Manuel Jiménez", teamId: "torrent-sc-s20", goals: 10 },
      { id: "s20-p11", player: "Jason Robles", teamId: "inter-torrent-s20", goals: 9 },
      { id: "s20-p12", player: "Miguel Oliver", teamId: "torrent-saint-germain-s20", goals: 7 },
      { id: "s20-p13", player: "Borja Muñoz", teamId: "santos-torrent-s20", goals: 7 },
      { id: "s20-p14", player: "Adriel Latorre", teamId: "torrent-sc-s20", goals: 5 },
      { id: "s20-p15", player: "Christian Miquel", teamId: "inter-torrent-s20", goals: 4 },
      { id: "s20-p16", player: "Sergio Pérez", teamId: "santos-torrent-s20", goals: 4 },
      { id: "s20-p17", player: "Raül Cortés", teamId: "torrent-sc-s20", goals: 3 },
      { id: "s20-p18", player: "Daniel Galvis", teamId: "inter-torrent-s20", goals: 3 },
      { id: "s20-p19", player: "Adriel Latorre", teamId: "inter-torrent-s20", goals: 3 },
      { id: "s20-p20", player: "Jorge Pina", teamId: "inter-torrent-s20", goals: 2 },
      { id: "s20-p21", player: "Álvaro Giner", teamId: "inter-torrent-s20", goals: 1 },
    ],
  },
  {
    id: "s21",
    name: "Temporada 21",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=498693",
    teams: [
      { id: "inter-torrent-s21", name: "Inter Torrent" },
      { id: "torrent-saint-germain-s21", name: "Torrent Saint-Germain SC" },
      { id: "torrent-sc-s21", name: "Torrent" },
    ],
    matches: [
      { id: "s21-j1-1", round: 1, homeTeamId: "torrent-sc-s21", awayTeamId: "inter-torrent-s21", homeGoals: 9, awayGoals: 11, status: "played" },
      { id: "s21-j2-1", round: 2, homeTeamId: "inter-torrent-s21", awayTeamId: "torrent-saint-germain-s21", homeGoals: 11, awayGoals: 13, status: "played" },
      { id: "s21-j3-1", round: 3, homeTeamId: "torrent-saint-germain-s21", awayTeamId: "torrent-sc-s21", homeGoals: 9, awayGoals: 14, status: "played" },
      { id: "s21-j4-1", round: 4, homeTeamId: "torrent-saint-germain-s21", awayTeamId: "inter-torrent-s21", homeGoals: 10, awayGoals: 10, status: "played" },
      { id: "s21-j5-1", round: 5, homeTeamId: "torrent-sc-s21", awayTeamId: "torrent-saint-germain-s21", homeGoals: 18, awayGoals: 14, status: "played" },
      { id: "s21-j6-1", round: 6, homeTeamId: "inter-torrent-s21", awayTeamId: "torrent-sc-s21", homeGoals: 6, awayGoals: 14, status: "played" },
    ],
    byes: [
      { round: 1, teamId: "torrent-saint-germain-s21" },
      { round: 2, teamId: "torrent-sc-s21" },
      { round: 3, teamId: "inter-torrent-s21" },
      { round: 4, teamId: "torrent-sc-s21" },
      { round: 5, teamId: "inter-torrent-s21" },
      { round: 6, teamId: "torrent-saint-germain-s21" },
    ],
    scorers: [
      { id: "s21-p1", player: "Fran Delgado", teamId: "torrent-sc-s21", goals: 17 },
      { id: "s21-p2", player: "Adriel Latorre", teamId: "inter-torrent-s21", goals: 14 },
      { id: "s21-p3", player: "Christian Miquel", teamId: "torrent-sc-s21", goals: 14 },
      { id: "s21-p4", player: "Miguel Almagro", teamId: "torrent-sc-s21", goals: 11 },
      { id: "s21-p5", player: "Jorge Pina", teamId: "torrent-saint-germain-s21", goals: 10 },
      { id: "s21-p6", player: "Fran Álvarez", teamId: "inter-torrent-s21", goals: 8 },
      { id: "s21-p7", player: "Francesc Andreu", teamId: "torrent-sc-s21", goals: 7 },
      { id: "s21-p8", player: "Raúl Muñoz", teamId: "torrent-saint-germain-s21", goals: 6 },
      { id: "s21-p9", player: "Sergio Pérez", teamId: "torrent-saint-germain-s21", goals: 6 },
      { id: "s21-p10", player: "Miguel Oliver", teamId: "torrent-saint-germain-s21", goals: 5 },
      { id: "s21-p11", player: "Julio Valerio", teamId: "torrent-saint-germain-s21", goals: 4 },
      { id: "s21-p12", player: "Iván Vilanova", teamId: "inter-torrent-s21", goals: 4 },
      { id: "s21-p13", player: "Jose Manuel Monzó", teamId: "torrent-sc-s21", goals: 4 },
      { id: "s21-p14", player: "José Manuel Monzó", teamId: "torrent-saint-germain-s21", goals: 3 },
      { id: "s21-p15", player: "Julio Valerio", teamId: "inter-torrent-s21", goals: 3 },
      { id: "s21-p16", player: "David", teamId: "inter-torrent-s21", goals: 3 },
      { id: "s21-p17", player: "Álvaro Giner", teamId: "inter-torrent-s21", goals: 3 },
      { id: "s21-p18", player: "Borja Pérez", teamId: "torrent-saint-germain-s21", goals: 3 },
      { id: "s21-p19", player: "Álvaro Giner", teamId: "torrent-saint-germain-s21", goals: 2 },
      { id: "s21-p20", player: "Fran Delgado", teamId: "inter-torrent-s21", goals: 2 },
      { id: "s21-p21", player: "Fran Delgado", teamId: "torrent-saint-germain-s21", goals: 2 },
      { id: "s21-p22", player: "Iván Vilanova", teamId: "torrent-saint-germain-s21", goals: 2 },
      { id: "s21-p23", player: "Jaume Aracil", teamId: "torrent-sc-s21", goals: 2 },
      { id: "s21-p24", player: "Christian Miquel", teamId: "torrent-saint-germain-s21", goals: 2 },
      { id: "s21-p25", player: "Propia Puerta", teamId: "torrent-saint-germain-s21", goals: 1 },
      { id: "s21-p26", player: "Christian Miquel", teamId: "inter-torrent-s21", goals: 1 },
    ],
  },
];

const initialCups = [
  {
    id: "c1",
    name: "Temporada 1",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=247108",
    knockoutFormat: "bracket",
    structureNote: "Final única.",
    championTeamId: "c1-torrent",
    teams: [
      { id: "c1-torrent", name: "Torrent" },
      { id: "c1-inter", name: "Inter Torrent" },
    ],
    matches: [
      { id: "c1-j1-1", round: 1, stage: "Final", homeTeamId: "c1-inter", awayTeamId: "c1-torrent", homeGoals: 8, awayGoals: 10, status: "played", homeScorersText: "Alejandro López (2)\nÁngel Cases (2)\nBorja Pérez (2)\nEdu Lozoya (1)\nVicente Cárcel (1)", awayScorersText: "Christian Miquel (2)\nFran Delgado (3)\nGuillermo Robles (p.p.) (1)\nJorge Pina (4)" },
    ],
    byes: [],
    scorers: [
      { id: "c1-p1", player: "Jorge Pina", teamId: "c1-torrent", goals: 4 },
      { id: "c1-p2", player: "Fran Delgado", teamId: "c1-torrent", goals: 3 },
      { id: "c1-p3", player: "Alejandro López", teamId: "c1-inter", goals: 2 },
      { id: "c1-p4", player: "Ángel Cases", teamId: "c1-inter", goals: 2 },
      { id: "c1-p5", player: "Borja Pérez", teamId: "c1-inter", goals: 2 },
      { id: "c1-p6", player: "Christian Miquel", teamId: "c1-torrent", goals: 2 },
      { id: "c1-p7", player: "Edu Lozoya", teamId: "c1-inter", goals: 1 },
      { id: "c1-p8", player: "Guillermo Robles (p.p.)", teamId: "c1-torrent", goals: 1 },
      { id: "c1-p9", player: "Vicente Cárcel", teamId: "c1-inter", goals: 1 },
    ],
  },
  {
    id: "c2",
    name: "Temporada 2",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=247106",
    knockoutFormat: "bracket",
    structureNote: "Jornada 1: semifinales. La semifinal entre Inter Torrent y Torrent Saint-Germain terminó 7-7 y se decidió en penaltis a favor de Torrent Saint-Germain. Jornada 2: final.",
    championTeamId: "c2-santos",
    teams: [
      { id: "c2-santos", name: "Santos Torrent" },
      { id: "c2-tsg", name: "Torrent Saint-Germain" },
      { id: "c2-inter", name: "Inter Torrent" },
      { id: "c2-torrent", name: "Torrent" },
    ],
    matches: [
      { id: "c2-j1-1", round: 1, stage: "Semifinal 1", homeTeamId: "c2-santos", awayTeamId: "c2-torrent", homeGoals: 5, awayGoals: 4, status: "played" },
      { id: "c2-j1-2", round: 1, stage: "Semifinal 2", homeTeamId: "c2-inter", awayTeamId: "c2-tsg", homeGoals: 7, awayGoals: 7, status: "played", penaltyShootout: { homePenalties: 0, awayPenalties: 1, winnerTeamId: "c2-tsg", note: "Empate 7-7; pasa Torrent Saint-Germain en penaltis." } },
      { id: "c2-j2-1", round: 2, stage: "Final", homeTeamId: "c2-tsg", awayTeamId: "c2-santos", homeGoals: 6, awayGoals: 8, status: "played" },
    ],
    byes: [],
    scorers: [],
  },
  {
    id: "c3",
    name: "Temporada 3",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=228760",
    formatType: "group-final",
    structureNote: "Jornadas 1-5: fase de grupos. Jornada 6: final entre 1º y 2º.",
    championTeamId: "c3-torrent",
    groupStageEndRound: 5,
    teams: [
      { id: "c3-torrent", name: "Torrent" },
      { id: "c3-santos", name: "Santos Torrent" },
      { id: "c3-inter", name: "Inter Torrent" },
      { id: "c3-tsg", name: "Torrent Saint-Germain" },
      { id: "c3-city", name: "Torrent City" },
    ],
    officialStandings: [
      { teamId: "c3-torrent", teamName: "Torrent", pts: 10, pj: 4, pg: 3, pe: 1, pp: 0, gf: 19, gc: 8, dg: 11 },
      { teamId: "c3-santos", teamName: "Santos Torrent", pts: 9, pj: 4, pg: 3, pe: 0, pp: 1, gf: 14, gc: 11, dg: 3 },
      { teamId: "c3-inter", teamName: "Inter Torrent", pts: 5, pj: 4, pg: 1, pe: 2, pp: 1, gf: 13, gc: 17, dg: -4 },
      { teamId: "c3-tsg", teamName: "Torrent Saint-Germain", pts: 3, pj: 4, pg: 1, pe: 0, pp: 3, gf: 13, gc: 19, dg: -6 },
      { teamId: "c3-city", teamName: "Torrent City", pts: 1, pj: 4, pg: 0, pe: 1, pp: 3, gf: 8, gc: 12, dg: -4 },
    ],
    matches: [
      { id: "c3-j1-1", round: 1, stage: "Fase de grupos - Jornada 1", homeTeamId: "c3-torrent", awayTeamId: "c3-tsg", homeGoals: 7, awayGoals: 2, status: "played" },
      { id: "c3-j1-2", round: 1, stage: "Fase de grupos - Jornada 1", homeTeamId: "c3-inter", awayTeamId: "c3-santos", homeGoals: 2, awayGoals: 3, status: "played" },
      { id: "c3-j2-1", round: 2, stage: "Fase de grupos - Jornada 2", homeTeamId: "c3-santos", awayTeamId: "c3-tsg", homeGoals: 5, awayGoals: 2, status: "played" },
      { id: "c3-j2-2", round: 2, stage: "Fase de grupos - Jornada 2", homeTeamId: "c3-inter", awayTeamId: "c3-city", homeGoals: 4, awayGoals: 4, status: "played" },
      { id: "c3-j3-1", round: 3, stage: "Fase de grupos - Jornada 3", homeTeamId: "c3-torrent", awayTeamId: "c3-santos", homeGoals: 4, awayGoals: 2, status: "played" },
      { id: "c3-j3-2", round: 3, stage: "Fase de grupos - Jornada 3", homeTeamId: "c3-tsg", awayTeamId: "c3-city", homeGoals: 6, awayGoals: 3, status: "played" },
      { id: "c3-j4-1", round: 4, stage: "Fase de grupos - Jornada 4", homeTeamId: "c3-inter", awayTeamId: "c3-torrent", homeGoals: 3, awayGoals: 3, status: "played", cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=47884075", homeScorersText: "Pablo Bellido (1)\nPepe Vilanova (1)\nToni Serrano (1)", awayScorersText: "Borja Muñoz (1)\nBorja Pérez (1)\nFran Delgado (1)" },
      { id: "c3-j4-2", round: 4, stage: "Fase de grupos - Jornada 4", homeTeamId: "c3-city", awayTeamId: "c3-santos", homeGoals: 0, awayGoals: 4, status: "played" },
      { id: "c3-j5-1", round: 5, stage: "Fase de grupos - Jornada 5", homeTeamId: "c3-torrent", awayTeamId: "c3-city", homeGoals: 5, awayGoals: 1, status: "played" },
      { id: "c3-j5-2", round: 5, stage: "Fase de grupos - Jornada 5", homeTeamId: "c3-inter", awayTeamId: "c3-tsg", homeGoals: 4, awayGoals: 3, status: "played" },
      { id: "c3-j6-1", round: 6, stage: "Final", homeTeamId: "c3-torrent", awayTeamId: "c3-santos", homeGoals: 3, awayGoals: 2, status: "played", cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=47884079", homeScorersText: "Borja Muñoz (1)\nBorja Pérez (1)\nFran Delgado (1)", awayScorersText: "Christian Miquel (1)\nEdu Lozoya (1)" },
    ],
    byes: [
      { round: 1, teamId: "c3-city" },
      { round: 2, teamId: "c3-torrent" },
      { round: 3, teamId: "c3-inter" },
      { round: 4, teamId: "c3-tsg" },
      { round: 5, teamId: "c3-santos" },
      { round: 6, teamId: "c3-inter" },
      { round: 6, teamId: "c3-city" },
      { round: 6, teamId: "c3-tsg" },
    ],
    scorers: [
      { id: "c3-p1", player: "Borja Muñoz", teamId: "c3-torrent", goals: 2 },
      { id: "c3-p2", player: "Borja Pérez", teamId: "c3-torrent", goals: 2 },
      { id: "c3-p3", player: "Fran Delgado", teamId: "c3-torrent", goals: 2 },
      { id: "c3-p4", player: "Pablo Bellido", teamId: "c3-inter", goals: 1 },
      { id: "c3-p5", player: "Pepe Vilanova", teamId: "c3-inter", goals: 1 },
      { id: "c3-p6", player: "Toni Serrano", teamId: "c3-inter", goals: 1 },
      { id: "c3-p7", player: "Christian Miquel", teamId: "c3-santos", goals: 1 },
      { id: "c3-p8", player: "Edu Lozoya", teamId: "c3-santos", goals: 1 },
    ],
  },
  {
    id: "c4",
    name: "Temporada 4",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=228766",
    knockoutFormat: "bracket",
    structureNote: "Fase previa: Torrent City vs Torrent Saint-Germain. Semifinales: Inter Torrent vs Torrent City y Santos Torrent vs Torrent. Final: Torrent vs Inter Torrent; 2-2 y título para Torrent en penaltis.",
    championTeamId: "c4-torrent",
    teams: [
      { id: "c4-torrent", name: "Torrent" },
      { id: "c4-inter", name: "Inter Torrent" },
      { id: "c4-city", name: "Torrent City" },
      { id: "c4-tsg", name: "Torrent Saint-Germain" },
      { id: "c4-santos", name: "Santos Torrent" },
    ],
    matches: [
      { id: "c4-j1-1", round: 1, stage: "Fase previa", homeTeamId: "c4-city", awayTeamId: "c4-tsg", homeGoals: 14, awayGoals: 13, status: "played" },
      { id: "c4-j2-1", round: 2, stage: "Semifinal 1", homeTeamId: "c4-inter", awayTeamId: "c4-city", homeGoals: 8, awayGoals: 7, status: "played" },
      { id: "c4-j2-2", round: 2, stage: "Semifinal 2", homeTeamId: "c4-santos", awayTeamId: "c4-torrent", homeGoals: 3, awayGoals: 15, status: "played" },
      {
        id: "c4-j3-1",
        round: 3,
        stage: "Final",
        homeTeamId: "c4-torrent",
        awayTeamId: "c4-inter",
        homeGoals: 2,
        awayGoals: 2,
        status: "played",
        penaltyShootout: {
          homePenalties: 2,
          awayPenalties: 0,
          winnerTeamId: "c4-torrent",
          note: "Penaltis: marcan Borja Pérez y Fran Delgado; fallan Pepe Vilanova y Óscar Gil."
        }
      },
    ],
    byes: [
      { round: 1, teamId: "c4-inter" },
      { round: 1, teamId: "c4-santos" },
      { round: 1, teamId: "c4-torrent" },
      { round: 2, teamId: "c4-tsg" },
    ],
    scorers: [],
  },
  {
    id: "c5",
    name: "Temporada 5",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=246567",
    teams: [
      { id: "c5-torrent", name: "Torrent" },
      { id: "c5-city", name: "Torrent City" },
      { id: "c5-tsg", name: "Torrent Saint-Germain" },
      { id: "c5-santos", name: "Santos Torrent" },
    ],
    matches: [
      { id: "c5-j1-1", round: 1, homeTeamId: "c5-city", awayTeamId: "c5-tsg", homeGoals: 5, awayGoals: 4, status: "played" },
      { id: "c5-j1-2", round: 1, homeTeamId: "c5-santos", awayTeamId: "c5-torrent", homeGoals: 1, awayGoals: 4, status: "played" },
      { id: "c5-j2-1", round: 2, homeTeamId: "c5-city", awayTeamId: "c5-torrent", homeGoals: 3, awayGoals: 6, status: "played" },
    ],
    byes: [
      { round: 1, teamId: "c5-santos" },
      { round: 1, teamId: "c5-tsg" },
      { round: 2, teamId: "c5-santos" },
      { round: 2, teamId: "c5-tsg" },
    ],
    scorers: [],
  },
  {
    id: "c6",
    name: "Temporada 6",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=246574",
    teams: [
      { id: "c6-santos", name: "Santos Torrent" },
      { id: "c6-city", name: "Torrent City" },
      { id: "c6-tsg", name: "Torrent Saint-Germain" },
      { id: "c6-torrent", name: "Torrent" },
    ],
    matches: [
      { id: "c6-j1-1", round: 1, homeTeamId: "c6-city", awayTeamId: "c6-tsg", homeGoals: 5, awayGoals: 4, status: "played" },
      { id: "c6-j1-2", round: 1, homeTeamId: "c6-santos", awayTeamId: "c6-torrent", homeGoals: 7, awayGoals: 3, status: "played" },
      { id: "c6-j2-1", round: 2, homeTeamId: "c6-city", awayTeamId: "c6-santos", homeGoals: 4, awayGoals: 7, status: "played" },
    ],
    byes: [
      { round: 1, teamId: "c6-torrent" },
      { round: 1, teamId: "c6-tsg" },
      { round: 2, teamId: "c6-torrent" },
      { round: 2, teamId: "c6-tsg" },
    ],
    scorers: [],
  },
  {
    id: "c7",
    name: "Temporada 7",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=208382",
    teams: [
      { id: "c7-torrent", name: "Torrent" },
      { id: "c7-inter", name: "Inter Torrent" },
    ],
    matches: [
      { id: "c7-j1-1", round: 1, homeTeamId: "c7-inter", awayTeamId: "c7-torrent", homeGoals: 7, awayGoals: 12, status: "played" },
    ],
    byes: [],
    scorers: [
      { id: "c7-p1", player: "Jonatan Benítez", teamId: "c7-torrent", goals: 5 },
      { id: "c7-p2", player: "Sergio Pérez", teamId: "c7-torrent", goals: 3 },
      { id: "c7-p3", player: "Borja Muñoz", teamId: "c7-inter", goals: 3 },
      { id: "c7-p4", player: "Jaume Aracil", teamId: "c7-torrent", goals: 3 },
      { id: "c7-p5", player: "Edu Lozoya", teamId: "c7-inter", goals: 2 },
      { id: "c7-p6", player: "Fran Delgado", teamId: "c7-torrent", goals: 1 },
      { id: "c7-p7", player: "Alejandro Cuadrado", teamId: "c7-inter", goals: 1 },
      { id: "c7-p8", player: "Julio Valerio", teamId: "c7-inter", goals: 1 },
    ],
  },
  {
    id: "c10",
    name: "Temporada 10",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=246744",
    teams: [
      { id: "c10-torrent", name: "Torrent" },
      { id: "c10-inter", name: "Inter Torrent" },
    ],
    matches: [
      { id: "c10-j1-1", round: 1, homeTeamId: "c10-torrent", awayTeamId: "c10-inter", homeGoals: 12, awayGoals: 7, status: "played" },
    ],
    byes: [],
    scorers: [
      { id: "c10-p1", player: "Jonatan Benítez", teamId: "c10-torrent", goals: 5 },
      { id: "c10-p2", player: "Sergio Pérez", teamId: "c10-torrent", goals: 3 },
      { id: "c10-p3", player: "Borja Muñoz", teamId: "c10-inter", goals: 3 },
      { id: "c10-p4", player: "Jaume Aracil", teamId: "c10-torrent", goals: 3 },
      { id: "c10-p5", player: "Edu Lozoya", teamId: "c10-inter", goals: 2 },
      { id: "c10-p6", player: "Fran Delgado", teamId: "c10-torrent", goals: 1 },
      { id: "c10-p7", player: "Alejandro Cuadrado", teamId: "c10-inter", goals: 1 },
      { id: "c10-p8", player: "Julio Valerio", teamId: "c10-inter", goals: 1 },
    ],
  },
  {
    id: "c15",
    name: "Temporada 15",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=318147",
    teams: [
      { id: "c15-torrent", name: "Torrent" },
      { id: "c15-inter", name: "Inter Torrent" },
      { id: "c15-silla", name: "Silla FS" },
      { id: "c15-santos", name: "Santos Torrent" },
    ],
    matches: [
      { id: "c15-j1-1", round: 1, homeTeamId: "c15-santos", awayTeamId: "c15-torrent", homeGoals: 12, awayGoals: 20, status: "played" },
      { id: "c15-j1-2", round: 1, homeTeamId: "c15-silla", awayTeamId: "c15-inter", homeGoals: 6, awayGoals: 7, status: "played" },
      { id: "c15-j2-1", round: 2, homeTeamId: "c15-inter", awayTeamId: "c15-torrent", homeGoals: 6, awayGoals: 13, status: "played" },
      { id: "c15-j2-2", round: 2, homeTeamId: "c15-santos", awayTeamId: "c15-silla", status: "pending" },
    ],
    byes: [],
    scorers: [
      { id: "c15-p1", player: "Pepe Vilanova", teamId: "c15-torrent", goals: 8 },
      { id: "c15-p2", player: "Alberto Serramitjana", teamId: "c15-torrent", goals: 6 },
      { id: "c15-p3", player: "Antonio Serramitjana", teamId: "c15-santos", goals: 5 },
      { id: "c15-p4", player: "Fran Delgado", teamId: "c15-torrent", goals: 5 },
      { id: "c15-p5", player: "Fran Delgado", teamId: "c15-inter", goals: 4 },
      { id: "c15-p6", player: "Óscar Gil", teamId: "c15-torrent", goals: 4 },
      { id: "c15-p7", player: "Joel Mora", teamId: "c15-inter", goals: 3 },
      { id: "c15-p8", player: "Jorge Pina", teamId: "c15-santos", goals: 3 },
      { id: "c15-p9", player: "Borja Pérez", teamId: "c15-silla", goals: 3 },
      { id: "c15-p10", player: "David Tormo", teamId: "c15-santos", goals: 2 },
      { id: "c15-p11", player: "Rubén Rochina", teamId: "c15-santos", goals: 2 },
      { id: "c15-p12", player: "Sergio Pérez", teamId: "c15-silla", goals: 2 },
      { id: "c15-p13", player: "Jorge Rubio", teamId: "c15-silla", goals: 1 },
    ],
  },
  {
    id: "c16",
    name: "Temporada 16",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=352605",
    structureNote: "Jornada 1: semifinal entre 2º y 3º. Jornada 2: final contra el 1º.",
    championTeamId: "c16-torrent",
    teams: [
      { id: "c16-torrent", name: "Torrent" },
      { id: "c16-pirates", name: "Torrent Pirates FS" },
      { id: "c16-paraiso", name: "Torrent Paraiso Interior FS" },
    ],
    officialStandings: [
      { teamId: "c16-torrent", teamName: "Torrent", pts: 3, pj: 1, pg: 1, pe: 0, pp: 0, gf: 4, gc: 3, dg: 1 },
      { teamId: "c16-pirates", teamName: "Torrent Pirates FS", pts: 3, pj: 2, pg: 1, pe: 0, pp: 1, gf: 11, gc: 6, dg: 5 },
      { teamId: "c16-paraiso", teamName: "Torrent Paraiso Interior FS", pts: 0, pj: 1, pg: 0, pe: 0, pp: 1, gf: 2, gc: 8, dg: -6 },
    ],
    matches: [
      { id: "c16-j1-1", round: 1, stage: "Semifinal", homeTeamId: "c16-pirates", awayTeamId: "c16-paraiso", homeGoals: 8, awayGoals: 2, status: "played" },
      { id: "c16-j2-1", round: 2, stage: "Final", homeTeamId: "c16-pirates", awayTeamId: "c16-torrent", homeGoals: 3, awayGoals: 4, status: "played" },
    ],
    byes: [
      { round: 1, teamId: "c16-torrent" },
      { round: 2, teamId: "c16-paraiso" },
    ],
    scorers: [],
  },
  {
    id: "c18",
    name: "Temporada 18",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=460183",
    teams: [
      { id: "c18-inter", name: "Inter Torrent" },
      { id: "c18-tsg", name: "Torrent Saint-Germain SC" },
    ],
    matches: [
      { id: "c18-j1-1", round: 1, homeTeamId: "c18-inter", awayTeamId: "c18-tsg", homeGoals: 5, awayGoals: 5, status: "played" },
    ],
    byes: [],
    scorers: [
      { id: "c18-p1", player: "Jose Manuel Monzó", teamId: "c18-tsg", goals: 3 },
      { id: "c18-p2", player: "Álvaro Giner", teamId: "c18-inter", goals: 2 },
      { id: "c18-p3", player: "Christian Miquel", teamId: "c18-tsg", goals: 2 },
      { id: "c18-p4", player: "Iván Vilanova", teamId: "c18-inter", goals: 2 },
      { id: "c18-p5", player: "Pepe Vilanova", teamId: "c18-inter", goals: 1 },
    ],
  },
  ];

const initialSelections = [
  {
    id: "regions-cup",
    name: "Copa de las Regiones",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=478922",
    structureNote: "Jornadas 1-3: fase de grupos. Jornada 4: semifinal entre 2º y 3º. Jornada 5: final contra el 1º.",
    teams: [
      { id: "regions-andalucia", name: "Andalucia" },
      { id: "regions-valencia", name: "Valencia" },
      { id: "regions-castilla", name: "Castilla" },
    ],
    matches: [
      { id: "regions-j1-1", round: 1, stage: "Fase de grupos - Jornada 1", homeTeamId: "regions-andalucia", awayTeamId: "regions-valencia", homeGoals: 3, awayGoals: 6, status: "played" },
      { id: "regions-j2-1", round: 2, stage: "Fase de grupos - Jornada 2", homeTeamId: "regions-andalucia", awayTeamId: "regions-castilla", homeGoals: 4, awayGoals: 6, status: "played" },
      { id: "regions-j3-1", round: 3, stage: "Fase de grupos - Jornada 3", homeTeamId: "regions-castilla", awayTeamId: "regions-valencia", homeGoals: 9, awayGoals: 10, status: "played" },
      { id: "regions-j4-1", round: 4, stage: "Semifinal", homeTeamId: "regions-castilla", awayTeamId: "regions-andalucia", homeGoals: 4, awayGoals: 9, status: "played" },
      { id: "regions-j5-1", round: 5, stage: "Final", homeTeamId: "regions-valencia", awayTeamId: "regions-andalucia", homeGoals: 5, awayGoals: 7, status: "played" },
    ],
    byes: [
      { round: 1, teamId: "regions-castilla" },
      { round: 2, teamId: "regions-valencia" },
      { round: 3, teamId: "regions-andalucia" },
      { round: 4, teamId: "regions-valencia" },
      { round: 5, teamId: "regions-castilla" },
    ],
    scorers: [
      { id: "regions-p1", player: "Edu Lozoya", teamId: "regions-castilla", goals: 9 },
      { id: "regions-p2", player: "Jorge Pina", teamId: "regions-valencia", goals: 9 },
      { id: "regions-p3", player: "Jaume Aracil", teamId: "regions-andalucia", goals: 7 },
      { id: "regions-p4", player: "Fran Delgado", teamId: "regions-andalucia", goals: 7 },
      { id: "regions-p5", player: "Edu Sanz", teamId: "regions-castilla", goals: 6 },
      { id: "regions-p6", player: "Manuel Jiménez", teamId: "regions-andalucia", goals: 6 },
      { id: "regions-p7", player: "Pepe Vilanova", teamId: "regions-valencia", goals: 6 },
      { id: "regions-p8", player: "Christian Miquel", teamId: "regions-valencia", goals: 4 },
      { id: "regions-p9", player: "Pepe Vilanova", teamId: "regions-andalucia", goals: 3 },
      { id: "regions-p10", player: "Javi Martínez", teamId: "regions-castilla", goals: 3 },
      { id: "regions-p11", player: "Pau Gil", teamId: "regions-valencia", goals: 2 },
      { id: "regions-p12", player: "Gol por clasificación", teamId: "regions-castilla", goals: 1 },
    ],
  },
];

const initialRecups = [
  {
    id: "r3",
    name: "Temporada 3",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=247213",
    knockoutFormat: "bracket",
    structureNote: "Final única entre el 3º y el 4º clasificado de la Copa.",
    championTeamId: "r3-inter",
    teams: [
      { id: "r3-tsg", name: "Torrent Saint-Germain" },
      { id: "r3-inter", name: "Inter Torrent" },
    ],
    matches: [
      { id: "r3-j1-1", round: 1, stage: "Final", homeTeamId: "r3-tsg", awayTeamId: "r3-inter", homeGoals: 3, awayGoals: 4, status: "played", cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=47950154" },
    ],
    byes: [],
    scorers: [
      { id: "r3-p1", player: "Pepe Vilanova", teamId: "r3-inter", goals: 3 },
      { id: "r3-p2", player: "Jorge Pina", teamId: "r3-tsg", goals: 2 },
      { id: "r3-p3", player: "Jorge Torrent", teamId: "r3-inter", goals: 1 },
      { id: "r3-p4", player: "Julio Valerio", teamId: "r3-tsg", goals: 1 },
    ],
  },
  {
    id: "r6",
    name: "Temporada 6",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=247117",
    teams: [
      { id: "r6-inter", name: "Inter Torrent" },
      { id: "r6-torrent", name: "Torrent" },
    ],
    matches: [
      { id: "r6-j1-1", round: 1, homeTeamId: "r6-inter", awayTeamId: "r6-torrent", homeGoals: 7, awayGoals: 6, status: "played" },
    ],
    byes: [],
    scorers: [
      { id: "r6-p1", player: "Jason Robles", teamId: "r6-inter", goals: 4 },
      { id: "r6-p2", player: "Julio Valerio", teamId: "r6-inter", goals: 3 },
      { id: "r6-p3", player: "Vicente Lucena", teamId: "r6-torrent", goals: 3 },
      { id: "r6-p4", player: "Fran Delgado", teamId: "r6-torrent", goals: 3 },
    ],
  },
];

const initialSupercups = [
  {
    id: "sc3",
    name: "Temporada 3",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=247216",
    knockoutFormat: "bracket",
    structureNote: "Final única entre el campeón de Liga y el campeón de Copa.",
    championTeamId: "sc3-torrent",
    teams: [
      { id: "sc3-torrent", name: "Torrent" },
      { id: "sc3-inter", name: "Inter Torrent" },
    ],
    matches: [
      { id: "sc3-j1-1", round: 1, stage: "Final", homeTeamId: "sc3-torrent", awayTeamId: "sc3-inter", homeGoals: 6, awayGoals: 2, status: "played", cronicaUrl: "https://www.gesliga.com/Cronica.aspx?partido=47950210" },
    ],
    byes: [],
    scorers: [
      { id: "sc3-p1", player: "Borja Pérez", teamId: "sc3-torrent", goals: 4 },
      { id: "sc3-p2", player: "Pepe Vilanova", teamId: "sc3-inter", goals: 2 },
      { id: "sc3-p3", player: "Fran Delgado", teamId: "sc3-torrent", goals: 1 },
      { id: "sc3-p4", player: "Jaume Aracil", teamId: "sc3-torrent", goals: 1 },
    ],
  },
  {
    id: "sc5",
    name: "Temporada 5",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=246570",
    teams: [
      { id: "sc5-inter", name: "Inter Torrent" },
      { id: "sc5-torrent", name: "Torrent" },
    ],
    matches: [
      { id: "sc5-j1-1", round: 1, homeTeamId: "sc5-inter", awayTeamId: "sc5-torrent", homeGoals: 6, awayGoals: 3, status: "played" },
    ],
    byes: [],
    scorers: [
      { id: "sc5-p1", player: "David Tormo", teamId: "sc5-inter", goals: 4 },
      { id: "sc5-p2", player: "Edu Lozoya", teamId: "sc5-inter", goals: 2 },
      { id: "sc5-p3", player: "Borja Pérez", teamId: "sc5-torrent", goals: 2 },
      { id: "sc5-p4", player: "Fran Delgado", teamId: "sc5-torrent", goals: 1 },
    ],
  },
  {
    id: "sc10",
    name: "Temporada 10",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=208365",
    teams: [
      { id: "sc10-torrent", name: "Torrent" },
      { id: "sc10-inter", name: "Inter Torrent" },
    ],
    matches: [
      { id: "sc10-j1-1", round: 1, homeTeamId: "sc10-torrent", awayTeamId: "sc10-inter", homeGoals: 8, awayGoals: 9, status: "played" },
    ],
    byes: [],
    scorers: [
      { id: "sc10-p1", player: "Edu Lozoya", teamId: "sc10-inter", goals: 5 },
      { id: "sc10-p2", player: "Sergio Pérez", teamId: "sc10-torrent", goals: 4 },
      { id: "sc10-p3", player: "Julio Valerio", teamId: "sc10-inter", goals: 3 },
      { id: "sc10-p4", player: "Borja Pérez", teamId: "sc10-torrent", goals: 2 },
      { id: "sc10-p5", player: "Propia Puerta", teamId: "sc10-torrent", goals: 1 },
      { id: "sc10-p6", player: "Fran Delgado", teamId: "sc10-torrent", goals: 1 },
      { id: "sc10-p7", player: "Jorge Torrent", teamId: "sc10-inter", goals: 1 },
    ],
  },
];

const playerRegions = {
  [normalizeText("Edu Lozoya")]: "Castilla",
  [normalizeText("Jorge Pina")]: "Valencia",
  [normalizeText("Jaume Aracil")]: "Andalucia",
  [normalizeText("Fran Delgado")]: "Andalucia",
  [normalizeText("Edu Sanz")]: "Castilla",
  [normalizeText("Manuel Jiménez")]: "Andalucia",
  [normalizeText("Pepe Vilanova")]: "Valencia",
  [normalizeText("Christian Miquel")]: "Valencia",
  [normalizeText("Javi Martínez")]: "Castilla",
  [normalizeText("Pau Gil")]: "Valencia",
};

const PLAYER_IMAGE_STORAGE_KEY = "liga-player-images-v1";

const embeddedPlayerImages = {};

const seasonNarratives = {
  "Temporada 1": {
    title: "Crónica de la Temporada 1",
    paragraphs: [
      "La primera temporada arrancó con un duelo feroz entre Torrent e Inter Torrent que ya marcó el tono del año: 14-12 para Torrent con un Fran Delgado desatado, bien acompañado por Christian Miquel y Jorge Pina. En la segunda jornada llegó el gran aviso del campeón: un 32-12 a Santos Torrent que convirtió a Torrent en el equipo a batir y colocó a Fran, Christian y Jorge como el tridente ofensivo más temible del campeonato. Mientras tanto, Inter respondió en la jornada 3 con otra exhibición ofensiva, un 24-15 a Santos Torrent impulsado por una sociedad demoledora entre Edu Lozoya y Borja Pérez, capaces de sostener casi solos el empuje del equipo.",
      "El gran momento de la liga llegó en la jornada 4, cuando Inter Torrent y Torrent se cruzaron en un choque directo que parecía poder cambiarlo todo. Edu Lozoya volvió a brillar con 10 goles, pero Torrent resistió y se llevó un 18-21 que prácticamente encarriló el título. Aun así, la temporada todavía dejó un giro importante: Santos Torrent evitó el pleno de Torrent en la jornada 5 con un 21-17 liderado por los 9 tantos de Jorge Forano y el peso ofensivo de Borja Muñoz y Pablo Bellido. Aquella victoria devolvió orgullo a Santos y demostró que la liga seguía viva en el plano competitivo, aunque ya no en la pelea por el primer puesto.",
      "El cierre de la liga confirmó las jerarquías. Inter Torrent terminó fuerte con un 13-21 sobre Santos Torrent en la jornada 6, dejando claro que su pareja Edu Lozoya - Borja Pérez fue la gran amenaza del curso, mientras que Santos mostró capacidad anotadora pero demasiada irregularidad para pelear más arriba. Torrent, por su parte, construyó el campeonato a base de pegada, ritmo y variedad ofensiva: Fran Delgado explotó muy pronto, Christian Miquel fue un martillo constante y Jorge Pina dio equilibrio y gol en los momentos decisivos. El título liguero fue suyo porque fue el equipo que más golpeó, pero también el que mejor resistió cuando llegaron los partidos apretados.",
      "La copa remató la historia con una final que volvió a enfrentar a Inter Torrent y Torrent. Inter compitió con orgullo y se mantuvo vivo gracias a Alejandro López, Ángel Cases, Borja Pérez, Edu Lozoya y Vicente Cárcel, pero Torrent volvió a imponerse 8-10 con otra actuación decisiva de su bloque ofensivo: Jorge Pina firmó 4, Fran Delgado 3 y Christian Miquel 2. Hasta hubo un gol en propia puerta de Guillermo Robles que terminó sumándose al relato de una final vibrante. Así, la Temporada 1 acabó con doblete para Torrent: campeón de liga y también de copa, protagonista de una campaña inaugural muy goleadora y con una rivalidad inmediata con Inter Torrent que ya dejó sembrada una historia para temporadas futuras."
    ],
  },
  "Temporada 2": {
    title: "Crónica de la Temporada 2",
    paragraphs: [
      "La segunda temporada arrancó con un tono muy distinto: ya no hubo un dominador tan claro desde el principio, sino una pelea mucho más abierta entre cuatro equipos. Torrent golpeó primero al ganar 6-10 a Santos Torrent con un reparto muy sólido entre Fran Delgado, Jorge Pina y Juan Muñoz, mientras que Inter Torrent respondió de inmediato con un 15-12 sobre Torrent Saint-Germain sostenido por la puntería de Edu Lozoya, Pepe Vilanova y Christian Miquel. Desde la jornada 1 quedó claro que Inter tenía una enorme capacidad para convertir cada partido en un intercambio de golpes, pero también que Torrent seguía siendo un rival muy serio cuando encontraba espacios para correr y castigar.",
      "El primer gran vuelco llegó en la jornada 2. Torrent Saint-Germain frenó a Torrent con un 9-8 muy valioso, apoyado en Julio Valerio, Óscar Gil y Pablo Bellido, mientras Inter Torrent pasó por encima de Santos Torrent por 18-7 y presentó credenciales de campeón. A esas alturas, Pepe Vilanova y Edu Lozoya ya marcaban el ritmo ofensivo de Inter, pero la liga aún no estaba resuelta. Torrent reaccionó en la jornada 3 con un 3-6 sobre Inter en uno de los partidos más importantes del curso, una victoria que reabrió la pelea y confirmó que Juan Muñoz estaba dando un paso adelante como finalizador. Ese mismo día, Torrent Saint-Germain venció 8-6 a Santos y también se metió de lleno en la carrera.",
      "La temporada terminó decidiéndose por detalles, rachas y capacidad de reacción. Santos Torrent parecía descolgado tras sus dos primeras derrotas, pero se levantó a tiempo: primero tumbó 5-4 a Torrent, después firmó un espectacular 16-13 sobre Inter en uno de los partidos más vibrantes de la temporada y cerró la liga con un 9-5 sobre Torrent Saint-Germain. Ese arreón final cambió por completo la imagen del equipo. Aun así, el campeón liguero fue Inter Torrent, que supo sostener mejor su regularidad en el conjunto del calendario. Ganó cuatro partidos, cerró el curso con 12 puntos y resistió los momentos de máxima presión gracias a la pólvora de Pepe Vilanova, máximo goleador del año con 28, y al peso de Edu Lozoya, autor de 20 tantos. Torrent terminó con la mejor diferencia de goles entre los perseguidores y dejó grandes actuaciones, pero pagó demasiado caras sus derrotas ajustadas.",
      "La copa añadió todavía más drama a la temporada. En la primera semifinal, Santos Torrent eliminó a Torrent por un ajustado 5-4. En la otra, Inter Torrent y Torrent Saint-Germain empataron 7-7 y el pase se decidió en los penaltis, donde sobrevivió Torrent Saint-Germain. La final fue el broche perfecto a un año lleno de vaivenes: Santos Torrent venció 8-6 a Torrent Saint-Germain y convirtió una temporada liguera irregular en una historia de redención. Así, la Temporada 2 dejó un reparto de honores muy atractivo: Inter Torrent se llevó la liga por constancia, Santos Torrent conquistó la copa a base de carácter, Torrent fue un competidor peligrosísimo hasta el final y Torrent Saint-Germain demostró que podía discutir cualquier partido cuando encontraba inspiración en sus hombres de ataque."
    ],
  },
  "Temporada 3": {
    title: "Crónica de la Temporada 3",
    paragraphs: [
      "La tercera temporada empezó con un golpe de autoridad de Torrent Saint Germain. En la jornada inaugural aplastó 14-5 a Torrent con una exhibición coral rematada por Jorge Pina, Julio Valero y Óscar Fabian, mientras Santos Torrent e Inter Torrent empataban 7-7 en otro aviso de que la igualdad iba a ser máxima. El arranque parecía dibujar una liga favorable a Torrent Saint Germain, pero muy pronto apareció Inter Torrent para cambiar el guion. En la jornada 2 derrotó 7-2 a Torrent Saint Germain con el peso ofensivo de Pepe Vilanova y Pablo Bellido, y Santos volvió a dejar tocado a Torrent con otro triunfo ajustado, 7-6, impulsado por Christian Miquel y Edu Lozoya.",
      "La clave del campeonato estuvo en la consistencia de Inter Torrent. Ganó a Torrent en la jornada 3 por 6-1, sobrevivió a un duelo muy tenso contra Santos en la jornada 4 por 6-5 y, aunque cayó después ante Torrent Saint Germain y Torrent, ya había construido una base de puntos suficiente para controlar la liga. Pepe Vilanova firmó una temporada gigantesca con 22 goles, Pablo Bellido fue un apoyo constante y Toni Serrano apareció en muchos momentos decisivos. Frente a esa regularidad, Torrent vivió una remontada tardía: después de un arranque de dos derrotas, reaccionó con tres victorias seguidas, incluida una salvaje goleada 16-7 a Torrent Saint Germain y otro festival ofensivo, 18-4, ante Santos Torrent. Borja Pérez fue el gran martillo del equipo con 24 goles, bien secundado por Fran Delgado, Jaume Aracil y un Borja Muñoz muy útil en los últimos partidos.",
      "Santos Torrent y Torrent Saint Germain dejaron tramos de mucho nivel, pero pagaron su irregularidad. Santos fue capaz de ganar a Torrent, a Torrent Saint Germain y de discutir hasta el final partidos cerrados, con Christian Miquel y Juanito Muñoz como referentes, pero no le alcanzó para sostener el ritmo de Inter. Torrent Saint Germain, por su parte, pasó de arrasar en la primera jornada a perder cuatro de sus cinco siguientes partidos de liga más exigentes, aunque acabó levantando el vuelo con un 14-7 final sobre Santos. Aun así, el título liguero fue para Inter Torrent, que supo sufrir, competir mejor en los choques directos decisivos y mantener la cabeza por encima de un Torrent muy peligroso en el tramo final.",
      "La copa dibujó otra historia. Torrent fue el más sólido en la fase de grupos, aguantó un 3-3 contra Inter en un partido muy áspero y remató el trabajo venciendo 3-2 a Santos Torrent en la final, con Borja Muñoz, Borja Pérez y Fran Delgado firmando los goles del título. La recopa sirvió como premio de consolación para Inter Torrent, que derrotó 4-3 a Torrent Saint-Germain, y la supercopa cerró el curso con una imagen de autoridad de Torrent: un 6-2 ante Inter que confirmó que, aunque la liga se la llevó Inter Torrent, el balance emocional de la temporada quedó muy repartido. La Temporada 3 terminó así convertida en una de las más ricas del archivo: Inter dominó la regularidad liguera, Torrent se hizo fuerte en los partidos por título, Santos compitió con orgullo y Torrent Saint Germain pasó de gran amenaza inicial a equipo imprevisible y peligroso hasta el final."
    ],
  },
};

function getCompetitionLabel(type) {
  if (type === "cup") return "Copa";
  if (type === "recup") return "Recopa";
  if (type === "supercup") return "Supercopa";
  if (type === "selection") return "Selecciones";
  return "Liga";
}

function getSeasonNumber(name) {
  const parts = String(name || "").trim().split(" ");
  const maybeNumber = Number(parts[parts.length - 1]);
  return Number.isFinite(maybeNumber) ? maybeNumber : Number.MAX_SAFE_INTEGER;
}

function buildSeasonCatalog({ leagues, cups, recups, supercups, selections }) {
  const map = new Map();

  const ensureBucket = (name) => {
    if (!map.has(name)) {
      map.set(name, {
        name,
        league: null,
        cup: null,
        recup: null,
        supercup: null,
        selection: null,
      });
    }
    return map.get(name);
  };

  leagues.forEach((record) => {
    ensureBucket(record.name).league = record;
  });

  cups.forEach((record) => {
    ensureBucket(record.name).cup = record;
  });

  recups.forEach((record) => {
    ensureBucket(record.name).recup = record;
  });

  supercups.forEach((record) => {
    ensureBucket(record.name).supercup = record;
  });

  const seasons = Array.from(map.values()).sort((a, b) => getSeasonNumber(a.name) - getSeasonNumber(b.name));

  selections.forEach((record) => {
    seasons.push({
      name: record.name,
      league: null,
      cup: null,
      recup: null,
      supercup: null,
      selection: record,
      isSpecial: true,
    });
  });

  return seasons;
}

function stripAccents(value) {
  return String(value || "").normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function normalizeText(value) {
  return stripAccents(String(value || ""))
    .toLowerCase()
    .replace(/\(p\.p\.\)/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function getCanonicalTeamName(name) {
  const normalized = normalizeText(name);

  if (normalized === "torrent fs" || normalized === "torrent f s" || normalized === "torrent sc") return "Torrent";
  if (normalized === "inter torrent" || normalized === "inter torrent fs" || normalized === "inter torrent sc") return "Inter Torrent";
  if (normalized === "santos torrent" || normalized === "santos torrent fs" || normalized === "santos torrent sc") return "Santos Torrent";
  if (normalized === "torrent saint germain" || normalized === "torrent saint germain sc" || normalized === "tsg") return "Torrent Saint-Germain";
  if (normalized === "torrent city fs" || normalized === "torrent city") return "Torrent City";
  if (normalized === "torrent paraiso interior fs") return "Torrent Paraíso Interior";
  if (normalized === "silla fs") return "Silla";
  if (normalized === "alaquas fs") return "Alaquàs";
  if (normalized === "torrent pirates fs") return "Torrent Pirates";

  return name;
}

function getCanonicalPlayerName(name) {
  const trimmed = stripAccents(String(name || "")).trim();
  const normalized = normalizeText(trimmed);

  if (normalized === "francisco manuel delgado") return "Fran Delgado";
  if (normalized === "juan munoz" || normalized === "juanito munoz") return "Juanito Muñoz";
  if (normalized === "eduardo lozoya" || normalized === "edu lozoya") return "Edu Lozoya";
  if (normalized === "antoni serrano" || normalized === "toni serrano") return "Toni Serrano";
  if (normalized === "dani galvis" || normalized === "daniel galvis") return "Daniel Galvis";
  if (normalized === "jason robles" || normalized === "jason rebles") return "Jason Robles";
  if (normalized === "julio valerio" || normalized === "julio valero") return "Julio Valerio";
  if (normalized === "manolo jimenez" || normalized === "manuel jimenez") return "Manuel Jiménez";
  if (normalized === "miguel almagro" || normalized === "miguel angel almagro") return "Miguel Almagro";
  if (normalized === "oscar gil" || normalized === "oscar fabian") return "Óscar Gil";

  return trimmed;
}

function getPlayerRegion(name) {
  return playerRegions[normalizeText(getCanonicalPlayerName(name))] || "";
}

function getPlayerImageKey(name) {
  return normalizeText(getCanonicalPlayerName(name));
}

function loadStoredPlayerImages() {
  if (typeof window === "undefined") return { ...embeddedPlayerImages };
  try {
    const raw = window.localStorage.getItem(PLAYER_IMAGE_STORAGE_KEY);
    const stored = raw ? JSON.parse(raw) : {};
    return { ...embeddedPlayerImages, ...stored };
  } catch {
    return { ...embeddedPlayerImages };
  }
}

function getPlayerImage(imagesMap, name) {
  return imagesMap[getPlayerImageKey(name)] || "";
}

function teamName(season, teamId) {
  const rawName = season.teams.find((t) => t.id === teamId)?.name || teamId;
  return getCanonicalTeamName(rawName);
}

function computeStandings(season) {
  if (season.officialStandings?.length) {
    return season.officialStandings.map((row) => ({
      ...row,
      teamName: getCanonicalTeamName(row.teamName),
    }));
  }

  const map = new Map();

  season.teams.forEach((team) => {
    map.set(team.id, {
      teamId: team.id,
      teamName: team.name,
      pts: 0,
      pj: 0,
      pg: 0,
      pe: 0,
      pp: 0,
      gf: 0,
      gc: 0,
      dg: 0,
    });
  });

  season.matches.forEach((match) => {
    if (match.status && match.status !== "played") return;

    const home = map.get(match.homeTeamId);
    const away = map.get(match.awayTeamId);

    home.pj += 1;
    away.pj += 1;
    home.gf += match.homeGoals;
    home.gc += match.awayGoals;
    away.gf += match.awayGoals;
    away.gc += match.homeGoals;

    if (match.homeGoals > match.awayGoals) {
      home.pg += 1;
      away.pp += 1;
      home.pts += 3;
    } else if (match.homeGoals < match.awayGoals) {
      away.pg += 1;
      home.pp += 1;
      away.pts += 3;
    } else {
      home.pe += 1;
      away.pe += 1;
      home.pts += 1;
      away.pts += 1;
    }
  });

  return Array.from(map.values())
    .map((row) => ({ ...row, dg: row.gf - row.gc }))
    .sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      if (b.dg !== a.dg) return b.dg - a.dg;
      return b.gf - a.gf;
    });
}

function getTeamMatchCountInSeason(season, teamId) {
  return season.matches.filter(
    (match) =>
      (!match.status || match.status === "played") &&
      (match.homeTeamId === teamId || match.awayTeamId === teamId)
  ).length;
}

function computeGeneralStats(season) {
  const playedMatches = season.matches.filter(
    (m) => (!m.status || m.status === "played") && Number.isFinite(m.homeGoals) && Number.isFinite(m.awayGoals)
  );
  const totalMatches = playedMatches.length;
  const totalGoals = playedMatches.reduce((sum, m) => sum + m.homeGoals + m.awayGoals, 0);
  const homeWins = playedMatches.filter((m) => m.homeGoals > m.awayGoals).length;
  const awayWins = playedMatches.filter((m) => m.awayGoals > m.homeGoals).length;
  const draws = playedMatches.filter((m) => m.awayGoals === m.homeGoals).length;

  return {
    totalMatches,
    totalGoals,
    homeWins,
    awayWins,
    draws,
    avgGoals: totalMatches ? (totalGoals / totalMatches).toFixed(1) : "0.0",
  };
}

function aggregateTeamHistory(seasons) {
  const map = new Map();

  seasons.forEach((season) => {
    const standings = computeStandings(season);
    const competitionType = season.competitionType || "league";
    const competitionLabel = getCompetitionLabel(competitionType);

    standings.forEach((row) => {
      const canonicalTeamName = getCanonicalTeamName(row.teamName);
      const current = map.get(canonicalTeamName) || {
        teamName: canonicalTeamName,
        seasonKeys: new Set(),
        titleKeys: new Set(),
        pts: 0,
        pj: 0,
        pg: 0,
        pe: 0,
        pp: 0,
        gf: 0,
        gc: 0,
        dg: 0,
        titles: 0,
        titleBreakdown: {
          league: 0,
          cup: 0,
          recup: 0,
          supercup: 0,
          selection: 0,
        },
        titleSeasons: [],
        bySeason: [],
      };

      current.seasonKeys.add(season.name);
      current.pts += row.pts;
      current.pj += row.pj;
      current.pg += row.pg;
      current.pe += row.pe;
      current.pp += row.pp;
      current.gf += row.gf;
      current.gc += row.gc;
      current.dg += row.dg;
      current.bySeason.push({
        seasonName: season.name,
        competitionType,
        competitionLabel,
        pts: row.pts,
        pj: row.pj,
        pg: row.pg,
        pe: row.pe,
        pp: row.pp,
        gf: row.gf,
        gc: row.gc,
        dg: row.dg,
      });
      map.set(canonicalTeamName, current);
    });

    if (standings.length > 0 || season.championTeamId) {
      const canonicalChampionName = season.championTeamId
        ? teamName(season, season.championTeamId)
        : getCanonicalTeamName(standings[0].teamName);
      const championRow = map.get(canonicalChampionName);
      if (championRow && ["league", "cup", "recup", "supercup", "selection"].includes(competitionType)) {
        const titleKey = `${competitionType}:${season.name}`;
        if (!championRow.titleKeys.has(titleKey)) {
          championRow.titleKeys.add(titleKey);
          championRow.titles += 1;
          championRow.titleBreakdown[competitionType] += 1;
          championRow.titleSeasons.push({
            seasonId: season.id,
            seasonName: season.name,
            competitionType,
            competitionLabel,
          });
        }
      }
    }
  });

  return Array.from(map.values())
    .map((item) => ({
      ...item,
      seasons: item.seasonKeys.size,
      pointsPerMatch: item.pj ? (item.pts / item.pj).toFixed(2) : "0.00",
      goalsPerMatch: item.pj ? (item.gf / item.pj).toFixed(2) : "0.00",
    }))
    .sort((a, b) => b.pts - a.pts || b.dg - a.dg || b.gf - a.gf);
}

function aggregatePlayerHistory(seasons) {
  const map = new Map();

  seasons.forEach((season) => {
    const standings = computeStandings(season);
    const champion = standings[0] || null;
    const championTeamId = season.championTeamId || champion?.teamId || null;
    const championTeamName = championTeamId ? teamName(season, championTeamId) : "";
    const competitionType = season.competitionType || "league";
    const competitionLabel = getCompetitionLabel(competitionType);

    season.scorers.forEach((entry) => {
      const canonicalPlayerName = entry.player.includes("(p.p.)") ? entry.player : getCanonicalPlayerName(entry.player);
      const key = normalizeText(canonicalPlayerName);
      const matchesForThatSeason = getTeamMatchCountInSeason(season, entry.teamId);
      const current = map.get(key) || {
        player: canonicalPlayerName,
        region: getPlayerRegion(canonicalPlayerName),
        totalGoals: 0,
        totalMatches: 0,
        seasonKeys: new Set(),
        titleKeys: new Set(),
        teams: new Set(),
        bySeason: [],
        titleSeasons: [],
        titleBreakdown: {
          league: 0,
          cup: 0,
          recup: 0,
          supercup: 0,
          selection: 0,
        },
      };

      current.totalGoals += entry.goals;
      current.totalMatches += matchesForThatSeason;
      current.seasonKeys.add(season.name);
      current.teams.add(teamName(season, entry.teamId));
      current.bySeason.push({
        seasonId: season.id,
        seasonName: season.name,
        competitionType,
        competitionLabel,
        teamName: teamName(season, entry.teamId),
        goals: entry.goals,
        matches: matchesForThatSeason,
        goalsPerMatch: matchesForThatSeason ? (entry.goals / matchesForThatSeason).toFixed(2) : "0.00",
      });

      if (championTeamId && entry.teamId === championTeamId && ["league", "cup", "recup", "supercup", "selection"].includes(competitionType)) {
        const titleKey = `${competitionType}:${season.name}`;
        if (!current.titleKeys.has(titleKey)) {
          current.titleKeys.add(titleKey);
          current.titleSeasons.push({
            seasonId: season.id,
            seasonName: season.name,
            competitionType,
            competitionLabel,
            teamName: championTeamName,
          });
          current.titleBreakdown[competitionType] += 1;
        }
      }

      map.set(key, current);
    });
  });

  return Array.from(map.values())
    .map((item) => ({
      ...item,
      seasons: item.seasonKeys.size,
      titles: item.titleKeys.size,
      teams: Array.from(item.teams),
      primaryTeamName: Array.from(item.teams).join(" · "),
      goalsPerMatch: item.totalMatches ? (item.totalGoals / item.totalMatches).toFixed(2) : "0.00",
    }))
    .sort((a, b) => b.totalGoals - a.totalGoals || a.player.localeCompare(b.player));
}

function getMatchScoreLabel(match) {
  if (match.status === "no_presentado") return "No Presentado";
  if (match.status === "pending") return "Pendiente";
  if (Number.isFinite(match.homeGoals) && Number.isFinite(match.awayGoals)) {
    const base = `${match.homeGoals} - ${match.awayGoals}`;
    if (match.penaltyShootout && Number.isFinite(match.penaltyShootout.homePenalties) && Number.isFinite(match.penaltyShootout.awayPenalties)) {
      return `${base} (p. ${match.penaltyShootout.homePenalties}-${match.penaltyShootout.awayPenalties})`;
    }
    return base;
  }
  return "Pendiente";
}

function formatScorerList(entries) {
  return entries
    .map((entry) => `${entry.player}${entry.goals > 1 ? ` (${entry.goals})` : ""}`)
    .join("\n");
}

function inferMatchScorersTexts(season, match) {
  const explicitHome = String(match.homeScorersText || "").trim();
  const explicitAway = String(match.awayScorersText || "").trim();
  if (explicitHome || explicitAway) {
    return {
      home: explicitHome,
      away: explicitAway,
    };
  }

  const playedMatches = (season.matches || []).filter(
    (item) => (!item.status || item.status === "played") && Number.isFinite(item.homeGoals) && Number.isFinite(item.awayGoals)
  );

  if (playedMatches.length !== 1 || playedMatches[0].id !== match.id) {
    return { home: "", away: "" };
  }

  const homeEntries = (season.scorers || []).filter((entry) => entry.teamId === match.homeTeamId);
  const awayEntries = (season.scorers || []).filter((entry) => entry.teamId === match.awayTeamId);
  const homeGoals = homeEntries.reduce((sum, entry) => sum + (Number(entry.goals) || 0), 0);
  const awayGoals = awayEntries.reduce((sum, entry) => sum + (Number(entry.goals) || 0), 0);

  return {
    home: homeGoals === match.homeGoals ? formatScorerList(homeEntries) : "",
    away: awayGoals === match.awayGoals ? formatScorerList(awayEntries) : "",
  };
}

function hasMatchScorers(match, season) {
  const texts = inferMatchScorersTexts(season, match);
  return Boolean(String(texts.home || "").trim() || String(texts.away || "").trim());
}

function formatRank(position) {
  return `${position}.`;
}

function compareText(a, b) {
  return String(a || "").localeCompare(String(b || ""), "es", { sensitivity: "base" });
}

function compareNumberDesc(a, b) {
  return (Number(b) || 0) - (Number(a) || 0);
}

function sortTeamRows(rows, sortKey) {
  const list = [...rows];

  switch (sortKey) {
    case "name":
      return list.sort((a, b) => compareText(a.teamName || a.name, b.teamName || b.name));
    case "pts":
      return list.sort((a, b) => compareNumberDesc(a.pts, b.pts) || compareNumberDesc(a.dg, b.dg) || compareNumberDesc(a.gf, b.gf) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "pj":
      return list.sort((a, b) => compareNumberDesc(a.pj, b.pj) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "pg":
      return list.sort((a, b) => compareNumberDesc(a.pg, b.pg) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "pe":
      return list.sort((a, b) => compareNumberDesc(a.pe, b.pe) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "pp":
      return list.sort((a, b) => compareNumberDesc(a.pp, b.pp) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "gf":
      return list.sort((a, b) => compareNumberDesc(a.gf, b.gf) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "gc":
      return list.sort((a, b) => compareNumberDesc(a.gc, b.gc) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "dg":
      return list.sort((a, b) => compareNumberDesc(a.dg, b.dg) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "titles":
      return list.sort((a, b) => compareNumberDesc(a.titles, b.titles) || compareNumberDesc(a.pts, b.pts) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "seasons":
      return list.sort((a, b) => compareNumberDesc(a.seasons, b.seasons) || compareNumberDesc(a.pts, b.pts) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "ppm":
      return list.sort((a, b) => compareNumberDesc(a.pointsPerMatch, b.pointsPerMatch) || compareNumberDesc(a.pts, b.pts) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "gpm":
      return list.sort((a, b) => compareNumberDesc(a.goalsPerMatch, b.goalsPerMatch) || compareNumberDesc(a.gf, b.gf) || compareText(a.teamName || a.name, b.teamName || b.name));
    default:
      return list;
  }
}

function sortPlayerRows(rows, sortKey) {
  const list = [...rows];

  switch (sortKey) {
    case "name":
      return list.sort((a, b) => compareText(a.player, b.player));
    case "matches":
      return list.sort((a, b) => compareNumberDesc(a.totalMatches ?? a.matches, b.totalMatches ?? b.matches) || compareNumberDesc(a.totalGoals ?? a.goals, b.totalGoals ?? b.goals) || compareText(a.player, b.player));
    case "gpm":
      return list.sort((a, b) => compareNumberDesc(a.goalsPerMatch, b.goalsPerMatch) || compareNumberDesc(a.totalGoals ?? a.goals, b.totalGoals ?? b.goals) || compareText(a.player, b.player));
    case "seasons":
      return list.sort((a, b) => compareNumberDesc(a.seasons, b.seasons) || compareNumberDesc(a.totalGoals ?? a.goals, b.totalGoals ?? b.goals) || compareText(a.player, b.player));
    case "titles":
      return list.sort((a, b) => compareNumberDesc(a.titles, b.titles) || compareNumberDesc(a.totalGoals ?? a.goals, b.totalGoals ?? b.goals) || compareText(a.player, b.player));
    case "goals":
    default:
      return list.sort((a, b) => compareNumberDesc(a.totalGoals ?? a.goals, b.totalGoals ?? b.goals) || compareText(a.player, b.player));
  }
}

function inNumericRange(value, min, max) {
  const numericValue = Number(value) || 0;
  if (min !== "" && numericValue < Number(min)) return false;
  if (max !== "" && numericValue > Number(max)) return false;
  return true;
}

function toggleValueInList(list, value) {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

function uniqueValues(values) {
  return Array.from(new Set(values.filter(Boolean))).sort((a, b) => compareText(a, b));
}

function flattenGlobalMatches(records) {
  return records
    .flatMap((season) =>
      season.matches.map((match) => ({
        ...match,
        seasonId: season.id,
        seasonName: season.name,
        competitionType: season.competitionType,
        competitionLabel: getCompetitionLabel(season.competitionType),
        sourceUrl: season.sourceUrl,
        homeTeamName: teamName(season, match.homeTeamId),
        awayTeamName: teamName(season, match.awayTeamId),
      }))
    )
    .sort(
      (a, b) =>
        getSeasonNumber(b.seasonName) - getSeasonNumber(a.seasonName) ||
        compareText(a.competitionLabel, b.competitionLabel) ||
        compareNumberDesc(a.round, b.round)
    );
}

function StatCard({ label, value, sub }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 text-2xl font-bold text-slate-900">{value}</div>
      {sub ? <div className="mt-1 text-sm text-slate-500">{sub}</div> : null}
    </div>
  );
}

function SyncedHorizontalScrollTable({ children, wrapperClassName = "", scrollAreaClassName = "" }) {
  const topScrollRef = useRef(null);
  const bottomScrollRef = useRef(null);
  const innerContentRef = useRef(null);
  const syncingRef = useRef(null);
  const [metrics, setMetrics] = useState({ scrollWidth: 1, hasOverflow: false });

  useEffect(() => {
    const updateMetrics = () => {
      const scrollWidth = innerContentRef.current?.scrollWidth || 1;
      const clientWidth = bottomScrollRef.current?.clientWidth || 0;
      setMetrics({
        scrollWidth,
        hasOverflow: scrollWidth > clientWidth + 1,
      });
    };

    updateMetrics();

    const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(updateMetrics) : null;

    if (resizeObserver) {
      if (innerContentRef.current) resizeObserver.observe(innerContentRef.current);
      if (bottomScrollRef.current) resizeObserver.observe(bottomScrollRef.current);
    }

    window.addEventListener("resize", updateMetrics);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateMetrics);
    };
  }, [children]);

  const syncScroll = (source, target, sourceName) => {
    if (!source || !target) return;

    if (syncingRef.current === sourceName) {
      syncingRef.current = null;
      return;
    }

    syncingRef.current = sourceName === "top" ? "bottom" : "top";
    target.scrollLeft = source.scrollLeft;
  };

  return (
    <div className={`space-y-2 ${wrapperClassName}`}>
      {metrics.hasOverflow && (
        <div className="sticky top-0 z-20 -mx-1 px-1">
          <div
            ref={topScrollRef}
            onScroll={() => syncScroll(topScrollRef.current, bottomScrollRef.current, "bottom")}
            className="overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 shadow-sm"
          >
            <div style={{ width: `${metrics.scrollWidth}px`, height: "14px" }} />
          </div>
        </div>
      )}
      <div
        ref={bottomScrollRef}
        onScroll={() => syncScroll(bottomScrollRef.current, topScrollRef.current, "top")}
        className={scrollAreaClassName}
      >
        <div ref={innerContentRef}>{children}</div>
      </div>
    </div>
  );
}

export default function LigaBuscadorApp() {
  const [seasons, setSeasons] = useState(initialSeasons);
  const [cups, setCups] = useState(initialCups);
  const [recups, setRecups] = useState(initialRecups);
  const [supercups, setSupercups] = useState(initialSupercups);
  const [selections, setSelections] = useState(initialSelections);
  const [selectedSeasonName, setSelectedSeasonName] = useState(initialSeasons[0]?.name || "");
  const [selectedCompetitionType, setSelectedCompetitionType] = useState("league");
  const [search, setSearch] = useState("");
  const [activeView, setActiveView] = useState("season-clasificacion");
  const [seasonTeamSort, setSeasonTeamSort] = useState("default");
  const [seasonPlayerSort, setSeasonPlayerSort] = useState("goals");
  const [globalTeamSort, setGlobalTeamSort] = useState("pts");
  const [globalPlayerSort, setGlobalPlayerSort] = useState("goals");
  const [globalCompetitionFilter, setGlobalCompetitionFilter] = useState("all");
  const [editingMatchId, setEditingMatchId] = useState(null);
  const [editingScorerId, setEditingScorerId] = useState(null);
  const [playerImages, setPlayerImages] = useState(() => loadStoredPlayerImages());
  const [selectedPlayerModalKey, setSelectedPlayerModalKey] = useState(null);
  const [seasonPlayerTeamFilters, setSeasonPlayerTeamFilters] = useState([]);
  const [seasonPlayerRegionFilters, setSeasonPlayerRegionFilters] = useState([]);
  const [seasonPlayerGoalsMin, setSeasonPlayerGoalsMin] = useState("");
  const [seasonPlayerGoalsMax, setSeasonPlayerGoalsMax] = useState("");
  const [seasonPlayerMatchesMin, setSeasonPlayerMatchesMin] = useState("");
  const [seasonPlayerMatchesMax, setSeasonPlayerMatchesMax] = useState("");
  const [globalPlayerTeamFilters, setGlobalPlayerTeamFilters] = useState([]);
  const [globalPlayerRegionFilters, setGlobalPlayerRegionFilters] = useState([]);
  const [globalPlayerGoalsMin, setGlobalPlayerGoalsMin] = useState("");
  const [globalPlayerGoalsMax, setGlobalPlayerGoalsMax] = useState("");
  const [globalPlayerMatchesMin, setGlobalPlayerMatchesMin] = useState("");
  const [globalPlayerMatchesMax, setGlobalPlayerMatchesMax] = useState("");

  const leagueRecords = useMemo(() => seasons.map((record) => ({ ...record, competitionType: "league" })), [seasons]);
  const cupRecords = useMemo(() => cups.map((record) => ({ ...record, competitionType: "cup" })), [cups]);
  const recupRecords = useMemo(() => recups.map((record) => ({ ...record, competitionType: "recup" })), [recups]);
  const supercupRecords = useMemo(() => supercups.map((record) => ({ ...record, competitionType: "supercup" })), [supercups]);
  const selectionRecords = useMemo(() => selections.map((record) => ({ ...record, competitionType: "selection" })), [selections]);

  const competitionOptions = {
    league: { label: "Liga", records: leagueRecords, setRecords: setSeasons },
    cup: { label: "Copa", records: cupRecords, setRecords: setCups },
    recup: { label: "Recopa", records: recupRecords, setRecords: setRecups },
    supercup: { label: "Supercopa", records: supercupRecords, setRecords: setSupercups },
    selection: { label: "Selecciones", records: selectionRecords, setRecords: setSelections },
  };

  const seasonCatalog = useMemo(
    () =>
      buildSeasonCatalog({
        leagues: leagueRecords,
        cups: cupRecords,
        recups: recupRecords,
        supercups: supercupRecords,
        selections: selectionRecords,
      }),
    [leagueRecords, cupRecords, recupRecords, supercupRecords, selectionRecords]
  );

  useEffect(() => {
    if (!seasonCatalog.some((item) => item.name === selectedSeasonName)) {
      setSelectedSeasonName(seasonCatalog[0]?.name || "");
    }
  }, [seasonCatalog, selectedSeasonName]);

  const selectedSeasonBundle =
    seasonCatalog.find((item) => item.name === selectedSeasonName) ||
    seasonCatalog[0] ||
    { name: "", league: null, cup: null, recup: null, supercup: null, selection: null };

  const availableCompetitions = [
    selectedSeasonBundle.league ? { type: "league", label: "Liga" } : null,
    selectedSeasonBundle.cup ? { type: "cup", label: "Copa" } : null,
    selectedSeasonBundle.recup ? { type: "recup", label: "Recopa" } : null,
    selectedSeasonBundle.supercup ? { type: "supercup", label: "Supercopa" } : null,
    selectedSeasonBundle.selection ? { type: "selection", label: "Selecciones" } : null,
  ].filter(Boolean);

  useEffect(() => {
    if (!availableCompetitions.some((item) => item.type === selectedCompetitionType)) {
      setSelectedCompetitionType(availableCompetitions[0]?.type || "league");
    }
  }, [availableCompetitions, selectedCompetitionType]);

  const currentCompetition = competitionOptions[selectedCompetitionType] || competitionOptions.league;
  const currentRecords = currentCompetition.records;
  const setCurrentRecords = currentCompetition.setRecords;
  const currentCompetitionLabel = currentCompetition.label;
  const currentArchive = currentCompetition;
  const allRecords = useMemo(() => [...leagueRecords, ...cupRecords, ...recupRecords, ...supercupRecords, ...selectionRecords], [leagueRecords, cupRecords, recupRecords, supercupRecords, selectionRecords]);
  const globalRecords = useMemo(() => {
    if (globalCompetitionFilter === "all") return allRecords;
    return allRecords.filter((record) => record.competitionType === globalCompetitionFilter);
  }, [allRecords, globalCompetitionFilter]);

  const selectedSeason = currentRecords.find((s) => s.name === selectedSeasonName) || currentRecords[0] || { teams: [], matches: [], byes: [], scorers: [], name: "", sourceUrl: "" };
  const selectedSeasonNarrative = seasonNarratives[selectedSeasonBundle.name] || null;

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(PLAYER_IMAGE_STORAGE_KEY, JSON.stringify(playerImages));
  }, [playerImages]);
  const standings = useMemo(() => computeStandings(selectedSeason), [selectedSeason]);
  const generalStats = useMemo(() => computeGeneralStats(selectedSeason), [selectedSeason]);
  const teamHistory = useMemo(() => aggregateTeamHistory(globalRecords), [globalRecords]);
  const playerHistory = useMemo(() => aggregatePlayerHistory(globalRecords), [globalRecords]);
  const seasonPlayerTeamOptions = useMemo(() => uniqueValues(selectedSeason.teams.map((team) => getCanonicalTeamName(team.name))), [selectedSeason]);
  const seasonPlayerRegionOptions = useMemo(() => uniqueValues(selectedSeason.scorers.map((entry) => getPlayerRegion(entry.player))), [selectedSeason]);
  const globalPlayerTeamOptions = useMemo(() => uniqueValues(playerHistory.flatMap((player) => player.teams || [])), [playerHistory]);
  const globalPlayerRegionOptions = useMemo(() => uniqueValues(playerHistory.map((player) => player.region)), [playerHistory]);
  const globalMatchRows = useMemo(() => flattenGlobalMatches(globalRecords), [globalRecords]);

  const normalizedSearch = normalizeText(search);

  const filteredTeams = useMemo(() => {
    const base = selectedSeason.teams.map((team) => {
      const row = standings.find((r) => r.teamId === team.id);
      return {
        ...team,
        ...(row || {}),
      };
    });

    if (!normalizedSearch) return base;
    return base.filter((team) => normalizeText(getCanonicalTeamName(team.name)).includes(normalizedSearch));
  }, [selectedSeason, standings, normalizedSearch]);

  const filteredScorers = useMemo(() => {
    let base = selectedSeason.scorers.map((entry) => {
      const matches = getTeamMatchCountInSeason(selectedSeason, entry.teamId);
      return {
        ...entry,
        teamName: teamName(selectedSeason, entry.teamId),
        region: getPlayerRegion(entry.player),
        matches,
        goalsPerMatch: matches ? (entry.goals / matches).toFixed(2) : "0.00",
      };
    });

    base = base.sort((a, b) => b.goals - a.goals || a.player.localeCompare(b.player));

    return base.filter((entry) => {
      if (seasonPlayerTeamFilters.length && !seasonPlayerTeamFilters.includes(entry.teamName)) return false;
      if (seasonPlayerRegionFilters.length && !seasonPlayerRegionFilters.includes(entry.region)) return false;
      if (!inNumericRange(entry.goals, seasonPlayerGoalsMin, seasonPlayerGoalsMax)) return false;
      if (!inNumericRange(entry.matches, seasonPlayerMatchesMin, seasonPlayerMatchesMax)) return false;
      if (!normalizedSearch) return true;
      return (
        normalizeText(entry.player).includes(normalizedSearch) ||
        normalizeText(entry.teamName).includes(normalizedSearch) ||
        normalizeText(entry.region).includes(normalizedSearch)
      );
    });
  }, [
    selectedSeason,
    normalizedSearch,
    seasonPlayerTeamFilters,
    seasonPlayerRegionFilters,
    seasonPlayerGoalsMin,
    seasonPlayerGoalsMax,
    seasonPlayerMatchesMin,
    seasonPlayerMatchesMax,
  ]);

  const filteredMatches = useMemo(() => {
    const base = [...selectedSeason.matches].sort((a, b) => b.round - a.round);
    if (!normalizedSearch) return base;

    return base.filter((match) => {
      const homeName = normalizeText(teamName(selectedSeason, match.homeTeamId));
      const awayName = normalizeText(teamName(selectedSeason, match.awayTeamId));
      return homeName.includes(normalizedSearch) || awayName.includes(normalizedSearch);
    });
  }, [selectedSeason, normalizedSearch]);

  const filteredPlayerHistory = useMemo(() => {
    return playerHistory.filter((item) => {
      if (globalPlayerTeamFilters.length && !(item.teams || []).some((team) => globalPlayerTeamFilters.includes(team))) return false;
      if (globalPlayerRegionFilters.length && !globalPlayerRegionFilters.includes(item.region)) return false;
      if (!inNumericRange(item.totalGoals, globalPlayerGoalsMin, globalPlayerGoalsMax)) return false;
      if (!inNumericRange(item.totalMatches, globalPlayerMatchesMin, globalPlayerMatchesMax)) return false;
      if (!normalizedSearch) return true;
      return (
        normalizeText(item.player).includes(normalizedSearch) ||
        normalizeText(item.primaryTeamName).includes(normalizedSearch) ||
        normalizeText(item.region).includes(normalizedSearch)
      );
    });
  }, [
    playerHistory,
    normalizedSearch,
    globalPlayerTeamFilters,
    globalPlayerRegionFilters,
    globalPlayerGoalsMin,
    globalPlayerGoalsMax,
    globalPlayerMatchesMin,
    globalPlayerMatchesMax,
  ]);

  const filteredTeamHistory = useMemo(() => {
    if (!normalizedSearch) return teamHistory;
    return teamHistory.filter((item) => normalizeText(item.teamName).includes(normalizedSearch));
  }, [teamHistory, normalizedSearch]);

  const filteredGlobalMatches = useMemo(() => {
    return globalMatchRows.filter((match) => {
      if (!normalizedSearch) return true;
      return (
        normalizeText(match.homeTeamName).includes(normalizedSearch) ||
        normalizeText(match.awayTeamName).includes(normalizedSearch) ||
        normalizeText(match.seasonName).includes(normalizedSearch) ||
        normalizeText(match.competitionLabel).includes(normalizedSearch)
      );
    });
  }, [globalMatchRows, normalizedSearch]);

  const displayedStandings = useMemo(() => {
    const searched = standings.filter((row) => !normalizedSearch || normalizeText(row.teamName).includes(normalizedSearch));
    return sortTeamRows(searched, seasonTeamSort);
  }, [standings, normalizedSearch, seasonTeamSort]);

  const displayedTeams = useMemo(() => {
    const base = filteredTeams.map((team) => ({
      ...team,
      teamName: team.teamName || team.name,
      pointsPerMatch: team.pj ? (team.pts / team.pj).toFixed(2) : "0.00",
      goalsPerMatch: team.pj ? (team.gf / team.pj).toFixed(2) : "0.00",
    }));
    return sortTeamRows(base, seasonTeamSort);
  }, [filteredTeams, seasonTeamSort]);

  const displayedScorers = useMemo(() => sortPlayerRows(filteredScorers, seasonPlayerSort), [filteredScorers, seasonPlayerSort]);
  const displayedTeamHistory = useMemo(() => sortTeamRows(filteredTeamHistory, globalTeamSort), [filteredTeamHistory, globalTeamSort]);
  const displayedPlayerHistory = useMemo(() => sortPlayerRows(filteredPlayerHistory, globalPlayerSort), [filteredPlayerHistory, globalPlayerSort]);

  function updateMatch(matchId, field, value) {
    const numericFields = new Set(["homeGoals", "awayGoals"]);
    setCurrentRecords((prev) =>
      prev.map((season) => ({
        ...season,
        matches: season.matches.map((match) =>
          match.id === matchId
            ? {
                ...match,
                [field]: numericFields.has(field) ? Math.max(0, Number(value) || 0) : value,
              }
            : match
        ),
      }))
    );
  }

  function updateScorer(scorerId, field, value) {
    setCurrentRecords((prev) =>
      prev.map((season) => ({
        ...season,
        scorers: season.scorers.map((entry) =>
          entry.id === scorerId
            ? {
                ...entry,
                [field]: field === "goals" ? Math.max(0, Number(value) || 0) : value,
              }
            : entry
        ),
      }))
    );
  }

  function updatePlayerImage(playerName, file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      if (!result) return;
      setPlayerImages((prev) => ({
        ...prev,
        [getPlayerImageKey(playerName)]: result,
      }));
    };
    reader.readAsDataURL(file);
  }

  function removePlayerImage(playerName) {
    const key = getPlayerImageKey(playerName);
    setPlayerImages((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  const editingMatch = selectedSeason.matches.find((m) => m.id === editingMatchId) || null;
  const editingScorer = selectedSeason.scorers.find((s) => s.id === editingScorerId) || null;
  const selectedPlayerModal = playerHistory.find((player) => normalizeText(player.player) === selectedPlayerModalKey) || null;

  function openPlayerModal(playerName) {
    setSelectedPlayerModalKey(normalizeText(getCanonicalPlayerName(playerName)));
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl p-4 md:p-8">
        <div className="mb-6 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 p-6 text-white shadow-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium tracking-wide">
                Base de datos / buscador de competiciones
              </div>
              <h1 className="text-3xl font-bold md:text-4xl">Historial de competiciones, equipos y jugadores</h1>
              <p className="mt-2 max-w-3xl text-sm text-slate-200 md:text-base">
                Prototipo preparado para navegar por temporada y, dentro de cada una, consultar Liga, Copa, Recopa o Supercopa cuando exista. También mantiene un historial global unificado.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <div className="rounded-2xl bg-white/10 p-3">
                <div className="text-xs text-slate-200">Temporadas</div>
                <div className="text-2xl font-bold">{seasonCatalog.filter((item) => !item.isSpecial).length}</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-3">
                <div className="text-xs text-slate-200">Temporada actual</div>
                <div className="text-lg font-bold">{selectedSeasonBundle.name || "-"}</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-3">
                <div className="text-xs text-slate-200">Competición</div>
                <div className="text-2xl font-bold">{currentCompetitionLabel}</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-3">
                <div className="text-xs text-slate-200">Equipos</div>
                <div className="text-2xl font-bold">{selectedSeason.teams.length}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 grid gap-4 lg:grid-cols-[280px_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <label className="mb-2 block text-sm font-semibold text-slate-700">Temporada</label>
            <select
              value={selectedSeasonName}
              onChange={(e) => setSelectedSeasonName(e.target.value)}
              className="mb-4 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"
            >
              {seasonCatalog.map((season) => (
                <option key={season.name} value={season.name}>
                  {season.name}
                </option>
              ))}
            </select>

            <label className="mb-2 block text-sm font-semibold text-slate-700">Competición</label>
            <div className="mb-4 grid gap-2">
              {availableCompetitions.map((competition) => {
                const isActive = selectedCompetitionType === competition.type;
                return (
                  <button
                    key={competition.type}
                    type="button"
                    onClick={() => setSelectedCompetitionType(competition.type)}
                    className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                      isActive
                        ? "border-slate-900 bg-slate-900 text-white shadow"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                    }`}
                  >
                    <span>{competition.label}</span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs ${
                        isActive ? "bg-white/15 text-white" : "bg-white text-slate-500"
                      }`}
                    >
                      {competition.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">Buscar</label>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Jugador, equipo..."
              className="mb-4 w-full rounded-2xl border border-slate-300 px-3 py-2 outline-none focus:border-slate-500"
            />

            <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
              <div className="font-semibold text-slate-800">Fuente actual</div>
              <div className="mt-1 break-all">{selectedSeason.sourceUrl}</div>
              {selectedSeason.structureNote ? (
                <div className="mt-3 rounded-2xl bg-amber-50 px-3 py-2 text-xs text-amber-900">
                  <span className="font-semibold">Formato especial:</span> {selectedSeason.structureNote}
                </div>
              ) : null}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            {selectedSeasonNarrative ? (
              <div className="mb-4 rounded-3xl border border-amber-200 bg-amber-50 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-amber-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-900">
                    Relato de temporada
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{selectedSeasonNarrative.title}</h3>
                </div>
                <div className="space-y-3 text-sm leading-7 text-slate-700">
                  {selectedSeasonNarrative.paragraphs.map((paragraph, index) => (
                    <p key={`${selectedSeasonBundle.name}-narrative-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ) : null}
            <div className="grid gap-4 md:grid-cols-4">
              <StatCard label="Partidos" value={generalStats.totalMatches} />
              <StatCard label="Goles" value={generalStats.totalGoals} />
              <StatCard label="Media goles" value={generalStats.avgGoals} />
              <StatCard label="Empates" value={generalStats.draws} />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Temporada actual</div>
          <div className="flex flex-wrap gap-2">
            {[
              ["season-clasificacion", "Clasificación"],
              ["season-equipos", "Equipos"],
              ["season-jugadores", "Jugadores"],
              ["season-partidos", "Partidos"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveView(key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeView === key
                    ? "bg-slate-900 text-white shadow"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Global</div>
          <div className="flex flex-wrap gap-2">
            {[
              ["global-clasificacion", "Clasificación global"],
              ["global-equipos", "Equipos globales"],
              ["global-jugadores", "Jugadores globales"],
              ["global-partidos", "Partidos globales"],
              ["historial", "Historial"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveView(key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeView === key
                    ? "bg-slate-900 text-white shadow"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {activeView === "season-clasificacion" && (
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <h2 className="text-xl font-bold">
                {selectedSeason.formatType === "group-final"
                  ? "Fase de grupos y final"
                  : selectedSeason.knockoutFormat === "bracket"
                    ? "Cuadro eliminatorio"
                    : "Clasificación"}
              </h2>

              {selectedSeason.formatType === "group-final" ? (
                <div className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-900">
                  Fase de grupos + final
                </div>
              ) : selectedSeason.knockoutFormat === "bracket" ? (
                <div className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-900">
                  Eliminatorias
                </div>
              ) : (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-slate-500">Ordenar por</span>
                  <select
                    value={seasonTeamSort}
                    onChange={(e) => setSeasonTeamSort(e.target.value)}
                    className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"
                  >
                    <option value="default">Clasificación oficial</option>
                    <option value="pts">Puntos</option>
                    <option value="pj">Partidos jugados</option>
                    <option value="pg">Partidos ganados</option>
                    <option value="pe">Empates</option>
                    <option value="pp">Derrotas</option>
                    <option value="gf">Goles a favor</option>
                    <option value="gc">Goles en contra</option>
                    <option value="dg">Diferencia de goles</option>
                    <option value="name">Nombre</option>
                  </select>
                </div>
              )}
            </div>

            {selectedSeason.formatType === "group-final" ? (
              <div className="space-y-5">
                {selectedSeason.structureNote ? (
                  <div className="rounded-2xl bg-amber-50 px-4 py-3 text-sm text-amber-900">
                    <span className="font-semibold">Formato:</span> {selectedSeason.structureNote}
                  </div>
                ) : null}

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Fase de grupos</div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-200 text-left text-slate-500">
                          <th className="px-3 py-2">Pos.</th>
                          <th className="px-3 py-2">Equipo</th>
                          <th className="px-3 py-2">Pt</th>
                          <th className="px-3 py-2">PJ</th>
                          <th className="px-3 py-2">PG</th>
                          <th className="px-3 py-2">PE</th>
                          <th className="px-3 py-2">PP</th>
                          <th className="px-3 py-2">GF</th>
                          <th className="px-3 py-2">GC</th>
                          <th className="px-3 py-2">DG</th>
                        </tr>
                      </thead>
                      <tbody>
                        {displayedStandings.map((row, index) => (
                          <tr key={row.teamId} className="border-b border-slate-100 bg-white hover:bg-slate-50">
                            <td className="px-3 py-3 font-semibold">{formatRank(index + 1)}</td>
                            <td className="px-3 py-3 font-semibold">{row.teamName}</td>
                            <td className="px-3 py-3">{row.pts}</td>
                            <td className="px-3 py-3">{row.pj}</td>
                            <td className="px-3 py-3">{row.pg}</td>
                            <td className="px-3 py-3">{row.pe}</td>
                            <td className="px-3 py-3">{row.pp}</td>
                            <td className="px-3 py-3">{row.gf}</td>
                            <td className="px-3 py-3">{row.gc}</td>
                            <td className="px-3 py-3">{row.dg > 0 ? `+${row.dg}` : row.dg}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Final</div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {(selectedSeason.matches || [])
                      .filter((match) => match.round > (selectedSeason.groupStageEndRound || 0))
                      .map((match) => {
                        const homeWon = Number.isFinite(match.homeGoals) && Number.isFinite(match.awayGoals) && match.homeGoals > match.awayGoals;
                        const awayWon = Number.isFinite(match.homeGoals) && Number.isFinite(match.awayGoals) && match.awayGoals > match.homeGoals;
                        return (
                          <div key={match.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                            <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{match.stage || `Jornada ${match.round}`}</div>
                            <div className="space-y-2">
                              <div className={`flex items-center justify-between rounded-xl px-3 py-2 ${homeWon ? "bg-emerald-50 text-emerald-900" : "bg-slate-50 text-slate-800"}`}>
                                <span className="font-medium">{teamName(selectedSeason, match.homeTeamId)}</span>
                                <span className="text-lg font-bold">{Number.isFinite(match.homeGoals) ? match.homeGoals : "-"}</span>
                              </div>
                              <div className={`flex items-center justify-between rounded-xl px-3 py-2 ${awayWon ? "bg-emerald-50 text-emerald-900" : "bg-slate-50 text-slate-800"}`}>
                                <span className="font-medium">{teamName(selectedSeason, match.awayTeamId)}</span>
                                <span className="text-lg font-bold">{Number.isFinite(match.awayGoals) ? match.awayGoals : "-"}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            ) : selectedSeason.knockoutFormat === "bracket" ? (
              <div className="space-y-5">
                {selectedSeason.structureNote ? (
                  <div className="rounded-2xl bg-amber-50 px-4 py-3 text-sm text-amber-900">
                    <span className="font-semibold">Formato:</span> {selectedSeason.structureNote}
                  </div>
                ) : null}

                <div className="grid gap-4 md:grid-cols-2">
                  {Array.from(new Set((selectedSeason.matches || []).map((match) => match.round)))
                    .sort((a, b) => a - b)
                    .map((round) => {
                      const roundMatches = (selectedSeason.matches || []).filter((match) => match.round === round);
                      return (
                        <div key={`bracket-round-${round}`} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                          <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
                            {roundMatches.every((match) => normalizeText(match.stage || "").includes("previa"))
                              ? "Fase previa"
                              : roundMatches.every((match) => normalizeText(match.stage || "").includes("semifinal"))
                                ? "Semifinales"
                                : roundMatches.every((match) => normalizeText(match.stage || "").includes("final"))
                                  ? "Final"
                                  : round === 1
                                    ? "Semifinales"
                                    : round === 2
                                      ? "Final"
                                      : `Ronda ${round}`}
                          </div>
                          <div className="space-y-3">
                            {roundMatches.map((match) => {
                              const homeWon = Number.isFinite(match.homeGoals) && Number.isFinite(match.awayGoals) && match.homeGoals > match.awayGoals;
                              const awayWon = Number.isFinite(match.homeGoals) && Number.isFinite(match.awayGoals) && match.awayGoals > match.homeGoals;
                              return (
                                <div key={match.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                                  <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{match.stage || `Jornada ${match.round}`}</div>
                                  <div className="space-y-2">
                                    <div className={`flex items-center justify-between rounded-xl px-3 py-2 ${homeWon ? "bg-emerald-50 text-emerald-900" : "bg-slate-50 text-slate-800"}`}>
                                      <span className="font-medium">{teamName(selectedSeason, match.homeTeamId)}</span>
                                      <span className="text-lg font-bold">{Number.isFinite(match.homeGoals) ? match.homeGoals : "-"}</span>
                                    </div>
                                    <div className={`flex items-center justify-between rounded-xl px-3 py-2 ${awayWon ? "bg-emerald-50 text-emerald-900" : "bg-slate-50 text-slate-800"}`}>
                                      <span className="font-medium">{teamName(selectedSeason, match.awayTeamId)}</span>
                                      <span className="text-lg font-bold">{Number.isFinite(match.awayGoals) ? match.awayGoals : "-"}</span>
                                    </div>
                                  </div>
                                  {match.penaltyShootout ? (
                                    <div className="mt-3 rounded-xl bg-amber-50 px-3 py-2 text-xs text-amber-900">
                                      <div className="font-semibold">
                                        Penaltis: {match.penaltyShootout.homePenalties}-{match.penaltyShootout.awayPenalties}
                                      </div>
                                      {match.penaltyShootout.note ? <div className="mt-1">{match.penaltyShootout.note}</div> : null}
                                    </div>
                                  ) : null}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-left text-slate-500">
                      <th className="px-3 py-2">Pos.</th>
                      <th className="px-3 py-2">Equipo</th>
                      <th className="px-3 py-2">Pt</th>
                      <th className="px-3 py-2">PJ</th>
                      <th className="px-3 py-2">PG</th>
                      <th className="px-3 py-2">PE</th>
                      <th className="px-3 py-2">PP</th>
                      <th className="px-3 py-2">GF</th>
                      <th className="px-3 py-2">GC</th>
                      <th className="px-3 py-2">DG</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedStandings.map((row, index) => (
                      <tr key={row.teamId} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="px-3 py-3 font-semibold">{formatRank(index + 1)}</td>
                        <td className="px-3 py-3 font-semibold">{row.teamName}</td>
                        <td className="px-3 py-3">{row.pts}</td>
                        <td className="px-3 py-3">{row.pj}</td>
                        <td className="px-3 py-3">{row.pg}</td>
                        <td className="px-3 py-3">{row.pe}</td>
                        <td className="px-3 py-3">{row.pp}</td>
                        <td className="px-3 py-3">{row.gf}</td>
                        <td className="px-3 py-3">{row.gc}</td>
                        <td className="px-3 py-3">{row.dg > 0 ? `+${row.dg}` : row.dg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeView === "season-equipos" && (
          <div>
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <h2 className="text-xl font-bold">Equipos de la temporada</h2>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-slate-500">Ordenar por</span>
                <select
                  value={seasonTeamSort}
                  onChange={(e) => setSeasonTeamSort(e.target.value)}
                  className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"
                >
                  <option value="default">Clasificación oficial</option>
                  <option value="pts">Puntos</option>
                  <option value="pj">Partidos jugados</option>
                  <option value="pg">Partidos ganados</option>
                  <option value="gf">Goles a favor</option>
                  <option value="gc">Goles en contra</option>
                  <option value="dg">Diferencia de goles</option>
                  <option value="gpm">Goles por partido</option>
                  <option value="name">Nombre</option>
                </select>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {displayedTeams.map((team, index) => (
                <div key={team.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <div className="mb-1 inline-flex rounded-full bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white">{formatRank(index + 1)}</div>
                      <h2 className="text-xl font-bold">{getCanonicalTeamName(team.name)}</h2>
                      <p className="text-sm text-slate-500">{selectedSeason.name}</p>
                    </div>
                    <div className="rounded-2xl bg-slate-900 px-3 py-2 text-white">
                      <div className="text-xs uppercase">Puntos</div>
                      <div className="text-xl font-bold">{team.pts ?? 0}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="rounded-2xl bg-slate-50 p-3"><div className="text-slate-500">PJ</div><div className="font-bold">{team.pj ?? 0}</div></div>
                    <div className="rounded-2xl bg-slate-50 p-3"><div className="text-slate-500">PG</div><div className="font-bold">{team.pg ?? 0}</div></div>
                    <div className="rounded-2xl bg-slate-50 p-3"><div className="text-slate-500">PP</div><div className="font-bold">{team.pp ?? 0}</div></div>
                    <div className="rounded-2xl bg-slate-50 p-3"><div className="text-slate-500">GF</div><div className="font-bold">{team.gf ?? 0}</div></div>
                    <div className="rounded-2xl bg-slate-50 p-3"><div className="text-slate-500">GC</div><div className="font-bold">{team.gc ?? 0}</div></div>
                    <div className="rounded-2xl bg-slate-50 p-3"><div className="text-slate-500">DG</div><div className="font-bold">{team.dg ?? 0}</div></div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-2 text-sm font-semibold text-slate-700">Goleadores del equipo</div>
                    <div className="space-y-2">
                      {selectedSeason.scorers
                        .filter((entry) => entry.teamId === team.id)
                        .sort((a, b) => b.goals - a.goals)
                        .slice(0, 5)
                        .map((entry) => (
                          <div key={entry.id} className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2 text-sm">
                            <button
                            type="button"
                            onClick={() => openPlayerModal(entry.player)}
                            className="text-left font-medium text-slate-900 hover:text-blue-700 hover:underline"
                          >
                            {entry.player}
                          </button>
                            <span className="font-semibold">{entry.goals}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeView === "season-jugadores" && (
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <h2 className="text-xl font-bold">Estadísticas de jugadores</h2>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-slate-500">Ordenar por</span>
                <select
                  value={seasonPlayerSort}
                  onChange={(e) => setSeasonPlayerSort(e.target.value)}
                  className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"
                >
                  <option value="goals">Goles</option>
                  <option value="matches">Partidos jugados</option>
                  <option value="gpm">Goles por partido</option>
                  <option value="name">Nombre</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-left text-slate-500">
                    <th className="px-3 py-2">Pos.</th>
                    <th className="px-3 py-2">Jugador</th>
                    <th className="px-3 py-2">Equipo</th>
                    <th className="px-3 py-2">Goles</th>
                    <th className="px-3 py-2">Partidos</th>
                    <th className="px-3 py-2">G/P</th>
                    <th className="px-3 py-2">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedScorers.map((entry, index) => (
                    <tr key={entry.id} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="px-3 py-3 font-semibold">{formatRank(index + 1)}</td>
                      <td className="px-3 py-3">
                        <div className="flex items-center gap-3">
                          {getPlayerImage(playerImages, entry.player) ? (
                            <img
                              src={getPlayerImage(playerImages, entry.player)}
                              alt={entry.player}
                              className="h-12 w-12 rounded-xl border border-slate-200 bg-slate-50 object-cover"
                            />
                          ) : (
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-sm font-bold text-slate-600">
                              {(entry.player || "?").charAt(0).toUpperCase()}
                            </div>
                          )}
                          <span>{entry.player}</span>
                        </div>
                      </td>
                      <td className="px-3 py-3">{entry.teamName}</td>
                      <td className="px-3 py-3 font-semibold">{entry.goals}</td>
                      <td className="px-3 py-3">{entry.matches}</td>
                      <td className="px-3 py-3">{entry.goalsPerMatch}</td>
                      <td className="px-3 py-3">
                        <button
                          onClick={() => setEditingScorerId(entry.id)}
                          className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-medium hover:bg-slate-100"
                        >
                          Editar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeView === "season-partidos" && (
          <div className="space-y-4">
            {filteredMatches.map((match) => (
              <div key={match.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-sm text-slate-500">Jornada {match.round}{match.stage ? ` · ${match.stage}` : ""}</div>
                    <div className="text-xl font-bold">
                      {teamName(selectedSeason, match.homeTeamId)} <span className="mx-2">{getMatchScoreLabel(match)}</span>
                      {teamName(selectedSeason, match.awayTeamId)}
                    </div>
                  </div>
                  <button
                    onClick={() => setEditingMatchId(match.id)}
                    className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-medium hover:bg-slate-100"
                  >
                    Editar partido
                  </button>
                </div>
                {(() => {
                  const inferredScorers = inferMatchScorersTexts(selectedSeason, match);
                  return hasMatchScorers(match, selectedSeason) ? (
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Goleadores · {teamName(selectedSeason, match.homeTeamId)}
                      </div>
                      <div className="whitespace-pre-line text-sm text-slate-700">{inferredScorers.home || "Sin detalle"}</div>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Goleadores · {teamName(selectedSeason, match.awayTeamId)}
                      </div>
                      <div className="whitespace-pre-line text-sm text-slate-700">{inferredScorers.away || "Sin detalle"}</div>
                    </div>
                  </div>
                ) : null;
                })()}
              </div>
            ))}

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="mb-3 text-lg font-bold">Jornadas de descanso</h3>
              <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
                {selectedSeason.byes.map((item, idx) => (
                  <div key={`${item.round}-${item.teamId}-${idx}`} className="rounded-2xl bg-slate-50 px-3 py-2 text-sm">
                    Jornada {item.round}: <span className="font-semibold">{teamName(selectedSeason, item.teamId)}</span> descansa
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeView === "global-clasificacion" && (
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-bold">Clasificación global de equipos</h2>
                <p className="text-sm text-slate-500">Acumulado de todas las competiciones filtradas.</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="text-slate-500">Competición</span>
                <select
                  value={globalCompetitionFilter}
                  onChange={(e) => setGlobalCompetitionFilter(e.target.value)}
                  className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"
                >
                  <option value="all">Todas</option>
                  <option value="league">Liga</option>
                  <option value="cup">Copa</option>
                  <option value="recup">Recopa</option>
                  <option value="supercup">Supercopa</option>
                  <option value="selection">Selecciones</option>
                </select>
                <span className="ml-2 text-slate-500">Ordenar</span>
                <select
                  value={globalTeamSort}
                  onChange={(e) => setGlobalTeamSort(e.target.value)}
                  className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"
                >
                  <option value="pts">Puntos</option>
                  <option value="titles">Títulos</option>
                  <option value="seasons">Temporadas</option>
                  <option value="pj">Partidos jugados</option>
                  <option value="gf">Goles a favor</option>
                  <option value="gc">Goles en contra</option>
                  <option value="dg">Diferencia de goles</option>
                  <option value="ppm">Puntos por partido</option>
                  <option value="gpm">Goles por partido</option>
                  <option value="name">Nombre</option>
                </select>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-3 mb-4">
              <StatCard label="Equipos visibles" value={displayedTeamHistory.length} />
              <StatCard label="Competiciones filtradas" value={globalRecords.length} />
              <StatCard label="Búsqueda" value={search ? `“${search}”` : "Sin texto"} />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-left text-slate-500">
                    <th className="px-3 py-2">Pos.</th>
                    <th className="px-3 py-2">Equipo</th>
                    <th className="px-3 py-2">Temp.</th>
                    <th className="px-3 py-2">Títulos</th>
                    <th className="px-3 py-2">L</th>
                    <th className="px-3 py-2">C</th>
                    <th className="px-3 py-2">R</th>
                    <th className="px-3 py-2">S</th>
                    <th className="px-3 py-2">Sel</th>
                    <th className="px-3 py-2">Pt</th>
                    <th className="px-3 py-2">PJ</th>
                    <th className="px-3 py-2">GF</th>
                    <th className="px-3 py-2">GC</th>
                    <th className="px-3 py-2">DG</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedTeamHistory.map((row, index) => (
                    <tr key={`${row.teamName}-global-clas`} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="px-3 py-3 font-semibold">{formatRank(index + 1)}</td>
                      <td className="px-3 py-3 font-semibold">{row.teamName}</td>
                      <td className="px-3 py-3">{row.seasons}</td>
                      <td className="px-3 py-3">{row.titles}</td>
                      <td className="px-3 py-3">{row.titleBreakdown.league}</td>
                      <td className="px-3 py-3">{row.titleBreakdown.cup}</td>
                      <td className="px-3 py-3">{row.titleBreakdown.recup}</td>
                      <td className="px-3 py-3">{row.titleBreakdown.supercup}</td>
                      <td className="px-3 py-3">{row.titleBreakdown.selection || 0}</td>
                      <td className="px-3 py-3">{row.pts}</td>
                      <td className="px-3 py-3">{row.pj}</td>
                      <td className="px-3 py-3">{row.gf}</td>
                      <td className="px-3 py-3">{row.gc}</td>
                      <td className="px-3 py-3">{row.dg > 0 ? `+${row.dg}` : row.dg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeView === "global-equipos" && (
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Equipos globales</h2>
                  <p className="text-sm text-slate-500">Tarjetas resumen por equipo con temporadas y títulos.</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-slate-500">Competición</span>
                  <select
                    value={globalCompetitionFilter}
                    onChange={(e) => setGlobalCompetitionFilter(e.target.value)}
                    className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"
                  >
                    <option value="all">Todas</option>
                    <option value="league">Liga</option>
                    <option value="cup">Copa</option>
                    <option value="recup">Recopa</option>
                    <option value="supercup">Supercopa</option>
                    <option value="selection">Selecciones</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {displayedTeamHistory.map((team, index) => (
                <div key={`${team.teamName}-global-card`} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="mb-1 inline-flex rounded-full bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white">{formatRank(index + 1)}</div>
                      <div className="text-xl font-bold">{team.teamName}</div>
                      <div className="text-sm text-slate-500">{team.seasons} temporadas · {team.pj} partidos · {team.pts} puntos</div>
                    </div>
                    <div className="rounded-2xl bg-amber-100 px-3 py-2 text-amber-900">
                      <div className="text-xs uppercase">Títulos</div>
                      <div className="text-xl font-bold">{team.titles}</div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                    <div className="rounded-2xl bg-slate-50 p-3"><div className="text-slate-500">GF</div><div className="font-bold">{team.gf}</div></div>
                    <div className="rounded-2xl bg-slate-50 p-3"><div className="text-slate-500">GC</div><div className="font-bold">{team.gc}</div></div>
                    <div className="rounded-2xl bg-slate-50 p-3"><div className="text-slate-500">G/P</div><div className="font-bold">{team.goalsPerMatch}</div></div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Liga: {team.titleBreakdown.league}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Copa: {team.titleBreakdown.cup}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Recopa: {team.titleBreakdown.recup}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Supercopa: {team.titleBreakdown.supercup}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Selecciones: {team.titleBreakdown.selection || 0}</span>
                  </div>
                  {team.titleSeasons.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {team.titleSeasons.map((item) => (
                        <span key={`${team.teamName}-${item.seasonName}-${item.competitionLabel}`} className="rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-900">
                          {item.seasonName} · {item.competitionLabel}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeView === "global-jugadores" && (
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Jugadores globales</h2>
                  <p className="text-sm text-slate-500">Acumulado global con filtros avanzados por equipo, región, goles y partidos.</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-slate-500">Competición</span>
                  <select
                    value={globalCompetitionFilter}
                    onChange={(e) => setGlobalCompetitionFilter(e.target.value)}
                    className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"
                  >
                    <option value="all">Todas</option>
                    <option value="league">Liga</option>
                    <option value="cup">Copa</option>
                    <option value="recup">Recopa</option>
                    <option value="supercup">Supercopa</option>
                    <option value="selection">Selecciones</option>
                  </select>
                  <span className="ml-2 text-slate-500">Ordenar</span>
                  <select
                    value={globalPlayerSort}
                    onChange={(e) => setGlobalPlayerSort(e.target.value)}
                    className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"
                  >
                    <option value="goals">Goles</option>
                    <option value="matches">Partidos jugados</option>
                    <option value="gpm">Goles por partido</option>
                    <option value="seasons">Temporadas</option>
                    <option value="titles">Títulos</option>
                    <option value="name">Nombre</option>
                  </select>
                </div>
              </div>
              <div className="mb-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="text-sm font-semibold text-slate-800">Filtros de jugadores globales</div>
                  <button
                    type="button"
                    onClick={() => {
                      setGlobalPlayerTeamFilters([]);
                      setGlobalPlayerRegionFilters([]);
                      setGlobalPlayerGoalsMin("");
                      setGlobalPlayerGoalsMax("");
                      setGlobalPlayerMatchesMin("");
                      setGlobalPlayerMatchesMax("");
                    }}
                    className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
                  >
                    Limpiar filtros
                  </button>
                </div>
                <div className="grid gap-4 xl:grid-cols-2">
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Equipos</div>
                    <div className="flex flex-wrap gap-2">
                      {globalPlayerTeamOptions.map((team) => {
                        const active = globalPlayerTeamFilters.includes(team);
                        return (
                          <button
                            key={team}
                            type="button"
                            onClick={() => setGlobalPlayerTeamFilters((prev) => toggleValueInList(prev, team))}
                            className={`rounded-full px-3 py-1.5 text-xs font-medium ${active ? "bg-slate-900 text-white" : "bg-white text-slate-700 border border-slate-300"}`}
                          >
                            {team}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Regiones</div>
                    <div className="flex flex-wrap gap-2">
                      {globalPlayerRegionOptions.map((region) => {
                        const active = globalPlayerRegionFilters.includes(region);
                        return (
                          <button
                            key={region}
                            type="button"
                            onClick={() => setGlobalPlayerRegionFilters((prev) => toggleValueInList(prev, region))}
                            className={`rounded-full px-3 py-1.5 text-xs font-medium ${active ? "bg-blue-700 text-white" : "bg-white text-slate-700 border border-slate-300"}`}
                          >
                            {region}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Goles mín.</label>
                      <input type="number" min="0" value={globalPlayerGoalsMin} onChange={(e) => setGlobalPlayerGoalsMin(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm" />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Goles máx.</label>
                      <input type="number" min="0" value={globalPlayerGoalsMax} onChange={(e) => setGlobalPlayerGoalsMax(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Partidos mín.</label>
                      <input type="number" min="0" value={globalPlayerMatchesMin} onChange={(e) => setGlobalPlayerMatchesMin(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm" />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Partidos máx.</label>
                      <input type="number" min="0" value={globalPlayerMatchesMax} onChange={(e) => setGlobalPlayerMatchesMax(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm" />
                    </div>
                  </div>
                </div>
              </div>
              <SyncedHorizontalScrollTable scrollAreaClassName="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-left text-slate-500">
                      <th className="px-3 py-2">Pos.</th>
                      <th className="px-3 py-2">Jugador</th>
                      <th className="px-3 py-2">Región</th>
                      <th className="px-3 py-2">Equipos</th>
                      <th className="px-3 py-2">Temp.</th>
                      <th className="px-3 py-2">Títulos</th>
                      <th className="px-3 py-2">L</th>
                      <th className="px-3 py-2">C</th>
                      <th className="px-3 py-2">R</th>
                      <th className="px-3 py-2">S</th>
                      <th className="px-3 py-2">Sel</th>
                      <th className="px-3 py-2">Goles</th>
                      <th className="px-3 py-2">Partidos</th>
                      <th className="px-3 py-2">G/P</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedPlayerHistory.map((player, index) => (
                      <tr key={`${player.player}-${player.primaryTeamName}-global`} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="px-3 py-3 font-semibold">{formatRank(index + 1)}</td>
                        <td className="px-3 py-3 font-semibold">
                          <div className="flex items-center gap-3">
                            {getPlayerImage(playerImages, player.player) ? (
                              <img src={getPlayerImage(playerImages, player.player)} alt={player.player} className="h-12 w-12 rounded-xl border border-slate-200 bg-slate-50 object-cover" />
                            ) : (
                              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-sm font-bold text-slate-600">{(player.player || "?").charAt(0).toUpperCase()}</div>
                            )}
                            <button type="button" onClick={() => openPlayerModal(player.player)} className="text-left font-medium text-slate-900 hover:text-blue-700 hover:underline">{player.player}</button>
                          </div>
                        </td>
                        <td className="px-3 py-3">{player.region || "-"}</td>
                        <td className="px-3 py-3">{player.primaryTeamName}</td>
                        <td className="px-3 py-3">{player.seasons}</td>
                        <td className="px-3 py-3">{player.titles}</td>
                        <td className="px-3 py-3">{player.titleBreakdown.league}</td>
                        <td className="px-3 py-3">{player.titleBreakdown.cup}</td>
                        <td className="px-3 py-3">{player.titleBreakdown.recup}</td>
                        <td className="px-3 py-3">{player.titleBreakdown.supercup}</td>
                        <td className="px-3 py-3">{player.titleBreakdown.selection || 0}</td>
                        <td className="px-3 py-3 font-semibold">{player.totalGoals}</td>
                        <td className="px-3 py-3">{player.totalMatches}</td>
                        <td className="px-3 py-3">{player.goalsPerMatch}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </SyncedHorizontalScrollTable>
            </div>
          </div>
        )}

        {activeView === "global-partidos" && (
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Partidos globales</h2>
                  <p className="text-sm text-slate-500">Listado conjunto de partidos de las competiciones filtradas.</p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-slate-500">Competición</span>
                  <select
                    value={globalCompetitionFilter}
                    onChange={(e) => setGlobalCompetitionFilter(e.target.value)}
                    className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"
                  >
                    <option value="all">Todas</option>
                    <option value="league">Liga</option>
                    <option value="cup">Copa</option>
                    <option value="recup">Recopa</option>
                    <option value="supercup">Supercopa</option>
                    <option value="selection">Selecciones</option>
                  </select>
                </div>
              </div>
            </div>
            {filteredGlobalMatches.map((match) => (
              <div key={`${match.seasonId}-${match.id}`} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="rounded-full bg-slate-100 px-3 py-1">{match.seasonName}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">{match.competitionLabel}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">Jornada {match.round}</span>
                  {match.stage ? <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-900">{match.stage}</span> : null}
                </div>
                <div className="text-xl font-bold">
                  {match.homeTeamName} <span className="mx-2">{getMatchScoreLabel(match)}</span> {match.awayTeamName}
                </div>
                {(() => {
                  const seasonRecord = globalRecords.find((record) => record.id === match.seasonId) || null;
                  const inferredScorers = seasonRecord ? inferMatchScorersTexts(seasonRecord, match) : { home: String(match.homeScorersText || "").trim(), away: String(match.awayScorersText || "").trim() };
                  return (String(inferredScorers.home || "").trim() || String(inferredScorers.away || "").trim()) ? (
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Goleadores · {match.homeTeamName}</div>
                      <div className="whitespace-pre-line text-sm text-slate-700">{inferredScorers.home || "Sin detalle"}</div>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Goleadores · {match.awayTeamName}</div>
                      <div className="whitespace-pre-line text-sm text-slate-700">{inferredScorers.away || "Sin detalle"}</div>
                    </div>
                  </div>
                ) : null;
                })()}
              </div>
            ))}
          </div>
        )}

        {activeView === "global" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Buscador global de historial</h2>
                  <p className="text-sm text-slate-500">
                    Busca un jugador o un equipo y elige si quieres ver solo Liga, Copa, Recopa, Supercopa, Selecciones o todas las competiciones a la vez.
                  </p>
                </div>
                <div className="flex flex-col gap-3 md:items-end">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-slate-500">Competición</span>
                    <select
                      value={globalCompetitionFilter}
                      onChange={(e) => setGlobalCompetitionFilter(e.target.value)}
                      className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"
                    >
                      <option value="all">Todas</option>
                      <option value="league">Liga</option>
                      <option value="cup">Copa</option>
                      <option value="recup">Recopa</option>
                      <option value="supercup">Supercopa</option>
                      <option value="selection">Selecciones</option>
                    </select>
                  </div>
                  <div className="grid gap-3 md:grid-cols-3">
                    <StatCard label="Equipos históricos" value={teamHistory.length} />
                    <StatCard label="Jugadores históricos" value={playerHistory.length} />
                    <StatCard label="Registros visibles" value={globalRecords.length} />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-bold">Equipos · acumulado global</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-slate-500">Ordenar por</span>
                    <select
                      value={globalTeamSort}
                      onChange={(e) => setGlobalTeamSort(e.target.value)}
                      className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"
                    >
                      <option value="pts">Puntos</option>
                      <option value="titles">Títulos</option>
                      <option value="seasons">Temporadas</option>
                      <option value="pj">Partidos jugados</option>
                      <option value="gf">Goles a favor</option>
                      <option value="gc">Goles en contra</option>
                      <option value="dg">Diferencia de goles</option>
                      <option value="ppm">Puntos por partido</option>
                      <option value="gpm">Goles por partido</option>
                      <option value="name">Nombre</option>
                    </select>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 text-left text-slate-500">
                        <th className="px-3 py-2">Pos.</th>
                        <th className="px-3 py-2">Equipo</th>
                        <th className="px-3 py-2">Temp.</th>
                        <th className="px-3 py-2">Títulos</th>
                        <th className="px-3 py-2">L</th>
                        <th className="px-3 py-2">C</th>
                        <th className="px-3 py-2">R</th>
                        <th className="px-3 py-2">S</th>
                        <th className="px-3 py-2">Sel</th>
                        <th className="px-3 py-2">Pt</th>
                        <th className="px-3 py-2">PJ</th>
                        <th className="px-3 py-2">GF</th>
                        <th className="px-3 py-2">G/P</th>
                      </tr>
                    </thead>
                    <tbody>
                      {displayedTeamHistory.map((row, index) => (
                        <tr key={row.teamName} className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="px-3 py-3 font-semibold">{formatRank(index + 1)}</td>
                          <td className="px-3 py-3 font-semibold">{row.teamName}</td>
                          <td className="px-3 py-3">{row.seasons}</td>
                          <td className="px-3 py-3">{row.titles}</td>
                          <td className="px-3 py-3">{row.titleBreakdown.league}</td>
                          <td className="px-3 py-3">{row.titleBreakdown.cup}</td>
                          <td className="px-3 py-3">{row.titleBreakdown.recup}</td>
                          <td className="px-3 py-3">{row.titleBreakdown.supercup}</td>
                          <td className="px-3 py-3">{row.titleBreakdown.selection || 0}</td>
                          <td className="px-3 py-3">{row.pts}</td>
                          <td className="px-3 py-3">{row.pj}</td>
                          <td className="px-3 py-3">{row.gf}</td>
                          <td className="px-3 py-3">{row.goalsPerMatch}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-bold">Jugadores · acumulado global</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-slate-500">Ordenar por</span>
                    <select
                      value={globalPlayerSort}
                      onChange={(e) => setGlobalPlayerSort(e.target.value)}
                      className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"
                    >
                      <option value="goals">Goles</option>
                      <option value="matches">Partidos jugados</option>
                      <option value="gpm">Goles por partido</option>
                      <option value="seasons">Temporadas</option>
                      <option value="titles">Títulos</option>
                      <option value="name">Nombre</option>
                    </select>
                  </div>
                </div>
                <SyncedHorizontalScrollTable scrollAreaClassName="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 text-left text-slate-500">
                        <th className="px-3 py-2">Pos.</th>
                        <th className="px-3 py-2">Jugador</th>
                        <th className="px-3 py-2">Región</th>
                        <th className="px-3 py-2">Equipos</th>
                        <th className="px-3 py-2">Temp.</th>
                        <th className="px-3 py-2">Títulos</th>
                        <th className="px-3 py-2">L</th>
                        <th className="px-3 py-2">C</th>
                        <th className="px-3 py-2">R</th>
                        <th className="px-3 py-2">S</th>
                        <th className="px-3 py-2">Sel</th>
                        <th className="px-3 py-2">Goles</th>
                        <th className="px-3 py-2">Partidos</th>
                        <th className="px-3 py-2">G/P</th>
                      </tr>
                    </thead>
                    <tbody>
                      {displayedPlayerHistory.map((player, index) => (
                        <tr key={`${player.player}-${player.primaryTeamName}`} className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="px-3 py-3 font-semibold">{formatRank(index + 1)}</td>
                          <td className="px-3 py-3 font-semibold">
                          <div className="flex items-center gap-3">
                            {getPlayerImage(playerImages, player.player) ? (
                              <img
                                src={getPlayerImage(playerImages, player.player)}
                                alt={player.player}
                                className="h-12 w-12 rounded-xl border border-slate-200 bg-slate-50 object-cover"
                              />
                            ) : (
                              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-sm font-bold text-slate-600">
                                {(player.player || "?").charAt(0).toUpperCase()}
                              </div>
                            )}
                            <button
                              type="button"
                              onClick={() => openPlayerModal(player.player)}
                              className="text-left font-medium text-slate-900 hover:text-blue-700 hover:underline"
                            >
                              {player.player}
                            </button>
                          </div>
                        </td>
                          <td className="px-3 py-3">{player.region || "-"}</td>
                          <td className="px-3 py-3">{player.primaryTeamName}</td>
                          <td className="px-3 py-3">{player.seasons}</td>
                          <td className="px-3 py-3">{player.titles}</td>
                          <td className="px-3 py-3">{player.titleBreakdown.league}</td>
                          <td className="px-3 py-3">{player.titleBreakdown.cup}</td>
                          <td className="px-3 py-3">{player.titleBreakdown.recup}</td>
                          <td className="px-3 py-3">{player.titleBreakdown.supercup}</td>
                          <td className="px-3 py-3">{player.titleBreakdown.selection || 0}</td>
                          <td className="px-3 py-3 font-semibold">{player.totalGoals}</td>
                          <td className="px-3 py-3">{player.totalMatches}</td>
                          <td className="px-3 py-3">{player.goalsPerMatch}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </SyncedHorizontalScrollTable>
              </div>
            </div>
          </div>
        )}

        {activeView === "historial" && (
          <div className="grid gap-6 xl:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-bold">Historial acumulado de equipos</h2>
                  <div className="mt-1 text-xs text-slate-500">Filtro actual: {globalCompetitionFilter === "all" ? "Todas las competiciones" : getCompetitionLabel(globalCompetitionFilter)}</div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-slate-500">Ordenar por</span>
                  <select
                    value={globalTeamSort}
                    onChange={(e) => setGlobalTeamSort(e.target.value)}
                    className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"
                  >
                    <option value="pts">Puntos</option>
                    <option value="titles">Títulos</option>
                    <option value="seasons">Temporadas</option>
                    <option value="pj">Partidos jugados</option>
                    <option value="gf">Goles a favor</option>
                    <option value="gc">Goles en contra</option>
                    <option value="dg">Diferencia de goles</option>
                    <option value="ppm">Puntos por partido</option>
                    <option value="gpm">Goles por partido</option>
                    <option value="name">Nombre</option>
                  </select>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-left text-slate-500">
                      <th className="px-3 py-2">Pos.</th>
                      <th className="px-3 py-2">Equipo</th>
                      <th className="px-3 py-2">Temp.</th>
                      <th className="px-3 py-2">Títulos</th>
                        <th className="px-3 py-2">L</th>
                        <th className="px-3 py-2">C</th>
                        <th className="px-3 py-2">R</th>
                        <th className="px-3 py-2">S</th>
                        <th className="px-3 py-2">Sel</th>
                        <th className="px-3 py-2">Pt</th>
                      <th className="px-3 py-2">PJ</th>
                      <th className="px-3 py-2">GF</th>
                      <th className="px-3 py-2">GC</th>
                      <th className="px-3 py-2">DG</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedTeamHistory.map((row, index) => (
                      <tr key={row.teamName} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="px-3 py-3 font-semibold">{formatRank(index + 1)}</td>
                        <td className="px-3 py-3 font-semibold">{row.teamName}</td>
                        <td className="px-3 py-3">{row.seasons}</td>
                        <td className="px-3 py-3">{row.titles}</td>
                          <td className="px-3 py-3">{row.titleBreakdown.league}</td>
                          <td className="px-3 py-3">{row.titleBreakdown.cup}</td>
                          <td className="px-3 py-3">{row.titleBreakdown.recup}</td>
                          <td className="px-3 py-3">{row.titleBreakdown.supercup}</td>
                          <td className="px-3 py-3">{row.titleBreakdown.selection || 0}</td>
                          <td className="px-3 py-3">{row.pts}</td>
                        <td className="px-3 py-3">{row.pj}</td>
                        <td className="px-3 py-3">{row.gf}</td>
                        <td className="px-3 py-3">{row.gc}</td>
                        <td className="px-3 py-3">{row.dg > 0 ? `+${row.dg}` : row.dg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-bold">Historial acumulado de jugadores</h2>
                  <div className="mt-1 text-xs text-slate-500">Filtro actual: {globalCompetitionFilter === "all" ? "Todas las competiciones" : getCompetitionLabel(globalCompetitionFilter)}</div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-slate-500">Ordenar por</span>
                  <select
                    value={globalPlayerSort}
                    onChange={(e) => setGlobalPlayerSort(e.target.value)}
                    className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"
                  >
                    <option value="goals">Goles</option>
                    <option value="matches">Partidos jugados</option>
                    <option value="gpm">Goles por partido</option>
                    <option value="seasons">Temporadas</option>
                      <option value="titles">Títulos</option>
                      <option value="name">Nombre</option>
                  </select>
                </div>
              </div>
              <div className="space-y-3">
                {displayedPlayerHistory.map((player, index) => (
                  <div key={`${player.player}-${player.primaryTeamName}`} className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="mb-1 inline-flex rounded-full bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white">{formatRank(index + 1)}</div>
                        <div className="flex items-center gap-3">
                          {getPlayerImage(playerImages, player.player) ? (
                            <img
                              src={getPlayerImage(playerImages, player.player)}
                              alt={player.player}
                              className="h-16 w-16 rounded-2xl border border-slate-200 bg-slate-50 object-cover"
                            />
                          ) : (
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-lg font-bold text-slate-600">
                              {(player.player || "?").charAt(0).toUpperCase()}
                            </div>
                          )}
                          <div>
                            <button
                              type="button"
                              onClick={() => openPlayerModal(player.player)}
                              className="text-left text-lg font-bold hover:text-blue-700 hover:underline"
                            >
                              {player.player}
                            </button>
                            <div className="text-sm text-slate-500">{player.primaryTeamName}</div>
                            {player.region ? (
                              <div className="mt-1 inline-flex rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800">
                                Región: {player.region}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="rounded-2xl bg-slate-900 px-3 py-2 text-white">
                          <div className="text-xs uppercase">Goles totales</div>
                          <div className="text-xl font-bold">{player.totalGoals}</div>
                        </div>
                        <div className="rounded-2xl bg-slate-100 px-3 py-2 text-slate-900">
                          <div className="text-xs uppercase text-slate-500">Partidos</div>
                          <div className="text-xl font-bold">{player.totalMatches}</div>
                        </div>
                        <div className="rounded-2xl bg-slate-100 px-3 py-2 text-slate-900">
                          <div className="text-xs uppercase text-slate-500">G/P</div>
                          <div className="text-xl font-bold">{player.goalsPerMatch}</div>
                        </div>
                        <div className="rounded-2xl bg-amber-100 px-3 py-2 text-amber-900">
                          <div className="text-xs uppercase">Títulos</div>
                          <div className="text-xl font-bold">{player.titles}</div>
                        </div>
                      </div>
                    </div>
                    {player.titleSeasons.length > 0 && (
                      <div className="mt-3">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Títulos ganados</div>
                        <div className="mb-2 flex flex-wrap gap-2">
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Liga: {player.titleBreakdown.league}</span>
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Copa: {player.titleBreakdown.cup}</span>
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Recopa: {player.titleBreakdown.recup}</span>
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Supercopa: {player.titleBreakdown.supercup}</span>
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Selecciones: {player.titleBreakdown.selection || 0}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {player.titleSeasons.map((item) => (
                            <span key={`${player.player}-${item.seasonName}-${item.competitionLabel}-title`} className="rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-900">
                              {item.seasonName} · {item.competitionLabel} · {item.teamName}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {player.bySeason.map((item) => (
                        <span key={`${player.player}-${item.seasonName}-${item.teamName}`} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                          {item.seasonName} · {item.competitionLabel} · {item.teamName}: {item.goals} goles en {item.matches} partidos · {item.goalsPerMatch} G/P
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedPlayerModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
            <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Ficha del jugador</div>
                  <h3 className="mt-1 text-2xl font-bold text-slate-900">{selectedPlayerModal.player}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedPlayerModal.region ? (
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">Región: {selectedPlayerModal.region}</span>
                    ) : null}
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Equipos: {selectedPlayerModal.primaryTeamName || "-"}</span>
                  </div>
                </div>
                <button className="text-slate-500" onClick={() => setSelectedPlayerModalKey(null)}>✕</button>
              </div>

              <div className="max-h-[82vh] overflow-y-auto p-6">
                <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex justify-center">
                      {getPlayerImage(playerImages, selectedPlayerModal.player) ? (
                        <img
                          src={getPlayerImage(playerImages, selectedPlayerModal.player)}
                          alt={selectedPlayerModal.player}
                          className="h-64 w-full rounded-3xl border border-slate-200 bg-white object-contain p-3"
                        />
                      ) : (
                        <div className="flex h-64 w-full items-center justify-center rounded-3xl border border-slate-200 bg-white text-6xl font-bold text-slate-400">
                          {(selectedPlayerModal.player || "?").charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <div className="mt-4 space-y-2 text-sm text-slate-600">
                      <div><span className="font-semibold text-slate-800">Nombre canónico:</span> {selectedPlayerModal.player}</div>
                      <div><span className="font-semibold text-slate-800">Región:</span> {selectedPlayerModal.region || "-"}</div>
                      <div><span className="font-semibold text-slate-800">Equipos:</span> {selectedPlayerModal.primaryTeamName || "-"}</div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                      <StatCard label="Temporadas" value={selectedPlayerModal.seasons} />
                      <StatCard label="Títulos" value={selectedPlayerModal.titles} />
                      <StatCard label="Goles" value={selectedPlayerModal.totalGoals} />
                      <StatCard label="Partidos" value={selectedPlayerModal.totalMatches} />
                      <StatCard label="G/P" value={selectedPlayerModal.goalsPerMatch} />
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-5">
                      <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Desglose de títulos</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Liga: {selectedPlayerModal.titleBreakdown.league}</span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Copa: {selectedPlayerModal.titleBreakdown.cup}</span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Recopa: {selectedPlayerModal.titleBreakdown.recup}</span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Supercopa: {selectedPlayerModal.titleBreakdown.supercup}</span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Selecciones: {selectedPlayerModal.titleBreakdown.selection || 0}</span>
                      </div>
                      {selectedPlayerModal.titleSeasons.length > 0 ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {[...selectedPlayerModal.titleSeasons]
                            .sort((a, b) => getSeasonNumber(a.seasonName) - getSeasonNumber(b.seasonName) || compareText(a.competitionLabel, b.competitionLabel))
                            .map((item) => (
                              <span key={`${selectedPlayerModal.player}-${item.seasonName}-${item.competitionLabel}-${item.teamName}`} className="rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-900">
                                {item.seasonName} · {item.competitionLabel} · {item.teamName}
                              </span>
                            ))}
                        </div>
                      ) : (
                        <div className="mt-4 text-sm text-slate-500">No tiene títulos registrados.</div>
                      )}
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-5">
                      <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">Historial por competición y temporada</div>
                      <div className="space-y-3">
                        {[...selectedPlayerModal.bySeason]
                          .sort((a, b) => getSeasonNumber(a.seasonName) - getSeasonNumber(b.seasonName) || compareText(a.competitionLabel, b.competitionLabel) || compareText(a.teamName, b.teamName))
                          .map((item, idx) => (
                            <div key={`${selectedPlayerModal.player}-${item.seasonName}-${item.competitionLabel}-${item.teamName}-${idx}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                                <div>
                                  <div className="font-semibold text-slate-900">{item.seasonName} · {item.competitionLabel}</div>
                                  <div className="text-sm text-slate-500">{item.teamName}</div>
                                </div>
                                <div className="flex flex-wrap gap-2 text-xs">
                                  <span className="rounded-full bg-white px-3 py-1 text-slate-700">Goles: {item.goals}</span>
                                  <span className="rounded-full bg-white px-3 py-1 text-slate-700">Partidos: {item.matches}</span>
                                  <span className="rounded-full bg-white px-3 py-1 text-slate-700">G/P: {item.goalsPerMatch}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {editingMatch && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
            <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">Editar partido</h3>
                  <p className="text-sm text-slate-500">Jornada {editingMatch.round}</p>
                </div>
                <button className="text-slate-500" onClick={() => setEditingMatchId(null)}>✕</button>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">{teamName(selectedSeason, editingMatch.homeTeamId)}</label>
                  <input
                    type="number"
                    min="0"
                    value={editingMatch.homeGoals ?? ""}
                    onChange={(e) => updateMatch(editingMatch.id, "homeGoals", e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">{teamName(selectedSeason, editingMatch.awayTeamId)}</label>
                  <input
                    type="number"
                    min="0"
                    value={editingMatch.awayGoals ?? ""}
                    onChange={(e) => updateMatch(editingMatch.id, "awayGoals", e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-3 py-2"
                  />
                </div>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">Goleadores {teamName(selectedSeason, editingMatch.homeTeamId)}</label>
                  <textarea
                    value={editingMatch.homeScorersText || ""}
                    onChange={(e) => updateMatch(editingMatch.id, "homeScorersText", e.target.value)}
                    placeholder="Ejemplo: Borja Pérez (2)&#10;Fran Delgado (1)"
                    className="min-h-[120px] w-full rounded-2xl border border-slate-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Goleadores {teamName(selectedSeason, editingMatch.awayTeamId)}</label>
                  <textarea
                    value={editingMatch.awayScorersText || ""}
                    onChange={(e) => updateMatch(editingMatch.id, "awayScorersText", e.target.value)}
                    placeholder="Ejemplo: Pepe Vilanova (1)&#10;Óscar Gil (1)"
                    className="min-h-[120px] w-full rounded-2xl border border-slate-300 px-3 py-2"
                  />
                </div>
              </div>
              <div className="mt-2 text-xs text-slate-500">Puedes escribir un jugador por línea o el formato que prefieras. Luego aparecerá debajo del partido.</div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setEditingMatchId(null)}
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        )}

        {editingScorer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
            <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">Editar jugador</h3>
                  <p className="text-sm text-slate-500">{editingScorer.player}</p>
                </div>
                <button className="text-slate-500" onClick={() => setEditingScorerId(null)}>✕</button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Nombre</label>
                  <input
                    value={editingScorer.player}
                    onChange={(e) => updateScorer(editingScorer.id, "player", e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-3 py-2"
                  />
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-3 text-sm font-medium text-slate-700">Imagen del jugador</div>
                  <div className="flex items-center gap-3">
                    {getPlayerImage(playerImages, editingScorer.player) ? (
                      <img
                        src={getPlayerImage(playerImages, editingScorer.player)}
                        alt={editingScorer.player}
                        className="h-20 w-20 rounded-2xl border border-slate-200 bg-white object-cover"
                      />
                    ) : (
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-white text-2xl font-bold text-slate-500">
                        {(editingScorer.player || "?").charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="flex flex-col gap-2">
                      <label className="cursor-pointer rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">
                        Subir imagen
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => updatePlayerImage(editingScorer.player, e.target.files?.[0])}
                        />
                      </label>
                      {getPlayerImage(playerImages, editingScorer.player) ? (
                        <button
                          type="button"
                          onClick={() => removePlayerImage(editingScorer.player)}
                          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                        >
                          Quitar imagen
                        </button>
                      ) : null}
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-slate-500">La imagen se guarda en este navegador. No hace falta programar nada.</div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Goles</label>
                  <input
                    type="number"
                    min="0"
                    value={editingScorer.goals}
                    onChange={(e) => updateScorer(editingScorer.id, "goals", e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-3 py-2"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setEditingScorerId(null)}
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
