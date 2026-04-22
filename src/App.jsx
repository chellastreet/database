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
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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
    return season.officialStandings.map((row) => ({ ...row, teamName: getCanonicalTeamName(row.teamName) }));
  }
  const map = new Map();
  season.teams.forEach((team) => {
    map.set(team.id, { teamId: team.id, teamName: team.name, pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 });
  });
  season.matches.forEach((match) => {
    if (match.status && match.status !== "played") return;
    const home = map.get(match.homeTeamId);
    const away = map.get(match.awayTeamId);
    if (!home || !away) return;
    home.pj += 1; away.pj += 1;
    home.gf += match.homeGoals; home.gc += match.awayGoals;
    away.gf += match.awayGoals; away.gc += match.homeGoals;
    if (match.homeGoals > match.awayGoals) { home.pg += 1; away.pp += 1; home.pts += 3; }
    else if (match.homeGoals < match.awayGoals) { away.pg += 1; home.pp += 1; away.pts += 3; }
    else { home.pe += 1; away.pe += 1; home.pts += 1; away.pts += 1; }
  });
  return Array.from(map.values()).map((row) => ({ ...row, dg: row.gf - row.gc })).sort((a, b) => (b.pts - a.pts) || (b.dg - a.dg) || (b.gf - a.gf));
}

function getTeamMatchCountInSeason(season, teamId) {
  return season.matches.filter((match) => (!match.status || match.status === "played") && (match.homeTeamId === teamId || match.awayTeamId === teamId)).length;
}

function computeGeneralStats(season) {
  const playedMatches = season.matches.filter((m) => (!m.status || m.status === "played") && Number.isFinite(m.homeGoals) && Number.isFinite(m.awayGoals));
  const totalMatches = playedMatches.length;
  const totalGoals = playedMatches.reduce((sum, m) => sum + m.homeGoals + m.awayGoals, 0);
  return {
    totalMatches,
    totalGoals,
    homeWins: playedMatches.filter((m) => m.homeGoals > m.awayGoals).length,
    awayWins: playedMatches.filter((m) => m.awayGoals > m.homeGoals).length,
    draws: playedMatches.filter((m) => m.awayGoals === m.homeGoals).length,
    avgGoals: totalMatches ? (totalGoals / totalMatches).toFixed(1) : "0.0",
  };
}

function aggregateTeamHistory(records) {
  const map = new Map();
  records.forEach((season) => {
    const standings = computeStandings(season);
    standings.forEach((row) => {
      const canonicalTeamName = getCanonicalTeamName(row.teamName);
      const current = map.get(canonicalTeamName) || { teamName: canonicalTeamName, seasonKeys: new Set(), pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0, titles: 0, bySeason: [] };
      current.seasonKeys.add(season.name);
      current.pts += row.pts; current.pj += row.pj; current.pg += row.pg; current.pe += row.pe; current.pp += row.pp; current.gf += row.gf; current.gc += row.gc; current.dg += row.dg;
      current.bySeason.push({ seasonName: season.name, competitionType: season.competitionType || "league", competitionLabel: season.competitionType === "cup" ? "Copa" : "Liga", pts: row.pts, pj: row.pj, pg: row.pg, pe: row.pe, pp: row.pp, gf: row.gf, gc: row.gc, dg: row.dg });
      map.set(canonicalTeamName, current);
    });
    if (standings.length > 0) {
      const championName = getCanonicalTeamName(standings[0].teamName);
      const championRow = map.get(championName);
      if (championRow) championRow.titles += 1;
    }
  });
  return Array.from(map.values()).map((item) => ({ ...item, seasons: item.seasonKeys.size, pointsPerMatch: item.pj ? (item.pts / item.pj).toFixed(2) : "0.00", goalsPerMatch: item.pj ? (item.gf / item.pj).toFixed(2) : "0.00" })).sort((a, b) => (b.pts - a.pts) || (b.dg - a.dg) || (b.gf - a.gf));
}

