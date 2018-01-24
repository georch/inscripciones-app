<template>
  <div class="notification" :class="classType">
    <button @click="triggerClose(notification)" class="delete" aria-label="Close notification" type="button"></button>
    {{ notification.text }}
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: [
    'notification',
  ],
  data() {
    return {
      timer: null,
    };
  },
  created() {
    const timeout = Object.prototype.hasOwnProperty.call(this.notification, 'timeout') ? this.notification.timeout : true;
    if (timeout) {
      const delay = this.notification.delay || 4000;
      this.timer = setTimeout(() => {
        this.triggerClose(this.notification);
      }, delay);
    }
  },
  methods: {
    triggerClose(notification) {
      clearTimeout(this.timer);
      this.$store.commit('removeNotification', notification);
    },
  },
  computed: {
    classType() {
      switch (this.notification.type) {
        case 'info':
          return 'is-info';
        case 'success':
          return 'is-success';
        case 'alert':
          return 'is-danger';
        default:
          return 'is-info';
      }
    },
  },
};
</script>
