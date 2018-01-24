export default {
  methods: {
    $notify(options) {
      this.$store.commit(
        'addNotification',
        Object.assign({
          type: 'info',
          timeout: true,
          delay: 4000,
        }, options),
      );
    },

    $success(text, options = {}) {
      this.$store.commit(
        'addNotification',
        Object.assign({
          text,
          type: 'success',
          timeout: true,
        }, options),
      );
    },

    $error(text, options = {}) {
      this.$store.commit(
        'addNotification',
        Object.assign({
          text,
          type: 'alert',
          timeout: false,
        }, options),
      );
    },
  },
};
