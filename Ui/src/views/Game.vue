<script setup lang="ts">
    import Phaser from 'phaser';
    import {ref} from 'vue';

    const spritePosition = ref({x:0, y: 0});

    const moveSprite = () => {
        spritePosition.x++;
        spritePosition.y++;
    }
</script>

<script lang="ts">
    class Hello extends Phaser.Scene {
        preload() {
            this.load.setBaseURL('https://labs.phaser.io');
            this.load.image('sky', 'assets/skies/space3.png');
            this.load.image('logo', 'assets/sprites/phaser3-logo.png');
            this.load.image('red', 'assets/particles/red.png');
        }

        create() {
            this.add.image(400, 300, 'sky');

            const particles = this.add.particles(0, 0, 'red', {
                speed: 100,
                scale: { start: 1, end: 0 },
                blendMode: 'ADD'
            });

            const logo = this.physics.add.image(400, 100, 'logo');

            logo.setVelocity(100, 200);
            logo.setBounce(1, 1);
            logo.setCollideWorldBounds(true);

            particles.startFollow(logo);
        }
    }

    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: Hello,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {y:200}
            }
        }
    };

    const game = new Phaser.Game(config);
</script>

<style src="../styles/Game.css"></style>
<template>
    <div class="game-container">
        <p class="title-text">FORTE!</p>
    </div>
</template>