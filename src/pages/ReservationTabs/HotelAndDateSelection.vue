<template>
  <form>
    <select v-model="form.hotel_id" class="form-select" @change="maxAdultSize(); maximumChildSize()">
      <option :value="null" selected disabled>
        {{ $t('reservation.reservation_placeholder') }}
      </option>
      <option v-for="hotelList in hotelLists" :key="hotelList.id" :value="hotelList.id">
        {{ hotelList.hotel_name }}
      </option>
    </select>

    <div class="col-md-12 mt-3">
      <div class="row">
        <div class="col-md-3">
          <label for="start-date" class="form-label">{{ $t('reservation.start_date') }}</label>
          <date-picker
            id="start-date"
            v-model="form.start_date"
            format="dd-MM-yyyy"
            :calendar-button="true"
            calendar-button-icon="fas fa-calendar-alt"
          />
        </div>
        <div class="col-md-3">
          <label for="end-date" class="form-label">{{ $t('reservation.end_date') }}</label>
          <date-picker
            id="end-date"
            v-model="form.end_date"
            format="dd-MM-yyyy"
            :calendar-button="true"
            calendar-button-icon="fas fa-calendar-alt"
          />
        </div>
        <div class="col-md-3">
          <label for="number-of-adults" class="form-label">{{ $t('reservation.number_of_adults') }}</label>
          <input id="number-of-adults" v-model="form.adult" class="form-control" type="number" :min="0" :max="maximumAdultSize">
        </div>
        <div class="col-md-3">
          <label for="number-of-children" class="form-label">{{ $t('reservation.number_of_children') }}</label>
          <input id="number-of-children" v-model="form.child" :disabled="childStatus" class="form-control" type="number" :min="0" :max="5">
          <span v-if="childStatus" class="invalid-feedback">{{ $t('reservation.child_status_message') }}</span>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import DatePicker from 'vuejs-datepicker';

export default {
  name: 'HotelAndDateSelection',

  components: {
    DatePicker
  },

  props: {
    form: {
      type: Object,
      default: null
    },

    hotelLists: {
      type: Array,
      default: null
    },

    hotelDetailsLists: {
      type: Array,
      default: null
    }
  },

  data:() => ({
    maximumAdultSize: 5,
    childStatus: false
  }),

  methods: {
    maxAdultSize() {
      this.hotelDetailsLists.forEach(item => {
        parseInt(this.form.hotel_id) === parseInt(item.hotel_id) ? this.maximumAdultSize = item.max_adult_size : 5;
      })
    },

    maximumChildSize() {
      this.hotelDetailsLists.forEach(item => {
        parseInt(this.form.hotel_id) === parseInt(item.hotel_id) ? this.childStatus = item.child_status : false;
      })
    },
  }
}
</script>

<style scoped>
.invalid-feedback{
  display: block !important;
}
</style>