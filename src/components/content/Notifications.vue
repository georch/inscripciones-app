<template>
  <div class="notifications">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-8">
          <notification
            v-for="(notification, index) in notifications"
            :notification="notification"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Notification from '@/components/content/Notification';

export default {
  name: 'Notifications',
  components: {
    Notification,
  },
  data() {
    return {
      notifications: this.$store.state.notifications,
    };
  },
};
</script>
