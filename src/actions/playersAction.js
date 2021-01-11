import axios from "axios";
import { playersURL } from "../api";

//Action Creator

export const loadPlayers = () => async (dispatch) => {
  //FETCH AXIOS
  const playersData = await axios.get(playersURL());
  dispatch({
    type: "FETCH_PLAYERS",
    payload: {
      players: playersData.data,
    },
  });
};
