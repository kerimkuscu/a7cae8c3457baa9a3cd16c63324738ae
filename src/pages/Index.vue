<template>
  <layout :card-header="$t('index_page.title')">
    <div class="row justify-content-md-center align-items-center">
      <div v-for="hotelList in mergeHotelLists" :key="hotelList.id" class="card m-2" style="width: 23rem; border: 0;">
        <div :id="'carouselExampleIndicators' + hotelList.id" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" :data-bs-target="'#carouselExampleIndicators' + hotelList.id" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" :data-bs-target="'#carouselExampleIndicators' + hotelList.id" data-bs-slide-to="1" aria-label="Slide 2" />
            <button type="button" :data-bs-target="'#carouselExampleIndicators' + hotelList.id" data-bs-slide-to="2" aria-label="Slide 3" />
          </div>
          <div class="carousel-inner">
            <div v-for="room_type in hotelList.room_type" :key="room_type.id" class="carousel-item" :class="{ active: parseInt(room_type.id) === 1 }">
              <img :src="room_type.photo" class="d-block w-100 card-img-top" :alt="room_type.title">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselExampleIndicators' + hotelList.id" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" :data-bs-target="'#carouselExampleIndicators' + hotelList.id" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        
        <div class="card-body" style="padding: 0!important;">
          <h5 class="card-title">
            <router-link :to="{name:'hotel-details', params: {id: hotelList.id, name: hotelList.hotel_name} }" style="color: black">
              {{ hotelList.hotel_name }}
            </router-link>
          </h5>
          <p class="card-text">
            {{ hotelList.city }}
          </p>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from '../components/Layout';
import getHotelInformation from '../mixins/getHotelInformation';

export default {
  name: 'Index',

  components: {
    Layout
  },
  
  mixins: [
    getHotelInformation  
  ],
}
</script>