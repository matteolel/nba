/** Declaration file generated by dts-gen */

export const players: {
    downcaseName: string;
    firstName: string;
    fullName: string;
    lastName: string;
    playerId: number;
    teamId: number;
}[];

export const teams: {
    abbreviation: string;
    location: string;
    simpleName: string;
    teamId: number;
    teamName: string;
}[];

export function allTimePlayers(): Promise<{
    playerId: number;
    fullName: string;
    activeBetween: number[];
    firstName: string;
    lastName: string;
}[]>;

export function allTimeTeams(): Promise<{
    teamId: number;
    abbreviation: string;
    simpleName: string;
    location: string;
    teamName: string;
}[]>;

export function findPlayer(str: any): any;

export function playerIdFromName(name: any): any;

export function searchPlayers(str: any): any;

export function teamIdFromName(name: any): any;

export function updatePlayers(): any;

export function updateTeams(): any;

export namespace data {
    function boxScore(date: any, gameId: any): void;

    function coaches(season: any): void;

    function leadTracker(date: any, gameId: any, period: any): void;

    function playByPlay(date: any, gameId: any): void;

    function playoffsBracket(season: any): void;

    function previewArticle(date: any, gameId: any): void;

    function recapArticle(date: any, gameId: any): void;

    function schedule(season: any): void;

    function scoreboard(date: any): void;

    function teamLeaders(season: any, teamId: any): void;

    function teamSchedule(season: any, teamId: any): void;

    function teamStatsRankings(season: any): void;

    function withTransport(newTransport: any): void;

    namespace boxScore {
        const defaults: {
            date: any;
            gameId: any;
        };

    }

    namespace coaches {
        const defaults: {
            season: any;
        };

    }

    namespace leadTracker {
        const defaults: {
            date: any;
            gameId: any;
            period: any;
        };

    }

    namespace playByPlay {
        const defaults: {
            date: any;
            gameId: any;
        };

    }

    namespace playoffsBracket {
        const defaults: {
            season: any;
        };

    }

    namespace previewArticle {
        const defaults: {
            date: any;
            gameId: any;
        };

    }

    namespace recapArticle {
        const defaults: {
            date: any;
            gameId: any;
        };

    }

    namespace schedule {
        const defaults: {
            season: any;
        };

    }

    namespace scoreboard {
        const defaults: {
            date: any;
        };

    }

    namespace teamLeaders {
        const defaults: {
            season: any;
            teamId: any;
        };

    }

    namespace teamSchedule {
        const defaults: {
            season: any;
            teamId: any;
        };

    }

    namespace teamStatsRankings {
        const defaults: {
            season: any;
        };

    }

}

export namespace sportVu {
    function catchShoot(): any;

    function defense(): any;

    function drives(): any;

    function passing(): any;

    function pullUpShoot(): any;

    function rebounding(): any;

    function shooting(): any;

    function speed(): any;

    function touches(): any;

    function withTransport(): any;

    namespace catchShoot {
        const defaults: {
            season: number;
        };

        const params: string[];

    }

    namespace defense {
        const defaults: {
            season: number;
        };

        const params: string[];

    }

    namespace drives {
        const defaults: {
            season: number;
        };

        const params: string[];

    }

    namespace passing {
        const defaults: {
            season: number;
        };

        const params: string[];

    }

    namespace pullUpShoot {
        const defaults: {
            season: number;
        };

        const params: string[];

    }

    namespace rebounding {
        const defaults: {
            season: number;
        };

        const params: string[];

    }

    namespace shooting {
        const defaults: {
            season: number;
        };

        const params: string[];

    }

    namespace speed {
        const defaults: {
            season: number;
        };

        const params: string[];

    }

    namespace touches {
        const defaults: {
            season: number;
        };

        const params: string[];

    }

}

export namespace stats {
    function assistTracker(query: any): any;

    function boxScore(query: any): any;

    function boxScoreSummary(query: any): any;

    function commonTeamRoster(query: any): any;

    function homepageV2(query: any): any;

    function leagueGameLog(query: any): any;

    function leagueLeaders(query: any): any;

    function leagueStandings(query: any): any;

    function lineups(query: any): any;

    function playByPlay(query: any): any;

    function playerClutch(query: any): any;

    function playerCompare(query: any): any;

    function playerHustle(query: any): any;

    function playerHustleLeaders(query: any): any;

