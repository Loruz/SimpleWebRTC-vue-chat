<template>
	<ul class="controls">
		<li class="controls__item">
			<a href="" class="controls__link" v-if="state.muted" @click.prevent="unmuteMe">
				Unmute me
			</a>
			<a href="" class="controls__link" v-else @click.prevent="muteMe">
				Mute me
			</a>
		</li>
		<li class="controls__item" v-if="state.paused">
			<a href="" class="controls__link" @click.prevent="unpauseMe">
				Unpause video
			</a>
		</li>
		<li class="controls__item" v-else>
			<a href="" class="controls__link" @click.prevent="pauseMe">Pause video</a>
		</li>
	</ul>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    methods: {
      ...mapMutations({
        setMuted: 'setMuted',
        setPaused: 'setPaused'
      }),
      muteMe () {
        window.webrtc.mute()
        this.setMuted(true)
      },
      pauseMe () {
        window.webrtc.pause()
        this.setPaused(true)
      },
      unmuteMe () {
        window.webrtc.unmute()
        this.setMuted(false)
      },
      unpauseMe () {
        window.webrtc.resume()
        this.setPaused(false)
        this.setMuted(false)
      }
    },
    computed: {
      ...mapGetters({
        state: 'getState'
      })
    }
  }
</script>

<style lang="scss">
	.controls {
		position: fixed;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		background-color: #2b9cf2;
		margin: 0;
		padding: 0;
		list-style: none;

		&__item {
			font-weight: 600;
			flex: 1;
			border-right: 1px solid #0e83dc;
		}

		&__link {
			color: #fff;
			display: block;
			text-align: center;
			text-decoration: none;
			padding: 15px 18px;
			height: 100%;
			width: 100%;
		}
	}
</style>