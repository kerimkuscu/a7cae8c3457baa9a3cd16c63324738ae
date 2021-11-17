<template>
  <layout :card-header="$t('reservation.reservation_information')">
    <form-wizard 
      ref="form_wizard"
      :title="''"
      :subtitle="''"
      shape="circle"
      :class="'tab-content'"
      error-color="#d9534f"
      color="#073763"
    >
      <tab-content
        :title="$t('reservation.hotel_and_date_selection')"
        icon="far fa-calendar-alt"
        :before-change="validateStep"
      >
        <hotel-and-date-selection :form="form" />
      </tab-content>

      <tab-content
        :title="$t('reservation.room_type_and_landscape_selection')"
        icon="fas fa-bed"
        :before-change="validateStep"
      >
        <room-type-and-landscape-selection :form="form" />
      </tab-content>

      <tab-content
        :title="$t('reservation.preview_and_payment_transactions')"
        icon="far fa-credit-card"
      >
        Yuhuuu! This seems pretty damn simple
      </tab-content>

      <template slot="footer" slot-scope="props">
        <div>
          <wizard-button v-if="props.activeTabIndex > 0" class="btn btn-primary button-color" @click.native="props.prevTab">
            <i class="fas fa-chevron-left" aria-hidden="true" /> {{ $t('general.previous') }}
          </wizard-button>

          <wizard-button v-if="!props.isLastStep" class="wizard-footer-right btn btn-primary button-color" @click.native="props.nextTab">
            {{ $t('general.next') }} <i class="fas fa-chevron-right" aria-hidden="true" />
          </wizard-button>

          <wizard-button v-else class="wizard-footer-right btn btn-primary button-color" :style="props.fillButtonStyle" :disabled="form.processing" @click.native="props.nextTab">
            {{ $t('general.save') }}
          </wizard-button>
        </div>
      </template>
    </form-wizard>
  </layout>
</template>

<script>
import Layout from '../components/Layout';
import {FormWizard, TabContent, WizardButton} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import HotelAndDateSelection from './ReservationTabs/HotelAndDateSelection';
import RoomTypeAndLandscapeSelection from './ReservationTabs/RoomTypeAndLandscapeSelection';
import Form from 'form-backend-validation';

export default {
  name: 'HotelReservation',

  components: {
    RoomTypeAndLandscapeSelection,
    HotelAndDateSelection,
    Layout,
    FormWizard,
    TabContent,
    WizardButton
  },

  data: () => ({
    form: new Form({
      hotel_id: null,
      start_date: null,
      end_date: null,
      adult: 0,
      child: 0,
      room_type: null,
      room_scenic: null,
      price: null,
      coupon_code: null,
      card_name: null,
      card_number: null,
      card_date_month: null,
      card_date_year: null,
      card_cvv: null,
    })
  }),

  methods: {
    validateStep() {
      let returnValue = false;

      this.form.hotel_id !== null &&
          this.form.start_date !== null &&
            this.form.end_date !== null &&
              this.form.adult !== null ? returnValue = true : returnValue = false;

      returnValue === false ? this.form.errors.all() : '';

      return returnValue;
    }
  }
}
</script>

<style scoped>
.vue-form-wizard .wizard-navigation .wizard-progress-with-circle .wizard-progress-bar{
  background-color: #073763 !important;
  color: #073763 !important;
}

.button-color {
  background-color: #073763;
  border-color: #073763;
}
</style>