    function playerInfo(query: any): any;

    function playerProfile(query: any): any;

    function playerShooting(query: any): any;

    function playerSplits(query: any): any;

    function playerStats(query: any): any;

    function playerTracking(query: any): any;

    function playersInfo(query: any): any;

    function scoreboard(query: any): any;

    function shots(query: any): any;

    function teamClutch(query: any): any;

    function teamHistoricalLeaders(query: any): any;

    function teamHustle(query: any): any;

    function teamHustleLeaders(query: any): any;

    function teamInfoCommon(query: any): any;

    function teamPlayerDashboard(query: any): any;

    function teamPlayerOnOffDetails(query: any): any;

    function teamShooting(query: any): any;

    function teamSplits(query: any): any;

    function teamStats(query: any): any;

    function teamYears(query: any): any;

    function withTransport(transport: any): any;

    namespace assistTracker {
        const defaults: {
            LeagueID: string;
            PerMode: string;
            Season: string;
            SeasonType: string;
        };

        const parameters: string[];

    }

    namespace boxScore {
        const defaults: {
            EndPeriod: string;
            EndRange: string;
            GameID: string;
            RangeType: string;
            Season: string;
            SeasonType: string;
            StartPeriod: string;
            StartRange: string;
        };

        const parameters: string[];

    }

    namespace boxScoreSummary {
        const defaults: {
            EndPeriod: string;
            EndRange: string;
            GameID: string;
            RangeType: string;
            Season: string;
            SeasonType: string;
            StartPeriod: string;
            StartRange: string;
        };

        const parameters: string[];

    }

    namespace commonTeamRoster {
        const defaults: {
            LeagueID: string;
            Season: string;
            TeamID: string;
        };

        const parameters: string[];

    }

    namespace homepageV2 {
        const defaults: {
            GameScope: string;
            LeagueID: string;
            PlayerOrTeam: string;
            PlayerScope: string;
            Season: string;
            SeasonType: string;
            StatType: string;
        };

        const parameters: string[];

    }

    namespace leagueGameLog {
        const defaults: {
            Counter: string;
            DateFrom: string;
            DateTo: string;
            Direction: string;
            LeagueID: string;
            PlayerOrTeam: string;
            Season: string;
            SeasonType: string;
            Sorter: string;
        };

        const parameters: string[];

    }

    namespace leagueLeaders {
        const defaults: {
            LeagueID: string;
            PerMode: string;
            Scope: string;
            Season: string;
            SeasonType: string;
            StatCategory: string;
        };

        const parameters: string[];

    }

    namespace leagueStandings {
        const defaults: {
            LeagueID: string;
            Season: string;
            SeasonType: string;
        };

        const parameters: string[];

    }

    namespace lineups {
        const defaults: {
            Conference: string;
            DateFrom: string;
            DateTo: string;
            Division: string;
            GameSegment: string;
            GroupQuantity: string;
            LastNGames: string;
            LeagueID: string;
            Location: string;
            MeasureType: string;
            Month: string;
            OpponentTeamID: string;
            Outcome: string;
            PORound: string;
            PaceAdjust: string;
            PerMode: string;
            Period: string;
            PlusMinus: string;
            Rank: string;
            Season: string;
            SeasonSegment: string;
            SeasonType: string;
            ShotClockRange: string;
            TeamID: string;
            VsConference: string;
            VsDivision: string;
        };

        const parameters: string[];

    }

    namespace playByPlay {
        const defaults: {
            EndPeriod: string;
            GameID: string;
            StartPeriod: string;
        };

        const parameters: string[];

    }

    namespace playerClutch {
        const defaults: {
            AheadBehind: string;
            ClutchTime: string;
            College: string;
            Conference: string;
            Country: string;
            DateFrom: string;
            DateTo: string;
            Division: string;
            DraftPick: string;
            DraftYear: string;
            GameScope: string;
            GameSegment: string;
            Height: string;
            LastNGames: string;
            LeagueID: string;
            Location: string;
            MeasureType: string;
            Month: string;
            OpponentTeamID: string;
            Outcome: string;
            PORound: string;
            PaceAdjust: string;
            PerMode: string;
            Period: string;
            PlayerExperience: string;
            PlayerPosition: string;
            PlusMinus: string;
            PointDiff: string;
            Rank: string;
            Season: string;
            SeasonSegment: string;
            SeasonType: string;
            ShotClockRange: string;
            StarterBench: string;
            TeamID: string;
            VsConference: string;
            VsDivision: string;
            Weight: string;
        };

