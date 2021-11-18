<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h4>{{ items.hotel_name }}</h4> <span>({{ items.city }})</span>
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-3">
              {{ $t('reservation.start_date') }}: {{ form.start_date }}
            </div>
            <div class="col-md-3">
              {{ $t('reservation.end_date') }}: {{ form.end_date }}
            </div>
            <div class="col-md-3">
              {{ $t('reservation.number_of_adults') }}: {{ form.adult }}
            </div>
            <div v-if="parseInt(form.child) !== 0" class="col-md-3">
              {{ $t('reservation.number_of_children') }}: {{ form.child }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>{{ $t('reservation.choosing_a_room_type') }}</div>
    <hr>

    <div class="col-md-12">
      <div class="row">
        <div v-for="item in items.room_type" :key="item.id" class="card col-md-3 p-0 m-1">
          <button type="button" class="btn btn-default" @click="getRoomTypeSelection(item)">
            <div class="card-header">
              {{ item.title }}
            </div>

            <div class="card-body d-flex justify-content-center">
              <img class="" :src="item.photo" :alt="item.title" height="250px" width="250px">
            </div>

            <div class="card-footer d-flex justify-content-between bd-highlight">
              <span class="d-flex justify-content-start">{{ stayDays }} {{ $t('general.day') }}</span>
              <span class="d-flex justify-content-end">{{ stayDays * item.price }} TL</span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <div>{{ $t('reservation.choosing_a_landscape') }}</div>
    <hr>

    <div class="col-md-12">
      <div class="row">
        <div v-for="item in items.room_scenic" :key="item.id" class="card col-md-3 p-0 m-1">
          <button type="button" class="btn btn-default" @click="getRoomScenicSelection(item)">
            <div class="card-header">
              {{ item.title }}
            </div>

            <div class="card-body d-flex justify-content-center">
              <img class="" :src="item.photo" :alt="item.title" height="250px" width="250px">
            </div>

            <div class="card-footer d-flex justify-content-between bd-highlight">
              <span class="d-flex justify-content-start">{{ stayDays }} {{ $t('general.day') }}</span>
              <span class="d-flex justify-content-end">+ {{ item.price_rate }} %</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import moment from 'moment';

export default {
  name: 'RoomTypeAndLandscapeSelection',
  
  props: {
    form: {
      type: Object,
      default: null,
    }
  },

  data: () => ({
    mergeHotelList: [],
    items: [],
  }),

  computed: {
    stayDays() {
      let startDate = moment(this.form.start_date,'DD-MM-YYYY');
      let endDate = moment(this.form.end_date,'DD-MM-YYYY');
      return endDate.diff(startDate, 'days')

    }
  },

  watch: {
    'form.hotel_id'(hotelId) {
      this.mergeHotelList.forEach(item => {
        parseInt(hotelId) === parseInt(item.hotel_id) ? this.items = item : '';
      })
    }
  },
  
  mounted() {
    this.getMergeHotelLists();
  },

  methods: {
    getMergeHotelLists() {
      let mergeHotelLists = localStorage.getItem('mergeHotelLists');
      this.mergeHotelList = JSON.parse(mergeHotelLists);
    },

    getRoomTypeSelection(item) {
      this.form.room_type = item.id
    },

    getRoomScenicSelection(item) {
      console.log(item);
      this.form.room_scenic = item.id
    }
  }
}
</script>