export const selectAIOPlayers = (state: any) =>
    state.players.filter((player: any) =>
        player.interaction === 'AIO');

export const selectHTPlayers = (state: any) =>
    state.players.filter((player: any) =>
        player.interaction === 'HT');

export const selectSatellitePlayers = (state: any) =>
    state.players.filter((player: any) => player.satellite);

export default {
    selectAIOPlayers, selectHTPlayers, selectSatellitePlayers
};