        const parameters: string[];

    }

    namespace playerCompare {
        const defaults: {
            DateFrom: string;
            DateTo: string;
            GameSegment: string;
            LastNGames: string;
            LeagueID: string;
            Location: string;
            MeasureType: string;
            Month: string;
            OpponentTeamID: string;
            Outcome: string;
            PaceAdjust: string;
            PerMode: string;
            Period: string;
            PlayerIDList: string;
            PlusMinus: string;
            Rank: string;
            Season: string;
            SeasonSegment: string;
            SeasonType: string;
            VsConference: string;
            VsDivision: string;
            VsPlayerIDList: string;
        };

        const parameters: string[];

    }

    namespace playerHustle {
        const defaults: {
            College: string;
            Conference: string;
            Country: string;
            DateFrom: string;
            DateTo: string;
            Division: string;
            DraftPick: string;
            DraftYear: string;
            GameScope: string;
            GameSegment: string;
            Height: string;
            LastNGames: string;
            LeagueID: string;
            Location: string;
            Month: string;
            OpponentTeamID: string;
            Outcome: string;
            PORound: string;
            PaceAdjust: string;
            PerMode: string;
            Period: string;
            PlayerExperience: string;
            PlayerPosition: string;
            PlusMinus: string;
            Rank: string;
            Season: string;
            SeasonSegment: string;
            SeasonType: string;
            ShotClockRange: string;
            StarterBench: string;
            TeamID: string;
            VsConference: string;
            VsDivision: string;
            Weight: string;
        };

        const parameters: string[];

    }

    namespace playerHustleLeaders {
        const defaults: {
            GameScope: string;
            LeagueID: string;
            PerMode: string;
            PlayerOrTeam: string;
            PlayerScope: string;
            Season: string;
            SeasonType: string;
        };

        const parameters: string[];

    }

    namespace playerInfo {
        const defaults: {
            LeagueID: string;
            PlayerID: string;
            SeasonType: string;
        };

        const parameters: string[];

    }

    namespace playerProfile {
        const defaults: {
            LeagueID: string;
            PerMode: string;
            PlayerID: string;
        };

        const parameters: string[];

    }

    namespace playerShooting {
        const defaults: {
            CloseDefDistRange: string;
            College: string;
            Conference: string;
            Country: string;
            DateFrom: string;
            DateTo: string;
            Division: string;
            DraftPick: string;
            DraftYear: string;
            DribbleRange: string;
            GameScope: string;
            GameSegment: string;
            GeneralRange: string;
            Height: string;
            LastNGames: string;
            LeagueID: string;
            Location: string;
            Month: string;
            OpponentTeamID: string;
            Outcome: string;
            PORound: string;
            PaceAdjust: string;
            PerMode: string;
            Period: string;
            PlayerExperience: string;
            PlayerPosition: string;
            PlusMinus: string;
            Rank: string;
            Season: string;
            SeasonSegment: string;
            SeasonType: string;
            ShotClockRange: string;
            ShotDistRange: string;
            StarterBench: string;
            TeamID: string;
            TouchTimeRange: string;
            VsConference: string;
            VsDivision: string;
            Weight: string;
        };

        const parameters: string[];

    }

    namespace playerSplits {
        const defaults: {
            DateFrom: string;
            DateTo: string;
            GameSegment: string;
            LastNGames: string;
            LeagueID: string;
            Location: string;
            MeasureType: string;
            Month: string;
            OpponentTeamID: string;
            Outcome: string;
            PaceAdjust: string;
            PerMode: string;
            Period: string;
            PlayerID: string;
            PlusMinus: string;
            Rank: string;
            Season: string;
            SeasonSegment: string;
            SeasonType: string;
            VsConference: string;
            VsDivision: string;
        };

        const parameters: string[];

    }

