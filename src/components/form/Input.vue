<template>
	<div class="extInput">
		<label class="text-primary" v-if="hasLabel">{{label}}</label>
		<b-form-input :type="type" :id="id" :value="value" :placeholder="placeholder" :state="state"
		              @input="handleInput" @blur="checkValidation" :class="className" />
		<b-form-invalid-feedback>{{error}}</b-form-invalid-feedback>
	</div>
</template>

<script>

  export default ({
    name: "Input",

    props: {
      label: String,
      id: String,
      name: String,
      type: String,
      placeholder: String,

      className: String,
      value: {},
      validation: {
        type: Object,
        default: undefined
      }
    },

    data() {
      return {
        texts: {
          email: 'Email is not correct',
          required: 'This field is required'
        },
        checked: false,
        error: ''
      }
    },
    computed: {
      hasLabel() {
        return this.label !== undefined
      },
      hasValidation() {
        return this.validation !== undefined
      },
      state() {
        if(!this.hasValidation) {
          return null
        }
        if(!this.checked) {
          return null
        } else {
          return !this.validation.$invalid
        }
      }
    },

    methods: {
      handleInput(val) {
        if(this.hasValidation) {
          this.checked = false;
        }

        this.$emit('input', val)
      },

      constructErrors() {
        const params = this.validation.$params;
        const errors = Object.keys(params).reduce((accumulator, key) => {
          if(!this.validation[key]) {
            const options = {};
            if(key === 'minLength') {
              options.length = params.minLength.min
            }
            const text = this.texts[key];
            accumulator.push(text);
          }
          return accumulator
        }, []);
        return errors.join('. ');
      },

      checkValidation() {
        if(!this.hasValidation) return;
        this.checked = true;
        if(this.validation.$invalid) {
          this.error = this.constructErrors()
        } else {
          this.error = ''
        }
        this.$emit('check-validation')
      }
    }
  })
</script>
