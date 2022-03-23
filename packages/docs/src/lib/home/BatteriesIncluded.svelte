<script>
  import ThreeDDark from '$lib/icons/3DDark.svelte';
  import AnimationsDark from '$lib/icons/AnimationsDark.svelte';
  import PseudoDark from '$lib/icons/PseudoDark.svelte';

  let active = 'spacing';

  function handleClick(next) {
    active = next;
  }
</script>

<div>
  <div class="selector">
    <button on:click={() => handleClick('spacing')} data-active={'spacing' === active}>
      <ThreeDDark />
    </button>
    <button on:click={() => handleClick('colors')} data-active={'colors' === active}>
      <AnimationsDark />
    </button>
    <button on:click={() => handleClick('typography')} data-active={'typography' === active}>
      <PseudoDark />
    </button>
  </div>
</div>

<style lang="scss">
  @use 'src/bridge.scss' as *;

  .selector {
    display: flex;
    @include space-x(3);

    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 28px;
      padding: 0;
        border: 2px solid $slate-500;

      &[data-active='true'] {
        border: 2px solid $blue-500;
      }
    }
  }
</style>