    namespace playerStats {
        const defaults: {
            College: string;
            Conference: string;
            Country: string;
            DateFrom: string;
            DateTo: string;
            Division: string;
            DraftPick: string;
            DraftYear: string;
            GameScope: string;
            GameSegment: string;
            Height: string;
            LastNGames: string;
            LeagueID: string;
            Location: string;
            MeasureType: string;
            Month: string;
            OpponentTeamID: string;
            Outcome: string;
            PORound: string;
            PaceAdjust: string;
            PerMode: string;
            Period: string;
            PlayerExperience: string;
            PlayerPosition: string;
            PlusMinus: string;
            Rank: string;
            Season: string;
            SeasonSegment: string;
            SeasonType: string;
            ShotClockRange: string;
            StarterBench: string;
            TeamID: string;
            VsConference: string;
            VsDivision: string;
            Weight: string;
        };

        const parameters: string[];

    }

    namespace playerTracking {
        const defaults: {
            DateFrom: string;
            DateTo: string;
            GameScope: string;
            LastNGames: string;
            Location: string;
            Month: string;
            OpponentTeamID: string;
            Outcome: string;
            PerMode: string;
            PlayerExperience: string;
            PlayerOrTeam: string;
            PlayerPosition: string;
            PtMeasureType: string;
            Season: string;
            SeasonSegment: string;
            SeasonType: string;
            StarterBench: string;
            VsConference: string;
            VsDivision: string;
        };

        const parameters: string[];

    }

    namespace playersInfo {
        const defaults: {
            IsOnlyCurrentSeason: string;
            LeagueID: string;
            Season: string;
        };

        const parameters: string[];

    }

    namespace scoreboard {
        const defaults: {
            DayOffset: string;
            LeagueID: string;
            gameDate: string;
        };

        const parameters: string[];

    }

    namespace shots {
        const defaults: {
            AllStarSeason: string;
            ContextMeasure: string;
            DateFrom: string;
            DateTo: string;
            GameID: string;
            GameScope: string;
            GameSegment: string;
            LastNGames: string;
            LeagueID: string;
            Location: string;
            MeasureType: string;
            Month: string;
            OpponentTeamID: string;
            Outcome: string;
            PaceAdjust: string;
            PerMode: string;
            Period: string;
            PlayerExperience: string;
            PlayerID: string;
            PlayerPosition: string;
            PlusMinus: string;
            Position: string;
            Rank: string;
            RookieYear: string;
            Season: string;
            SeasonSegment: string;
            SeasonType: string;
            StarterBench: string;
            TeamID: string;
            VsConference: string;
            VsDivision: string;
        };

        const parameters: string[];

    }

    namespace teamClutch {
        const defaults: {
            AheadBehind: string;
            ClutchTime: string;
            Conference: string;
            DateFrom: string;
            DateTo: string;
            Division: string;
            GameScope: string;
            GameSegment: string;
            LastNGames: string;
            LeagueID: string;
            Location: string;
            MeasureType: string;
            Month: string;
            OpponentTeamID: string;
            Outcome: string;
            PORound: string;
            PaceAdjust: string;
            PerMode: string;
            Period: string;
            PlayerExperience: string;
            PlayerPosition: string;
            PlusMinus: string;
            PointDiff: string;
            Rank: string;
            Season: string;
            SeasonSegment: string;
            SeasonType: string;
            ShotClockRange: string;
            StarterBench: string;
            TeamID: string;
            VsConference: string;
            VsDivision: string;
        };

        const parameters: string[];

    }

    namespace teamHistoricalLeaders {
        const defaults: {
            LeagueID: string;
            Season: string;
            TeamID: string;
        };

        const parameters: string[];

    }

    namespace teamHustle {
        const defaults: {
            College: string;
            Conference: string;
            Country: string;
            DateFrom: string;
            DateTo: string;
            Division: string;
            DraftPick: string;
            DraftYear: string;
            GameScope: string;
            GameSegment: string;
            Height: string;
            LastNGames: string;
            LeagueID: string;
            Location: string;
            Month: string;
            OpponentTeamID: string;
            Outcome: string;
            PORound: string;
            PaceAdjust: string;
            PerMode: string;
            Period: string;
            PlayerExperience: string;
            PlayerPosition: string;
            PlusMinus: string;
            Rank: string;
            Season: string;
            SeasonSegment: string;
            SeasonType: string;
            ShotClockRange: string;
            StarterBench: string;
            TeamID: string;
            VsConference: string;
            VsDivision: string;
            Weight: string;
        };

        const parameters: string[];

    }

    namespace teamHustleLeaders {
        const defaults: {
            GameScope: string;
            LeagueID: string;
            PerMode: string;
            PlayerOrTeam: string;
            PlayerScope: string;
            Season: string;
            SeasonType: string;
        };

