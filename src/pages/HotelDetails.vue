<template>
  <layout :card-header="$route.params.name">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-8">
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" />
            </div>
            <div class="carousel-inner">
              <div v-for="room_type in item.room_type" :key="room_type.id" class="carousel-item" :class="{ active: parseInt(room_type.id) === 1 }">
                <img :src="room_type.photo" class="d-block w-100" :alt="room_type.title">
                <div class="carousel-caption d-none d-md-block">
                  <h5>{{ room_type.title }}</h5>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true" />
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true" />
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-md-4">
          <div class="mt-3">
            <i class="fas fa-map-marker-alt" /> {{ item.city }}
          </div>

          <div class="mt-3 possibilities-scrollable">
            <div v-for="possibility in item.possibilities" :key="possibility">
              <i class="fas fa-check" /> {{ possibility }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-center mt-3">
      <p>{{ $t('details.room_types') }}</p>
    </div>
    <div class="col-md-12">
      <div class="row">
        <div v-for="room_type in item.room_type" :key="room_type.id" class="col-md-4">
          <p> {{ room_type.title }} {{ $t('details.room') }} </p>
          <span>{{ room_type.description }}</span>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from '../components/Layout';

export default {
  name: 'HotelDetails',

  components: {
    Layout
  },

  data:() => ({
    item: [],
  }),

  mounted() {
    this.getHotelDetails();
  },

  methods:{
    async getHotelDetails() {
      const response = await this.$http.get('https://5f6d939160cf97001641b049.mockapi.io/tkn/hotel-details/' + this.$route.params.id);
      this.item = response.data;
    }
  }
}
</script>

<style scoped>
.possibilities-scrollable{
  height: 21em;
  overflow: auto;
}

.header-center {
  margin: auto;
  width: 12%;
  font-size: 25px;
}
</style>