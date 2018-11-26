export const setMeName = (state, name) => {
  state.state.name = name
}

export const setMuted = (state, value) => {
  state.state.muted = value
}

export const setPaused = (state, value) => {
  state.state.paused = value
}

export const addPeer = (state, {video , peer}) => {
  state.clients.push({video, peer})
}

export const removePeer = (state, peer) => {
  state.clients = state.clients.filter(client => client.peer.id !== peer.id)
}