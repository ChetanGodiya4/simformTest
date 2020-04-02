import { VIDEO_FETCH, VIDEO_FETCH_MORE } from "../../types/allTypes";

async function Api() {
  return fetch("https://private-c31a5-task27.apiary-mock.com/videos")
    .then(res => res.json())
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
}
export function fetchVideo(more = "") {
  return dispatch => {
    return Api()
      .then(res => {
        if (more == "more") {
          dispatch(fetchMore(res));
        } else {
          return dispatch(addMore(res));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
}
function fetchMore(data) {
  return {
    type: VIDEO_FETCH_MORE,
    data
  };
}

function addMore(data) {
  return {
    type: VIDEO_FETCH,
    data
  };
}
