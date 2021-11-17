<template>
  <form>
    <select v-model="form.hotel_id" class="form-select" :class="{'is-invalid' : form.errors.has('hotel_id')}" @change="maxAdultSize(); maximumChildSize(); setHotelName()">
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
          <label for="start-date" class="form-label required">{{ $t('reservation.start_date') }}</label>
          <date-picker
            id="start-date"
            format="dd-MM-yyyy"
            :calendar-button="true"
            calendar-button-icon="fas fa-calendar-alt"
            :class="{'is-invalid' : form.errors.has('start_date')}"
            @selected="formatStartDate"
          />
        </div>
        <div class="col-md-3">
          <label for="end-date" class="form-label required">{{ $t('reservation.end_date') }}</label>
          <date-picker
            id="end-date"
            format="dd-MM-yyyy"
            :calendar-button="true"
            calendar-button-icon="fas fa-calendar-alt"
            :class="{'is-invalid' : form.errors.has('end_date')}"
            @selected="formatEndDate"
          />
        </div>
        <div class="col-md-3">
          <label for="number-of-adults" class="form-label required">{{ $t('reservation.number_of_adults') }}</label>
          <input id="number-of-adults" v-model="form.adult" class="form-control" type="number" :min="0" :max="maximumAdultSize" :class="{'is-invalid' : form.errors.has('adult')}">
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
import getHotelInformation from '../../mixins/getHotelInformation';
import DatePicker from 'vuejs-datepicker';
import moment from 'moment';

export default {
  name: 'HotelAndDateSelection',

  components: {
    DatePicker
  },

  mixins: [
    getHotelInformation
  ],

  props: {
    form: {
      type: Object,
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

    formatStartDate(startDate) {
      let isoString = startDate.toISOString();
      this.form.start_date = moment(isoString).format('DD-MM-YYYY');
    },

    formatEndDate(endDate) {
      let isoString = endDate.toISOString();
      this.form.end_date = moment(isoString).format('DD-MM-YYYY');
    },

    setHotelName() {
      this.hotelDetailsLists.forEach(item => {
        if (parseInt(this.form.hotel_id) === parseInt(item.hotel_id)) {
          this.hotelDetailsList = item;
        }
      })

      this.hotelLists.forEach(item => {
        if (parseInt(this.form.hotel_id) === parseInt(item.id)) {
          this.hotelList = item;
        }
      })
    },
  }
}
</script>

<style scoped>
.invalid-feedback{
  display: block !important;
}

label.required:after {
  color: #c00;
  content: ' *';
  display: inline;
}
</style>