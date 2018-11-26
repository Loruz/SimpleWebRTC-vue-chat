<template>
	<div class="hello">
		<h1>{{ room }}</h1>
	</div>
</template>

<script>

  import { mapGetters } from 'vuex'

  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    computed: {
      ...mapGetters({
        room: 'getRoom'
      })
    }
  }
</script>