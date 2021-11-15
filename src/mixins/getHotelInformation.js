export default {
    data: () => ({
        hotelLists: [],
        hotelDetailsLists: [],
        mergeHotelLists: []
    }),

    mounted() {
        this.getHotelList();
        this.getHotelDetailsList();
    },

    methods: {
        async getHotelList() {
            const response = await this.$http.get('https://5f6d939160cf97001641b049.mockapi.io/tkn/hotels');
            this.hotelLists = response.data;
        },

        async getHotelDetailsList() {
            const response = await this.$http.get('https://5f6d939160cf97001641b049.mockapi.io/tkn/hotel-details');
            this.hotelDetailsLists = response.data;
            await this.mergeHotelList();
        },

        mergeHotelList() {
            this.mergeHotelLists = this.hotelLists.map(t1 => ({...t1, ...this.hotelDetailsLists.find(t2 => t2.id === t1.id)}));
        }
    }
}