function aggregatePlayerHistory(records) {
  const map = new Map();
  records.forEach((season) => {
    season.scorers.forEach((entry) => {
      const canonicalPlayerName = entry.player.includes("(p.p.)") ? entry.player : getCanonicalPlayerName(entry.player);
      const key = normalizeText(canonicalPlayerName);
      const matchesForThatSeason = getTeamMatchCountInSeason(season, entry.teamId);
      const current = map.get(key) || { player: canonicalPlayerName, totalGoals: 0, totalMatches: 0, seasonKeys: new Set(), teams: new Set(), bySeason: [] };
      current.totalGoals += entry.goals;
      current.totalMatches += matchesForThatSeason;
      current.seasonKeys.add(season.name);
      current.teams.add(teamName(season, entry.teamId));
      current.bySeason.push({ seasonId: season.id, seasonName: season.name, competitionType: season.competitionType || "league", competitionLabel: season.competitionType === "cup" ? "Copa" : "Liga", teamName: teamName(season, entry.teamId), goals: entry.goals, matches: matchesForThatSeason, goalsPerMatch: matchesForThatSeason ? (entry.goals / matchesForThatSeason).toFixed(2) : "0.00" });
      map.set(key, current);
    });
  });
  return Array.from(map.values()).map((item) => ({ ...item, seasons: item.seasonKeys.size, teams: Array.from(item.teams), primaryTeamName: Array.from(item.teams).join(" · "), goalsPerMatch: item.totalMatches ? (item.totalGoals / item.totalMatches).toFixed(2) : "0.00" })).sort((a, b) => (b.totalGoals - a.totalGoals) || a.player.localeCompare(b.player));
}

