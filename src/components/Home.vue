<template>
	<div class="home">
		<form action="#" class="join" @submit.prevent="join">
			<h1>Start chating</h1>

			<label for="room" class="label">Room ID</label>
			<input type="text" name="room" id="room" class="input" v-model.trim="room" placeholder="e.g. abc">

			<label for="name" class="label">Your name</label>
			<input type="text" name="name" id="name" class="input" v-model.trim="name">
			<button type="submit" class="button button--primary">Join</button>
		</form>
	</div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import uuid from 'uuid/v4'
  import SimpleWebRTC from 'simplewebrtc'

  export default {
    name: 'home',
    data () {
      return {
        room: this.$route.query.room || uuid(),
        name: ''
      }
    },
    methods: {
      ...mapMutations({
        setMeName: 'setMeName'
      }),
      join () {
        this.setMeName(this.name)

        window.webrtc = new SimpleWebRTC({
          localVideoEl: '',
          remoteVideosEl: '',
          autoRequestMedia: true,
          nick: this.name
        })

        this.$router.push({
          name: 'room',
          params: {
            room: this.room
          }
        })
      }
    },
  }
</script>

<style lang="scss">

	.home {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.join {
		width: 100%;
		max-width: 400px;
	}
</style>