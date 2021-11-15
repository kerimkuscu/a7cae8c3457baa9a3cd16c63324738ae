<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h4>{{ hotelName }}</h4> <span>({{ city }})</span>
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

    <div>Oda Tipi Secimi</div>
    <hr>
    <div>
      <label class="radio-img">
        <input type="radio" name="layout" value="L">
        <div class="image" style="background-image: url(http://loremflickr.com/620/440/london)" />
      </label>

      <label class="radio-img">
        <input type="radio" name="layout" value="S|S|S">
        <div class="image" style="background-image: url(http://loremflickr.com/620/440/london)" />
      </label>

      <label class="radio-img">
        <input type="radio" name="layout" value="M|M">
        <div class="image" style="background-image: url(http://loremflickr.com/620/440/london)" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomTypeAndLandscapeSelection',

  props: {
    form: {
      type: Object,
      default: null
    },

    mergeHotelLists: {
      type: Array,
      default: null
    },
  },

  data: () => ({
    hotelName: null,
    city: null,
  }),

  watch: {
    'form.hotel_id'(id) {
      this.mergeHotelLists.forEach(item => {
        if (parseInt(id) === parseInt(item.hotel_id)) {
          this.hotelName = item.hotel_name;
          this.city = item.city;
        }
      })
    }
  },
}
</script>

<style scoped>
.image {
  opacity: 0.8;
  width: 200px;
  height: 160px;
  background-position: center center;
  background-color: gray;
  display: inline-block;
  margin: 10px;
}
.image:hover {
  opacity: 1;
}

.radio-img > input {
  display:none;
}

.radio-img > .image{
  cursor:pointer;
  border: 2px solid black;
}

.radio-img > input:checked + .image{
  border:2px solid orange;
}
</style>