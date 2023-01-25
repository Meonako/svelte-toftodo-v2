<video autoplay loop muted playsinline src="/bg.mp4" />

<style>
    video {
        position: fixed;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

    @media (min-aspect-ratio: 16/9) {
        video {
            width: 100%;
            height: auto;
        }
    }

    @media (max-aspect-ratio: 16/9) {
        video {
            width: auto;
            height: 100%;
        }
    }
</style>