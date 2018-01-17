<template>
  <div class="field" :class="layout">
    <div v-if="label && layout" class="field-label" :class="classInput">
      <label class="label">{{ label }}</label>
    </div>
    <label v-if="label && !layout" class="label">{{ label }}</label>
    <div class="field-body">
      <div class="field">
        <div :class="classControl" class="control">
          <input
            v-validate="rules"
            :data-vv-as="vvAS"
            :name="name"
            :placeholder="placeholder"
            :class="classInput"
            :type="type"
            @input="$emit('input', $event.target.value)"
            class="input"
          >
          <span v-if="icon" class="icon is-left">
            <i :class="icon" class="fas"></i>
          </span>
          <span v-if="errors.first(name)" class="icon is-right">
            <i :class="classIconStatus" class="fas"></i>
          </span>
        </div>
        <div class="help">{{ helpMsg }}</div>
        <div
          :class="classStatus"
          v-if="errors.first(name)"
          class="help"
        >
          {{ errors.first(name) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: {
    $validator: '$validator',
  },
  name: 'InputField',
  props: [
    'helpMsg',
    'icon',
    'label',
    'layout',
    'name',
    'placeholder',
    'rules',
    'size',
    'type',
    'vvAS',
  ],
  computed: {
    classControl() {
      return {
        'has-icons-left': this.icon,
        'has-icons-right': this.errors.first(this.name),
      };
    },
    classIconStatus() {
      return {
        'fa-exclamation-triangle': this.errors.first(this.name),
      };
    },
    classInput() {
      return {
        'is-small': this.size === 'small',
        'is-large': this.size === 'large',
        'is-danger': this.errors.first(this.name),
      };
    },
    classStatus() {
      return {
        'is-danger': this.errors.first(this.name),
      };
    },
  },
};
</script>
