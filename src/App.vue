<script setup lang="ts">
import { Bugfender } from '@bugfender/sdk'
import Button from './components/Button.vue'

function printLog(): void {
  Bugfender.log('Hello Vue!');
}

async function showFeedback(): Promise<void> {
  const result = await Bugfender.getUserFeedback({
    title: 'What do you think about Vue + Bugfender integration?'
  });

  if (result.isSent) {
    Bugfender.log(`Feedback sent! This is the URL: ${result.feedbackURL}`);
  }
}
</script>

<template>
  <main>
      <div class="logos">
        <img class="logos__logo logos__logo--vue" src="./assets/vue-logo.svg"/>
        <span class="logos__plus">+</span>
        <img class="logos__logo logos__logo--bf" src="./assets/bugfender-shield.svg"/>
      </div>
      <Button @click="printLog">Log</Button>
      <Button @click="showFeedback">Show Feedback</Button>
      <p>You can find <code>@bugfender/sdk</code> <strong>API reference</strong> here: <a href="https://js.bugfender.com" target="_blank">https://js.bugfender.com</a></p>
  </main>
</template>

<style scoped lang="scss">
main {
  width: 100%;
  max-width: 300px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  p {
    margin-top: 12px;
    text-align: center;

    strong {
      font-weight: bolder;
    }
  }
}

.logos {
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  margin-bottom: 16px;

  &__plus {
    font-size: 40px;
    font-weight: bold;
    margin: 0 8px 0 0;
  }

  &__logo {
    display: block;

    &--vue { height: 50px; }
    &--bf { height: 60px; }
  }
}
</style>
