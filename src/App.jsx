import React, { useEffect, useMemo, useState } from "react";

const initialSeasons = [
  {
    id: "s1",
    name: "Temporada 1",
    sourceUrl: "https://www.gesliga.com/Clasificacion.aspx?Liga=185545",
    teams: [
      { id: "torrent-fs", name: "Torrent Fs" },
      { id: "inter-torrent", name: "Inter Torrent" },
      { id: "santos-torrent", name: "Santos Torrent" },
    ],
    matches: [
      { id: "s1-j1-1", round: 1, homeTeamId: "torrent-fs", awayTeamId: "inter-torrent", homeGoals: 14, awayGoals: 12 },
      { id: "s1-j2-1", round: 2, homeTeamId: "torrent-fs", awayTeamId: "santos-torrent", homeGoals: 32, awayGoals: 12 },
      { id: "s1-j3-1", round: 3, homeTeamId: "inter-torrent", awayTeamId: "santos-torrent", homeGoals: 24, awayGoals: 15 },
      { id: "s1-j4-1", round: 4, homeTeamId: "inter-torrent", awayTeamId: "torrent-fs", homeGoals: 18, awayGoals: 21 },
      { id: "s1-j5-1", round: 5, homeTeamId: "santos-torrent", awayTeamId: "torrent-fs", homeGoals: 21, awayGoals: 17 },
      { id: "s1-j6-1", round: 6, homeTeamId: "santos-torrent", awayTeamId: "inter-torrent", homeGoals: 13, awayGoals: 21 },
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
      { id: "torrent-fs-s2", name: "Torrent F.S." },
      { id: "santos-torrent-s2", name: "Santos Torrent" },
      { id: "torrent-saint-germain-s2", name: "Torrent Saint-Germain" },
    ],
    matches: [
      { id: "s2-j1-1", round: 1, homeTeamId: "santos-torrent-s2", awayTeamId: "torrent-fs-s2", homeGoals: 6, awayGoals: 10 },
      { id: "s2-j1-2", round: 1, homeTeamId: "inter-torrent-s2", awayTeamId: "torrent-saint-germain-s2", homeGoals: 15, awayGoals: 12 },
      { id: "s2-j2-1", round: 2, homeTeamId: "torrent-saint-germain-s2", awayTeamId: "torrent-fs-s2", homeGoals: 9, awayGoals: 8 },
      { id: "s2-j2-2", round: 2, homeTeamId: "inter-torrent-s2", awayTeamId: "santos-torrent-s2", homeGoals: 18, awayGoals: 7 },
      { id: "s2-j3-1", round: 3, homeTeamId: "inter-torrent-s2", awayTeamId: "torrent-fs-s2", homeGoals: 3, awayGoals: 6 },
      { id: "s2-j3-2", round: 3, homeTeamId: "torrent-saint-germain-s2", awayTeamId: "santos-torrent-s2", homeGoals: 8, awayGoals: 6 },
      { id: "s2-j4-1", round: 4, homeTeamId: "torrent-fs-s2", awayTeamId: "santos-torrent-s2", homeGoals: 4, awayGoals: 5 },
      { id: "s2-j4-2", round: 4, homeTeamId: "torrent-saint-germain-s2", awayTeamId: "inter-torrent-s2", homeGoals: 5, awayGoals: 7 },
      { id: "s2-j5-1", round: 5, homeTeamId: "torrent-fs-s2", awayTeamId: "torrent-saint-germain-s2", homeGoals: 12, awayGoals: 3 },
      { id: "s2-j5-2", round: 5, homeTeamId: "santos-torrent-s2", awayTeamId: "inter-torrent-s2", homeGoals: 16, awayGoals: 13 },
      { id: "s2-j6-1", round: 6, homeTeamId: "santos-torrent-s2", awayTeamId: "torrent-saint-germain-s2", homeGoals: 9, awayGoals: 5 },
      { id: "s2-j6-2", round: 6, homeTeamId: "torrent-fs-s2", awayTeamId: "inter-torrent-s2", homeGoals: 4, awayGoals: 5 },
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
      { id: "torrent-fs-s3", name: "Torrent Fs" },
      { id: "torrent-saint-germain-s3", name: "Torrent Saint Germain" },
      { id: "santos-torrent-s3", name: "Santos Torrent" },
    ],
    matches: [
      { id: "s3-j1-1", round: 1, homeTeamId: "torrent-saint-germain-s3", awayTeamId: "torrent-fs-s3", homeGoals: 14, awayGoals: 5 },
      { id: "s3-j1-2", round: 1, homeTeamId: "santos-torrent-s3", awayTeamId: "inter-torrent-s3", homeGoals: 7, awayGoals: 7 },
      { id: "s3-j2-1", round: 2, homeTeamId: "inter-torrent-s3", awayTeamId: "torrent-saint-germain-s3", homeGoals: 7, awayGoals: 2 },
      { id: "s3-j2-2", round: 2, homeTeamId: "santos-torrent-s3", awayTeamId: "torrent-fs-s3", homeGoals: 7, awayGoals: 6 },
      { id: "s3-j3-1", round: 3, homeTeamId: "torrent-saint-germain-s3", awayTeamId: "santos-torrent-s3", homeGoals: 5, awayGoals: 6 },
      { id: "s3-j3-2", round: 3, homeTeamId: "inter-torrent-s3", awayTeamId: "torrent-fs-s3", homeGoals: 6, awayGoals: 1 },
      { id: "s3-j4-1", round: 4, homeTeamId: "torrent-fs-s3", awayTeamId: "torrent-saint-germain-s3", homeGoals: 16, awayGoals: 7 },
      { id: "s3-j4-2", round: 4, homeTeamId: "inter-torrent-s3", awayTeamId: "santos-torrent-s3", homeGoals: 6, awayGoals: 5 },
      { id: "s3-j5-1", round: 5, homeTeamId: "torrent-saint-germain-s3", awayTeamId: "inter-torrent-s3", homeGoals: 8, awayGoals: 6 },
      { id: "s3-j5-2", round: 5, homeTeamId: "torrent-fs-s3", awayTeamId: "santos-torrent-s3", homeGoals: 18, awayGoals: 4 },
      { id: "s3-j6-1", round: 6, homeTeamId: "santos-torrent-s3", awayTeamId: "torrent-saint-germain-s3", homeGoals: 7, awayGoals: 14 },
      { id: "s3-j6-2", round: 6, homeTeamId: "torrent-fs-s3", awayTeamId: "inter-torrent-s3", homeGoals: 10, awayGoals: 8 },
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
      { id: "inter-torrent-s4", name: "Inter Torrent Fs" },
      { id: "torrent-fs-s4", name: "Torrent Fs" },
      { id: "santos-torrent-s4", name: "Santos Torrent Fs" },
      { id: "tsg-s4", name: "TSG" },
      { id: "torrent-city-s4", name: "Torrent City Fs" },
    ],
    officialStandings: [
      { teamId: "inter-torrent-s4", teamName: "Inter Torrent Fs", pts: 9, pj: 4, pg: 3, pe: 0, pp: 0, gf: 13, gc: 9, dg: 4 },
      { teamId: "torrent-fs-s4", teamName: "Torrent Fs", pts: 9, pj: 4, pg: 3, pe: 0, pp: 1, gf: 33, gc: 23, dg: 10 },
      { teamId: "santos-torrent-s4", teamName: "Santos Torrent Fs", pts: 6, pj: 4, pg: 2, pe: 0, pp: 2, gf: 20, gc: 22, dg: -2 },
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
      { id: "torrent-fs-s5", name: "Torrent F.S." },
      { id: "torrent-saint-germain-s5", name: "Torrent Saint-Germain" },
      { id: "torrent-city-s5", name: "Torrent City" },
      { id: "inter-torrent-s5", name: "Inter Torrent" },
    ],
    officialStandings: [
      { teamId: "torrent-fs-s5", teamName: "Torrent F.S.", pts: 12, pj: 6, pg: 4, pe: 0, pp: 2, gf: 55, gc: 38, dg: 17 },
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
      { id: "torrent-fs-s6", name: "Torrent F.S." },
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
      { id: "torrent-fs-s7", name: "Torrent F.S." },
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
      { id: "torrent-fs-s8", name: "Torrent FS" },
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
      { id: "torrent-fs-s9", name: "Torrent FS" },
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
      { id: "torrent-fs-s10", name: "Torrent FS" },
      { id: "tsg-s10", name: "TSG" },
      { id: "inter-torrent-s10", name: "Inter Torrent" },
      { id: "alaquas-fs-s10", name: "Alaquàs FS" },
      { id: "santos-torrent-s10", name: "Santos Torrent" },
    ],
    officialStandings: [
      { teamId: "torrent-fs-s10", teamName: "Torrent FS", pts: 18, pj: 6, pg: 6, pe: 0, pp: 0, gf: 54, gc: 29, dg: 25 },
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
      { id: "torrent-fs-s11", name: "Torrent Fs" },
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
      { id: "torrent-fs-s12", name: "Torrent F.S." },
      { id: "pcd-torrent-s12", name: "P.C.D. Torrent" },
    ],
    officialStandings: [
      { teamId: "torrent-saint-germain-s12", teamName: "Torrent Saint-Germain", pts: 12, pj: 4, pg: 4, pe: 0, pp: 0, gf: 44, gc: 15, dg: 29 },
      { teamId: "torrent-fs-s12", teamName: "Torrent F.S.", pts: 6, pj: 4, pg: 2, pe: 0, pp: 2, gf: 35, gc: 22, dg: 13 },
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
      { id: "santos-torrent-s13", name: "Santos Torrent FS" },
      { id: "torrent-fs-s13", name: "Torrent FS" },
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
      { id: "torrent-fs-s14", name: "Torrent FS" },
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
      { id: "torrent-fs-s15", name: "Torrent FS" },
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
      { id: "torrent-fs-s16", name: "Torrent FS" },
      { id: "torrent-paraiso-s16", name: "Torrent Paraíso Interior FS" },
      { id: "torrent-pirates-s16", name: "Torrent Pirates FS" },
    ],
    officialStandings: [
      { teamId: "torrent-fs-s16", teamName: "Torrent FS", pts: 15, pj: 6, pg: 5, pe: 0, pp: 1, gf: 28, gc: 16, dg: 12 },
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
      { id: "torrent-fs-s17", name: "Torrent FS" },
      { id: "inter-torrent-s17", name: "Inter Torrent FS" },
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
      { id: "inter-torrent-s18", name: "Inter Torrent SC" },
      { id: "torrent-saint-germain-s18", name: "Torrent Saint Germain SC" },
      { id: "torrent-sc-s18", name: "Torrent SC" },
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
      { id: "torrent-sc-s19", name: "Torrent SC" },
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
      { id: "torrent-sc-s20", name: "Torrent SC" },
      { id: "santos-torrent-s20", name: "Santos Torrent SC" },
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
      { id: "inter-torrent-s21", name: "Inter Torrent SC" },
      { id: "torrent-saint-germain-s21", name: "Torrent Saint-Germain SC" },
      { id: "torrent-sc-s21", name: "Torrent SC" },
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
    teams: [
      { id: "c1-torrent", name: "Torrent F.S." },
      { id: "c1-inter", name: "Inter Torrent" },
    ],
    matches: [
      { id: "c1-j1-1", round: 1, homeTeamId: "c1-inter", awayTeamId: "c1-torrent", homeGoals: 8, awayGoals: 10, status: "played" },
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
];

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
    standings.forEach((row) => {
      const canonicalTeamName = getCanonicalTeamName(row.teamName);
      const current = map.get(canonicalTeamName) || {
        teamName: canonicalTeamName,
        seasonKeys: new Set(),
        pts: 0,
        pj: 0,
        pg: 0,
        pe: 0,
        pp: 0,
        gf: 0,
        gc: 0,
        dg: 0,
        titles: 0,
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
        competitionType: season.competitionType || "league",
        competitionLabel: season.competitionType === "cup" ? "Copa" : "Liga",
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

    if (standings.length > 0) {
      const champion = standings[0];
      const canonicalChampionName = getCanonicalTeamName(champion.teamName);
      const championRow = map.get(canonicalChampionName);
      if (championRow) championRow.titles += 1;
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
    season.scorers.forEach((entry) => {
      const canonicalPlayerName = entry.player.includes("(p.p.)") ? entry.player : getCanonicalPlayerName(entry.player);
      const key = normalizeText(canonicalPlayerName);
      const matchesForThatSeason = getTeamMatchCountInSeason(season, entry.teamId);
      const current = map.get(key) || {
        player: canonicalPlayerName,
        totalGoals: 0,
        totalMatches: 0,
        seasonKeys: new Set(),
        teams: new Set(),
        bySeason: [],
      };

      current.totalGoals += entry.goals;
      current.totalMatches += matchesForThatSeason;
      current.seasonKeys.add(season.name);
      current.teams.add(teamName(season, entry.teamId));
      current.bySeason.push({
        seasonId: season.id,
        seasonName: season.name,
        competitionType: season.competitionType || "league",
        competitionLabel: season.competitionType === "cup" ? "Copa" : "Liga",
        teamName: teamName(season, entry.teamId),
        goals: entry.goals,
        matches: matchesForThatSeason,
        goalsPerMatch: matchesForThatSeason ? (entry.goals / matchesForThatSeason).toFixed(2) : "0.00",
      });
      map.set(key, current);
    });
  });

  return Array.from(map.values())
    .map((item) => ({
      ...item,
      seasons: item.seasonKeys.size,
      teams: Array.from(item.teams),
      primaryTeamName: Array.from(item.teams).join(" · "),
      goalsPerMatch: item.totalMatches ? (item.totalGoals / item.totalMatches).toFixed(2) : "0.00",
    }))
    .sort((a, b) => b.totalGoals - a.totalGoals || a.player.localeCompare(b.player));
}

function getMatchScoreLabel(match) {
  if (match.status === "no_presentado") return "No Presentado";
  if (match.status === "pending") return "Pendiente";
  if (Number.isFinite(match.homeGoals) && Number.isFinite(match.awayGoals)) return `${match.homeGoals} - ${match.awayGoals}`;
  return "Pendiente";
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
    case "goals":
    default:
      return list.sort((a, b) => compareNumberDesc(a.totalGoals ?? a.goals, b.totalGoals ?? b.goals) || compareText(a.player, b.player));
  }
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

export default function LigaBuscadorApp() {
  const [seasons, setSeasons] = useState(initialSeasons);
  const [cups, setCups] = useState(initialCups);
  const [archiveType, setArchiveType] = useState("league");
  const [selectedSeasonId, setSelectedSeasonId] = useState(initialSeasons[0]?.id || "");
  const [search, setSearch] = useState("");
  const [activeView, setActiveView] = useState("clasificacion");
  const [seasonTeamSort, setSeasonTeamSort] = useState("default");
  const [seasonPlayerSort, setSeasonPlayerSort] = useState("goals");
  const [globalTeamSort, setGlobalTeamSort] = useState("pts");
  const [globalPlayerSort, setGlobalPlayerSort] = useState("goals");
  const [globalCompetitionFilter, setGlobalCompetitionFilter] = useState("all");
  const [editingMatchId, setEditingMatchId] = useState(null);
  const [editingScorerId, setEditingScorerId] = useState(null);

  const leagueRecords = useMemo(() => seasons.map((record) => ({ ...record, competitionType: "league" })), [seasons]);
  const cupRecords = useMemo(() => cups.map((record) => ({ ...record, competitionType: "cup" })), [cups]);

  const archiveOptions = {
    league: { label: "Liga", records: leagueRecords, setRecords: setSeasons },
    cup: { label: "Copa", records: cupRecords, setRecords: setCups },
  };

  const currentArchive = archiveOptions[archiveType] || archiveOptions.league;
  const currentRecords = currentArchive.records;
  const setCurrentRecords = currentArchive.setRecords;
  const allRecords = useMemo(() => [...leagueRecords, ...cupRecords], [leagueRecords, cupRecords]);
  const globalRecords = useMemo(() => {
    if (globalCompetitionFilter === "all") return allRecords;
    return allRecords.filter((record) => record.competitionType === globalCompetitionFilter);
  }, [allRecords, globalCompetitionFilter]);

  useEffect(() => {
    const fallbackId = currentRecords[0]?.id || "";
    if (!currentRecords.some((record) => record.id === selectedSeasonId)) {
      setSelectedSeasonId(fallbackId);
    }
  }, [archiveType, currentRecords, selectedSeasonId]);

  const selectedSeason = currentRecords.find((s) => s.id === selectedSeasonId) || currentRecords[0] || { teams: [], matches: [], byes: [], scorers: [], name: "", sourceUrl: "" };
  const standings = useMemo(() => computeStandings(selectedSeason), [selectedSeason]);
  const generalStats = useMemo(() => computeGeneralStats(selectedSeason), [selectedSeason]);
  const teamHistory = useMemo(() => aggregateTeamHistory(globalRecords), [globalRecords]);
  const playerHistory = useMemo(() => aggregatePlayerHistory(globalRecords), [globalRecords]);

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
        matches,
        goalsPerMatch: matches ? (entry.goals / matches).toFixed(2) : "0.00",
      };
    });

    base = base.sort((a, b) => b.goals - a.goals || a.player.localeCompare(b.player));

    if (!normalizedSearch) return base;
    return base.filter(
      (entry) =>
        normalizeText(entry.player).includes(normalizedSearch) ||
        normalizeText(entry.teamName).includes(normalizedSearch)
    );
  }, [selectedSeason, normalizedSearch]);

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
    if (!normalizedSearch) return playerHistory;
    return playerHistory.filter(
      (item) =>
        normalizeText(item.player).includes(normalizedSearch) ||
        normalizeText(item.primaryTeamName).includes(normalizedSearch)
    );
  }, [playerHistory, normalizedSearch]);

  const filteredTeamHistory = useMemo(() => {
    if (!normalizedSearch) return teamHistory;
    return teamHistory.filter((item) => normalizeText(item.teamName).includes(normalizedSearch));
  }, [teamHistory, normalizedSearch]);

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
    setCurrentRecords((prev) =>
      prev.map((season) => ({
        ...season,
        matches: season.matches.map((match) =>
          match.id === matchId ? { ...match, [field]: Math.max(0, Number(value) || 0) } : match
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

  const editingMatch = selectedSeason.matches.find((m) => m.id === editingMatchId) || null;
  const editingScorer = selectedSeason.scorers.find((s) => s.id === editingScorerId) || null;

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
                Prototipo preparado para ir añadiendo competiciones por temporada a partir de URLs. Ya incluye archivo de Liga, archivo de Copa y un historial global unificado.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <div className="rounded-2xl bg-white/10 p-3">
                <div className="text-xs text-slate-200">Registros</div>
                <div className="text-2xl font-bold">{currentRecords.length}</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-3">
                <div className="text-xs text-slate-200">Archivo</div>
                <div className="text-2xl font-bold">{currentArchive.label}</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-3">
                <div className="text-xs text-slate-200">Equipos</div>
                <div className="text-2xl font-bold">{selectedSeason.teams.length}</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-3">
                <div className="text-xs text-slate-200">Partidos</div>
                <div className="text-2xl font-bold">{generalStats.totalMatches}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 grid gap-4 lg:grid-cols-[280px_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <label className="mb-2 block text-sm font-semibold text-slate-700">Archivo</label>
            <select
              value={archiveType}
              onChange={(e) => setArchiveType(e.target.value)}
              className="mb-4 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"
            >
              <option value="league">Liga</option>
              <option value="cup">Copa</option>
            </select>

            <label className="mb-2 block text-sm font-semibold text-slate-700">Temporada</label>
            <select
              value={selectedSeasonId}
              onChange={(e) => setSelectedSeasonId(e.target.value)}
              className="mb-4 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"
            >
              {currentRecords.map((season) => (
                <option key={season.id} value={season.id}>
                  {season.name}
                </option>
              ))}
            </select>

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
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            <StatCard label="Partidos" value={generalStats.totalMatches} sub="disputados" />
            <StatCard label="Goles" value={generalStats.totalGoals} sub={`${generalStats.avgGoals} por partido`} />
            <StatCard label="Victorias local" value={generalStats.homeWins} />
            <StatCard label="Victorias visitante" value={generalStats.awayWins} />
            <StatCard label="Empates" value={generalStats.draws} />
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {[
            ["clasificacion", "Clasificación"],
            ["equipos", "Equipos"],
            ["jugadores", "Jugadores"],
            ["partidos", "Partidos"],
            ["global", "Buscador global"],
            ["historial", "Historial"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveView(key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeView === key
                  ? "bg-slate-900 text-white shadow"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {activeView === "clasificacion" && (
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <h2 className="text-xl font-bold">Clasificación</h2>
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
            </div>
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
          </div>
        )}

        {activeView === "equipos" && (
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
                            <span>{entry.player}</span>
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

        {activeView === "jugadores" && (
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
                      <td className="px-3 py-3">{entry.player}</td>
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

        {activeView === "partidos" && (
          <div className="space-y-4">
            {filteredMatches.map((match) => (
              <div key={match.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-sm text-slate-500">Jornada {match.round}</div>
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

        {activeView === "global" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Buscador global de historial</h2>
                  <p className="text-sm text-slate-500">
                    Busca un jugador o un equipo y elige si quieres ver solo Liga, solo Copa o todas las competiciones a la vez.
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
                        <th className="px-3 py-2">Equipos</th>
                        <th className="px-3 py-2">Temp.</th>
                        <th className="px-3 py-2">Goles</th>
                        <th className="px-3 py-2">Partidos</th>
                        <th className="px-3 py-2">G/P</th>
                      </tr>
                    </thead>
                    <tbody>
                      {displayedPlayerHistory.map((player, index) => (
                        <tr key={`${player.player}-${player.primaryTeamName}`} className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="px-3 py-3 font-semibold">{formatRank(index + 1)}</td>
                          <td className="px-3 py-3 font-semibold">{player.player}</td>
                          <td className="px-3 py-3">{player.primaryTeamName}</td>
                          <td className="px-3 py-3">{player.seasons}</td>
                          <td className="px-3 py-3 font-semibold">{player.totalGoals}</td>
                          <td className="px-3 py-3">{player.totalMatches}</td>
                          <td className="px-3 py-3">{player.goalsPerMatch}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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
                  <div className="mt-1 text-xs text-slate-500">Filtro actual: {globalCompetitionFilter === "all" ? "Todas las competiciones" : globalCompetitionFilter === "cup" ? "Copa" : "Liga"}</div>
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
                  <div className="mt-1 text-xs text-slate-500">Filtro actual: {globalCompetitionFilter === "all" ? "Todas las competiciones" : globalCompetitionFilter === "cup" ? "Copa" : "Liga"}</div>
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
                        <div className="text-lg font-bold">{player.player}</div>
                        <div className="text-sm text-slate-500">{player.primaryTeamName}</div>
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
                      </div>
                    </div>
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