function getMatchScoreLabel(match) {
  if (match.status === "no_presentado") return "No Presentado";
  if (match.status === "pending") return "Pendiente";
  if (Number.isFinite(match.homeGoals) && Number.isFinite(match.awayGoals)) return `${match.homeGoals} - ${match.awayGoals}`;
  return "Pendiente";
}
function formatRank(position) { return `${position}.`; }
function compareText(a, b) { return String(a || "").localeCompare(String(b || ""), "es", { sensitivity: "base" }); }
function compareNumberDesc(a, b) { return (Number(b) || 0) - (Number(a) || 0); }
function sortTeamRows(rows, sortKey) {
  const list = [...rows];
  switch (sortKey) {
    case "name": return list.sort((a, b) => compareText(a.teamName || a.name, b.teamName || b.name));
    case "pts": return list.sort((a, b) => compareNumberDesc(a.pts, b.pts) || compareNumberDesc(a.dg, b.dg) || compareNumberDesc(a.gf, b.gf) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "pj": return list.sort((a, b) => compareNumberDesc(a.pj, b.pj) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "pg": return list.sort((a, b) => compareNumberDesc(a.pg, b.pg) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "pe": return list.sort((a, b) => compareNumberDesc(a.pe, b.pe) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "pp": return list.sort((a, b) => compareNumberDesc(a.pp, b.pp) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "gf": return list.sort((a, b) => compareNumberDesc(a.gf, b.gf) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "gc": return list.sort((a, b) => compareNumberDesc(a.gc, b.gc) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "dg": return list.sort((a, b) => compareNumberDesc(a.dg, b.dg) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "titles": return list.sort((a, b) => compareNumberDesc(a.titles, b.titles) || compareNumberDesc(a.pts, b.pts) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "seasons": return list.sort((a, b) => compareNumberDesc(a.seasons, b.seasons) || compareNumberDesc(a.pts, b.pts) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "ppm": return list.sort((a, b) => compareNumberDesc(a.pointsPerMatch, b.pointsPerMatch) || compareNumberDesc(a.pts, b.pts) || compareText(a.teamName || a.name, b.teamName || b.name));
    case "gpm": return list.sort((a, b) => compareNumberDesc(a.goalsPerMatch, b.goalsPerMatch) || compareNumberDesc(a.gf, b.gf) || compareText(a.teamName || a.name, b.teamName || b.name));
    default: return list;
  }
}
function sortPlayerRows(rows, sortKey) {
  const list = [...rows];
  switch (sortKey) {
    case "name": return list.sort((a, b) => compareText(a.player, b.player));
    case "matches": return list.sort((a, b) => compareNumberDesc(a.totalMatches ?? a.matches, b.totalMatches ?? b.matches) || compareNumberDesc(a.totalGoals ?? a.goals, b.totalGoals ?? b.goals) || compareText(a.player, b.player));
    case "gpm": return list.sort((a, b) => compareNumberDesc(a.goalsPerMatch, b.goalsPerMatch) || compareNumberDesc(a.totalGoals ?? a.goals, b.totalGoals ?? b.goals) || compareText(a.player, b.player));
    case "seasons": return list.sort((a, b) => compareNumberDesc(a.seasons, b.seasons) || compareNumberDesc(a.totalGoals ?? a.goals, b.totalGoals ?? b.goals) || compareText(a.player, b.player));
    case "goals":
    default: return list.sort((a, b) => compareNumberDesc(a.totalGoals ?? a.goals, b.totalGoals ?? b.goals) || compareText(a.player, b.player));
  }
}
function StatCard({ label, value, sub }) { return <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><div className="text-xs uppercase tracking-wide text-slate-500">{label}</div><div className="mt-1 text-2xl font-bold text-slate-900">{value}</div>{sub ? <div className="mt-1 text-sm text-slate-500">{sub}</div> : null}</div>; }

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
  const archiveOptions = { league: { label: "Liga", records: leagueRecords, setRecords: setSeasons }, cup: { label: "Copa", records: cupRecords, setRecords: setCups } };
  const currentArchive = archiveOptions[archiveType] || archiveOptions.league;
  const currentRecords = currentArchive.records;
  const setCurrentRecords = currentArchive.setRecords;
  const allRecords = useMemo(() => [...leagueRecords, ...cupRecords], [leagueRecords, cupRecords]);
  const globalRecords = useMemo(() => globalCompetitionFilter === "all" ? allRecords : allRecords.filter((record) => record.competitionType === globalCompetitionFilter), [allRecords, globalCompetitionFilter]);

  useEffect(() => {
    const fallbackId = currentRecords[0]?.id || "";
    if (!currentRecords.some((record) => record.id === selectedSeasonId)) setSelectedSeasonId(fallbackId);
  }, [archiveType, currentRecords, selectedSeasonId]);

  const selectedSeason = currentRecords.find((s) => s.id === selectedSeasonId) || currentRecords[0] || { teams: [], matches: [], byes: [], scorers: [], name: "", sourceUrl: "" };
  const standings = useMemo(() => computeStandings(selectedSeason), [selectedSeason]);
  const generalStats = useMemo(() => computeGeneralStats(selectedSeason), [selectedSeason]);
  const teamHistory = useMemo(() => aggregateTeamHistory(globalRecords), [globalRecords]);
  const playerHistory = useMemo(() => aggregatePlayerHistory(globalRecords), [globalRecords]);
  const normalizedSearch = normalizeText(search);
  const filteredTeams = useMemo(() => {
    const base = selectedSeason.teams.map((team) => ({ ...team, ...(standings.find((r) => r.teamId === team.id) || {}) }));
    if (!normalizedSearch) return base;
    return base.filter((team) => normalizeText(getCanonicalTeamName(team.name)).includes(normalizedSearch));
  }, [selectedSeason, standings, normalizedSearch]);
  const filteredScorers = useMemo(() => {
    let base = selectedSeason.scorers.map((entry) => {
      const matches = getTeamMatchCountInSeason(selectedSeason, entry.teamId);
      return { ...entry, teamName: teamName(selectedSeason, entry.teamId), matches, goalsPerMatch: matches ? (entry.goals / matches).toFixed(2) : "0.00" };
    }).sort((a, b) => b.goals - a.goals || a.player.localeCompare(b.player));
    if (!normalizedSearch) return base;
    return base.filter((entry) => normalizeText(entry.player).includes(normalizedSearch) || normalizeText(entry.teamName).includes(normalizedSearch));
  }, [selectedSeason, normalizedSearch]);
  const filteredMatches = useMemo(() => {
    const base = [...selectedSeason.matches].sort((a, b) => b.round - a.round);
    if (!normalizedSearch) return base;
    return base.filter((match) => normalizeText(teamName(selectedSeason, match.homeTeamId)).includes(normalizedSearch) || normalizeText(teamName(selectedSeason, match.awayTeamId)).includes(normalizedSearch));
  }, [selectedSeason, normalizedSearch]);
  const filteredPlayerHistory = useMemo(() => !normalizedSearch ? playerHistory : playerHistory.filter((item) => normalizeText(item.player).includes(normalizedSearch) || normalizeText(item.primaryTeamName).includes(normalizedSearch)), [playerHistory, normalizedSearch]);
  const filteredTeamHistory = useMemo(() => !normalizedSearch ? teamHistory : teamHistory.filter((item) => normalizeText(item.teamName).includes(normalizedSearch)), [teamHistory, normalizedSearch]);
  const displayedStandings = useMemo(() => sortTeamRows(standings.filter((row) => !normalizedSearch || normalizeText(row.teamName).includes(normalizedSearch)), seasonTeamSort), [standings, normalizedSearch, seasonTeamSort]);
  const displayedTeams = useMemo(() => sortTeamRows(filteredTeams.map((team) => ({ ...team, teamName: team.teamName || team.name, pointsPerMatch: team.pj ? (team.pts / team.pj).toFixed(2) : "0.00", goalsPerMatch: team.pj ? (team.gf / team.pj).toFixed(2) : "0.00" })), seasonTeamSort), [filteredTeams, seasonTeamSort]);
  const displayedScorers = useMemo(() => sortPlayerRows(filteredScorers, seasonPlayerSort), [filteredScorers, seasonPlayerSort]);
  const displayedTeamHistory = useMemo(() => sortTeamRows(filteredTeamHistory, globalTeamSort), [filteredTeamHistory, globalTeamSort]);
  const displayedPlayerHistory = useMemo(() => sortPlayerRows(filteredPlayerHistory, globalPlayerSort), [filteredPlayerHistory, globalPlayerSort]);

  function updateMatch(matchId, field, value) {
    setCurrentRecords((prev) => prev.map((season) => ({ ...season, matches: season.matches.map((match) => match.id === matchId ? { ...match, [field]: Math.max(0, Number(value) || 0) } : match) })));
  }
  function updateScorer(scorerId, field, value) {
    setCurrentRecords((prev) => prev.map((season) => ({ ...season, scorers: season.scorers.map((entry) => entry.id === scorerId ? { ...entry, [field]: field === "goals" ? Math.max(0, Number(value) || 0) : value } : entry) })));
  }
  const editingMatch = selectedSeason.matches.find((m) => m.id === editingMatchId) || null;
  const editingScorer = selectedSeason.scorers.find((s) => s.id === editingScorerId) || null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl p-4 md:p-8">
        <div className="mb-6 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 p-6 text-white shadow-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium tracking-wide">Base de datos / buscador de competiciones</div>
              <h1 className="text-3xl font-bold md:text-4xl">Historial de competiciones, equipos y jugadores</h1>
              <p className="mt-2 max-w-3xl text-sm text-slate-200 md:text-base">Prototipo preparado para ir añadiendo competiciones por temporada a partir de URLs. Ya incluye archivo de Liga, archivo de Copa y un historial global unificado.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <div className="rounded-2xl bg-white/10 p-3"><div className="text-xs text-slate-200">Registros</div><div className="text-2xl font-bold">{currentRecords.length}</div></div>
              <div className="rounded-2xl bg-white/10 p-3"><div className="text-xs text-slate-200">Archivo</div><div className="text-2xl font-bold">{currentArchive.label}</div></div>
              <div className="rounded-2xl bg-white/10 p-3"><div className="text-xs text-slate-200">Equipos</div><div className="text-2xl font-bold">{selectedSeason.teams.length}</div></div>
              <div className="rounded-2xl bg-white/10 p-3"><div className="text-xs text-slate-200">Partidos</div><div className="text-2xl font-bold">{generalStats.totalMatches}</div></div>
            </div>
          </div>
        </div>

        <div className="mb-6 grid gap-4 lg:grid-cols-[280px_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <label className="mb-2 block text-sm font-semibold text-slate-700">Archivo</label>
            <select value={archiveType} onChange={(e) => setArchiveType(e.target.value)} className="mb-4 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"><option value="league">Liga</option><option value="cup">Copa</option></select>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Temporada</label>
            <select value={selectedSeasonId} onChange={(e) => setSelectedSeasonId(e.target.value)} className="mb-4 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500">{currentRecords.map((season) => <option key={season.id} value={season.id}>{season.name}</option>)}</select>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Buscar</label>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Jugador, equipo..." className="mb-4 w-full rounded-2xl border border-slate-300 px-3 py-2 outline-none focus:border-slate-500" />
            <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600"><div className="font-semibold text-slate-800">Fuente actual</div><div className="mt-1 break-all">{selectedSeason.sourceUrl}</div></div>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            <StatCard label="Partidos" value={generalStats.totalMatches} sub="disputados" />
            <StatCard label="Goles" value={generalStats.totalGoals} sub={`${generalStats.avgGoals} por partido`} />
            <StatCard label="Victorias local" value={generalStats.homeWins} />
            <StatCard label="Victorias visitante" value={generalStats.awayWins} />
            <StatCard label="Empates" value={generalStats.draws} />
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">{[["clasificacion","Clasificación"],["equipos","Equipos"],["jugadores","Jugadores"],["partidos","Partidos"],["global","Buscador global"],["historial","Historial"]].map(([key,label]) => <button key={key} onClick={() => setActiveView(key)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeView===key?"bg-slate-900 text-white shadow":"bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"}`}>{label}</button>)}</div>

        {activeView === "clasificacion" && <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"><div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><h2 className="text-xl font-bold">Clasificación</h2><div className="flex items-center gap-2 text-sm"><span className="text-slate-500">Ordenar por</span><select value={seasonTeamSort} onChange={(e)=>setSeasonTeamSort(e.target.value)} className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"><option value="default">Clasificación oficial</option><option value="pts">Puntos</option><option value="pj">Partidos jugados</option><option value="pg">Partidos ganados</option><option value="pe">Empates</option><option value="pp">Derrotas</option><option value="gf">Goles a favor</option><option value="gc">Goles en contra</option><option value="dg">Diferencia de goles</option><option value="name">Nombre</option></select></div></div><div className="overflow-x-auto"><table className="min-w-full text-sm"><thead><tr className="border-b border-slate-200 text-left text-slate-500"><th className="px-3 py-2">Pos.</th><th className="px-3 py-2">Equipo</th><th className="px-3 py-2">Pt</th><th className="px-3 py-2">PJ</th><th className="px-3 py-2">PG</th><th className="px-3 py-2">PE</th><th className="px-3 py-2">PP</th><th className="px-3 py-2">GF</th><th className="px-3 py-2">GC</th><th className="px-3 py-2">DG</th></tr></thead><tbody>{displayedStandings.map((row,index)=><tr key={row.teamId} className="border-b border-slate-100 hover:bg-slate-50"><td className="px-3 py-3 font-semibold">{formatRank(index+1)}</td><td className="px-3 py-3 font-semibold">{row.teamName}</td><td className="px-3 py-3">{row.pts}</td><td className="px-3 py-3">{row.pj}</td><td className="px-3 py-3">{row.pg}</td><td className="px-3 py-3">{row.pe}</td><td className="px-3 py-3">{row.pp}</td><td className="px-3 py-3">{row.gf}</td><td className="px-3 py-3">{row.gc}</td><td className="px-3 py-3">{row.dg>0?`+${row.dg}`:row.dg}</td></tr>)}</tbody></table></div></div>}

        {activeView === "equipos" && <div><div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><h2 className="text-xl font-bold">Equipos de la temporada</h2><div className="flex items-center gap-2 text-sm"><span className="text-slate-500">Ordenar por</span><select value={seasonTeamSort} onChange={(e)=>setSeasonTeamSort(e.target.value)} className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"><option value="default">Clasificación oficial</option><option value="pts">Puntos</option><option value="pj">Partidos jugados</option><option value="pg">Partidos ganados</option><option value="gf">Goles a favor</option><option value="gc">Goles en contra</option><option value="dg">Diferencia de goles</option><option value="gpm">Goles por partido</option><option value="name">Nombre</option></select></div></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{displayedTeams.map((team,index)=><div key={team.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><div className="mb-3 flex items-start justify-between gap-3"><div><div className="mb-1 inline-flex rounded-full bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white">{formatRank(index+1)}</div><h2 className="text-xl font-bold">{getCanonicalTeamName(team.name)}</h2><p className="text-sm text-slate-500">{selectedSeason.name}</p></div><div className="rounded-2xl bg-slate-900 px-3 py-2 text-white"><div className="text-xs uppercase">Puntos</div><div className="text-xl font-bold">{team.pts ?? 0}</div></div></div><div className="grid grid-cols-3 gap-3 text-sm"><div className="rounded-2xl bg-slate-50 p-3"><div className="text-slate-500">PJ</div><div className="font-bold">{team.pj ?? 0}</div></div><div className="rounded-2xl bg-slate-50 p-3"><div className="text-slate-500">PG</div><div className="font-bold">{team.pg ?? 0}</div></div><div className="rounded-2xl bg-slate-50 p-3"><div className="text-slate-500">PP</div><div className="font-bold">{team.pp ?? 0}</div></div><div className="rounded-2xl bg-slate-50 p-3"><div className="text-slate-500">GF</div><div className="font-bold">{team.gf ?? 0}</div></div><div className="rounded-2xl bg-slate-50 p-3"><div className="text-slate-500">GC</div><div className="font-bold">{team.gc ?? 0}</div></div><div className="rounded-2xl bg-slate-50 p-3"><div className="text-slate-500">DG</div><div className="font-bold">{team.dg ?? 0}</div></div></div><div className="mt-4"><div className="mb-2 text-sm font-semibold text-slate-700">Goleadores del equipo</div><div className="space-y-2">{selectedSeason.scorers.filter((entry) => entry.teamId === team.id).sort((a,b)=>b.goals-a.goals).slice(0,5).map((entry)=><div key={entry.id} className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2 text-sm"><span>{entry.player}</span><span className="font-semibold">{entry.goals}</span></div>)}</div></div></div>)}</div></div>}

        {activeView === "jugadores" && <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"><div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><h2 className="text-xl font-bold">Estadísticas de jugadores</h2><div className="flex items-center gap-2 text-sm"><span className="text-slate-500">Ordenar por</span><select value={seasonPlayerSort} onChange={(e)=>setSeasonPlayerSort(e.target.value)} className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"><option value="goals">Goles</option><option value="matches">Partidos jugados</option><option value="gpm">Goles por partido</option><option value="name">Nombre</option></select></div></div><div className="overflow-x-auto"><table className="min-w-full text-sm"><thead><tr className="border-b border-slate-200 text-left text-slate-500"><th className="px-3 py-2">Pos.</th><th className="px-3 py-2">Jugador</th><th className="px-3 py-2">Equipo</th><th className="px-3 py-2">Goles</th><th className="px-3 py-2">Partidos</th><th className="px-3 py-2">G/P</th><th className="px-3 py-2">Acción</th></tr></thead><tbody>{displayedScorers.map((entry,index)=><tr key={entry.id} className="border-b border-slate-100 hover:bg-slate-50"><td className="px-3 py-3 font-semibold">{formatRank(index+1)}</td><td className="px-3 py-3">{entry.player}</td><td className="px-3 py-3">{entry.teamName}</td><td className="px-3 py-3 font-semibold">{entry.goals}</td><td className="px-3 py-3">{entry.matches}</td><td className="px-3 py-3">{entry.goalsPerMatch}</td><td className="px-3 py-3"><button onClick={()=>setEditingScorerId(entry.id)} className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-medium hover:bg-slate-100">Editar</button></td></tr>)}</tbody></table></div></div>}

        {activeView === "partidos" && <div className="space-y-4">{filteredMatches.map((match)=><div key={match.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><div className="mb-3 flex flex-wrap items-center justify-between gap-3"><div><div className="text-sm text-slate-500">Jornada {match.round}</div><div className="text-xl font-bold">{teamName(selectedSeason, match.homeTeamId)} <span className="mx-2">{getMatchScoreLabel(match)}</span>{teamName(selectedSeason, match.awayTeamId)}</div></div><button onClick={()=>setEditingMatchId(match.id)} className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-medium hover:bg-slate-100">Editar partido</button></div></div>)}<div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><h3 className="mb-3 text-lg font-bold">Jornadas de descanso</h3><div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">{selectedSeason.byes.map((item,idx)=><div key={`${item.round}-${item.teamId}-${idx}`} className="rounded-2xl bg-slate-50 px-3 py-2 text-sm">Jornada {item.round}: <span className="font-semibold">{teamName(selectedSeason, item.teamId)}</span> descansa</div>)}</div></div></div>}

        {activeView === "global" && <div className="space-y-6"><div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between"><div><h2 className="text-2xl font-bold">Buscador global de historial</h2><p className="text-sm text-slate-500">Busca un jugador o un equipo y elige si quieres ver solo Liga, solo Copa o todas las competiciones a la vez.</p></div><div className="flex flex-col gap-3 md:items-end"><div className="flex items-center gap-2 text-sm"><span className="text-slate-500">Competición</span><select value={globalCompetitionFilter} onChange={(e)=>setGlobalCompetitionFilter(e.target.value)} className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"><option value="all">Todas</option><option value="league">Liga</option><option value="cup">Copa</option></select></div><div className="grid gap-3 md:grid-cols-3"><StatCard label="Equipos históricos" value={teamHistory.length} /><StatCard label="Jugadores históricos" value={playerHistory.length} /><StatCard label="Registros visibles" value={globalRecords.length} /></div></div></div></div><div className="grid gap-6 xl:grid-cols-2"><div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"><div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><h3 className="text-xl font-bold">Equipos · acumulado global</h3><div className="flex items-center gap-2 text-sm"><span className="text-slate-500">Ordenar por</span><select value={globalTeamSort} onChange={(e)=>setGlobalTeamSort(e.target.value)} className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"><option value="pts">Puntos</option><option value="titles">Títulos</option><option value="seasons">Temporadas</option><option value="pj">Partidos jugados</option><option value="gf">Goles a favor</option><option value="gc">Goles en contra</option><option value="dg">Diferencia de goles</option><option value="ppm">Puntos por partido</option><option value="gpm">Goles por partido</option><option value="name">Nombre</option></select></div></div><div className="overflow-x-auto"><table className="min-w-full text-sm"><thead><tr className="border-b border-slate-200 text-left text-slate-500"><th className="px-3 py-2">Pos.</th><th className="px-3 py-2">Equipo</th><th className="px-3 py-2">Temp.</th><th className="px-3 py-2">Títulos</th><th className="px-3 py-2">Pt</th><th className="px-3 py-2">PJ</th><th className="px-3 py-2">GF</th><th className="px-3 py-2">G/P</th></tr></thead><tbody>{displayedTeamHistory.map((row,index)=><tr key={row.teamName} className="border-b border-slate-100 hover:bg-slate-50"><td className="px-3 py-3 font-semibold">{formatRank(index+1)}</td><td className="px-3 py-3 font-semibold">{row.teamName}</td><td className="px-3 py-3">{row.seasons}</td><td className="px-3 py-3">{row.titles}</td><td className="px-3 py-3">{row.pts}</td><td className="px-3 py-3">{row.pj}</td><td className="px-3 py-3">{row.gf}</td><td className="px-3 py-3">{row.goalsPerMatch}</td></tr>)}</tbody></table></div></div><div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"><div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><h3 className="text-xl font-bold">Jugadores · acumulado global</h3><div className="flex items-center gap-2 text-sm"><span className="text-slate-500">Ordenar por</span><select value={globalPlayerSort} onChange={(e)=>setGlobalPlayerSort(e.target.value)} className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"><option value="goals">Goles</option><option value="matches">Partidos jugados</option><option value="gpm">Goles por partido</option><option value="seasons">Temporadas</option><option value="name">Nombre</option></select></div></div><div className="overflow-x-auto"><table className="min-w-full text-sm"><thead><tr className="border-b border-slate-200 text-left text-slate-500"><th className="px-3 py-2">Pos.</th><th className="px-3 py-2">Jugador</th><th className="px-3 py-2">Equipos</th><th className="px-3 py-2">Temp.</th><th className="px-3 py-2">Goles</th><th className="px-3 py-2">Partidos</th><th className="px-3 py-2">G/P</th></tr></thead><tbody>{displayedPlayerHistory.map((player,index)=><tr key={`${player.player}-${player.primaryTeamName}`} className="border-b border-slate-100 hover:bg-slate-50"><td className="px-3 py-3 font-semibold">{formatRank(index+1)}</td><td className="px-3 py-3 font-semibold">{player.player}</td><td className="px-3 py-3">{player.primaryTeamName}</td><td className="px-3 py-3">{player.seasons}</td><td className="px-3 py-3 font-semibold">{player.totalGoals}</td><td className="px-3 py-3">{player.totalMatches}</td><td className="px-3 py-3">{player.goalsPerMatch}</td></tr>)}</tbody></table></div></div></div></div>}

        {activeView === "historial" && <div className="grid gap-6 xl:grid-cols-2"><div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"><div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div><h2 className="text-xl font-bold">Historial acumulado de equipos</h2><div className="mt-1 text-xs text-slate-500">Filtro actual: {globalCompetitionFilter === "all" ? "Todas las competiciones" : globalCompetitionFilter === "cup" ? "Copa" : "Liga"}</div></div><div className="flex items-center gap-2 text-sm"><span className="text-slate-500">Ordenar por</span><select value={globalTeamSort} onChange={(e)=>setGlobalTeamSort(e.target.value)} className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"><option value="pts">Puntos</option><option value="titles">Títulos</option><option value="seasons">Temporadas</option><option value="pj">Partidos jugados</option><option value="gf">Goles a favor</option><option value="gc">Goles en contra</option><option value="dg">Diferencia de goles</option><option value="ppm">Puntos por partido</option><option value="gpm">Goles por partido</option><option value="name">Nombre</option></select></div></div><div className="overflow-x-auto"><table className="min-w-full text-sm"><thead><tr className="border-b border-slate-200 text-left text-slate-500"><th className="px-3 py-2">Pos.</th><th className="px-3 py-2">Equipo</th><th className="px-3 py-2">Temp.</th><th className="px-3 py-2">Títulos</th><th className="px-3 py-2">Pt</th><th className="px-3 py-2">PJ</th><th className="px-3 py-2">GF</th><th className="px-3 py-2">GC</th><th className="px-3 py-2">DG</th></tr></thead><tbody>{displayedTeamHistory.map((row,index)=><tr key={row.teamName} className="border-b border-slate-100 hover:bg-slate-50"><td className="px-3 py-3 font-semibold">{formatRank(index+1)}</td><td className="px-3 py-3 font-semibold">{row.teamName}</td><td className="px-3 py-3">{row.seasons}</td><td className="px-3 py-3">{row.titles}</td><td className="px-3 py-3">{row.pts}</td><td className="px-3 py-3">{row.pj}</td><td className="px-3 py-3">{row.gf}</td><td className="px-3 py-3">{row.gc}</td><td className="px-3 py-3">{row.dg>0?`+${row.dg}`:row.dg}</td></tr>)}</tbody></table></div></div><div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"><div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div><h2 className="text-xl font-bold">Historial acumulado de jugadores</h2><div className="mt-1 text-xs text-slate-500">Filtro actual: {globalCompetitionFilter === "all" ? "Todas las competiciones" : globalCompetitionFilter === "cup" ? "Copa" : "Liga"}</div></div><div className="flex items-center gap-2 text-sm"><span className="text-slate-500">Ordenar por</span><select value={globalPlayerSort} onChange={(e)=>setGlobalPlayerSort(e.target.value)} className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"><option value="goals">Goles</option><option value="matches">Partidos jugados</option><option value="gpm">Goles por partido</option><option value="seasons">Temporadas</option><option value="name">Nombre</option></select></div></div><div className="space-y-3">{displayedPlayerHistory.map((player,index)=><div key={`${player.player}-${player.primaryTeamName}`} className="rounded-2xl border border-slate-200 p-4"><div className="flex flex-wrap items-start justify-between gap-3"><div><div className="mb-1 inline-flex rounded-full bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white">{formatRank(index+1)}</div><div className="text-lg font-bold">{player.player}</div><div className="text-sm text-slate-500">{player.primaryTeamName}</div></div><div className="flex gap-2"><div className="rounded-2xl bg-slate-900 px-3 py-2 text-white"><div className="text-xs uppercase">Goles totales</div><div className="text-xl font-bold">{player.totalGoals}</div></div><div className="rounded-2xl bg-slate-100 px-3 py-2 text-slate-900"><div className="text-xs uppercase text-slate-500">Partidos</div><div className="text-xl font-bold">{player.totalMatches}</div></div><div className="rounded-2xl bg-slate-100 px-3 py-2 text-slate-900"><div className="text-xs uppercase text-slate-500">G/P</div><div className="text-xl font-bold">{player.goalsPerMatch}</div></div></div></div><div className="mt-3 flex flex-wrap gap-2">{player.bySeason.map((item)=><span key={`${player.player}-${item.seasonName}-${item.teamName}-${item.competitionLabel}`} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{item.seasonName} · {item.competitionLabel} · {item.teamName}: {item.goals} goles en {item.matches} partidos · {item.goalsPerMatch} G/P</span>)}</div></div>)}</div></div></div>}

        {editingMatch && <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"><div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl"><div className="mb-4 flex items-start justify-between gap-4"><div><h3 className="text-xl font-bold">Editar partido</h3><p className="text-sm text-slate-500">Jornada {editingMatch.round}</p></div><button className="text-slate-500" onClick={()=>setEditingMatchId(null)}>✕</button></div><div className="grid gap-4 md:grid-cols-2"><div><label className="mb-2 block text-sm font-medium">{teamName(selectedSeason, editingMatch.homeTeamId)}</label><input type="number" min="0" value={editingMatch.homeGoals ?? ""} onChange={(e)=>updateMatch(editingMatch.id, "homeGoals", e.target.value)} className="w-full rounded-2xl border border-slate-300 px-3 py-2" /></div><div><label className="mb-2 block text-sm font-medium">{teamName(selectedSeason, editingMatch.awayTeamId)}</label><input type="number" min="0" value={editingMatch.awayGoals ?? ""} onChange={(e)=>updateMatch(editingMatch.id, "awayGoals", e.target.value)} className="w-full rounded-2xl border border-slate-300 px-3 py-2" /></div></div><div className="mt-6 flex justify-end"><button onClick={()=>setEditingMatchId(null)} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">Guardar</button></div></div></div>}
        {editingScorer && <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"><div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl"><div className="mb-4 flex items-start justify-between gap-4"><div><h3 className="text-xl font-bold">Editar jugador</h3><p className="text-sm text-slate-500">{editingScorer.player}</p></div><button className="text-slate-500" onClick={()=>setEditingScorerId(null)}>✕</button></div><div className="space-y-4"><div><label className="mb-2 block text-sm font-medium">Nombre</label><input value={editingScorer.player} onChange={(e)=>updateScorer(editingScorer.id, "player", e.target.value)} className="w-full rounded-2xl border border-slate-300 px-3 py-2" /></div><div><label className="mb-2 block text-sm font-medium">Goles</label><input type="number" min="0" value={editingScorer.goals} onChange={(e)=>updateScorer(editingScorer.id, "goals", e.target.value)} className="w-full rounded-2xl border border-slate-300 px-3 py-2" /></div></div><div className="mt-6 flex justify-end"><button onClick={()=>setEditingScorerId(null)} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">Guardar</button></div></div></div>}
      </div>
    </div>
  );
}