        const parameters: string[];

    }

    namespace teamInfoCommon {
        const defaults: {
            LeagueID: string;
            Season: string;
            SeasonType: string;
            TeamID: string;
        };

        const parameters: string[];

    }

    namespace teamPlayerDashboard {
        const defaults: {
            DateFrom: string;
            DateTo: string;
            GameSegment: string;
            LastNGames: string;
            LeagueID: string;
            Location: string;
            MeasureType: string;
            Month: string;
            OpponentTeamID: string;
            Outcome: string;
            PaceAdjust: string;
            PerMode: string;
            Period: string;
            PlusMinus: string;
            Rank: string;
            Season: string;
            SeasonSegment: string;
            TeamID: string;
            VsConference: string;
            VsDivision: string;
        };

        const parameters: string[];

    }

    namespace teamPlayerOnOffDetails {
        const defaults: {
            DateFrom: string;
            DateTo: string;
            GameSegment: string;
            LastNGames: string;
            LeagueID: string;
            Location: string;
            MeasureType: string;
            Month: string;
            OpponentTeamID: string;
            Outcome: string;
            PaceAdjust: string;
            PerMode: string;
            Period: string;
            PlusMinus: string;
            Rank: string;
            Season: string;
            SeasonSegment: string;
            SeasonType: string;
            TeamID: string;
            VsConference: string;
            VsDivision: string;
        };

        const parameters: string[];

    }

    namespace teamShooting {
        const defaults: {
            CloseDefDistRange: string;
            College: string;
            Conference: string;
            Country: string;
            DateFrom: string;
            DateTo: string;
            Division: string;
            DraftPick: string;
            DraftYear: string;
            DribbleRange: string;
            GameScope: string;
            GameSegment: string;
            GeneralRange: string;
            Height: string;
            LastNGames: string;
            LeagueID: string;
            Location: string;
            Month: string;
            OpponentTeamID: string;
            Outcome: string;
            PORound: string;
            PaceAdjust: string;
            PerMode: string;
            Period: string;
            PlayerExperience: string;
            PlayerPosition: string;
            PlusMinus: string;
            Rank: string;
            Season: string;
            SeasonSegment: string;
            SeasonType: string;
            ShotClockRange: string;
            ShotDistRange: string;
            StarterBench: string;
            TeamID: string;
            TouchTimeRange: string;
            VsConference: string;
            VsDivision: string;
            Weight: string;
        };

        const parameters: string[];

    }

    namespace teamSplits {
        const defaults: {
            DateFrom: string;
            DateTo: string;
            GameScope: string;
            GameSegment: string;
            LastNGames: string;
            LeagueID: string;
            Location: string;
            MeasureType: string;
            Month: string;
            OpponentTeamID: string;
            Outcome: string;
            PaceAdjust: string;
            PerMode: string;
            Period: string;
            PlusMinus: string;
            Rank: string;
            Season: string;
            SeasonSegment: string;
            SeasonType: string;
            TeamID: string;
            VsConference: string;
            VsDivision: string;
        };

        const parameters: string[];

    }

    namespace teamStats {
        const defaults: {
            AllStarSeason: string;
            DateFrom: string;
            DateTo: string;
            GameScope: string;
            GameSegment: string;
            LastNGames: string;
            LeagueID: string;
            Location: string;
            MeasureType: string;
            Month: string;
            OpponentTeamID: string;
            Outcome: string;
            PaceAdjust: string;
            PerMode: string;
            Period: string;
            PlayerExperience: string;
            PlayerPosition: string;
            PlusMinus: string;
            Rank: string;
            Season: string;
            SeasonSegment: string;
            SeasonType: string;
            StarterBench: string;
            VsConference: string;
            VsDivision: string;
        };

        const parameters: string[];

    }

    namespace teamYears {
        const defaults: {
            LeagueID: string;
        };

        const parameters: string[];

    }

}

export namespace synergy {
    function playerPlayType(query: any): any;

    function teamPlayType(query: any): any;

    function withTransport(transport: any): any;

    namespace playerPlayType {
        const defaults: {
            category: any;
            limit: number;
            name: string;
            season: number;
            seasonType: string;
        };

    }

    namespace teamPlayType {
        const defaults: {
            category: any;
            limit: number;
            name: string;
            season: number;
            seasonType: string;
        };

    }

}
