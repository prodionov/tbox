import { addUser } from "../utils/addUser";
const SELECT_TEAM = "SELECT_TEAM";

export const selectTeamAction = team => {
  return function(dispatch) {
    addUser("./winners", team).then(response => {
      console.log("response", response);
      if (response.result !== "failure") {
        let games = response.result.rows;
        let defeatedTeams = games.reduce((acc, game) => {
          if (team.team !== game.home_team) {
          }
          if (team.team !== game.home_team) {
            acc.push([game.game_date, game.home_team]);
          } else {
            acc.push([game.game_date, game.away_team]);
          }
          return acc;
        }, []);
        dispatch({
          type: SELECT_TEAM,
          payload: defeatedTeams
        });
      }
    });
  };
};

let initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_TEAM:
      return [
        {
          teams: action.payload
        }
      ];
    default:
      return state;
  }
}
